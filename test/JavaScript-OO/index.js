/*var person = new Object();
person.name = "Gaohaoyang";
person.job = "FE";
person.sayName = function() {
    console.log(this.name);
}

var person = {
    name: "Gaohaoyang",
    job: "FE",
    sayName: function() {
        console.log(this.name);
    }
};

function foo(x, y) {
    if (typeof x === 'number' &&
        typeof y === 'number') {
        return x + y;
    } else {
        return 0;
    }
}
foo(1, 2); // 3


function add(a, b) {
    return a + b;
}

//function variable
var add = function(a, b) {
    // body...
};

// IEF(Immediately Executed Function)
(function() {
    // body...
})();

/*return function() {
    // body...
};*/

//NFE(Named Function Expression)
/*var add = function foo(a, b) {
    // body...
};*/

/*var num = add(1, 2);
console.log(num);

var add = function(a, b) {
    return a + b;
};*/

/*var func = function nfe() {};
console.log(func === nfe);*/
// 在 IE6~8，得到 false
// 在 IE9+ 及现代浏览器中 Uncaught ReferenceError: nfe is not defined
// 

/*var func = new Function('a','b','console.log(a+b);');
func(1,2);//3

var func2 = Function('a','b','console.log(a+b);');
func2(1,2);//3*/

/*console.log(this.document === document); //true
console.log(this === window); //true

this.a = 91;
console.log(window.a); //91*/

/*function f1 () {
    return this;
}
console.log(f1() === window);//true, global object

function f2 () {
    "use strict";//使用严格模式
    return this;
}
console.log(f1() === undefined);//true*/

/*var o = {
    prop: 37,
    f: function() {
        return this.prop;
    }
};
console.log(o.f()); // logs 37
var o = {
    prop: 37
};

function independent() {
    return this.prop;
}
o.f = independent;
console.log(o.f()); // logs 37*/

/*var o = {
    f: function() {
        return this.a + this.b;
    }
};
var p = Object.create(o);
p.a = 1;
p.b = 2;
console.log(p.f()); //3*/
/*function modulus() {
    return Math.sqrt(this.re * this.re + this.im * this.im);
}
var o = {
    re: 1,
    im: -1,
    get phase() {
        return Math.atan2(this.im, this.re);
    }
};
Object.defineProperty(o, 'modulus', {
    get: modulus,
    enumerable: true,
    configurable: true
});
console.log(o.phase, o.modulus); // -0.78 1.4142*/

/*function MyClass() {
    this.a = 25;
}
var o = new MyClass();
console.log(o.a); //25

//new MyClass() 的时候，MyClass()中的this会指向一个空对象，这个对象的原型会指向 MyClass.prototype。MyClass()没有返回值或者返回为基本类型时，默认将this返回。
//
function C2() {
    this.a = 26;
    return {
        a: 24
    };
}

o = new C2();
console.log(o.a); //24

//因为返回了对象，将这个对象作为返回值*/

/*function add(c, d) {
    return this.a + this.b + c + d;
}
var o = {
    a: 1,
    b: 3
};
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
function bar() {
    console.log(Object.prototype.toString.call(this));
}
bar.call(7); // "[object Number]"*/

/*function f() {
    return this.a;
}
var g = f.bind({
    a: "test"
});
console.log(g()); // test
var o = {
    a: 37,
    f: f,
    g: g
};
console.log(o.f(), o.g()); // 37, test*/

// 绑定之后再调用时，仍然会按绑定时的内容走，所以 o.g() 结果是 test
// 

/*function foo(x, y, z) {
    arguments.length; // 2
    arguments[0]; // 1
    arguments[0] = 10;
    x; // change to 10

    arguments[2] = 100;
    z; // still undefined!!!
    arguments.callee === foo; // true
}

foo(1, 2);
foo.length; // 3
foo.name; //"foo"*/

/*function foo(x, y) {
    console.log(x, y, this);
}

foo.call(100, 1, 2); //1 2 Number {[[PrimitiveValue]]: 100}
foo.apply(true, [3, 4]); //3 4 Boolean {[[PrimitiveValue]]: true}
foo.apply(null); //undefined undefined Window
foo.apply(undefined); //undefined undefined Window*/

/*this.x = 9;
var module = {
    x: 81,
    getX: function() {
        return console.log(this.x);
    }
};

module.getX(); //81

var getX = module.getX;
getX(); //9

var boundGetX = getX.bind(module);
boundGetX(); //81*/

/*function add(a, b, c) {
    return a + b + c;
}

var func = add.bind(undefined, 100);
func(1, 2); //103

var fun2 = fun.bind(undefined, 200);
func2(10); //310*/

/*function foo() {
    this.b = 100;
    return this.a;
}

console.log(foo()); //undefined

var func = foo.bind({
    a: 1
});

console.log(func()); //1
console.log(new func()); //foo {b: 100}*/

/*function outer() {
    var localVal = 30;
    return localVal;
}

console.log(outer()); //30

function outer2() {
    var localVal = 30;
    return function() {
        return localVal;
    };
}

var func = outer2();
console.log(func()); //30

! function() {
    var localData = "localData here";
    document.addEventListener('click',
        function() {
            console.log(localData);
        });
}();

! function() {
    var localData = "localData here";
    var url = "http://www.baidu.com/";
    $.ajax({
        url: url,
        success: function() {
            // do sth...
            console.log(localData);
        }
    });
}()
*/

/*document.body.innerHTML = "<div id=div1>aaa</div>" + "<div id=div2>bbb</div><div id=div3>ccc</div>";
for (var i = 1; i < 4; i++) {
    document.getElementById('div' + i).
    addEventListener('click', function() {
        alert(i); // all are 4!
    });
}*/

/*document.body.innerHTML = "<div id=div1>aaa</div>" + "<div id=div2>bbb</div><div id=div3>ccc</div>";
for (var i = 1; i < 4; i++) {
    ! function(i) {
        document.getElementById('div' + i).
        addEventListener('click', function() {
            alert(i); // 1, 2, 3
        });
    }(i);
}*/

/*(function() {
    var _userId = 9527;
    var _typeId = "item";
    var exp = {};

    function converter(userId) {
        return +userId;
    }

    exp.getUserId = function() {
        return converter(_userId);
    };

    exp.getTypeId = function() {
        return _typeId;
    };

    window.a = exp;
})();

console.log(a.getUserId()); //9527
console.log(a.getTypeId()); //item

console.log(a._userId); //undefined
console.log(a._typeId); //undefined
console.log(converter); //Uncaught ReferenceError: converter is not defined*/

/////////////////////////////////////////////////////////////////
//************************OOP********************************* //
/////////////////////////////////////////////////////////////////

/*function Foo() {
    this.y = 2;
}
console.log(typeof Foo.prototype); //object

Foo.prototype.x = 1;
var obj3 = new Foo();

console.log(obj3.y); //2
console.log(obj3.x); //1*/

//例

/*function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.LEGS_NUM = 2;
Person.prototype.ARMS_NUM = 2;

Person.prototype.hi = function() {
    console.log('Hi, my name is ' + this.name + ". I'm " + this.age + ' years old now');
};

Person.prototype.walking = function() {
    console.log(this.name + ' is walking...');
};

function Student(name, age, className) {
    Person.call(this, name, age); //使 Person 中的 this 指向 Student
    this.className = className;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.hi = function() {
    console.log('Hi, my name is ' + this.name + ". I'm " + this.age + ' years old now, and from ' + this.className + ".");
};

Student.prototype.learn = function(subject) {
    console.log(this.name + ' is learning ' + subject + ' at ' + this.className + '.');
}

//test
var gao = new Student('Gao', '24', 'Class 3123');
console.log(gao);
gao.hi(); //Hi, my name is Gao. I'm 24 years old now, and from Class 3123.
gao.LEGS_NUM; //2
gao.walking(); //Gao is walking...
gao.learn('JavaScript'); //Gao is learning JavaScript at Class 3123.

Student.prototype.x = 101;
console.log(gao.x); //101

Student.prototype = {
    y: 2
};
console.log(gao.x); //101
console.log(gao.y); //undefined

var ying = new Student('Ying', 24, 'UI');
console.log(ying.x); //undefined
console.log(ying.y); //2*/

/*Object.prototype.x = 1;
var obj = {};
console.log(obj.x); //1
console.log(obj);

for (var k in obj) {
    console.log('result--->' + k);
}
// result--->x


for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log("result--->" + key);
    }
}

Object.defineProperty(Object.prototype, 'x', {
    writable: true,
    value: 1
});
var obj = {};
console.log(obj.x);//1
console.log(obj);
for (var k in obj) {
    console.log('result--->' + k);
}
// nothing output here*/

/*console.log([1, 2] instanceof Array); //true
console.log([1, 2] instanceof Object); //true
console.log(new Object() instanceof Array); //false*/

/*function Person() {}

function Student() {}

Student.prototype = Person.prototype; //1

Student.prototype = new Person(); //2

Student.prototype = Object.create(Person.prototype); //3

Student.prototype.constructor = Student;

if (!Object.create) {
    Object.create = function(proto) {
        function F() {}
        F.prototype = proto;
        return new F;
    };
}*/

//---------------模拟重载------------------

/*function Person() {
    var args = arguments;
    if (typeof args[0] === 'object' && args[0]) {
        if (args[0].name) {
            this.name = args[0].name;
        }
        if(args[0].age){
            this.age = args[0].age;
        }
    } else {
        if (args[0]) {
            this.name = args[0];
        }
        if (args[1]) {
            this.age = args[1];
        }
    }
}

//重写 toString 方法
Person.prototype.toString = function() {
    console.log('name='+this.name+', age='+this.age);
};

var gao = new Person({name:'Gao',age:24});
gao.toString();

var ying = new Person('Ying',25);
ying.toString();*/

//-------------------调用子类方法-----------------------

/*function Person(name) {
    this.name = name;
}

function Student(name, className) {
    this.className = className;
    Person.call(this, name); // 调用基类的构造器
}

var gao = new Student('Gao', '3123');
console.log(gao); // Student {className: "3123", name: "Gao"}

Person.prototype.init = function() {};

Student.prototype.init = function() {
    // do sth...
    Person.prototype.init.apply(this, arguments); // 同时也想调用父类被覆盖的方法
};*/

//---------------------链式调用---------------------------

/*function ClassManager() {}
ClassManager.prototype.addClass = function(str) {
    console.log('Class: ' + str + ' added');
    return this;
};

var manager = new ClassManager();
manager.addClass('classA').addClass('classB').addClass('classC');
// Class: classA added
// Class: classB added
// Class: classC added*/

//---------------------抽象类--------------------------

function DetectorBase() {
    throw new Error('Abstract class can not be invoked directly!');
}

DetectorBase.prototype.detect = function() {
    console.log('Detection starting...');
};
DetectorBase.prototype.stop = function() {
    console.log('Detection stopped.');
};
DetectorBase.prototype.init = function() {
    throw new Error('Error');
};

// var d = new DetectorBase();// Uncaught Error: Abstract class can not be invoked directly!

function LinkDetector() {}
LinkDetector.prototype = Object.create(DetectorBase.prototype);
LinkDetector.prototype.constructor = LinkDetector;

var l = new LinkDetector();
console.log(l); //LinkDetector {}__proto__: LinkDetector
l.detect(); //Detection starting...
l.init(); //Uncaught Error: Error

/*var moduleA;
moduleA = function() {
    var prop = 1;

    function func() {}

    return {
        func: func,
        prop: prop
    };
};

var moduleA;

moduleA = new function() {
    var prop = 1;

    function func() {}
    
    this.func = func;
    this.prop = prop;
}*/