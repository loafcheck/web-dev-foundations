
let btn = document.getElementsByClassName('tab-button');
var tab = document.getElementsByClassName('tab-content');
let list = document.querySelector('.list');

window.addEventListener('click',function(event){
        if(event.target === btn[event.target.dataset.id]){
            tabWork(event.target.dataset.id);
        }
})

function tabWork(num) {
    for(let i = 0 ; i < btn.length ; i++ ){
        btn[i].classList.remove('orange');
        tab[i].classList.remove('show');
    }
    btn[num].classList.add('orange');
    tab[num].classList.add('show');
   console.log(num);
}
