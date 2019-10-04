var a = 11;

if (a == 11) {
    $write("a == 11");
}

if (a < 12) {
    $write("a < 12");
}

if (a > 10) {
    $write("a > 10");
}

if (a > 11) {
    $writeError("a > 11");
}

if (a < 11) {
    $writeError("a < 11");
}