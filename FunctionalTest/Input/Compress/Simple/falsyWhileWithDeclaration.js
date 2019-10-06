while(false) {
    var a = 10;
    function func() {
        $writeError("NEVER");
    }
}
$write(a + "");
$write(func + "");