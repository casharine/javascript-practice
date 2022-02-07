// クラスの宣言
class Student{
    // フィールド （コンストラクタ初期化）
    constructor(name) {
        this.name = name;
    }

    // メソッド
    avg(math, english) {
        console.log((math + english)/2);
    }
}

// インスタンス化 と メソッドの利用
var a001 = new Student();
a001.name = "sato";
console.log(a001.name); 
a001.avg(60, 70);

var a002 = new Student();
a002.name = "minase";
console.log(a002.name); 
a002.avg(90, 70);