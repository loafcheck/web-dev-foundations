window.addEventListener('scroll', function() {
    var height = document.documentElement.scrollTop;
    console.log("scroll height: ", height);

    //148-552 스크롤바를 내리면, 첫번째 카드의 opacity를 1-0으로 변경
    var cardBox1 = document.getElementsByClassName('card-box')[0];
    var y = -1/404 * height + 1.366;
    cardBox1.style.opacity = y;

/**
Opacity
OPACITY >> cardbox1 start: 148 (opacity 1) - 300 - 552(opacity 0) 
SCALE >>   cardbox1 start: 148 (scale 1) - 300 - 552(opacity 0) 
 */

/** Scale 줄이기 */

    if (window.scrollY >= 500) {
        var originalWidth = cardBox1.offsetWidth;
        //get original width
        var desiredWidth = originalWidth - 20;
        //calculate desired width

        var scaleXFactor = desiredWidth / originalWidth;

        cardBox1.style.transform = `scaleX(${scaleXFactor})`;
    } else {
        cardBox1.style.transform = "scaleX(1)"
    }
    

    /**
     * 첫번째 카드 opacity 
    y = -1/404 * height + 1.366
    1 = a * 148 + b; 
    0 = a * 552 + b; */

});

