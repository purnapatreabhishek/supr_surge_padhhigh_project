(function ($) {
	"use strict";

	// sticky header
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 120) {
		$('.header__area').addClass("sticky-header")
		} else {
		$('.header__area').removeClass("sticky-header")
		}
	});

	// preloader js start
	function loader() {
		$(window).on('load', function () {
			$('#ctn-preloader').addClass('loaded');
			$("#loading").fadeOut(500);
			// Una vez haya terminado el preloader aparezca el scroll

			if ($('#ctn-preloader').hasClass('loaded')) {
				// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
				$('#preloader').delay(900).queue(function () {
					$(this).remove();
				});
			}
		});
	}
	loader();
	// preloader js end

	// mobile menu start
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991"
	});

	$('.side-toggle').on('click', function () {
		$('.side-mobile-menu').addClass('info-open');
		$('.offcanvas-overlay').addClass('overlay-open');
	})

	$('.side-info-close,.offcanvas-overlay').on('click', function () {
		$('.side-mobile-menu').removeClass('info-open');
		$('.offcanvas-overlay').removeClass('overlay-open');
	})

	//data background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ") ")
	})

	// data bg color
	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));

	});

	// testimonial start
	$('.testimonial__carousel').owlCarousel({
		loop:true,
		margin:30,
		items:2,
		dots:false,
		autoplay:true,
		smartSpeed: 1000,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		center: true,
		stagePadding: 200,
		responsive:{
			0:{
				items:1,
				stagePadding: 0,
				margin:0,
			},
			767:{
				items:2,
				stagePadding: 0,
			},
			992:{
				items:2,
				stagePadding: 0,
			},
			1200:{
				items:2,
				stagePadding: 0,
			},
			1500:{
				items:2,
			}
		}
	});

	// testimonial start
	$('.testimonial__active').owlCarousel({
		loop:true,
		margin:30,
		items:1,
		dots:true,
		autoplay:true,
		smartSpeed: 800,
		autoplayTimeout:6000,
		autoplayHoverPause:true,
	});

	// testimonial start
	$('.testimonial__carousel--2').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		autoplay: true,
		autoplayTimeout:5000,
		smartSpeed: 800,
		navText:['<i class="far fa-long-arrow-left"></i>','<i class="far fa-long-arrow-right"></i>'],
		nav: true,
		dots: false,
	});

	// brand active
	$('.brand__active').owlCarousel({
		loop: true,
		margin: 30,
		items: 5,
		autoplay: true,
		autoplayTimeout:6000,
		smartSpeed: 800,
		nav: false,
		dots: false,
		responsive:{
			0:{
				items:2
			},
			767:{
				items:3
			},
			992:{
				items:4
			},
			1200:{
				items:5
			}
		}
	});

	// portfolio-active
	$('.portfolio__carousel').owlCarousel({
		loop: true,
		margin: 30,
		items: 2,
		autoplay: true,
		autoplayTimeout:5000,
		smartSpeed: 800,
		navText:['<i class="far fa-long-arrow-left"></i>','<i class="far fa-long-arrow-right"></i>'],
		nav: true,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:1
			},
			992:{
				items:2
			},
			1200:{
				items:2
			}
		}
	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

	// Active Odometer Counter 
	jQuery('.odometer').appear(function (e) {
		var odo = jQuery(".odometer");
		odo.each(function () {
			var countNumber = jQuery(this).attr("data-count");
			jQuery(this).html(countNumber);
		});
	});

	// Accordion Box start
	if ($(".accordion__box").length) {
		$(".accordion__box").on("click", ".acc_btn", function () {
		var outerBox = $(this).parents(".accordion__box");
		var target = $(this).parents(".accordion");

		if ($(this).next(".accordion__content").is(":visible")) {
			$(this).removeClass("active");
			$(this).next(".accordion__content").slideUp(300);
			$(outerBox).children(".accordion").removeClass("active_block");
		} else {
			$(outerBox).find(".accordion .acc_btn").removeClass("active");
			$(this).addClass("active");
			$(outerBox).children(".accordion").removeClass("active_block");
			$(outerBox).find(".accordion").children(".accordion__content").slideUp(300);
			target.addClass("active_block");
			$(this).next(".accordion__content").slideDown(300);
		}
		});
	}
	// Accordion Box end

	// range slider activation start
	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 100,
		values: [0, 70],
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});

	$("#amount").val("$" + $("#slider-range").slider("values", 0) +
	" - $" + $("#slider-range").slider("values", 1));

	// product weight active
	$(function () {
		$('.product__weight li').on('click', function () {
		var active = $('.product__weight li.active');
		active.removeClass('active');
		$(this).addClass('active');
		});
	});

	// shop cart start
	var CartPlusMinus = $('.cart-plus-minus');
	CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
	CartPlusMinus.append('<div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() === "+") {
		var newVal = parseFloat(oldValue) + 1;
		} else {
		// Don't allow decrementing below zero
		if (oldValue > 1) {
			var newVal = parseFloat(oldValue) - 1;
		} else {
			newVal = 1;
		}
		}
		$button.parent().find("input").val(newVal);
	});

	$('.main-menu nav > ul > li').slice(-3).addClass('menu-last');

})(jQuery);