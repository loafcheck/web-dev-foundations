var products = [
    { id: 0, price: 70000, title: 'Blossom Dress'},
    { id: 1, price: 50000, title: 'Chelsea Dress'},
    { id: 2, price: 60000, title: 'Issac Dress'},
];

let sortByPrice = function () {
    products.sort(function(a,b){
        if( a.price < b.price ) {
            return -1
        } else if ( a.price > b.price ) {
            return 1
        } else {
            return 0
        }
    })
    console.log(`prodcuts are  ${JSON.stringify(products)}`);
}
    
var tableBody = document.getElementById("productTableBody");

products.forEach(function(products){
    var row = document.createElement('tr');
    row.innerHTML=`
        <td>${products.id}</td>
        <td>${products.title}</td>
        <td>${products.price}</td>
    `
    tableBody.appendChild(row);
})

var mainBody = document.getElementById('main');

var sortBtn = document.createElement('button');
sortBtn.textContent = `sort`
mainBody.appendChild(sortBtn);

sortBtn.addEventListener('click', function () {
    sortByPrice();
    tableBody.innerHTML = ''; 
    products.forEach (function(item){
        var row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.price}</td>
    `;
    tableBody.appendChild(row);
    })

})