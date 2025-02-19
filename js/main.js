/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  var header = $('.js-header');
  var headerHeight = $('.js-header').height();
  var heroHeight = $('.js-hero').height();
  var point = heroHeight - headerHeight;
  var scrollWidth = window.innerWidth - $('body')[0].offsetWidth + 'px';
  function showScroll() {
    if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      $('body').css('padding-right', '');
      header.css('padding-right', '');
    }
    $('body').removeClass('o-hidden');
  }
  function hideScroll() {
    if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      $('body').css('padding-right', scrollWidth);
      header.css('padding-right', scrollWidth);
    }
    $('body').addClass('o-hidden');
  }
  if ($(window).width() < 1280) {
    point = 0;
  }
  $(window).scroll(function () {
    var currentScroll = $(window).scrollTop();
    currentScroll > point ? header.addClass('header_scroll') : header.removeClass('header_scroll');
  });
  $('.js-burger').click(function () {
    $(this).toggleClass('burger_active');
    if (!$(this).hasClass('burger_active')) {
      setTimeout(function () {
        showScroll();
        header.removeClass('header_active');
        $('.header__content').removeClass('header__content_active');
        $('.header-animate').removeClass('header-animate_up header-animate_down');
      }, 400);
      $('.header-animate').addClass('header-animate_down');
      if ($(window).width() > 767) {
        $.each($('.nav__item').get().reverse(), function (indexInArray) {
          $(this).css('animationDelay', indexInArray / 20 + 's');
        });
        $.each($('.header__info-item').get().reverse(), function (indexInArray) {
          $(this).css('animationDelay', indexInArray / 20 + 's');
        });
        $('.header__block').css('animationDelay', 0 + 's');
      }
    } else {
      hideScroll();
      header.addClass('header_active');
      $('.header__content').addClass('header__content_active');
      setTimeout(function () {
        $('.header-animate').addClass('header-animate_up');
      }, 400);
      if ($(window).width() > 767) {
        $.each($('.nav__item'), function (indexInArray) {
          $(this).css('animationDelay', indexInArray / 20 + 's');
        });
        $.each($('.header__info-item'), function (indexInArray) {
          $(this).css('animationDelay', indexInArray / 20 + 's');
        });
        $('.header__block').css('animationDelay', .2 + 's');
      }
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/hero/hero.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/hero/hero.js ***!
  \*****************************************/
/***/ (() => {

$(function () {
  $('.js-hero-button').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    var headerHeight = $('.js-header').outerHeight();
    $('html').animate({
      scrollTop: top - (headerHeight - 1)
    }, 1000);
  });
});

/***/ }),

/***/ "./src/blocks/modules/services-all/services-all.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/services-all/services-all.js ***!
  \*********************************************************/
/***/ (() => {

$(function () {
  var checker;
  $('.js-services-all-link').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    var headerHeight = $('.js-header').outerHeight();
    checker = 0;
    $('.js-services-all-link').removeClass('services-all__side-link_active');
    $(this).addClass('services-all__side-link_active');
    $('html').animate({
      scrollTop: top - (headerHeight - 1)
    }, 1000);
    setTimeout(function () {
      checker = 1;
    }, 1000);
  });
  $(window).scroll(function () {
    var $anchor = $('.js-anchor');
    var scroll = $(window).scrollTop();
    var headerHeight = $('.js-header').outerHeight();
    $anchor.each(function (i, el) {
      var top = $(el).offset().top - headerHeight;
      var bottom = top + $(el).outerHeight();
      var id = $(el).attr('id');
      if (scroll > top && scroll < bottom && checker != 0) {
        $('.js-services-all-link').removeClass('services-all__side-link_active');
        $('.js-services-all-link[href="#' + id + '"]').addClass('services-all__side-link_active');
      }
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/slider/slider.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/slider/slider.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  var ticker = new Swiper('.js-ticker', {
    slidesPerView: 'auto',
    speed: 30000,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0
    }
  });
  var reviewsSlider = new Swiper('.js-reviews-slider', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    centeredSlides: true,
    loop: true,
    speed: 1200,
    breakpoints: {
      768: {
        slidesPerView: 1.62,
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 16
      }
    },
    // pagination: {
    // 	el: '.reviews-pagination',
    // 	clickable: true,
    // },
    pagination: {
      renderBullet: function renderBullet(index, className) {
        return "\n          <span class=\"".concat(className, "\">\n            <svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t<path d=\"M11.9997 2.6665H6.66634V5.33317H3.99967V7.99984H1.33301V15.9998H3.99967V18.6665H6.66634V21.3332H9.33301V23.9998H11.9997V26.6665H14.6663V29.3332H17.333V26.6665H19.9997V23.9998H22.6663V21.3332H25.333V18.6665H27.9997V15.9998H30.6663V7.99984H27.9997V5.33317H25.333V2.6665H19.9997V5.33317H17.333V7.99984H14.6663V5.33317H11.9997V2.6665ZM11.9997 5.33317V7.99984H14.6663V10.6665H17.333V7.99984H19.9997V5.33317H25.333V7.99984H27.9997V15.9998H25.333V18.6665H22.6663V21.3332H19.9997V23.9998H17.333V26.6665H14.6663V23.9998H11.9997V21.3332H9.33301V18.6665H6.66634V15.9998H3.99967V7.99984H6.66634V5.33317H11.9997Z\"/>\n\t\t\t\t\t\t\t<path class=\"inner\" d=\"M11.9997 7.99984V5.33317H6.66634V7.99984H3.99967V15.9998H6.66634V18.6665H9.33301V21.3332H11.9997V23.9998H14.6663V26.6665H17.333V23.9998H19.9997V21.3332H22.6663V18.6665H25.333V15.9998H27.9997V7.99984H25.333V5.33317H19.9997V7.99984H17.333V10.6665H14.6663V7.99984H11.9997Z\"/>\n\t\t\t\t\t\t</svg>\n          </span>\n        ");
      },
      el: '.reviews-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev'
    }
  });
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_hero_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/hero/hero */ "./src/blocks/modules/hero/hero.js");
/* harmony import */ var _modules_hero_hero__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_hero_hero__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/slider/slider */ "./src/blocks/modules/slider/slider.js");
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_slider_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_services_all_services_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/services-all/services-all */ "./src/blocks/modules/services-all/services-all.js");
/* harmony import */ var _modules_services_all_services_all__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_services_all_services_all__WEBPACK_IMPORTED_MODULE_3__);

// import "%modules%/nav/nav";




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map