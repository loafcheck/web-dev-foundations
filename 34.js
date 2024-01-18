var list = ['흥민', '영희', '철수', '재석'];

function findName(name){
    if (list.includes(name)){
        console.log('yes');
    } else {
        console.log('absent');
    }
}
findName('영희');
findName('Rachel');

function multiplication (number) {
    for (let i = 1 ; i < 10 ; i++) {
        let answer = number * i;
        console.log(answer);
    }
}

multiplication(3);

var scroe = [];
var sum;
var difference;
var average;
var initial = 0;

/*
improvement([10, 20, 30, 40, 50], 40) ;
improvement([40, 40, 40], 20);
*/
function improvement (prev, current) {
    prev.forEach(function(a){
        console.log(`a is ${a}`);
        sum = initial + a;
        initial = sum;
        console.log(`sum is ${sum}`);
    })
    average = sum / prev.length;
    difference = current - average;
    console.log(difference);

    if (difference > 0) {
        console.log (`평균보다 ${difference}올랐습니다.`)
    } else {
        let result = difference * -1;
        console.log(`평균보다${result}떨어졌습니다.`)
    }

}

improvement([10, 20, 30, 40, 50], 40) ;
// improvement([40, 40, 40], 20);
