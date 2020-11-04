$(document).ready(function () {
	$('.slider-items__list').slick({
		arrows: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 500,
		responsive: [
			{
				breakpoint: 1001,
				settings: {
					slidesToShow: 3,
				},
				breakpoint: 617,
				settings: {
					arrows: false,
				}
			},
		]

	});
})