$(document).ready(function () {
    
    $("a").click(function () {
        if ($(this).attr("href") == 'Previo') {
            return;
        } else if ($(this).attr("href") == 'Siguiente') {
            return;
        } else if($(this).attr("href") == '#') {
            return;
        } else {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;
                $('html').animate({ 
                    scrollTop: destination
                }, 1100);
        }
    });
})