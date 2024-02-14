var products = [
    { id: 0, price: 70000, title: 'Yuna Dress'},
    { id: 1, price: 50000, title: 'Chelsea Dress'},
    { id: 2, price: 60000, title: 'Issac Dress'},
];

var tableBody = document.getElementById("productTableBody");

products.forEach(function(item) {
    var rowWrapper = document.createElement('div');
    rowWrapper.classList.add('rowWrapper');
    rowWrapper.innerHTML = `
        <div class='Box'>
            <img src="img/iphone.png" alt="Example Image">
            <h5>${item.title}</h5>
            <p>Price: ${item.price}</p>
            <button class="buyBtn">buy</button>
        </div>
    `;
    tableBody.appendChild(rowWrapper);
  
});


var productName;
var productNameArr = [];
var shoppingcart = document.querySelector('.shoppingcart');

tableBody.addEventListener('click', function(e){

    if(e.target.classList.contains('buyBtn')) {
        var parentDiv = e.target.parentNode;
        productName = parentDiv.querySelector('h5').textContent;
        var sibiling = e.target.previousElementSibling.previousElementSibling;
        console.log("sibiling", sibiling);
        console.log("product bought:", productName);

        var localStorageInfo =[];

        if(localStorage.getItem('cart') !== null) {
            localStorageInfo = JSON.parse(localStorage.getItem('cart'));
        }
        
        if (!localStorageInfo.includes(productName)) {
            productNameArr.push(productName);
            localStorage.setItem('cart', JSON.stringify(productNameArr));

        var cartptag = document.createElement('p');
        var localStorageInfo = JSON.parse(localStorage.getItem('cart'));
        cartptag.textContent = localStorageInfo.join(',');
        shoppingcart.appendChild(cartptag); 

        }    
        else {
            console.log("Product is already in the cart");
        }

    }
})
localStorage.removeItem('cart');



/**local storage */





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
/**
 * 1. 구매버튼 누르면
 * 2. 지금 누른 버튼 윗윗 글자를 가져와서
 * 3. localStorage 에 저장
 *
 */

