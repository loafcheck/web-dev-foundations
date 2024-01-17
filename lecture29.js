var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

  let title = document.querySelectorAll('h5');
  let price = document.querySelectorAll('p')

  function convert() {
    for(let i = 0 ; i < title.length ; i++){
        title[i].innerHTML = products[i].title;
        price[i].innerHTML = `가격 : ${products[i].price}`;
    }
  }
  convert();