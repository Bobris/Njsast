﻿using LibGit2Sharp;
using LibGit2Sharp.Handlers;
using Octokit;
using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Releaser;

class Program
{
    static void Main(string[] args)
    {
        MainAsync(args).Wait();
    }

    static async Task<int> MainAsync(string[] args)
    {
        string projDir = Environment.CurrentDirectory;
        while (!File.Exists(projDir + "/CHANGELOG.md"))
        {
            var parentDir = Path.GetDirectoryName(projDir);
            if (string.IsNullOrWhiteSpace(parentDir))
            {
                Console.WriteLine("Cannot find CHANGELOG.md in some parent directory");
                return 1;
            }

            projDir = parentDir;
        }
        Console.WriteLine("Project root directory: " + projDir);
        var logLines = File.ReadAllLines(projDir + "/CHANGELOG.md");
        var topVersion = logLines.Where(s => s.StartsWith("## ")).FirstOrDefault();
        var lastVersion = logLines.Where(s => s.StartsWith("## ")).Skip(1).FirstOrDefault();
        if (logLines.Length < 5)
        {
            Console.WriteLine("CHANGELOG.md has less than 5 lines");
            return 1;
        }
        if (topVersion != "## [unreleased]")
        {
            Console.WriteLine("Top version should be ## [unreleased]");
            return 1;
        }
        if (lastVersion == null)
        {
            Console.WriteLine("Cannot find previous version");
            return 1;
        }
        using (var gitrepo = new LibGit2Sharp.Repository(projDir))
        {
            int workDirChangesCount = 0;
            using (var workDirChanges = gitrepo.Diff.Compare<TreeChanges>())
                workDirChangesCount = workDirChanges.Count;
            if (workDirChangesCount > 0)
            {
                Console.WriteLine("DANGER! THERE ARE " + workDirChangesCount + " CHANGES IN WORK DIR!");
            }
            var topVersionLine = Array.IndexOf(logLines, topVersion);
            var lastVersionLine = Array.IndexOf(logLines, lastVersion);
            var lastVersionNumber = new System.Version(lastVersion.Substring(3));
            var patchVersionNumber = new System.Version(lastVersionNumber.Major, lastVersionNumber.Minor, lastVersionNumber.Build + 1);
            var minorVersionNumber = new System.Version(lastVersionNumber.Major, lastVersionNumber.Minor + 1, 0);
            var majorVersionNumber = new System.Version(lastVersionNumber.Major + 1, 0, 0);
            Console.WriteLine("Press 1 for Major " + majorVersionNumber.ToString(3));
            Console.WriteLine("Press 2 for Minor " + minorVersionNumber.ToString(3));
            Console.WriteLine("Press 3 for Patch " + patchVersionNumber.ToString(3));
            var choice = Console.ReadKey().KeyChar;
            Console.WriteLine();
            if (choice < '1' || choice > '3')
            {
                Console.WriteLine("Not pressed 1, 2 or 3. Exiting.");
                return 1;
            }
            if (choice == '1')
                lastVersionNumber = majorVersionNumber;
            if (choice == '2')
                lastVersionNumber = minorVersionNumber;
            if (choice == '3')
                lastVersionNumber = patchVersionNumber;
            var newVersion = lastVersionNumber.ToString(3);
            Console.WriteLine("Building version " + newVersion);
            UpdateCSProj(projDir, newVersion);
            var outputLogLines = logLines.ToList();
            var releaseLogLines = logLines.Skip(topVersionLine + 1).SkipWhile(s => string.IsNullOrWhiteSpace(s)).TakeWhile(s => !s.StartsWith("## ")).ToList();
            while (releaseLogLines.Count > 0 && string.IsNullOrWhiteSpace(releaseLogLines[releaseLogLines.Count - 1]))
                releaseLogLines.RemoveAt(releaseLogLines.Count - 1);
            outputLogLines.Insert(topVersionLine + 1, "## " + newVersion);
            outputLogLines.Insert(topVersionLine + 1, "");
            if (Directory.Exists(projDir + "/Njsast/bin/Release"))
                Directory.Delete(projDir + "/Njsast/bin/Release", true);
            var fileNameOfToken = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile) + "/.github/token.txt";
            string token;
            try
            {
                token = File.ReadAllLines(fileNameOfToken).First();
            }
            catch
            {
                Console.WriteLine("Cannot read github token from " + fileNameOfToken);
                return 1;
            }
            fileNameOfToken = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile) + "/.nuget/token.txt";
            string tokenNuget;
            try
            {
                tokenNuget = File.ReadAllLines(fileNameOfToken).First();
            }
            catch
            {
                Console.WriteLine("Cannot read nuget token from " + fileNameOfToken);
                return 1;
            }
            Build(projDir, newVersion, tokenNuget);
            var client = new GitHubClient(new ProductHeaderValue("Njsast-releaser"));
            client.SetRequestTimeout(TimeSpan.FromMinutes(15));
            client.Credentials = new Octokit.Credentials(token);
            var NjsastRepo = (await client.Repository.GetAllForUser("bobris")).First(r => r.Name == "Njsast");
            Console.WriteLine("Njsast repo id: " + NjsastRepo.Id);
            File.WriteAllText(projDir + "/CHANGELOG.md", string.Join("", outputLogLines.Select(s => s + '\n')));
            Commands.Stage(gitrepo, "CHANGELOG.md");
            Commands.Stage(gitrepo, "Njsast/Njsast.csproj");
            var author = new LibGit2Sharp.Signature("Releaser", "boris.letocha@gmail.com", DateTime.Now);
            var committer = author;
            var commit = gitrepo.Commit("Released " + newVersion, author, committer);
            gitrepo.ApplyTag(newVersion);
            var options = new PushOptions();
            options.CredentialsProvider = new CredentialsHandler(
                (url, usernameFromUrl, types) =>
                    new UsernamePasswordCredentials()
                    {
                        Username = token,
                        Password = ""
                    });
            gitrepo.Network.Push(gitrepo.Head, options);
            var release = new NewRelease(newVersion);
            release.Name = newVersion;
            release.Body = string.Join("", releaseLogLines.Select(s => s + '\n'));
            var release2 = await client.Repository.Release.Create(NjsastRepo.Id, release);
            Console.WriteLine("release url:");
            Console.WriteLine(release2.HtmlUrl);
            var uploadAsset = await UploadWithRetry(projDir + "/Njsast/bin/Release/", client, release2, "Njsast.zip");
            Console.WriteLine("Njsast url:");
            Console.WriteLine(uploadAsset.BrowserDownloadUrl);
            Console.WriteLine("Press Enter for finish");
            Console.ReadLine();
            return 0;
        }
    }

    static void UpdateCSProj(string projDir, string newVersion)
    {
        var fn = projDir + "/Njsast/Njsast.csproj";
        var content = File.ReadAllText(fn);
        content = new Regex("<Version>.+</Version>").Replace(content, "<Version>" + newVersion + "</Version>");
        File.WriteAllText(fn, content, new UTF8Encoding(false));
    }

    static async Task<ReleaseAsset> UploadWithRetry(string projDir, GitHubClient client, Release release2, string fileName)
    {
        for (var i = 0; i < 5; i++)
        {
            try
            {
                return await client.Repository.Release.UploadAsset(release2, new ReleaseAssetUpload(fileName, "application/zip", File.OpenRead(projDir + fileName), TimeSpan.FromMinutes(14)));
            }
            catch (Exception)
            {
                Console.WriteLine("Upload Asset " + fileName + " failed " + i);
            }
        }
        throw new OperationCanceledException("Upload Asset " + fileName + " failed");
    }

    static void Build(string projDir, string newVersion, string nugetKey)
    {
        var start = new ProcessStartInfo("dotnet", "pack -c Release")
        {
            UseShellExecute = true,
            WorkingDirectory = projDir + "/Njsast"
        };
        var process = Process.Start(start);
        process.WaitForExit();
        var source = projDir + "/Njsast";
        var releaseSources = projDir + "/Njsast/bin/Release/Sources";
        foreach (string fn in Directory.GetFiles(source, "*.*", SearchOption.AllDirectories).ToList())
        {
            var relfn = fn.Substring(source.Length + 1);
            if (relfn.StartsWith("bin")) continue;
            if (relfn.StartsWith("obj")) continue;
            Directory.CreateDirectory(Path.GetDirectoryName(releaseSources + "/" + relfn));
            File.Copy(fn, releaseSources + "/" + relfn);
        }
        System.IO.Compression.ZipFile.CreateFromDirectory(releaseSources, projDir + "/Njsast/bin/Release/Njsast.zip", System.IO.Compression.CompressionLevel.Optimal, false);
        start = new ProcessStartInfo("dotnet", "nuget push Njsast." + newVersion + ".nupkg -s https://www.nuget.org -k " + nugetKey)
        {
            UseShellExecute = true,
            WorkingDirectory = projDir + "/Njsast/bin/Release"
        };
        process = Process.Start(start);
        process.WaitForExit();
    }
}
