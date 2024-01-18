
let btn = document.getElementsByClassName('tab-button');
var tab = document.getElementsByClassName('tab-content');
let list = document.querySelector('.list');
let 어레이자료형 = ['자료1', '자료2', '자료3'];
let car = ['bmw', 30000, 'black'];
let car2 = {name: 'bmw', price: [50000, 40000,   3000]};
car[1] = 40000;
let productChart = document.getElementsByClassName('productChart');
let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');
productName.innerHTML = `${car2.name}`;
productPrice.innerHTML = `${car2.price[0]}`;

// let container = document.getElementsByClassName('container')[0];
// let sizeChart = document.getElementsByClassName('form-select-size')[0];
//  container.addEventListener('click', function(event){
//     if(event.target.tagName === 'SELECT') {
//         let selectedOption = event.target.options[event.target.selectedIndex]
//         let dataId = selectedOption.getAttribute('data-id');
//         if (dataId === '0' || dataId === '1') {
//             sizeChart.style.display = 'block';
//         } else {
//             sizeChart.style.display = 'none';
//         }
//     }
//  })
let form = document.getElementsByClassName('form-select')[0];
let selection = document.getElementsByClassName('form-select')[0];
let sizeChart = document.getElementsByClassName('form-select-size')[0];
var hatSize = {0:'S', 1:'M', 2:'L'};
var pantSize = [28,29,30,31];

form.addEventListener('input', function(event){
    if(event.target.value === '아우터') {
        sizeChart.style.display = 'block';
        sizeChart.innerHTML = '';
        for (let i = 0 ; i < 4 ; i++) {
            var option = document.createElement('option');
            option.text = String(i);
            sizeChart.appendChild(option);
        }
    } else if (this.value === '바지') {
        sizeChart.style.display = 'block';
        pantSize.forEach(function(size, i){
            var option = document.createElement('option');
            option.text = String(size);
            sizeChart.appendChild(option);
            console.log(`${i}확인차 출력`);
        })
        
    } else if (event.target.value === '모자') {
        sizeChart.style.display = 'block';
        for (var key in hatSize) {
            var option = document.createElement('option');
            option.text = hatSize[key];
            sizeChart.appendChild(option);
            console.log(key, hatSize[key]);
        }
    } 
    else {
        sizeChart.style.display = 'none';
    }
})


var a = document.createElement('p');
a.innerHTML = 'hello';
document.querySelector('#test').appendChild(a);
 
var template = '<p class="hello2">hello2</p>';
document.querySelector('#test').insertAdjacentHTML('beforeend', template);

/*
1.options을 만든다. 
2.selection 안에 옵션을 넣는다.
*/



/*
container.addEventListener('input', function(event){
    if(event.target.value === '아우터' || event.target.value === '바지') {
        sizeChart.style.display = 'block';
    } else {
        sizeChart.style.display = 'none';
    }
})
*/



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
