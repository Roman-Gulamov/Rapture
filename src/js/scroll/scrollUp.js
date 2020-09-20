$(document).ready(function () {
var btn = $('.buttonUp');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('active');
        } else {
            btn.removeClass('active');
        }
    });

    btn.on('click', function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop:0
    }, 900);
    });
})