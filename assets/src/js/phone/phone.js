$(document).ready(function () {
    $('.phone__carousel').carousel({
        fullWidth: true,
        indicators: true,
        numVisible: 1,
        duration: 300
    });

    $('.phone__card').click( function (e) {
        $('.phone__carousel').carousel('next');
    })
})