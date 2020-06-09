$(document).ready(function () {

$('.features__carousel').carousel({
    indicators: false,
    numVisible: 1
});

$('.features__moveNextCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
});

$('.features__movePrevCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
});

})