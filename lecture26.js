
let btn = document.getElementsByClassName('tab-button');
var tab = document.getElementsByClassName('tab-content');
let list = document.querySelector('.list');

window.addEventListener('click',function(event){
        if(event.target === document.querySelectorAll('.tab-button')[event.target.dataset.id]){
            tabWork(event.target.dataset.id);
        }
})

function tabWork(num) {
   console.log(num);

}
