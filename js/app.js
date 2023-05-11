jQuery(document).ready(function ($) {
	initScrollTo();
	initMobileMenu();
	initReadMore();
	initReadMoreSlider();
	initSlick();
	hoverCard();
	initFileInput();
	initZoomImg();
	initConsultationFancybox();
	changeModal();
	closeCookieBlock();
	initModalHeroSection();
	// initChangeImageHeight();
});


function initScrollTo() {
	$("a.scroll-to").click(function () {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 700,
			easing: "swing"
		});
		return false;
	});
}

function initSlick() {
	$('.hero-slick').slick({
		dots: true,
		arrows: true,
		infinite: false,
		speed: 500,
		rows: 2,
		vertical: true,
		verticalSwiping: true,
		prevArrow: $('.slider-prev-hero'),
		nextArrow: $('.slider-next-hero'),
		responsive: [
			{
				breakpoint: 1200,
				settings: 'unslick'
			}
		]
	});
	$('.hero-slick-tablet').slick({
		dots: true,
		arrows: false,
		infinite: false,
		speed: 500,
		rows: 1,
		vertical: false,
		verticalSwiping: false,
		mobileFirst: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: 'unslick'
			}
		]
	});
	$('.shop-slick').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 500,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.slider-prev-shop'),
		nextArrow: $('.slider-next-shop')
	});
	$('.reproductions-slick').slick({
		dots: true,
		arrows: true,
		infinite: false,
		speed: 500,
		variableWidth: true,
		prevArrow: $('.slider-prev'),
		nextArrow: $('.slider-next'),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					dots: false
				}
			}
		]
	});
	$('.mak-slick').slick({
		dots: true,
		arrows: true,
		infinite: false,
		speed: 500,
		variableWidth: true,
		prevArrow: $('.slider-prevs'),
		nextArrow: $('.slider-nexts'),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					dots: false
				}
			}
		]
	});
	$('body.listing-mak .mak-slick').slick('unslick');
	$('body.listing-rep .reproductions-slick').slick('unslick');
	$('.steps-slick').slick({
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 320,
				settings: "unslick"
			},
			{
				breakpoint: 575,
				settings: {
					slidesToScroll: 1,
					variableWidth: true,
					dots: false,
					arrows: false,
				}
			},
			{
				breakpoint: 767,
				settings: "unslick"
			},
		]
	});
	$('.certificates-slick').slick({
		dots: true,
		arrows: true,
		infinite: false,
		speed: 500,
		variableWidth: true,
		prevArrow: $('.certificates__slider-prev'),
		nextArrow: $('.certificates__slider-next'),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					arrows: false,
				}
			}
		]
	});
	$('.services-slick').slick({
		dots: true,
		arrows: true,
		infinite: false,
		autoPlay: true,
		speed: 500,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					arrows: false,
				}
			}
		]
	});
	$('.reviews-slick').slick({
		dots: true,
		arrows: false,
		infinite: false,
		speed: 500,
		variableWidth: true,
	});
	$('[data-fancybox]').fancybox({
		autoFocus: false,
		touch: false,
	});
}

function initMobileMenu() {
	const headerBurger = $('.header__burger');
	const headerMenu = $('.header__menu');
	const body = $('body');
	const headerMenuLink = $('.header__link');
	const headerMenuBtnEnroll = $('.btn-enroll');
	const headerOverlay = $('.overlay');


	headerBurger.on('click', function () {
		headerBurger.toggleClass('active');
		headerMenu.toggleClass('active');
		body.toggleClass('lock');
	});

	headerOverlay.on('click', function () {
		if (body.hasClass('lock') && headerMenu.hasClass('active') && headerBurger.hasClass('active')) {
			body.removeClass('lock');
			headerMenu.removeClass('active');
			headerBurger.removeClass('active');
		}
	});

	headerMenuLink.on('click', function () {
		if (body.hasClass('lock') && headerMenu.hasClass('active') && headerBurger.hasClass('active')) {
			body.removeClass('lock');
			headerMenu.removeClass('active');
			headerBurger.removeClass('active');
		}
	});

	headerMenuBtnEnroll.on('click', function () {
		console.log('test');
		if (body.hasClass('lock') && headerMenu.hasClass('active') && headerBurger.hasClass('active')) {
			body.removeClass('lock');
			headerMenu.removeClass('active');
			headerBurger.removeClass('active');
		}
	});

}

function showSlider(evt, sliderName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(sliderName).style.display = "block";
	evt.currentTarget.className += " active";
}

function initReadMore() {
	const more = $(".read-more");
	let open = false;


	if (more) {
		more.click(function (e) {
			var currentMoreBtn = jQuery(this);
			var contentHolder = currentMoreBtn.closest(".reviews__item.reviews-text");
			var content = contentHolder.find(".content-inner");
			var contentFull = contentHolder.find(".content-full");

			if (open) {
				content.removeAttr("style");
				// e.target.innerText = "Read more";
				open = false;
				currentMoreBtn.removeClass('show');
			} else {
				content.css("max-height", contentFull.height());
				// e.target.innerText = "Read less";
				open = true;
				currentMoreBtn.addClass('show');
			}
		});
	}
}

function initReadMoreSlider() {
	const more = $(".read-more");
	let open = false;


	if (more) {
		more.click(function (e) {
			var currentMoreBtn = jQuery(this);
			var contentHolder = currentMoreBtn.closest(".reviews-slide__inner");
			var content = contentHolder.find(".content-inner");
			var contentFull = contentHolder.find(".content-full");

			if (open) {
				content.removeAttr("style");
				// e.target.innerText = "Read more";
				open = false;
				currentMoreBtn.removeClass('show');
				console.log('test1');
			} else {
				content.css("max-height", contentFull.height());
				// e.target.innerText = "Read less";
				open = true;
				currentMoreBtn.addClass('show');
				console.log('test2');
			}
		});
	}
}

function hoverCard() {
	$('.cards__item').on('mouseover', function () {
		const cardsItems = $(this).outerHeight();
		const imageHolder = $(this).find('.cards__image-holder');
		const textHolder = $(this).find('.cards__text-holder');
		if (imageHolder && textHolder) {
			const imageHeight = cardsItems - textHolder.outerHeight();
			if (!$(this).hasClass('animate')) {
				imageHolder.css('height', `${imageHeight}px`);
				imageHolder.addClass('animate');
			}
		}
	});

	$('.cards__item').on('mouseout', function () {
		const imageHolder = $(this).find('.cards__image-holder');
		const imageCard = $(this).find('.cards__image-holder img').outerHeight();
		if (imageHolder) {
			imageHolder.css('height', 'calc(100% - 34px)');
			imageHolder.removeClass('animate');
		}
	});


	var cardItem = $('.cards__item');

	cardItem.hover(function () {
		var textHolder = $(this).find('.cards__text-holder');
		var textHolderHeight = textHolder.height();
		textHolder.css('bottom', '0');
	}, function () {
		var textHolder = $(this).find('.cards__text-holder');
		var textHolderHeight = textHolder.height();
		textHolder.css('bottom', '-' + (textHolderHeight - 14) + 'px');
	});
}

function initFileInput() {
	$('.input-file input[type=file]').on('change', function () {
		let file = this.files[0];
		$(this).next().html(file.name);
	});

}

function initZoomImg() {
	if ($(window).width() >= 1200) {
		$('.zoom').zoom({ on: 'click' });
	}
}

function removeClassesOnEsc() {
	var modalCommon = jQuery('.modal-buy-common');
	jQuery(document).keydown(function (event) {
		if (event.keyCode == 27) {
			setTimeout(function () {
				modalCommon.removeClass('show-buy');
				modalCommon.removeClass('show-look');
			}, 300);
		}
	});
}

function removeClassesOnCloseBtn() {
	var modalCommon = jQuery('.modal-buy-common');
	jQuery('.modal-buy-common .fancybox-button').on('click', function () {
		setTimeout(function () {
			modalCommon.removeClass('show-buy');
			modalCommon.removeClass('show-look');
		}, 500);
	});
	jQuery('.fancybox-slide').on('click', function (e) {
		if (jQuery(this).is(e.target)) {
			setTimeout(function () {
				modalCommon.removeClass('show-buy');
				modalCommon.removeClass('show-look');
			}, 650);
		}
	});
}

function changeModal() {
	var modalCommon = jQuery('.modal-buy-common');
	var btnBuy = jQuery('.reproductions-slider__buttons>.btn-buy');
	var btnLook = jQuery('.reproductions-slider__buttons>.btn-look');
	var closeBtn = jQuery('.modal-buy-common .fancybox-button');
	var modalBntBuy = jQuery('.modal-look__footer .btn-buy');
	var modalBntBack = jQuery('.modal-buy .btn-back');
	var consultationLink = jQuery('.contact-box__text-holder a');
	var btnBack = jQuery('.modal-consultation .btn-back');
	var currentModal;
	var currentClasses;
	jQuery(window).on('click', function () {
		removeClassesOnEsc();
	})
	btnBuy.on('click', function (e) {
		e.preventDefault();
		// var currentBtnSrc = jQuery(this).attr('data-src');
		var currentBtnSrc = jQuery(this).attr('href');
		var currentModalCommon = jQuery(currentBtnSrc);
		currentModalCommon.fancybox({
			autoFocus: false,
			touch: false,
			afterLoad: function () {
				$(".modal-look-slick").not('.slick-initialized').slick({
					dots: true,
					arrows: true,
					infinite: false,
					speed: 500,
					slidesToShow: 1,
					slidesToScroll: 1,
					swipe: false
				});
			},
			afterClose: function () {
				$('.modal-look-slick').slick('unslick');
			}
		});
		if (!$.fancybox.isOpen) {
			currentModalCommon.click();
		}
		currentModalCommon.addClass('show-buy');
		removeClassesOnCloseBtn();
		removeClassesOnEsc();
		jQuery('.modal-look-slick').slick('setPosition');
	});
	btnLook.on('click', function (e) {
		e.preventDefault();
		// var currentBtnSrc = jQuery(this).attr('data-src');
		var currentBtnSrc = jQuery(this).attr('href');
		var currentModalCommon = jQuery(currentBtnSrc);
		currentModalCommon.fancybox({
			autoFocus: false,
			touch: false,
			afterLoad: function () {
				$(".modal-look-slick").not('.slick-initialized').slick({
					dots: true,
					arrows: true,
					infinite: false,
					speed: 500,
					slidesToShow: 1,
					slidesToScroll: 1,
					swipe: false
				});
			},
			afterClose: function () {
				$('.modal-look-slick').slick('unslick');
			}
		});
		if (!$.fancybox.isOpen) {
			currentModalCommon.click();
		}
		currentModalCommon.addClass('show-look');
		removeClassesOnCloseBtn();
		removeClassesOnEsc();
		jQuery('.modal-look-slick').slick('setPosition');
	});
	modalBntBuy.on('click', function (e) {
		e.preventDefault();
		var currentModalBtnBuy = jQuery(this);
		var currentModalCommon = currentModalBtnBuy.closest('.modal-buy-common');
		currentModalCommon.addClass('show-buy');
		currentModalCommon.removeClass('show-look');
		removeClassesOnCloseBtn();
		removeClassesOnEsc();
	});
	modalBntBack.on('click', function (e) {
		e.preventDefault();
		var currentModalBtnBuy = jQuery(this);
		var currentModalCommon = currentModalBtnBuy.closest('.modal-buy-common');
		currentModalCommon.addClass('show-look');
		currentModalCommon.removeClass('show-buy');
		removeClassesOnCloseBtn();
		removeClassesOnEsc();
		jQuery('.modal-look-slick').slick('setPosition');
	});
}

function initConsultationFancybox() {
	var modalCommon = jQuery('.modal-buy-common');
	var btnBack = jQuery('.modal-consultation .btn-back');
	jQuery('.btn-consultation,.btn-enroll, .btn-hero, .btn-message').on('click', function (e) {
		e.preventDefault();
		btnBack.css('display', 'none');
		$("#modal-consultation").fancybox({
			autoFocus: false,
			touch: false,
			beforeShow: function () {
				$("input[type='checkbox'], label").on("click", function (e) {
					e.stopPropagation();
				});
			},
			afterClose: function () {
				$("input[type='checkbox'], label").off("click");
			}
		});
		if (!$.fancybox.isOpen) {
			$("#modal-consultation").click();
		}
	});
	jQuery('.js-btn-consultation').on('click', function (e) {
		e.preventDefault();
		btnBack.css('display', 'flex');
		currentModal = jQuery(this).closest('.modal-buy-common');
		currentClasses = currentModal.attr('class');
		currentClasses = currentClasses.replace('fancybox-content', '').trim();
		$.fancybox.close();
		$("#modal-consultation").fancybox();
		if (!$.fancybox.isOpen) {
			$("#modal-consultation").click();
		}
		setTimeout(function () {
			modalCommon.removeClass('show-buy');
			modalCommon.removeClass('show-look');
		}, 300);
		removeClassesOnEsc();
		removeClassesOnCloseBtn();
	});
	btnBack.on('click', function () {
		currentModal.attr('class', '');
		currentModal.addClass(currentClasses);
		currentModal.fancybox();
		setTimeout(function () {
			if (currentModal.hasClass('show-look')) {
				$(".modal-look-slick").not('.slick-initialized').slick({
					dots: true,
					arrows: true,
					infinite: false,
					speed: 500,
					slidesToShow: 1,
					slidesToScroll: 1,
					swipe: false
				});
			}
			currentModal.click();
			removeClassesOnCloseBtn();
			removeClassesOnEsc();
		}, 100);
	});
}

function closeCookieBlock() {
	var cookieBlock = $('.cookie-block');
	var cookieBtnAccept = $('.btn-accept');
	cookieBtnAccept.on('click', function (e) {
		e.preventDefault();
		cookieBlock.hide();
	})
}

function initModalHeroSection() {
	var modalHeroBlock = $('#modalHeroBlock');
	var modalHeroCloseBtn = $('.modalHeroBlock-close');
	modalHeroBlock.css({
		'bottom': '-100%',
	});
	setTimeout(function () {
		modalHeroBlock.animate({
			'bottom': '42px'
		}, 500, function () {
			setTimeout(function () {
				modalHeroBlock.css('opacity', '1');
				modalHeroBlock.css('visibility', 'visible');
			}, 600);
		});
	}, 100);
	modalHeroCloseBtn.on('click', function () {
		modalHeroBlock.hide();
		console.log('test');
	})
}

//-------------Stop last slide
// $(document).ready(function () {
// 	$('.certificates-slick').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
// 		$(this).find('.certificates__slider-next').prop('disabled', nextSlide === slick.slideCount - 2);
// 	});
// });


// function initChangeImageHeight() {
// 	var fullContentHeight = $(".content-full").outerHeight() - 146;
// 	var reviewsColumn = $(".reviews__column");
// 	var reviewsColumn1 = $(".reviews__column--1");
// 	var reviewsColumn2 = $(".reviews__column--2");
// 	var reviewsColumn3 = $(".reviews__column--3");
// 	var cardsItem1 = reviewsColumn1.find(".reviews-img .cards__item");
// 	var cardsItem2 = reviewsColumn2.find(".reviews-img .cards__item");
// 	var cardsItem3 = reviewsColumn3.find(".reviews-img .cards__item");
// 	var columnImg1 = reviewsColumn1.find(".cards__image-holder");
// 	var columnImg2 = reviewsColumn1.find(".cards__image-holder");
// 	var columnImg3 = reviewsColumn1.find(".cards__image-holder");
// 	var columnImgHeight1 = cardsItem1.outerHeight();
// 	var columnImgHeight2 = cardsItem2.outerHeight();
// 	var columnImgHeight3 = cardsItem3.outerHeight();

// 	var readmoreBtn = $(".read-more");

// 	readmoreBtn.on("click", function () {
// 		var currentMoreBtn = jQuery(this);
// 		var reviewsColumn = $(this).closest(".reviews__column")
// 		console.log(reviewsColumn)

// 		// var reviewImg = reviewsColumn.find(".reviews-img");
// 		// var reviewImgHeight = reviewImg.height();
// 		if (reviewsColumn.hasClass("reviews__column--1")) {
// 			var numbersReviewImg1 = cardsItem1.length;
// 			var newReviewImgHeight1 = columnImgHeight1 - fullContentHeight / numbersReviewImg1;
// 			if (currentMoreBtn.hasClass('show')) {
// 				cardsItem1.css("height", newReviewImgHeight1 + "px");
// 				columnImg1.css("height", newReviewImgHeight1 - 34 + "px");
// 			} else {
// 				cardsItem1.css("height", columnImgHeight1 + "px");
// 				columnImg1.css("height", columnImgHeight1 - 34 + "px");
// 			}
// 		} else if (reviewsColumn.hasClass("reviews__column--2")) {
// 			var numbersReviewImg2 = cardsItem2.length;
// 			var newReviewImgHeight2 = columnImgHeight2 - fullContentHeight / numbersReviewImg2;
// 			if (currentMoreBtn.hasClass('show')) {
// 				cardsItem2.css("height", newReviewImgHeight2 + "px");
// 				columnImg2.css("height", newReviewImgHeight2 - 34 + "px");
// 			} else {
// 				cardsItem2.css("height", columnImgHeight2 + "px");
// 				columnImg2.css("height", columnImgHeight2 - 34 + "px");
// 			}
// 		} else if (reviewsColumn.hasClass("reviews__column--3")) {
// 			var numbersReviewImg3 = cardsItem3.length;
// 			var newReviewImgHeight3 = columnImgHeight3 - fullContentHeight / numbersReviewImg3;
// 			if (currentMoreBtn.hasClass('show')) {
// 				cardsItem3.css("height", newReviewImgHeight3 + "px");
// 				columnImg3.css("height", newReviewImgHeight3 - 34 + "px");
// 			} else {
// 				cardsItem3.css("height", columnImgHeight3 + "px");
// 				columnImg3.css("height", columnImgHeight3 - 34 + "px");
// 			}
// 		}

// 		reviewImg.each(function () {
// 			var currentReviewImg = $(this);
// 			var currentCardsItem = currentReviewImg.closest('.reviews-img').find('.cards__item');
// 			var currentCardsItemImage = currentReviewImg.closest('.reviews-img').find('.cards__image-holder');

// 			updateReviewImgHeight(currentReviewImg, currentCardsItem, currentCardsItemImage);
// 		});

// 		function updateReviewImgHeight(currentReviewImg, currentCardsItem, currentCardsItemImage) {

// 			if (currentMoreBtn.hasClass('show')) {
// 				currentCardsItem.css("height", newReviewImgHeight + "px");
// 				currentCardsItemImage.css("height", newReviewImgHeight - 34 + "px");
// 				console.log(reviewImgHeight + '1');
// 				console.log(newReviewImgHeight);
// 			} else {
// 				currentCardsItem.css("height", reviewImgHeight + "px");
// 				currentCardsItemImage.css("height", reviewImgHeight - 34 + "px");
// 				console.log(reviewImgHeight + '2');
// 				console.log(newReviewImgHeight);
// 			}
// 		}

// 	});

// }












// const cardItem = document.querySelector('.cards__item');

// if (cardItem) {
// 	const imageHolder = cardItem.querySelector('.cards__image-holder');
// 	const textHolder = cardItem.querySelector('.cards__text-holder');

// 	if (imageHolder && textHolder) {
// 		cardItem.addEventListener('mouseover', (event) => {
// 			const imageHeight = 283 - textHolder.clientHeight;
// 			if (!cardItem.classList.contains('animate')) {
// 				imageHolder.style.height = `${imageHeight}px`;
// 				imageHolder.classList.add('animate');
// 			}
// 		});

// 		cardItem.addEventListener('mouseout', (event) => {
// 			imageHolder.style.height = '249px';
// 			imageHolder.classList.remove('animate');
// 		});
// 	}
// }

// $('.cards__item').on('mouseover', function () {
// 	const imageHolder = $(this).find('.cards__image-holder');
// 	const textHolder = $(this).find('.cards__text-holder');
// 	if (imageHolder && textHolder) {
// 		const imageHeight = 283 - textHolder.outerHeight();
// 		if (!$(this).hasClass('animate')) {
// 			imageHolder.css('height', `${imageHeight}px`);
// 			imageHolder.addClass('animate');
// 		}
// 	}
// });

// $('.cards__item').on('mouseout', function () {
// 	const imageHolder = $(this).find('.cards__image-holder');
// 	if (imageHolder) {
// 		imageHolder.css('height', '249px');
// 		imageHolder.removeClass('animate');
// 	}
// });











// const content = document.querySelector(".content-inner");
// const contentFull = document.querySelector(".content-full");
// const more = document.querySelector(".read-more");
// let open = false;

// if (more) {
// 	more.addEventListener("click", (e) => {
// 		if (open) {
// 			content.removeAttribute("style");
// 			e.target.innerText = "Read more";

// 			open = false;
// 		} else {
// 			content.style.maxHeight = `${contentFull.clientHeight}px`;
// 			e.target.innerText = "Read less";

// 			open = true;
// 		}
// 	});
// }




// function initReadMore() {
// 	var fullContentHeight = $(".content-full").outerHeight() - 146;
// 	var reviewImgHeight = $(".reviews-img").outerHeight();
// 	var newReviewImgHeight = reviewImgHeight - fullContentHeight / 3;
// 	$(".read-more").on("click", function () {
// 		var currentMoreBtn = jQuery(this);
// 		if (currentMoreBtn.hasClass('show')) {
// 			$(".reviews-img").css("height", newReviewImgHeight + "px");
// 			$(".reviews-img .cards__item").css("height", "inherit");
// 			$(".reviews-img .cards__image-holder").css("height", newReviewImgHeight - 34 + "px");
// 		} else {
// 			$(".reviews-img").css("height", reviewImgHeight + "px");
// 			$(".reviews-img .cards__item").css("height", "283px");
// 			$(".reviews-img .cards__image-holder").css("height", "249px");
// 		}
// 	});
// }



// var fullContentHeight = $(".content-full").outerHeight() - 146;
// var reviewsColumn = $(".reviews__column");
// var reviewsColumn1 = $(".reviews__column--1");
// var reviewsColumn2 = $(".reviews__column--2");
// var reviewsColumn3 = $(".reviews__column--3");
// var cardsItem1 = reviewsColumn1.find(".reviews-img .cards__item");
// var cardsItem2 = reviewsColumn2.find(".reviews-img .cards__item");
// var cardsItem3 = reviewsColumn3.find(".reviews-img .cards__item");
// var columnImg1 = reviewsColumn1.find(".cards__image-holder");
// var columnImg2 = reviewsColumn1.find(".cards__image-holder");
// var columnImg3 = reviewsColumn1.find(".cards__image-holder");
// var columnImgHeight1 = cardsItem1.outerHeight();
// var columnImgHeight2 = cardsItem2.outerHeight();
// var columnImgHeight3 = cardsItem3.outerHeight();

// var readmoreBtn = $(".read-more");

// readmoreBtn.on("click", function () {
// 	var currentMoreBtn = jQuery(this);
// 	var reviewsColumn = $(this).closest(".reviews__column")
// 	console.log(reviewsColumn)

// 	// var reviewImg = reviewsColumn.find(".reviews-img");
// 	// var reviewImgHeight = reviewImg.height();
// 	if (reviewsColumn.hasClass("reviews__column--1")) {
// 		var numbersReviewImg1 = cardsItem1.length;
// 		var newReviewImgHeight1 = columnImgHeight1 - fullContentHeight / numbersReviewImg1;
// 		if (currentMoreBtn.hasClass('show')) {
// 			cardsItem1.css("height", newReviewImgHeight1 + "px");
// 			columnImg1.css("height", newReviewImgHeight1 - 34 + "px");
// 		} else {
// 			cardsItem1.css("height", 257 + "px");
// 			columnImg1.css("height", 257 - 34 + "px");
// 		}
// 	} else if (reviewsColumn.hasClass("reviews__column--2")) {
// 		var numbersReviewImg2 = cardsItem2.length;
// 		var newReviewImgHeight2 = columnImgHeight2 - fullContentHeight / numbersReviewImg2;
// 		if (currentMoreBtn.hasClass('show')) {
// 			cardsItem2.css("height", newReviewImgHeight2 + "px");
// 			columnImg2.css("height", newReviewImgHeight2 - 34 + "px");
// 		} else {
// 			cardsItem2.css("height", 336 + "px");
// 			columnImg2.css("height", 336 - 34 + "px");
// 		}
// 	} else if (reviewsColumn.hasClass("reviews__column--3")) {
// 		var numbersReviewImg3 = cardsItem3.length;
// 		var newReviewImgHeight3 = columnImgHeight3 - fullContentHeight / numbersReviewImg3;
// 		if (currentMoreBtn.hasClass('show')) {
// 			cardsItem3.css("height", newReviewImgHeight3 + "px");
// 			columnImg3.css("height", newReviewImgHeight3 - 34 + "px");
// 		} else {
// 			cardsItem3.css("height", 250 + "px");
// 			columnImg3.css("height", 250 - 34 + "px");
// 		}
// 	}
// });
