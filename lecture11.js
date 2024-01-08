function game (number) {
    //3의 배수일때 박수 한번
    //3의 배수이자 9의 배수일땐 박수2번
    if (number % 9 == 0) {
        console.log('clapx2');
    } else if (number % 3 == 0) {
        console.log('clap');
    } else {
        console.log('fail');
    }
}

// game(18);
// game(12);
// game(40);

function realEstate (introduction, civilLaw) {
    //개론 100점 민법 100점
    var introduction;
    var civilLaw;

    //두개 점수 합쳐서 120점 이상이면 통과시켜줌
    if (introduction <=40 || civilLaw <= 40){
        console.log('test fail');
    } else if (introduction + civilLaw >= 120) {
        console.log('test pass');
    } else {
        console.log('test fail');
    }
    //다만 한 과목이 40점 미만이면 불합격
}

realEstate(50,50);
