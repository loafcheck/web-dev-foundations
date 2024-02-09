var array = [1000, 2000, 5000, 800];
var currency = 3.2;

var newArray = array.map(function(data){
    return data * currency;
})

console.log(newArray);

var letter = ['a','d','b'];

// letter.sort(function(a,b){
//     if(a < b) {
//         return 1
//     } else {
//         return -1
//     } 
// })
// console.log(letter);

var letter = ['a','d','b'];
letter.sort(function(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
});

console.log(letter);

var products = [
    { id: 0, price: 70000, title: 'Blossom Dress'},
    { id: 1, price: 50000, title: 'Chelsea Dress'},
    { id: 2, price: 60000, title: 'Issac Dress'},
];

products.sort(function(a,b){
    if(a.price < b.price) {
        return 1
    } else if ( a.price > b.price) {
        return -1
    } else {
        return 0
    }
    
})

console.log(products);

var tableBody = document.getElementById('productTableBody');
    products.forEach(function(products){
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${products.id}</td>
            <td>${product.price}</td>
            <td>${product.title}</td>
        `
        tableBody.appendChild(row);
    })

