for(var b1 = 1;false;b++) {
    var a1 = 10;
    function func1() {
        $writeError("NEVER");
    }
}

if (false) {
    var a2 = 10;
    function func2() {
        $writeError("NEVER");
    }
} else {
    function func2b() {
        $write("func2b called");
    }
}

while(false) {
    var a3 = 10;
    function func3() {
        $writeError("NEVER");
    }
}

$write("FOR");
$write(b1 + "");
$write(a1 + "");
$write(func1 + "");

$write("IF");
$write(a2 + "");
$write(func2 + "");
func2b();

$write("WHILE");
$write(a3 + "");
$write(func3 + "");