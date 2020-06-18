$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown({
        coverTrigger: false,
        closeOnClick: false,
        inDuration: 350,
        outDuration: 350
    });

    var name = $('.username');

    if ($.cookie('user')) { 
        name.text($.cookie('user'));
    }
})