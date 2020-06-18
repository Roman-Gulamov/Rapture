$(document).ready(function(){
    $('.subscribe').submit(function() {
		$.ajax({
			type: "POST",
			url: "../src/php/mail.php",
			data: $(this).serialize()
		}).done(function() {
            $('.subscribe').trigger('reset');
            $('.subscribe button').addClass('modal-trigger');
            $('.modal').modal({
                opacity: .9,
                inDuration: 300,
                outDuration: 300
            });
            $('.modal-trigger').click();
            $('.subscribe button').removeClass('modal-trigger');
		});
		return false;
    });
});


