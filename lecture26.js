
let btn = document.getElementsByClassName('tab-button');
let tab = document.getElementsByClassName('tab-content');
let list = document.querySelector('.list');
//윈도우 클릭하면
//오렌지랑 쇼우 다 지워줘 
//누른곳이 버튼[ㄱ]
//오렌지랑 쇼우 클래스 추가해줘
window.addEventListener('click', function(event) {
    for(let i = 0 ; i < btn.length ; i++){
        btn[i].classList.remove('orange');
        tab[i].classList.remove('show');
    }
    for (let j = 0 ; j < tab.length ; j++) {
        if(event.target === btn[j]){
            btn[j].classList.add('orange');
            tab[j].classList.add('show');
        }
    }
    
});
