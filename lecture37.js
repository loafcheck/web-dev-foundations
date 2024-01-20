var array = [1000, 2000, 5000, 800];
var currency = 3.2;

var newArray = array.map(function(data){
    return data * currency;
})

console.log(newArray);