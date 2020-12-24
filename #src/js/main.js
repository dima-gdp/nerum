$(document).ready(function () {
	objectFitImages();

	const searchBtn = $('.header__search-btn');
	const filterBtn = $('.bar__filter-btn');
	const sortBtn = $('.bar__sort-btn');

	$(document).click(function (ev) {

		if (!ev.target.closest('.bar')) {
			$('.filter-bar').removeClass('filter-bar--active');
			$('.sort-bar').removeClass('sort-bar--active')

		}
	})

	filterBtn.on('click', function(){
		$('.filter-bar').toggleClass('filter-bar--active');
	});

	sortBtn.on('click', function(){
		sortBtn.toggleClass('bar__sort-btn--active');
		$('.sort-bar').toggleClass('sort-bar--active');
	});

	searchBtn.on('click', function(){
		searchBtn.toggleClass('header__search-btn--close');
		$('.header__form').toggleClass('header__form--active');
	});

	$('#to-privacy').on('click', function(ev){
		ev.preventDefault()
	})

	const slider_hero = new Swiper('.slider-hero', {

		slidesPerView: 1,
		loop: false,
		navigation: {
			nextEl: '.slider-hero__btn-next',
			prevEl: '.slider-hero__btn-prev',
		},
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 31,

		// 	},
		// 	769: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 25,

		// 	},
		// 	993: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 31,
		// 	},
		// }
	});


	// Fancy-box
	// $(".to-modal").on('click', function () {
	// 	$.fancybox.open({
	// 		src: '#modal',
	// 		touch: 'false',
	// 		smallBtn: false,
	// 		buttons: '',
	// 	});
	// });

	$("#to-privacy").on('click', function () {
		$.fancybox.open({
			src: '#modal-polit',
			touch: 'false',
			smallBtn: false,
			buttons: '',
		});
	});

	// Input-mask
	// $('input[type="tel"]').inputmask({ "mask": "+7 (999)-999-99-99" });

	// // Табы
	// $('ul.tabs__list').on('click', 'li:not(.active)', function () {
	// 	$(this).addClass('active').siblings().removeClass('active')
	// 		.closest('div.tabs').find('div.tabs__block').removeClass('active').eq($(this).index()).addClass('active');
	// })

	// Menu-burger
	// burger.click(function () {
	// 	mobMenu.addClass('active')
	// })

	// $('.mob-menu__close').click(function () {
	// 	mobMenu.removeClass('active')
	// })

	// $(document).click(function (ev) {
	// 	if (!ev.target.closest('.header__burger')) {

	// 		if (!ev.target.closest('.mob-menu')) {
	// 			mobMenu.removeClass('active')
	// 		}

	// 	}
	// })



});