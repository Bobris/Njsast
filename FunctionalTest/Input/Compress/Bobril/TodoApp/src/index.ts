///<reference path="../typings/runtime.d.ts"/>
import * as b from "bobril";
import { TodoComponent } from "./todoComponent";

$setAsyncTestTrue();
$write("Before b.init");
b.init(TodoComponent);
$write("After b.init");
$write("Before b.syncUpdate");
b.syncUpdate();
$write("After b.syncUpdate");
