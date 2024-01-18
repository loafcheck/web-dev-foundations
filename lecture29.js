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

  fetch('https://codingapple1.github.io/price.json')
  //서버와 유저는 문자로만 주고받는다. 
  //object, array를 유저에게 보내고 싶으면 json 형태로 하면 가능
  //json은 object, array에 " "붙인 문서파일
    .then(res => res.json()) 
    //json->object로 바꿔줘
    .then(function(data){
      console.log(data.price)
    })
    .catch(function(error){
      console.log('실패함')
    });