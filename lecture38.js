var products = [
    { id: 0, price: 70000, title: 'Blossom Dress'},
    { id: 1, price: 50000, title: 'Chelsea Dress'},
    { id: 2, price: 60000, title: 'Issac Dress'},
];

var tableBody = document.getElementById("productTableBody");
products.forEach (function(item){
    var row = document.createElement('tr');
    row.innerHTML = `
    <td>${item.id}</td>
    <td>${item.title}</td>
    <td>${item.price}</td>
`;
tableBody.appendChild(row);

})



var mainBody = document.getElementById('main');
var sortBtn = document.createElement('button');
sortBtn.textContent = `sort`;
mainBody.appendChild(sortBtn);
var filterBtn = document.createElement('button');
filterBtn.textContent = 'sort under 60000';
mainBody.appendChild(filterBtn);

let newProducts; 

let filterByPrice = function () {
    newProducts = products.filter(function(item){
        return item.price <= 60000;
    })
    console.log(`newProducts under 60000 are ${JSON.stringify(newProducts)}`);
    newProducts.forEach(function(newP){
        var row = document.createElement('tr');
        tableBody.innerHTML = ''; 
        row.innerHTML = `
            <td>${newP.id}<td>
            <td>${newP.title}</td>
            <td>${newP.price}</td>
        `
        tableBody.appendChild(row);
    
    })   
}

filterBtn.addEventListener('click',filterByPrice);

let sortByPrice = function () {
    products.sort(function(a,b){
        if(a.price < b.price) {
            return -1
        } else if (a.price > b.price){
            return 1
        } else {
            return 0
        }
    })
    tableBody.innerHTML = '';

    products.forEach(function(product){
        var row = document.createElement('tr')
            row.innerHTML = `
            <td>${product.id}<td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            `;
            tableBody.appendChild(row);
    })

   
}
sortBtn.addEventListener('click', sortByPrice);
