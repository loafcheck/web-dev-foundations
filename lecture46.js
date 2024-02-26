/*

let variable = 2 + 2;
switch (variable) {
    case 3: 
        alert('you have three');
        break;
    case 4:
        alert('you have four');
        break;
    default:
        alert('none!');
        break;
}
*/

var quiz = document.querySelector('#quiz');
quiz.addEventListener('click',function(e){
    console.log(e.target.innerHTML);
    switch (e.target.innerHTML) {
        case 'Partner':
            alert('You are in love!');
            break;
        case 'Parents':
            alert('You have strong relationship to your Parents');
            break;
        case 'Children':
            alert('You have strong relationship to your children');
            break;
        case 'Pets':
            alert('Pets love you the most');
            break;
    }

})
