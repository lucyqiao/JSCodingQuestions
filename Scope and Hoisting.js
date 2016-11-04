/**
 * Created by LucyQiao on 11/2/16.
 */
var a =1;
function b() {
    a = 10;
    return;
    function a(){}
}

b();
console.log(a);

