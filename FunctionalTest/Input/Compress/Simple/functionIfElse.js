var a = 10;
function func() {
    if (a > 11) {
        $writeError("a > 11");
        return undefined;
    } else {
        $write("a <= 11");
        return;
    }
    return;
}
func();