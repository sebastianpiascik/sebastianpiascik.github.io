//==========quotation slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
//==========skills circles
var circle1 = document.getElementById('canvas1');
var context = circle1.getContext('2d');


var percentage = 0.681743; // no specific length
var degrees = percentage * 360.0;
var radians = degrees * (Math.PI / 180);

var x = 50;
var y = 40;
var r = 30;
var s = 0;//1.5 * Math.PI;

context.beginPath();
context.lineWidth = 2;
context.arc(x, y, r, s, radians, false);
context.stroke();

//===mapa
