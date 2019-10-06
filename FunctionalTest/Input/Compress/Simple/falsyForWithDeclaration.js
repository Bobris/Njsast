for(var b = 1;false;b++) {
    var a = 10;
    function func() {
        $writeError("NEVER");
    }
}
$write(b);
$write(a + "");
$write(func + "");