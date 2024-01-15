
//모든버튼에 붙은 orange 클래스명 제거
//btn0 누르면 orange 클래스 추가
//모든 div 에 붙은 show 클래스명 제거
//div0에 show 클래스명 추가

let btn = document.getElementsByClassName('tab-button');
let tab = document.getElementsByClassName('tab-content');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',function(){
        for(let j = 0; j < tab.length; j++) {
            btn[j].classList.remove('orange');
            tab[j].classList.remove('show');
        }
        btn[i].classList.add('orange');
        tab[i].classList.add('show');
    })
}
