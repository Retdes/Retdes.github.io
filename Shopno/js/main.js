
function burgerMenu(icon) {
  icon.classList.toggle("change");
}




var slideIndexx = 1;
showSlidess(slideIndexx);

// Next/previous controls
function plusSlidess(n) {
  showSlidess(slideIndexx += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlidess(slideIndexx = n);
}

function showSlidess(n) {
  var i;
  var slidess = document.getElementsByClassName("mySlides");
  var dotss = document.getElementsByClassName("dot");
  if (n > slidess.length) { slideIndexx = 1 }
  if (n < 1) { slideIndexx = slidess.length }
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";
  }
  for (i = 0; i < dotss.length; i++) {
    dotss[i].className = dotss[i].className.replace(" active", "");
  }
  slidess[slideIndexx - 1].style.display = "block";
  dotss[slideIndexx - 1].className += " active";
}

///asdgvasdfasdf





var slideWidth = 300;

$('.slidewrapper').width($('.slidewrapper').children().length * slideWidth);

$('#next_slide').click(nextSlide);
$('#prev_slide').click(prevSlide);

function nextSlide() {
  var currentSlide = parseInt($('.slidewrapper').data('current'));
  currentSlide++;
  if (currentSlide >= $('.slidewrapper').children().length) {
    currentSlide = 0;
  }
  $('.slidewrapper').animate({ left: -currentSlide * slideWidth }, 300).data('current', currentSlide);
}
function prevSlide() {
  var currentSlide = parseInt($('.slidewrapper').data('current'));
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = $('.slidewrapper').children().length - 1;
  }
  $('.slidewrapper').animate({ left: -currentSlide * slideWidth }, 300).data('current', currentSlide);
}

///2.sliders !





/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlider(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
