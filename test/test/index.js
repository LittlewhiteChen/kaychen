var fake_json_function_list = {
    "data": {
        "1": "附近服务网点",
        "2": "电脑保修查询",
        "3": "网上报修服务",
        "4": "服务热线查询",
        "5": "全国服务网点"
    }
};
var setFunctionList = function(json_function_list) {
    var funData = json_function_list.data;
    var htmlStrFun = '';
    for (var funKey in funData) {
        if (funData.hasOwnProperty(funKey)) {
            console.log(funKey);
            console.log(funData[funKey]);
            htmlStrFun+='<option value='+funKey+'>'+funKey+'.'+funData[funKey]+'</option>';
        }
    }
    console.log(htmlStrFun);
};
setFunctionList(fake_json_function_list);

console.log("========Function======Article====Push========");
var fake_json_article_list = {
    "data": [{
        "78": {
            "id": "78",
            "title": "系统调试安装",
            "url": "http://weixin.lenovo.com.cn/qcs_product_1"
        }
    }, {
        "79": {
            "id": "79",
            "title": "拆机！",
            "url": "http://weixin.lenovo.com.cn/qcs_product_2"
        }
    }]
};
console.log(fake_json_article_list.data);
var articleList = fake_json_article_list.data;
var htmlStr = '<option value="-1">文章推送</option>';
// 第一层循环得到对象数组
for (var i = 0; i < articleList.length; i++) {
    console.log(articleList[i]);
    // 第二层循环遍历对象，得到详细数据
    for (var key in articleList[i]) {
        if (articleList[i].hasOwnProperty(key)) {
            console.log(articleList[i][key]);
            htmlStr += '<option value=' + articleList[i][key].id + ' url="' + articleList[i][key].url + '">' + articleList[i][key].title + '</option>';
        }
    }
}
console.log(htmlStr);

// console.log(typeof []);
// console.log(!!"false");

// var a= 2,b=3;
// console.log(a++==b?a:b);
// var x=3,y=4;
// y+=x+2;
// console.log(y);
// var o = //;
// a=2,b=5
// console.log(a>b?a:b);
// var y=1,
// x=y=typeof x;
// console.log(x);
// console.log(y);









// console.log("test!!");

// console.log(null==undefined);
// console.log(+"10");
// console.log("round--"+Math.round(7.25));

// console.log("-------");
// console.log("1");
// setTimeout('console.log("2");',1);
// setTimeout(function  () {
//     console.log('3');
// },0);
// console.log('4');
// console.log("------------");
/*var y = 1,
x=y=typeof x;
console.log(x);
console.log(y);
console.log(Math.round(15.49));
// console.log(123+"789");*/
// console.log(parseInt(1.5));
// // console.log(a);
// var d = new Date();
// console.log(d.getMonth());
// var a =  typeof typeof(null);
// console.log(a);

// var a = 2,b=3;
// var r = a++==b?a:b;
// console.log(r);
// 
// 
// 
// function f (x,y) {
//     x=10;
//     alert(arguments[0]+","+arguments[1]);
// }
// f();

/*var a;
var x = a === undefined;
console.log(x);
console.log(+"10");
alert(2<1<3);
var aa = 1234['toString']['length'];
console.log(aa);

console.log(parseInt("101中学"));

console.log(!!"false");*/
// console.log("i am a student".subString(9,13));

/*var a = 0;
var b = 0;
c
function A(a) {
    function B(b) {
        alert(a + b++);
    }
    alert(b);
}
A(1); //0
B(1); //error*/
/*这是联想前端的一道笔试题，我记不太清楚，好像是这样*/
// 还有一些我没答好的
// Ajax跨域
// JavaScript类，继承，私有变量
// 


/*var str = '"[1,2,3]"';
var arrStr = str.slice(1,length-1);
var array = JSON.parse(arrStr);
console.log(arrStr);
console.log(arrStr[0]);
console.log(array[0]);

var test = function() {
    console.log("函数表达式");
};

test();*/



/*function test() {
    alert('test');
};
var aa = test;
test = function() {
    alert('test1');
};

aa();
test();*/


// console.log([14, 3, 77].splice(1, 2));

/*function foo4() {
    function x() {}
    var x;
    console.log(x);
}
foo4(); // funtion x()*/