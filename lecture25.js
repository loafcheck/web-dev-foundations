let viewPercent = document.getElementsByClassName('viewPercent');
window.addEventListener('scroll', function() {
    if (window.scrollY < 10) {
        viewPercent[0].style.width = '20vw';
    } else if (window.scrollY < 20) {
        viewPercent[0].style.width = '40vw';
    } else if (window.scrollY < 30) {
        viewPercent[0].style.width = '60vw';
    } else if (window.scrollY < 40) {
        viewPercent[0].style.width = '80vw';
    } else if (window.scrollY <= 50) {
        viewPercent[0].style.width = '100vw';
    }
});


function openModal() {
    document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click',function(){
    document.getElementById('myModal').style.display = 'none';
})


window.addEventListener('click',function(event){
    if(event.target === document.getElementById('myModal')){
        closeModal();
    }
})