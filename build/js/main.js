/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = cookies.length;

		for (; i < l; i++) {
			var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');

			if (key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
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
                }, 1700);
        }
    });
})
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
});
$(document).ready(function(){
    $('.materialboxed').materialbox();
});
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