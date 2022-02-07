// 1.数値型

    var num01 = 123;
    var num02 = 1.3;

    console.log(typeof(num01));
    console.log(typeof (num02)); //number型のみdouble等はない

    // javaScript は 動的片付け言語
    // 修飾子typeof でデータ型を確認できる

// 2.文字列型

    var string_a = "Hello,World!";

    console.log(string_a);
    console.log(typeof (string_a));
    
// 3.bool型
var a = 10;
var b = 1;
var bool01;

bool01 = (a > b);
console.log(bool01);
console.log(typeof (bool01));