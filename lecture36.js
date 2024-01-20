var products = [
    { id: 0, price: 70000, title: 'Blossom Dress'},
    { id: 1, price: 40000, title: 'Spring Blouse'},
    { id: 2, price: 80000, title: 'Midnight Jean'}
];

var templateArray = [];
var container = document.createElement('div');
let moreBtn = document.createElement('button');
let sortBtn = document.createElement('button');
moreBtn.textContent = 'MORE';
sortBtn.innerHTML = 'Price low to high';
document.body.appendChild(container);


products.forEach((data, index) => {
    var template = `
        <div class="col-sm-4">
            <h5>${data.title}</h5>
            <p>${products[index].price}</p>
        </div>
    `;
    templateArray.push(template);

});

/*
templateArray 에서 <p>
*/
var sortedProducts = [];
sortBtn.addEventListener('click', function() {
    products.sort((a,b)=>{
        return a.price - b.price});
    console.log(products);
    sortedProducts = [...products];
    console.log(sortedProducts);
    templateArray = [];
    sortedProducts.forEach((data,index)=>{
       template2 = `
        <div class="col-sm-4">
            <h5>${data.title}</h5>
            <p>${products[index].price}</p>
        </div>
    `;
    templateArray.push(template2);
    })
    
    console.log(templateArray); 
    container.innerHTML = templateArray.join('')

})


container.innerHTML = templateArray.join('');
container.appendChild(moreBtn);
container.appendChild(sortBtn);


// moreBtn.addEventListener('click', function () {
//     fetch('https://codingapple1.github.io/js/more1.json')
//         .then(res => res.json())
//         .then(data => {
//             var products2 = data;

//             // Assuming template2, template3, etc., are generated similarly
//             products2.forEach((data, index) => {
//                 var template = `
//                     <div class="col-sm-4">
//                         <h5>${data.title}</h5>
//                         <p>${products2[index].price}</p>
//                     </div>
//                 `;
//                 templateArray.push(template);
//             });

//             // Render the updated templates and "MORE" button
//             renderTemplates();

//         })
//         .catch(error => {
//             console.log(error);
//         });
// });


