$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown({
        coverTrigger: false,
        closeOnClick: false,
        inDuration: 350,
        outDuration: 350
    });

    if ($.cookie('user')) { 
        $('.username').text($.cookie('user'));
    }
})