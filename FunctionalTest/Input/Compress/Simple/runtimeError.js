function abc() {
    $write("abc called");
    abcd();
    $writeError("NEVER_CALLED");
}
abc();