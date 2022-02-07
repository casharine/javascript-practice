
// 基本

for (var i = 0; i <= 4; i++) {
    console.log(i);
}
  

//  breake

  for(var i = 0; i <= 4; i ++) {
    if(i == 3) {
      break;
    }
    console.log(i);
  }
  
// continue 条件に当てはまった場合スキップ

  for(var i = 0; i <= 4; i ++) {
    if(i == 3) {
      break;
    }
    console.log(i);
}
  
// forのネスト

  for(var i = 0; i <= 2; i ++) {
    for(var j = 0; j <= 2; j ++) {
      console.log( i + "-" + j );
    }
}

// for配列の参照

  var arr = [2,4,6,8,10];

  for(var i = 0; i <= 4; i ++) {
    console.log(arr[i]);
}
  
// 練習問題
for (var i = 0; i <= 10; i++) {
    if (i == 3) {
        continue;
    } else if (i == 7) {
        break;
    } else {
        console.log(i);
    }
} 


