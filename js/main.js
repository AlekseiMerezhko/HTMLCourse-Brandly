$(document).ready(function() {



$('#owl-header').owlCarousel({
	items: 1,
	itemsDesktop: [1199,1],
	itemsDesktopSmall: [979,1],
	itemsTablet: [768,1],
	itemsMobile: [479,1],
	autoplay: true,
	autoplayTimeout: 3000,
	loop: true,
});

$('#owl-items').owlCarousel({
	items: 1,
	itemsDesktop: [1199,1],
	itemsDesktopSmall: [979,1],
	itemsTablet: [768,1],
	itemsMobile: [479,1],
	autoplay: true,
	autoplayTimeout: 3000,
	loop: true,
});

$('#owl-blog').owlCarousel({
	items: 1,
	itemsDesktop: [1199,1],
	itemsDesktopSmall: [979,1],
	itemsTablet: [768,1],
	itemsMobile: [479,1],
	loop: true,
	nav: true,
	navText: false,

});





$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});

});
