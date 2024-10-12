
var navbar = document.getElementById("mynav");
var btn =document.getElementById("btn");
var link =document.querySelectorAll ("#mynav a")
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
      link.classList.add("black")
    } else {
      navbar.classList.remove("scrolled");
      link.classList.remove("black")

    }
  });
  btn.addEventListener ('mousemove', function (){

  })
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }