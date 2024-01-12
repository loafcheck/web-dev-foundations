// function add () {
//     return 1 + 2;
// }
// var trye = add();
// console.log(trye );

// function vat(a) {
//     return a * 1.1;
// }

// function trial (a) {
//     var num = (a * 1.1).toFixed(2);
//     var result = parseFloat(num)+1;
//     console.log(result);
//     return result
// }

// trial(20);


// function msConverter (minute,second) {
//     var convertedSec = (minute * 60 + second) * 1000;
//     console.log(convertedSec);
//     return convertedSec;
// }   

// msConverter(2,10);


function discount(price, record){
    if (record == 1) {
        //true 7
        var calculate = (price - (price * 0.1)).toFixed(0);
        var finalP = parseInt(calculate) - 1.5;
    } else {
        var calculate = (price - (price * 0.1)).toFixed(0);
        var finalP = parseInt(calculate);
    }
    console.log(finalP)
    return finalP
  
}

discount(10,true);