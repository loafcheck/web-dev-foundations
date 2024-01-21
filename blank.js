var products = [
    { id: 0, price: 70000, title: 'Blossom Dress'},
    { id: 1, price: 40000, title: 'Spring Blouse'},
    { id: 2, price: 80000, title: 'Midnight Jean'}
];

var newArray = [];
products.forEach((data, index) => {
    var template = `
        <div class="col-sm-4">
            <h5>${data.title}</h5>
            <p>${data.price}</p>
        </div>
    `
    newArray.push(template);
});

console.log(typeof newArray);
