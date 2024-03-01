/** Convert Json File */
fetch('/project/store.json')
    .then(response => response.json())
    .then(data => renderProducts(data.products))
    .catch(error => alert('Error fetching data: ', error));

/** Create Array of products */
function renderProducts(fetchedProducts){
    var productsContainer = document.getElementsByClassName("products")[0];
    fetchedProducts.forEach(function(product){
        var productElement = createProductElement(product);
        productsContainer.appendChild(productElement);
    });
}

/** HTML for store.json */
function createProductElement(product) {
    var productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.setAttribute("draggable", "true");
    productDiv.setAttribute("ondragstart", "drag(event)");

    var img = document.createElement("img");
    img.src = "project/" + product.photo;
    img.alt = product.title;

    var title = document.createElement("h5");
    title.textContent = product.title;

    var brand = document.createElement("p");
    brand.classList.add("brand");
    brand.textContent = "Brand: " + product.brand;
    
    var price = document.createElement("p");
    price.classList.add("price");
    price.textContent = "Price: " + product.price;

    var purchaseButton = document.createElement("button");
    purchaseButton.textContent = "Purchase";

    productDiv.appendChild(img);
    productDiv.appendChild(title);
    productDiv.appendChild(brand);
    productDiv.appendChild(price);
    productDiv.appendChild(purchaseButton);

    productDiv.addEventListener("dragstart", drag);

    return productDiv;
} 

function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    console.log("Drag started"); // Check if drag is triggered and get the text data
    var productData = {
        imgSrc : ev.target.querySelector('img').src,
        title: ev.target.querySelector('h5').textContent,
        brand: ev.target.querySelector('p.brand').textContent,
        price: ev.target.querySelector('p.price').textContent
    };
    var productDataString = JSON.stringify(productData);
    ev.dataTransfer.setData("product", productDataString);
}

function drop(ev) {
    ev.preventDefault();
    console.log("Drop triggered"); // Check if drop is triggered

    var productDataString = ev.dataTransfer.getData("product");
    var productData = JSON.parse(productDataString);
    console.log("Dropped data:", productData); // Check if dropped data is retrieved correctly
    
    var dragHere = document.getElementById('dragHere');
    dragHere.classList.add('disappear');

    /**product */
    var product = document.createElement('div');
    product.classList.add('product');

    var img = document.createElement('img');
    img.src = productData.imgSrc;
    img.alt = productData.title;
    product.appendChild(img);

    var title = document.createElement('h5');
    title.innerHTML = productData.title;
    product.appendChild(title);

    var brand = document.createElement('p');
    brand.textContent = "Brand: " + productData.brand;
    product.appendChild(brand);

    var price = document.createElement('p');
    price.textContent = "Price: " + productData.price;
    product.appendChild(price);

    var cart = document.querySelector('.dragArea');
    cart.appendChild(product);

}
