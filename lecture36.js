var products = [
    { id: 0, price: 70000, title: 'Blossom Dress'},
    { id: 1, price: 40000, title: 'Spring Blouse'},
    { id: 2, price: 80000, title: 'Midnight Jean'}
];

var templateArray = [];
var container = document.createElement('div');
let moreBtn = document.createElement('button');
let sortBtn = document.createElement('button');
let under6 = document.createElement('button');

moreBtn.textContent = 'MORE';
sortBtn.innerHTML = 'Price low to high';
under6.innerHTML = 'under6';


var filteredProducts = [] ;
filteredProducts = products.filter((data)=>{
    return data.price < 60000;
})
/*
filteredProducts=
[{id: 1, price: 40000, title: 'Spring Blouse'}]
*/

under6.addEventListener('click', function(){
    var templateArray = [];

    filteredProducts.forEach((data)=> {
        var template = `
        <div class="col-sm-4">
            <h5>${data.title}</h5>
            <p>${data.price}</p>
        </div>
    `;
    templateArray.push(template);
    })

    container.innerHTML = templateArray;
    
    
})



/*정렬 이후 버튼이 계속 유지 될 수 있게 마지막 코드를 이렇게 실행 */
container.innerHTML = templateArray.join('')

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

/*Initial rendering*/
container.innerHTML = templateArray.join('');
var sortedProducts = [...products];
sortBtn.addEventListener('click', function() {
    sortedProducts.sort((a,b)=>{
        return a.price - b.price});
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
})






container.appendChild(moreBtn);
container.appendChild(sortBtn);
container.appendChild(under6);

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