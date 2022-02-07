class Student {
    
    constructor(name) {
        this.name = name;
    }

    calculateAvg(data) {
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            sum += data[i];
        }
        var avg = sum / data.length;
        return avg;
    }

    jedge(avg) {
        var result;
        if( 60 <= avg ) {
        result = "passed";
        } else {
        result = "failed";
        }
        return result;
  }
}

var sato = new Student();
var data = [70, 65, 50, 90, 30];
sato.name = "sato";
var avg = sato.calculateAvg(data);
var result = sato.jedge(avg);    

console.log(sato.name + " " + result);