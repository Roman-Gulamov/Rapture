$(document).ready(function () {

$('.carousel.carousel-slider').carousel({
    indicators: false,
    dist: -30,
    numVisible: 1
});

$('.moveNextCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
});

$('.movePrevCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
});
})