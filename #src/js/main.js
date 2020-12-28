$(document).ready(function () {
	objectFitImages();
	// AOS.init({
	// 	duration: 1500
	// });

	const searchBtn = $('.header__search-btn');
	const filterBtn = $('.bar__filter-btn');
	const sortBtn = $('.bar__sort-btn');
	const midSliders = document.querySelectorAll('.slider-mid__container');


if (document.querySelector('.bar')) {

	$(document).click(function (ev) {

		if (!ev.target.closest('.bar__filter-btn') && !ev.target.closest('.filter-bar')) {
			$('.filter-bar').removeClass('filter-bar--active');
		}


		if (!ev.target.closest('.bar__sort-btn') && !ev.target.closest('.sort-bar')) {
			sortBtn.removeClass('bar__sort-btn--active');
		$('.sort-bar').removeClass('sort-bar--active');
		}

	})
}

	$(document).click(function (ev) {

		if (!ev.target.closest('.header')) {
			searchBtn.removeClass('header__search-btn--close');
			$('.header__form').removeClass('header__form--active');
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

	$('.tab-info__top').on('click', function(ev){
		let text = $(this).next('.tab-info__bot');
		$(this).toggleClass('tab-info__top--active')
		text.slideToggle();
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

	const sliderProductMain = new Swiper('.slider-product', {

		slidesPerView: 1,
		observer: true,
		observeParents: true,
		loop: false,
		mousewheel: true,
		breakpoints: {
			577: {
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				},
			}
		}
	});

	midSliders.forEach(function (el) {

		const slider_1 = new Swiper(el, {

			slidesPerView: 4,
			spaceBetween: 40,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			loop: false,
			navigation: {
				nextEl: el.closest('.slider-mid__wrapper').querySelector('.slider-mid__btn-next'),
				prevEl: el.closest('.slider-mid__wrapper').querySelector('.slider-mid__btn-prev'),
			},
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 1,
			// 	},
			// 	653: {
			// 		slidesPerView: 2,
			// 	},
			// 	1130: {
			// 		slidesPerView: 3,
			// 	},
			// 	1340: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 30,
			// 	}
			// }
		});
	})



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

	$("#to-size").on('click', function () {
		$.fancybox.open({
			src: '#modal-size',
			touch: 'false',
			smallBtn: false,
			buttons: '',
		});
	});

	$(".to-cart").on('click', function (ev) {
		ev.preventDefault();
		$.fancybox.open({
			src: '#modal-cart',
			touch: 'false',
			smallBtn: false,
			buttons: '',
			afterShow: function( ) {
				$('.ellipse').removeClass('ellipse--active')
			}
		});
	});

	$(".info-product__btn").on('click', function (ev) {
		$.fancybox.open({
			src: '#modal-cart',
			touch: 'false',
			smallBtn: false,
			buttons: ''
		});
	});

	$(".comments-product__btn").on('click', function (ev) {
		$.fancybox.open({
			src: '#modal-comment',
			touch: 'false',
			smallBtn: false,
			buttons: ''
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

	if (document.getElementById('map')) {
		 
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
				center: [52.05693880953456,118.68705543322154],
				zoom: 4
			});
		
			var myPlacemark = new ymaps.Placemark([55.54055193739615,108.71146949572154], {
				hintContent: 'г. Борисоглебск, ул. Победы, д. 66',
				balloonContent: 'г. Борисоглебск, ул. Победы, д. 66'
			},
			{
				preset: 'islands#redIcon',
				iconLayout: 'default#image',
				iconImageHref: '../img/marker.svg',
				iconImageSize: [20, 28],
				iconImageOffset: [-19, -52]
			});
		
			myMap.geoObjects.add(myPlacemark);
		});
	}

	// Анимация карточки

	if(document.querySelector('.card__image')){

		$('body').mousemove(function(event){
			if (event.target.dataset.image) {
				var x = event.clientX;
				var y = event.clientY;

				$('.cursor').css('transform', `translate(${x}px, ${y}px)`);

				if(!$('.ellipse').hasClass('ellipse--active')){
					$('.ellipse').addClass('ellipse--active')
				}
			}
			else {
				if($('.ellipse').hasClass('ellipse--active')){
					$('.ellipse').removeClass('ellipse--active')
				}
			}

			
		});
	
	// 	$('.card__image').mouseover(function(event){
	// 		$('.ellipse').addClass('ellipse--active')
	// });
	
	// 	$('.card__image').mouseout(function(event){
	// 			$('.ellipse').removeClass('ellipse--active');
	// 			console.log(event.relatedTarget)
	// 	});
	
	// 	$('.to-cart').mouseover(function(event){
	// 		event.stopPropagation()
	// 		$('.ellipse').removeClass('ellipse--active')
	// });
	
	// 	$('.to-cart').mouseout(function(event){
	// 		event.stopPropagation()
	// 			$('.ellipse').addClass('ellipse--active')
	// 	});


	}

	


});