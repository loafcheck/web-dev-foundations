var name = 'park';
var id = 0;

function showName(){
  var name = 'kim';
  var id = 1;
  console.log(name);
}

showName();
//kim
console.log(id);
//0

var credit;
var futureCredit;

function creditCount (credit,year) {
    futureCredit = credit + ((credit * 1.15) * year);
    console.log(futureCredit);
}

creditCount(50000,2);

let firstRefill;
let secondRefill;
let original;

function coffeeShopRule (original) {
    firstRefill = original / 3 * 2;
    secondRefill = firstRefill / 3 * 2;
    console.log(secondRefill);

}

coffeeShopRule(90);

