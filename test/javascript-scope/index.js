/*var outVariable = "我是最外层变量"; //最外层变量
function outFun() { //最外层函数
    var inVariable = "内层变量";

    function innerFun() { //内层函数
        console.log(inVariable);
    }
    innerFun();
}*/
// console.log(outVariable); //我是最外层变量
// outFun(); //内层变量
// console.log(inVariable); //inVariable is not defined
// innerFun(); //innerFun is not defined

/*function outFun2() {
    variable = "未定义直接赋值的变量";
    var inVariable2 = "内层变量2";
}*/
// outFun2();//要先执行这个函数，否则根本不知道里面是啥
// console.log(variable); //未定义直接赋值的变量
// console.log(inVariable2); //inVariable2 is not defined


/*function factory() {
    var name = 'laruence';
    var intro = function() {
        console.log('I am ' + name);
    }
    return intro;
}

function app(para) {
    var name = para;
    var func = factory();
    func();
}

app('eve');*/

// 调用 app 时
// para:eve
// name:undefined
// func:undefined
// arguments:[]
// 
// 调用 func 时
// name:laruence
// intro:undefined
// 
// 调用 intro 时
// name:laruence
// 
// 
// 

/*var a = 10; //全局
(function() {
    var b = 20; //函数
})();
console.log(a); // 10
console.log(b); // error, b in not defined

for (var item in {
    a: 1,
    b: 2
}) {
    console.log(item);
}
console.log(item); // item still in scope

eval("var a = 1;"); //eval*/


/*function outer() {
    var i = 1;
    var func = new Function("console.log(typeof i);");
    func(); // undefined
}
outer();*/

/*function foo(x, y, z) {
    function x() {};
    console.log(x);
}
foo(100); // funtion x()

function foo2(x, y, z) {
    var x = 50;
    console.log(x);
}
foo2(110); // 50

function foo3() {
    function x() {};
    var x = 100;
    console.log(x);
}
foo3(); // 100

function foo4() {
    function x() {};
    var x;
    console.log(x);
}
foo4(); // funtion x()*/

alert(x); // function

var x = 10;
alert(x); // 10
x = 20;

function x() {}
alert(x); // 20

if (true) {
    var a = 1;
} else {
    var b = true;
}

alert(a); // 1
alert(b); // undefined