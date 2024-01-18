var products = [
    { id: 0, price: 70000, title: 'Blossom Dress'},
    { id: 1, price: 40000, title: 'Spring Blouse'},
    { id: 2, price: 80000, title: 'Midnight Jean'}
];

var templateArray = [];
var container = document.createElement('div');
document.body.appendChild(container);

products.forEach((data, index) => {
    var template = `
        <div class="col-sm-4">
            <h5>${data.title}</h5>
            <p>${data.price}</p>
        </div>
    `;
    templateArray.push(template);
});

let moreBtn = document.createElement('button');
moreBtn.textContent = 'MORE';

moreBtn.addEventListener('click', function () {
    fetch('https://codingapple1.github.io/js/more1.json')
        .then(res => res.json())
        .then(data => {
            var products2 = data;

            // Assuming template2, template3, etc., are generated similarly
            var template2 = '';
            products2.forEach((data, index) => {
                template2 += `
                    <div class="col-sm-4">
                        <h5>${data.title}</h5>
                        <p>${data.price}</p>
                    </div>
                `;
            });

            // Add new templates to the array
            templateArray.push(template2);

            // Concatenate all templates in the array
            container.innerHTML = templateArray.join('');
        })
        .catch(error => {
            console.log(error);
        });
});

// Initial append of templateArray to the container
container.innerHTML = templateArray.join('');

// Append the "MORE" button to the container
container.appendChild(moreBtn);
