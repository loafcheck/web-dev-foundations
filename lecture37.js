var array = [1000, 2000, 5000, 800];
var currency = 3.2;

var newArray = array.map(function(data){
    return data * currency;
})

console.log(newArray);

var letter = ['a','d','b'];
letter.sort(function(a,b){
    return b-a; 
})
console.log(letter);