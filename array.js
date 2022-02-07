// 配列ひとつずつ
    var arr = new Array(3);

    arr[0] = "sato";
    arr[1] = "suzuki";
    arr[2] = "takahashi";

    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    
// 配列まとめて
     var a = ["sato", "suzuki", "takahashi" ];

    console.log(a[0]);
    console.log(a[1]);
    console.log(a[2]);

// 二次元配列
    var array;
    array = [["sato", "suzuki"], ["takahashi", "tanaka"]];

    console.log(array[0][0]); //一つ目の配列の一番目 sato
    console.log(array[0][1]);
    console.log(array[1][0]); // 二つ目の配列の２番目 takahashi
    console.log(array[1][1]);