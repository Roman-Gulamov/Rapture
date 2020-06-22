$(document).ready(function () {

$('.features__carousel').carousel({
    fullWidth: true,
    numVisible: 1,
    noWrap: true
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