var products = [
    { id: 0, price: 70000, title: 'Yuna Dress'},
    { id: 1, price: 50000, title: 'Chelsea Dress'},
    { id: 2, price: 60000, title: 'Issac Dress'},
];


var tableBody = document.getElementById("productTableBody");
products.forEach(function(item) {
    var rowWrapper = document.createElement('div');
    rowWrapper.classList.add('rowWrapper');

    var row = document.createElement('tr');
    row.innerHTML = `
        <td><div></div></td>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.price}</td>
        <button>buy</button>
    `;
    rowWrapper.appendChild(row);
    tableBody.appendChild(rowWrapper);
}); 


localStorage.setItem('Rachel', 'John'); 
localStorage.getItem('Rachel');

var arr = [1,2,3];
var newArr = JSON.stringify(arr);

localStorage.setItem('num',newArr);
var result = localStorage.getItem('num');
var newResult = JSON.parse(result);
console.log(newResult);

/* local storage

local storage 저장시 모든 것이 문자화
object,array 자료형을 유지하고 싶으면 JSON을 사용할것
JSON은 object,array를 문자취급하게 도와주는 자료형
object,array 를 유지한체 문자취급화시켜서 >>
local strage 에 보관하면 object,array유지한체 저장가능!
*/


var mainBody = document.getElementById('main');
var buttonDiv = document.getElementsByClassName("buttonDiv")[0];
var sortBtn = document.createElement('button');
sortBtn.textContent = `sort by a-z`;
buttonDiv.appendChild(sortBtn);
var filterBtn = document.createElement('button');
filterBtn.textContent = 'sort under 60000';
buttonDiv.appendChild(filterBtn);


let newProducts; 

let filterByPrice = function () {
    newProducts = products.filter(function(item){
        return item.price <= 60000;
    })
    console.log(`newProducts under 60000 are ${JSON.stringify(newProducts)}`);
    newProducts.forEach(function(newP){
        var row = document.createElement('tr');
        row.classList.add('pinkBorder');
        tableBody.innerHTML = ''; 
        row.innerHTML = `
            <td>${newP.id}</td>
            <td>${newP.title}</td>
            <td>${newP.price}</td>
        `
        tableBody.appendChild(row);
    
    })   
}



let sortByPrice = function () {

    products.sort(function(a ,b){
    
        var idA = a.title.toLowerCase();
        var idB = b.title.toLowerCase();

            if(idA < idB) {
                return -1
            } else if (idA > idB){
                return 1
            } else {
                return 0
            }
    })

    tableBody.innerHTML = '';

    products.forEach(function(product){
        var row = document.createElement('tr');
        row.classList.add('pinkBorder');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
            `;
            tableBody.appendChild(row);
    })
}

filterBtn.addEventListener('click',filterByPrice);
sortBtn.addEventListener('click', sortByPrice);
