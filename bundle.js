/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _app = __webpack_require__(1);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ESLint Global var declaration
	/* global appOptions */
	
	// webpack include of the site SASS/CSS
	__webpack_require__(39);
	
	var app = new _app2.default({});
	app.start();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SiteController = __webpack_require__(2);
	
	var _SiteController2 = _interopRequireDefault(_SiteController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var App = function () {
	  function App(options) {
	    _classCallCheck(this, App);
	
	    this.options = options;
	
	    this.pageController = {};
	    this.siteController = {};
	  }
	
	  _createClass(App, [{
	    key: 'start',
	    value: function start() {
	      // Launch the page
	      $('document').ready($.proxy(this.handleAppReady, this));
	    }
	  }, {
	    key: 'handleAppReady',
	    value: function handleAppReady() {
	      console.log('APP READY!');
	
	      this.siteController = new _SiteController2.default(this.options);
	    }
	  }]);
	
	  return App;
	}();
	
	exports.default = App;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	/* Site Controller
	 * =========================
	 * This controller is loaded on every page. For any activity that needs to execute on all
	 * page please implement here.
	 */
	
	// ESLint Global var declaration
	/* global TweenMax, Back, ga */
	
	
	var _jsCookie = __webpack_require__(3);
	
	var _jsCookie2 = _interopRequireDefault(_jsCookie);
	
	var _Splash = __webpack_require__(4);
	
	var _Splash2 = _interopRequireDefault(_Splash);
	
	var _Menu = __webpack_require__(6);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Gallery = __webpack_require__(7);
	
	var _Gallery2 = _interopRequireDefault(_Gallery);
	
	var _About = __webpack_require__(34);
	
	var _About2 = _interopRequireDefault(_About);
	
	var _Subscribe = __webpack_require__(35);
	
	var _Subscribe2 = _interopRequireDefault(_Subscribe);
	
	var _NotFound = __webpack_require__(36);
	
	var _NotFound2 = _interopRequireDefault(_NotFound);
	
	var _Router = __webpack_require__(37);
	
	var _Router2 = _interopRequireDefault(_Router);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SiteController = function () {
	  function SiteController(options) {
	    var _this = this;
	
	    _classCallCheck(this, SiteController);
	
	    this.options = options;
	    console.log('SITE CONTROLLER');
	
	    this.splash = new _Splash2.default(this.options);
	    this.menu = new _Menu2.default(this.options);
	
	    this.options.menu = this.menu;
	
	    this.gallery = new _Gallery2.default(this.options);
	    this.about = new _About2.default(this.options);
	    this.subscribe = new _Subscribe2.default(this.options);
	    this.notfound = new _NotFound2.default(this.options);
	    this.subscribeTipTimeout = 0;
	
	    this.router = new _Router2.default();
	    this.router.addRoutes([['.', this.notfound], // catch all.
	    ['^/?$', this.splash], ['^/(instagram|feed|photostream)/?([a-zA-Z0-9-]+)?$', this.gallery], ['^/project/(the-night-sky|dusk-and-dawn|nature|deep-space)/?([a-zA-Z0-9-]+)?$', this.gallery], ['^/about$', this.about], ['^/subscribe$', this.subscribe]]);
	
	    $(this.menu).on('CHANGE_PAGE', function (e) {
	      return _this.handleChange(e);
	    });
	
	    $(window).scroll(function (e) {
	      return _this.handleScroll(e);
	    });
	    $(window).resize(function (e) {
	      return _this.handleResize(e);
	    });
	    $(window).on('popstate', function (e) {
	      return _this.handlePopSate(e);
	    });
	
	    this.route = this.router.route();
	    var isRoot = false;
	
	    if (this.route.matches.input === '/') {
	      isRoot = true;
	    }
	
	    this.menu.highlightNav(this.route.matches.input);
	    this.start(isRoot);
	  }
	
	  _createClass(SiteController, [{
	    key: 'start',
	    value: function start(root) {
	      var _this2 = this;
	
	      var pgload = this.route.initialize();
	      var psdone = this.splash.transitionIn(root);
	
	      Promise.all([pgload, psdone]).then(function () {
	        console.log('ALL DONE INIT!');
	        _this2.splash.transitionOut();
	        _this2.route.transitionIn('4s');
	
	        TweenMax.to($('div.spinner'), 0.75, { opacity: 0 });
	      });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      console.log(e);
	
	      // change the URL
	      history.pushState({}, '', e.slug);
	
	      this.doPageChange(this.router.route());
	    }
	  }, {
	    key: 'doPageChange',
	    value: function doPageChange(route) {
	      var _this3 = this;
	
	      this.menu.closeNav(true);
	      TweenMax.to($('div.spinner'), 0.3, { opacity: 1 });
	      console.log(this.route);
	
	      this.route.transitionOut().then(function () {
	        return route.initialize();
	      }).then(function () {
	        $(window).scrollTop(0);
	        _this3.route = route;
	        TweenMax.to($('div.spinner'), 0.75, { opacity: 0 });
	        _this3.route.transitionIn('4s');
	        ga('send', 'pageview', location.pathname);
	      });
	    }
	  }, {
	    key: 'handlePopSate',
	    value: function handlePopSate(e) {
	      console.log(e);
	      // check to see if the previous page was within another section.
	      /* if ( 'slug' in e.originalEvent.state ) {
	        const result = this.route.updateState(e.originalEvent.state);
	        if (!result) {
	          this.doPageChange(this.router.route());
	        }
	      } else { */
	      this.doPageChange(this.router.route());
	      // }
	    }
	  }, {
	    key: 'handleResize',
	    value: function handleResize() {}
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {}
	  }]);
	
	  return SiteController;
	}();
	
	exports.default = SiteController;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Cookie v2.1.3
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	;(function (factory) {
		var registeredInModuleLoader = false;
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			registeredInModuleLoader = true;
		}
		if (true) {
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}
	
		function init (converter) {
			function api (key, value, attributes) {
				var result;
				if (typeof document === 'undefined') {
					return;
				}
	
				// Write
	
				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);
	
					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}
	
					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}
	
					if (!converter.write) {
						value = encodeURIComponent(String(value))
							.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}
	
					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);
	
					return (document.cookie = [
						key, '=', value,
						attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
						attributes.path ? '; path=' + attributes.path : '',
						attributes.domain ? '; domain=' + attributes.domain : '',
						attributes.secure ? '; secure' : ''
					].join(''));
				}
	
				// Read
	
				if (!key) {
					result = {};
				}
	
				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;
	
				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');
	
					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}
	
					try {
						var name = parts[0].replace(rdecode, decodeURIComponent);
						cookie = converter.read ?
							converter.read(cookie, name) : converter(cookie, name) ||
							cookie.replace(rdecode, decodeURIComponent);
	
						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}
	
						if (key === name) {
							result = cookie;
							break;
						}
	
						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}
	
				return result;
			}
	
			api.set = api;
			api.get = function (key) {
				return api.call(api, key);
			};
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};
	
			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};
	
			api.withConverter = init;
	
			return api;
		}
	
		return init(function () {});
	}));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ismobilejs = __webpack_require__(5);
	
	var _ismobilejs2 = _interopRequireDefault(_ismobilejs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ESLint Global var declaration
	/* global TweenMax, Back */
	
	var Splash = function () {
	  function Splash() {
	    _classCallCheck(this, Splash);
	
	    this.logoOffset = 550;
	    this.logoAniDone = false;
	    console.log('SPLASH PAGE MANAGER');
	  }
	
	  _createClass(Splash, [{
	    key: 'transitionIn',
	    value: function transitionIn(isRoot) {
	
	      return new Promise(function (resolve) {
	
	        $('section.splash').removeClass('do-hide');
	        $('div.splash__copy').addClass('do-reveal');
	
	        if (isRoot) {
	
	          if (_ismobilejs2.default.any) {
	
	            $('.splash__video').empty();
	
	            var img = new Image();
	            img.src = '/static/img/splash_bg.jpg';
	
	            $(img).on('load', function () {
	              $('.splash__video').css('background-image', 'url(\'/static/img/splash_bg.jpg\')');
	              $('.splash__bg').addClass('is-active');
	            });
	          } else {
	            $('#splashVideo').get(0).play();
	            $('#splashVideo').on('playing', function () {
	              $('.splash__bg').addClass('is-active');
	            });
	          }
	
	          TweenMax.staggerTo($('div.splash__nav').children(), 2.0, { opacity: 1, y: 0, delay: 1.25, ease: Back.easeOut }, 0.05);
	          TweenMax.to($('div.splash__subnav'), 3.0, { opacity: 1, y: 0, delay: 2, ease: Back.easeOut });
	        } else {
	          setTimeout(function () {
	            resolve();
	          }, 2500);
	        }
	      });
	    }
	  }, {
	    key: 'initialize',
	    value: function initialize() {
	      return new Promise(function (resolve) {
	        resolve();
	      });
	    }
	  }, {
	    key: 'animateLogo',
	    value: function animateLogo() {
	      var _this = this;
	
	      if (this.logoOffset > 0) {
	        $('.logo_path').css('stroke-dashoffset', this.logoOffset);
	        this.logoOffset -= 2;
	        requestAnimationFrame(function () {
	          _this.animateLogo();
	        });
	      } else {
	        this.logoAniDone = true;
	      }
	    }
	  }, {
	    key: 'transitionOut',
	    value: function transitionOut() {
	
	      return new Promise(function (resolve) {
	
	        setTimeout(function () {
	          $('section.splash').off('transitionend');
	
	          if (!_ismobilejs2.default.any) {
	            $('#splashVideo').get(0).pause();
	          }
	
	          $('div.splash__copy').removeClass('do-hide do-reveal');
	          resolve();
	        }, 1500);
	
	        $('div.splash__copy').addClass('do-hide');
	
	        setTimeout(function () {
	          $('section.splash').addClass('do-hide');
	        }, 500);
	
	        TweenMax.staggerTo($('div.splash__nav').children(), 1.0, { opacity: 0, y: 20, ease: Back.easeIn }, -0.025);
	        TweenMax.to($('div.splash__subnav'), 2.0, { opacity: 0, y: 20, delay: 0.5, ease: Back.easeIn });
	      });
	    }
	  }]);
	
	  return Splash;
	}();
	
	exports.default = Splash;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * isMobile.js v0.4.0
	 *
	 * A simple library to detect Apple phones and tablets,
	 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
	 * and any kind of seven inch device, via user agent sniffing.
	 *
	 * @author: Kai Mallea (kmallea@gmail.com)
	 *
	 * @license: http://creativecommons.org/publicdomain/zero/1.0/
	 */
	(function (global) {
	
	    var apple_phone         = /iPhone/i,
	        apple_ipod          = /iPod/i,
	        apple_tablet        = /iPad/i,
	        android_phone       = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, // Match 'Android' AND 'Mobile'
	        android_tablet      = /Android/i,
	        amazon_phone        = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
	        amazon_tablet       = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
	        windows_phone       = /IEMobile/i,
	        windows_tablet      = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, // Match 'Windows' AND 'ARM'
	        other_blackberry    = /BlackBerry/i,
	        other_blackberry_10 = /BB10/i,
	        other_opera         = /Opera Mini/i,
	        other_chrome        = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
	        other_firefox       = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, // Match 'Firefox' AND 'Mobile'
	        seven_inch = new RegExp(
	            '(?:' +         // Non-capturing group
	
	            'Nexus 7' +     // Nexus 7
	
	            '|' +           // OR
	
	            'BNTV250' +     // B&N Nook Tablet 7 inch
	
	            '|' +           // OR
	
	            'Kindle Fire' + // Kindle Fire
	
	            '|' +           // OR
	
	            'Silk' +        // Kindle Fire, Silk Accelerated
	
	            '|' +           // OR
	
	            'GT-P1000' +    // Galaxy Tab 7 inch
	
	            ')',            // End non-capturing group
	
	            'i');           // Case-insensitive matching
	
	    var match = function(regex, userAgent) {
	        return regex.test(userAgent);
	    };
	
	    var IsMobileClass = function(userAgent) {
	        var ua = userAgent || navigator.userAgent;
	
	        // Facebook mobile app's integrated browser adds a bunch of strings that
	        // match everything. Strip it out if it exists.
	        var tmp = ua.split('[FBAN');
	        if (typeof tmp[1] !== 'undefined') {
	            ua = tmp[0];
	        }
	
	        // Twitter mobile app's integrated browser on iPad adds a "Twitter for
	        // iPhone" string. Same probable happens on other tablet platforms.
	        // This will confuse detection so strip it out if it exists.
	        tmp = ua.split('Twitter');
	        if (typeof tmp[1] !== 'undefined') {
	            ua = tmp[0];
	        }
	
	        this.apple = {
	            phone:  match(apple_phone, ua),
	            ipod:   match(apple_ipod, ua),
	            tablet: !match(apple_phone, ua) && match(apple_tablet, ua),
	            device: match(apple_phone, ua) || match(apple_ipod, ua) || match(apple_tablet, ua)
	        };
	        this.amazon = {
	            phone:  match(amazon_phone, ua),
	            tablet: !match(amazon_phone, ua) && match(amazon_tablet, ua),
	            device: match(amazon_phone, ua) || match(amazon_tablet, ua)
	        };
	        this.android = {
	            phone:  match(amazon_phone, ua) || match(android_phone, ua),
	            tablet: !match(amazon_phone, ua) && !match(android_phone, ua) && (match(amazon_tablet, ua) || match(android_tablet, ua)),
	            device: match(amazon_phone, ua) || match(amazon_tablet, ua) || match(android_phone, ua) || match(android_tablet, ua)
	        };
	        this.windows = {
	            phone:  match(windows_phone, ua),
	            tablet: match(windows_tablet, ua),
	            device: match(windows_phone, ua) || match(windows_tablet, ua)
	        };
	        this.other = {
	            blackberry:   match(other_blackberry, ua),
	            blackberry10: match(other_blackberry_10, ua),
	            opera:        match(other_opera, ua),
	            firefox:      match(other_firefox, ua),
	            chrome:       match(other_chrome, ua),
	            device:       match(other_blackberry, ua) || match(other_blackberry_10, ua) || match(other_opera, ua) || match(other_firefox, ua) || match(other_chrome, ua)
	        };
	        this.seven_inch = match(seven_inch, ua);
	        this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch;
	
	        // excludes 'other' devices and ipods, targeting touchscreen phones
	        this.phone = this.apple.phone || this.android.phone || this.windows.phone;
	
	        // excludes 7 inch devices, classifying as phone or tablet is left to the user
	        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet;
	
	        if (typeof window === 'undefined') {
	            return this;
	        }
	    };
	
	    var instantiate = function() {
	        var IM = new IsMobileClass();
	        IM.Class = IsMobileClass;
	        return IM;
	    };
	
	    if (typeof module !== 'undefined' && module.exports && typeof window === 'undefined') {
	        //node
	        module.exports = IsMobileClass;
	    } else if (typeof module !== 'undefined' && module.exports && typeof window !== 'undefined') {
	        //browserify
	        module.exports = instantiate();
	    } else if (true) {
	        //AMD
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (global.isMobile = instantiate()), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        global.isMobile = instantiate();
	    }
	
	})(this);


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ESLint Global var declaration
	/* global TweenMax, Back */
	
	var Menu = function () {
	  function Menu() {
	    var _this = this;
	
	    _classCallCheck(this, Menu);
	
	    console.log('MENU CONTROLLER');
	
	    this.buttonsVisible = true;
	
	    $(document).on('TOGGLE_CONTROLS', function () {
	      _this.toggleButtons();
	    });
	
	    // general events
	    $('.btn.btn__menu').click(function () {
	
	      if ($('.burger__icon').hasClass('is-open')) {
	        _this.closeNav();
	      } else {
	        _this.openNav();
	      }
	    });
	
	    $('.navlink').click(function (e) {
	      e.preventDefault();
	
	      var slug = $(e.currentTarget).attr('href');
	      // console.log(`CHANGING TO: ${slug}` );
	
	      $(_this).trigger($.Event('CHANGE_PAGE', { slug: slug }));
	      _this.highlightNav(slug);
	    });
	  }
	
	  _createClass(Menu, [{
	    key: 'highlightNav',
	    value: function highlightNav(slug) {
	
	      console.log("HI:", slug);
	
	      $('.txtbtn').removeClass('is-active');
	
	      switch (slug) {
	        case '/photostream':
	          $('.txtbtn:eq(0)').addClass('is-active');
	          break;
	        case '/project/the-night-sky':
	          $('.txtbtn:eq(1)').addClass('is-active');
	          break;
	        case '/project/deep-space':
	          $('.txtbtn:eq(2)').addClass('is-active');
	          break;
	        case '/project/dusk-and-dawn':
	          $('.txtbtn:eq(3)').addClass('is-active');
	          break;
	        case '/project/nature':
	          $('.txtbtn:eq(4)').addClass('is-active');
	          break;
	        case '/about':
	          $('.txtbtn:eq(5)').addClass('is-active');
	          break;
	        case '/subscribe':
	          $('.txtbtn:eq(6)').addClass('is-active');
	          break;
	        default:
	          break;
	      }
	    }
	  }, {
	    key: 'toggleButtons',
	    value: function toggleButtons() {
	      if (!this.buttonsVisible) {
	        this.buttonsVisible = true;
	        $('.click-hide').removeClass('is-hidden');
	      } else {
	        this.buttonsVisible = false;
	        $('.click-hide').addClass('is-hidden');
	        $('.tip').removeClass('is-visible');
	      }
	    }
	  }, {
	    key: 'openNav',
	    value: function openNav() {
	      $('.burger__icon').addClass('is-open');
	      TweenMax.killAll();
	      TweenMax.staggerTo($('nav div.projects').children(), 0.86, { opacity: 1, x: 0, ease: Back.easeOut }, 0.025);
	      TweenMax.staggerTo($('nav div.subnav').children(), 0.86, { opacity: 1, x: 0, delay: 0.25, ease: Back.easeOut }, 0.025);
	      $('nav').addClass('is-open');
	
	      $(document).trigger('MENU_OPEN');
	    }
	  }, {
	    key: 'closeNav',
	    value: function closeNav() {
	      var isChanging = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	
	      $('.menu_tip').removeClass('is-visible');
	
	      $('.burger__icon').removeClass('is-open');
	      TweenMax.killAll();
	      TweenMax.staggerTo($('nav div.projects').children(), 0.5, { opacity: 0, x: -40, ease: Back.easeIn }, 0.02);
	      TweenMax.staggerTo($('nav div.subnav').children(), 0.5, { opacity: 0, x: -40, delay: 0.25, ease: Back.easeIn }, 0.02);
	      $('nav').removeClass('is-open');
	
	      /*if (!isChanging) {
	        $(document).trigger('MENU_CLOSED');
	      }*/
	      $(document).trigger('MENU_CLOSED');
	    }
	  }, {
	    key: 'handleResize',
	    value: function handleResize() {}
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {}
	  }]);
	
	  return Menu;
	}();
	
	exports.default = Menu;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _flickity = __webpack_require__(8);
	
	var _flickity2 = _interopRequireDefault(_flickity);
	
	var _packery = __webpack_require__(26);
	
	var _packery2 = _interopRequireDefault(_packery);
	
	var _imagesloaded = __webpack_require__(32);
	
	var _imagesloaded2 = _interopRequireDefault(_imagesloaded);
	
	var _jsCookie = __webpack_require__(3);
	
	var _jsCookie2 = _interopRequireDefault(_jsCookie);
	
	var _ismobilejs = __webpack_require__(5);
	
	var _ismobilejs2 = _interopRequireDefault(_ismobilejs);
	
	var _GalleryData = __webpack_require__(33);
	
	var _GalleryData2 = _interopRequireDefault(_GalleryData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ESLint Global var declaration
	/* global TweenMax, Back */
	
	var Gallery = function () {
	  function Gallery() {
	    var _this = this;
	
	    _classCallCheck(this, Gallery);
	
	    console.log('GALLERY MANAGER');
	
	    this.maxImages = 0; // the image count in the gallery loaded
	    this.photos = {}; // the array of photos in the gallery loaded
	    this.maxPreload = 2; // the number of images in the gallery that should be loaded before the gallery is ready for viewing
	    this.imgLoadCount = 0; // the number of images loaded.
	    this.loadTriggered = false; // only load the slide show images once.
	    this.loadComplete = false; // when the images are all done loading make this true
	
	    this.mousedOver = true;
	    this.mDeg = 0;
	    this.cell = undefined;
	    this.thumbsLoaded = false;
	
	    this.initialIndex = 0;
	    this.initialPhotoSlug = '';
	
	    this.hasData = false;
	
	    this.gd = new _GalleryData2.default(); // load the gallery data module
	
	    $('.btn.btn__gallery.btn--next').click(function () {
	      return _this.nextPhoto();
	    });
	    $('.btn.btn__gallery.btn--prev').click(function () {
	      return _this.prevPhoto();
	    });
	    $('.btn.btn__thumbs').click(function () {
	      return _this.openThumbs();
	    });
	    $('.gallery .btn--close').click(function () {
	      console.log('BUTTON CLOSE');_this.closeSlideShow();
	    });
	
	    /* $('.gallery__intro').click( () => {
	      $('.gallery__intro').removeClass('is-active');
	    }); */
	
	    $(document).on('MENU_OPEN', function () {
	      console.log($('section.gallery:visible'));
	      if ($('section.gallery:visible')) {
	        $('.btn--fade').addClass('is-faded');
	      }
	    });
	
	    $(document).on('MENU_CLOSED', function () {
	      if ($('section.gallery:visible')) {
	        $('.btn--fade').removeClass('is-faded');
	      }
	    });
	    // $(window).resize( (e) => this.handleResize(e)  );
	  }
	
	  _createClass(Gallery, [{
	    key: 'transitionIn',
	    value: function transitionIn(speed) {
	
	      return new Promise(function (resolve) {
	
	        $('section.gallery__thumbs').on('transitionend', function (e) {
	          $('section.gallery__thumbs').off('transitionend');
	          console.log('DONE GALLERY TRAN IN!!', e.currentTarget);
	          resolve();
	        });
	
	        /*if (this.initialIndex > 0 ) {
	          this.flkty.select( this.initialIndex, false, true );
	        }
	         if ( Cookies.get(`intro_${this.slug}`) === undefined && this.slug !== 'instagram' ) {
	          setTimeout( () => {
	            $('.gallery__intro').addClass('is-active');
	          }, 500);
	           Cookies.set(`intro_${this.slug}`, '1', { expires: 30 });
	        }*/
	
	        $('section.gallery__thumbs').css('transition-duration', speed);
	        $('section.gallery__thumbs').addClass('is-active');
	
	        $('.btn--fade').css('opacity', '');
	        $('.btn--fade').addClass('is-active');
	
	        $('section.branding,a.logo').css('position', 'fixed');
	      });
	    }
	  }, {
	    key: 'transitionOut',
	    value: function transitionOut() {
	      var _this2 = this;
	
	      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1s';
	
	
	      return new Promise(function (resolve) {
	
	        $('section.gallery__thumbs').on('transitionend', function () {
	          $('section.gallery__thumbs').off('transitionend');
	          _this2.thumbsLoaded = false;
	          console.log('DONE GALLERY TRAN OUT!!');
	          resolve();
	        });
	
	        /*  if (this.thumbsLoaded) {
	            console.log('TRAN OUT');
	            this.closeThumbs();
	          } */
	
	        $('section.gallery__thumbs').css('transition-duration', speed);
	        $('section.gallery__thumbs').removeClass('is-active');
	        //$('.gallery__intro').removeClass('is-active');
	
	        $('.btn--fade').removeClass('is-active');
	        $('a.btn__signup').addClass('is-notvisible');
	
	        $('section.branding,a.logo').css('position', '');
	      });
	    }
	  }, {
	    key: 'initialize',
	    value: function initialize(idata) {
	
	      if (idata.matches[0] === '/') {
	        this.slug = 'instagram';
	      } else {
	        this.slug = idata.matches[1];
	      }
	
	      if (idata.matches[2] !== undefined) {
	        this.initialPhotoSlug = idata.matches[2];
	      }
	
	      return this.loadGallery(this.slug);
	    }
	  }, {
	    key: 'updateState',
	    value: function updateState(udata) {
	
	      if (udata.slug === this.slug) {
	        this.flkty.select(udata.index);
	        return true;
	      }
	
	      return false;
	    }
	  }, {
	    key: 'openThumbs',
	    value: function openThumbs() {
	      var _this3 = this;
	
	      console.log('OPENING THUMBS');
	      $('.gallery__thumbs').addClass('is-active');
	      $('.gallery__thumbs__grid').css('display', 'block');
	      $('.gallery__thumbs').height('auto');
	
	      if (!this.thumbsLoaded) {
	
	        TweenMax.to($('div.spinner'), 0.3, { opacity: 1 });
	
	        var _loop = function _loop(i) {
	          var imgURL = _this3.photos[i].images.s.url;
	          $('div.gallery__thumb:eq(' + i + ')').css('background-image', 'url(\'' + imgURL + '\')');
	          $('div.gallery__thumb:eq(' + i + ')>img').attr('src', imgURL);
	          $('div.gallery__thumb:eq(' + i + ')').data('index', i);
	
	          $('div.gallery__thumb:eq(' + i + ')').on('click', function () {
	            var fi = i;
	            _this3.flkty.select(fi, false, true);
	            console.log('CLOSE THUMBS FLICK');
	            _this3.closeThumbs();
	          });
	
	          /*if ( this.photos[i].images.orig.h * 1.75 < this.photos[i].images.orig.w ) {
	            $(`div.gallery__thumb:eq(${i})`).addClass('gallery__thumb--width2');
	          }*/
	        };
	
	        for (var i = 0; i < this.maxImages; i += 1) {
	          _loop(i);
	        }
	
	        $('.gallery__thumbs__grid').imagesLoaded(function () {
	          // init Packery after all images have loaded
	          _this3.pckry = new _packery2.default('.gallery__thumbs__grid', {
	            itemSelector: '.gallery__thumb',
	            percentPosition: true
	          });
	
	          console.log('THUBMS LOADED!');
	
	          _this3.thumbsLoaded = true;
	
	          $('.gallery__thumbs__grid').addClass('is-active');
	
	          TweenMax.to($('div.spinner'), 0.3, { opacity: 0 });
	        });
	      } else {
	        this.pckry.layout();
	        $('.gallery__thumbs__grid').addClass('is-active');
	      }
	    }
	  }, {
	    key: 'closeThumbs',
	    value: function closeThumbs() {
	
	      $('.gallery__thumbs').on('transitionend', function (e) {
	
	        if ($(e.target).hasClass('gallery__thumbs')) {
	          $('.gallery__thumbs').off();
	          $('.gallery__thumbs__grid').css('display', 'none');
	          $('.gallery__thumbs').css('height', '');
	          $('div.gallery__thumb').removeClass('is-loaded');
	        }
	      });
	
	      if ($('.gallery__thumbs').hasClass('is-active')) {
	        $('.gallery__thumbs').removeClass('is-active');
	        $('.gallery__thumbs__grid').removeClass('is-active');
	      } else {
	        $('.gallery__thumbs').off();
	      }
	    }
	  }, {
	    key: 'openSlideShow',
	    value: function openSlideShow(fi) {
	      var _this4 = this;
	
	      console.log('OPENING SLIDE SHOW', fi);
	
	      this.loadImages(fi);
	
	      $('section.gallery').addClass('is-active');
	      TweenMax.to($('div.spinner'), 0.75, { opacity: 1 });
	
	      if (this.loadComplete || this.loadTriggered) {
	        $('.gallery__slides').addClass('is-active');
	        TweenMax.to($('div.spinner'), 0.35, { opacity: 0 });
	      } else {
	        $(this).on('firstLoaded', function () {
	          console.log('FIRST LOADED');
	          $('.gallery__slides').addClass('is-active');
	          TweenMax.to($('div.spinner'), 0.35, { opacity: 0 });
	          $(_this4).off('firstLoaded');
	        });
	      }
	    }
	  }, {
	    key: 'closeSlideShow',
	    value: function closeSlideShow() {
	      if ($('section.gallery').hasClass('is-active')) {
	        $('section.gallery').removeClass('is-active');
	        //this.loadTriggered = false;
	      }
	    }
	  }, {
	    key: 'nextPhoto',
	    value: function nextPhoto() {
	      if (this.flkty) {
	        this.flkty.next(true);
	      }
	    }
	  }, {
	    key: 'prevPhoto',
	    value: function prevPhoto() {
	      if (this.flkty) {
	        this.flkty.previous(true);
	      }
	    }
	  }, {
	    key: 'loadGallery',
	    value: function loadGallery(slug) {
	      var _this5 = this;
	
	      /*return new Promise( (resolve) => {
	        this.gd.load(slug)
	          .then( data => this.populateSlides(data) )
	          .then( () => {
	            console.log('POP DONE');
	            resolve();
	          });
	      });*/
	
	      return new Promise(function (resolve) {
	        _this5.gd.load(slug).then(function (data) {
	          return _this5.populateSlides(data);
	        }).then(function () {
	          console.log('POP DONE');
	          resolve();
	        });
	      });
	    }
	  }, {
	    key: 'populateSlides',
	    value: function populateSlides(data) {
	      var _this6 = this;
	
	      console.log('POPULATING DATA');
	
	      return new Promise(function (resolve) {
	
	        _this6.maxImages = data.photo_count;
	        _this6.photos = data.photos;
	
	        if (_this6.hasData) {
	          _this6.flkty.destroy();
	          delete _this6.flkty;
	
	          $('#gallery__slides').empty();
	          $('#gallery__thumbs').empty();
	        }
	
	        $('.gallery__thumbs__copy>h2').text(data.name);
	        $('.gallery__thumbs__copy>p').html(data.description);
	
	        var _loop2 = function _loop2(i) {
	          var index = i;
	          var newDiv = $('<div class="gallery__slide"><div></div><span class="gallery__slide__copy"><h3></h3><em></em></span></div>');
	          $('#gallery__slides').append(newDiv);
	
	          if (_ismobilejs2.default.any) {
	            newDiv.click(function () {
	              $(document).trigger('TOGGLE_CONTROLS', [index]);
	            });
	          }
	
	          var newThumb = $('<div class="gallery__thumb"><div></div></div>');
	          $('#gallery__thumbs').append(newThumb);
	        };
	
	        for (var i = 0; i < _this6.maxImages; i += 1) {
	          _loop2(i);
	        }
	
	        _this6.flkty = new _flickity2.default('#gallery__slides', {
	          cellAlign: 'center',
	          wrapAround: true,
	          pageDots: false,
	          arrowShape: { x0: 0, x1: 40, y1: 50, x2: 45, y2: 50, x3: 5 },
	          accessibility: false,
	          setGallerySize: false,
	          prevNextButtons: false,
	          selectedAttraction: 0.02,
	          friction: 0.38
	        });
	
	        _this6.flkty.on('settle', function () {
	          if (_this6.slug !== 'featured') {
	            // history.pushState({ slug:this.slug, index:this.flkty.selectedIndex }, '', `/project/${this.slug}/${this.photos[this.flkty.selectedIndex].slug}` );
	          }
	        });
	
	        _this6.flkty.on('select', function () {
	
	          //$('.gallery__slide').css('opacity', '0');
	          //$(`.gallery__slide:eq(${this.flkty.selectedIndex})`).css('opacity', '1');
	
	          _this6.lastSelectedIndex = _this6.flkty.selectedIndex;
	        });
	
	        // make sure the first image is visible
	        // $('.gallery__slide').css('opacity', '0');
	        // $(`.gallery__slide:eq(${this.flkty.selectedIndex})`).css('opacity', '1');
	        _this6.lastSelectedIndex = 0;
	
	        if (_this6.initialPhotoSlug !== '') {
	          _this6.initialIndex = _this6.photos.findIndex(function (element) {
	            return element.slug === _this6.initialPhotoSlug;
	          });
	        }
	
	        /* this.loadImages(0);
	         $(this).on('firstLoaded', () => resolve() ); */
	
	        _this6.hasData = true;
	        _this6.populateThumbs();
	        _this6.loadThumbs(0);
	
	        // init Packery after all images have loaded
	        _this6.pckry = new _packery2.default('.gallery__thumbs__grid', {
	          itemSelector: '.gallery__thumb',
	          percentPosition: true
	        });
	
	        $('.gallery__thumbs__grid').addClass('is-active');
	        _this6.thumbsLoaded = true;
	        TweenMax.to($('div.spinner'), 0.3, { opacity: 0 });
	
	        resolve();
	      });
	    }
	  }, {
	    key: 'populateThumbs',
	    value: function populateThumbs() {
	      var _this7 = this;
	
	      var _loop3 = function _loop3(i) {
	        if (_this7.photos[i].images.orig.h * 1.75 < _this7.photos[i].images.orig.w) {
	          $('div.gallery__thumb:eq(' + i + ')').addClass('gallery__thumb--width2');
	        }
	
	        if (_this7.photos[i].images.orig.w < _this7.photos[i].images.orig.h) {
	          $('div.gallery__thumb:eq(' + i + ')').addClass('gallery__thumb--height2');
	        }
	
	        if ($(window).width() > 760) {
	          $('div.gallery__thumb:eq(' + i + ')').on('click', function () {
	            var fi = i;
	            _this7.flkty.select(fi, false, true);
	            console.log('CLOSE THUMBS FLICK');
	
	            _this7.openSlideShow(fi);
	          });
	        }
	      };
	
	      for (var i = 0; i < this.maxImages; i++) {
	        _loop3(i);
	      }
	    }
	  }, {
	    key: 'loadThumbs',
	    value: function loadThumbs(i) {
	      var _this8 = this;
	
	      if (i >= this.maxImages) {
	        return;
	      }
	
	      var imgURL = this.photos[i].images.s.url;
	
	      var img = new Image();
	      img.src = imgURL;
	
	      $(img).on('load', function () {
	        console.log("THUMB", i, "LOADED");
	        $('div.gallery__thumb:eq(' + i + ')>div').addClass('is-active');
	        $('div.gallery__thumb:eq(' + i + ')>div').css('background-image', 'url(\'' + imgURL + '\')');
	        $('div.gallery__thumb:eq(' + i + ')').data('index', i);
	        _this8.loadThumbs(i + 1);
	      });
	    }
	  }, {
	    key: 'loadImages',
	    value: function loadImages(index) {
	      var _this9 = this;
	
	      var curIndex = index;
	      var img = new Image();
	
	      $(img).on('load', function () {
	        _this9.imgLoadCount += 1;
	        _this9.photos[index].loaded = true;
	
	        var imgURL = _this9.selectSize(_this9.photos[index]).url;
	        // console.log('LOADED: ' + imgURL, index, 'url(\'' + imgURL + '\');' );
	
	        $('div.gallery__slide:eq(' + index + ')>div').css('background-image', 'url(\'' + imgURL + '\')');
	        $('div.gallery__slide:eq(' + index + ')>span>h3').text(_this9.photos[index].title);
	        $('div.gallery__slide:eq(' + index + ')>span>em').text(_this9.photos[index].season);
	
	        if (_this9.imgLoadCount >= _this9.maxPreload - 1 && !_this9.loadTriggered) {
	          $(_this9).trigger('firstLoaded');
	          _this9.loadTriggered = true;
	        }
	
	        curIndex += 1;
	        if (curIndex < _this9.maxImages) {
	          _this9.loadImages(curIndex);
	        } else {
	          _this9.loadImages(0);
	        }
	      });
	
	      if (!this.photos[index].loaded) {
	        img.src = this.selectSize(this.photos[index]).url;
	      } else if (this.imgLoadCount === this.maxImages - 1) {
	        this.loadComplete = true;
	      }
	    }
	  }, {
	    key: 'selectSize',
	    value: function selectSize(image) {
	      var imageData = {};
	
	      if ($(window).width > 768) {
	        imageData = {
	          url: image.images.l.url
	        };
	      } else {
	        imageData = {
	          url: image.images.m.url
	        };
	      }
	
	      return imageData;
	    }
	  }, {
	    key: 'setupInputParallax',
	    value: function setupInputParallax() {
	      var _this10 = this;
	
	      this.cell.mousemove(function (e) {
	        _this10.mDeg = 3 * (e.pageX / _this10.cell.outerWidth()) - 1.5;
	      });
	
	      this.cell.mouseover(function () {
	        _this10.mousedOver = true;
	        window.requestAnimationFrame(function () {
	          _this10.updateUI();
	        });
	      });
	
	      this.cell.mouseout(function () {
	        _this10.mousedOver = false;
	      });
	    }
	  }, {
	    key: 'removeInputParallax',
	    value: function removeInputParallax() {
	      this.cell.off('mousemove');
	      this.cell.off('mouseover');
	      this.cell.off('mouseout');
	    }
	  }, {
	    key: 'updateUI',
	    value: function updateUI() {
	      var _this11 = this;
	
	      if (this.mousedOver) {
	        window.requestAnimationFrame(function () {
	          _this11.updateUI();
	        });
	        this.cell.css('transform', 'rotateY(' + this.mDeg + 'deg)');
	      }
	    }
	  }, {
	    key: 'handleResize',
	    value: function handleResize() {}
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {}
	  }]);
	
	  return Gallery;
	}();
	
	exports.default = Gallery;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Flickity v2.0.5
	 * Touch, responsive, flickable carousels
	 *
	 * Licensed GPLv3 for open source use
	 * or Flickity Commercial License for commercial use
	 *
	 * http://flickity.metafizzy.co
	 * Copyright 2016 Metafizzy
	 */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(9),
	      __webpack_require__(17),
	      __webpack_require__(20),
	      __webpack_require__(22),
	      __webpack_require__(23),
	      __webpack_require__(24),
	      __webpack_require__(25)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('./flickity'),
	      require('./drag'),
	      require('./prev-next-button'),
	      require('./page-dots'),
	      require('./player'),
	      require('./add-remove-cell'),
	      require('./lazyload')
	    );
	  }
	
	})( window, function factory( Flickity ) {
	  /*jshint strict: false*/
	  return Flickity;
	});


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity main
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(10),
	      __webpack_require__(11),
	      __webpack_require__(12),
	      __webpack_require__(14),
	      __webpack_require__(15),
	      __webpack_require__(16)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter, getSize, utils, Cell, Slide, animatePrototype ) {
	      return factory( window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('ev-emitter'),
	      require('get-size'),
	      require('fizzy-ui-utils'),
	      require('./cell'),
	      require('./slide'),
	      require('./animate')
	    );
	  } else {
	    // browser global
	    var _Flickity = window.Flickity;
	
	    window.Flickity = factory(
	      window,
	      window.EvEmitter,
	      window.getSize,
	      window.fizzyUIUtils,
	      _Flickity.Cell,
	      _Flickity.Slide,
	      _Flickity.animatePrototype
	    );
	  }
	
	}( window, function factory( window, EvEmitter, getSize,
	  utils, Cell, Slide, animatePrototype ) {
	
	'use strict';
	
	// vars
	var jQuery = window.jQuery;
	var getComputedStyle = window.getComputedStyle;
	var console = window.console;
	
	function moveElements( elems, toElem ) {
	  elems = utils.makeArray( elems );
	  while ( elems.length ) {
	    toElem.appendChild( elems.shift() );
	  }
	}
	
	// -------------------------- Flickity -------------------------- //
	
	// globally unique identifiers
	var GUID = 0;
	// internal store of all Flickity intances
	var instances = {};
	
	function Flickity( element, options ) {
	  var queryElement = utils.getQueryElement( element );
	  if ( !queryElement ) {
	    if ( console ) {
	      console.error( 'Bad element for Flickity: ' + ( queryElement || element ) );
	    }
	    return;
	  }
	  this.element = queryElement;
	  // do not initialize twice on same element
	  if ( this.element.flickityGUID ) {
	    var instance = instances[ this.element.flickityGUID ];
	    instance.option( options );
	    return instance;
	  }
	
	  // add jQuery
	  if ( jQuery ) {
	    this.$element = jQuery( this.element );
	  }
	  // options
	  this.options = utils.extend( {}, this.constructor.defaults );
	  this.option( options );
	
	  // kick things off
	  this._create();
	}
	
	Flickity.defaults = {
	  accessibility: true,
	  // adaptiveHeight: false,
	  cellAlign: 'center',
	  // cellSelector: undefined,
	  // contain: false,
	  freeScrollFriction: 0.075, // friction when free-scrolling
	  friction: 0.28, // friction when selecting
	  namespaceJQueryEvents: true,
	  // initialIndex: 0,
	  percentPosition: true,
	  resize: true,
	  selectedAttraction: 0.025,
	  setGallerySize: true
	  // watchCSS: false,
	  // wrapAround: false
	};
	
	// hash of methods triggered on _create()
	Flickity.createMethods = [];
	
	var proto = Flickity.prototype;
	// inherit EventEmitter
	utils.extend( proto, EvEmitter.prototype );
	
	proto._create = function() {
	  // add id for Flickity.data
	  var id = this.guid = ++GUID;
	  this.element.flickityGUID = id; // expando
	  instances[ id ] = this; // associate via id
	  // initial properties
	  this.selectedIndex = 0;
	  // how many frames slider has been in same position
	  this.restingFrames = 0;
	  // initial physics properties
	  this.x = 0;
	  this.velocity = 0;
	  this.originSide = this.options.rightToLeft ? 'right' : 'left';
	  // create viewport & slider
	  this.viewport = document.createElement('div');
	  this.viewport.className = 'flickity-viewport';
	  this._createSlider();
	
	  if ( this.options.resize || this.options.watchCSS ) {
	    window.addEventListener( 'resize', this );
	  }
	
	  Flickity.createMethods.forEach( function( method ) {
	    this[ method ]();
	  }, this );
	
	  if ( this.options.watchCSS ) {
	    this.watchCSS();
	  } else {
	    this.activate();
	  }
	
	};
	
	/**
	 * set options
	 * @param {Object} opts
	 */
	proto.option = function( opts ) {
	  utils.extend( this.options, opts );
	};
	
	proto.activate = function() {
	  if ( this.isActive ) {
	    return;
	  }
	  this.isActive = true;
	  this.element.classList.add('flickity-enabled');
	  if ( this.options.rightToLeft ) {
	    this.element.classList.add('flickity-rtl');
	  }
	
	  this.getSize();
	  // move initial cell elements so they can be loaded as cells
	  var cellElems = this._filterFindCellElements( this.element.children );
	  moveElements( cellElems, this.slider );
	  this.viewport.appendChild( this.slider );
	  this.element.appendChild( this.viewport );
	  // get cells from children
	  this.reloadCells();
	
	  if ( this.options.accessibility ) {
	    // allow element to focusable
	    this.element.tabIndex = 0;
	    // listen for key presses
	    this.element.addEventListener( 'keydown', this );
	  }
	
	  this.emitEvent('activate');
	
	  var index;
	  var initialIndex = this.options.initialIndex;
	  if ( this.isInitActivated ) {
	    index = this.selectedIndex;
	  } else if ( initialIndex !== undefined ) {
	    index = this.cells[ initialIndex ] ? initialIndex : 0;
	  } else {
	    index = 0;
	  }
	  // select instantly
	  this.select( index, false, true );
	  // flag for initial activation, for using initialIndex
	  this.isInitActivated = true;
	};
	
	// slider positions the cells
	proto._createSlider = function() {
	  // slider element does all the positioning
	  var slider = document.createElement('div');
	  slider.className = 'flickity-slider';
	  slider.style[ this.originSide ] = 0;
	  this.slider = slider;
	};
	
	proto._filterFindCellElements = function( elems ) {
	  return utils.filterFindElements( elems, this.options.cellSelector );
	};
	
	// goes through all children
	proto.reloadCells = function() {
	  // collection of item elements
	  this.cells = this._makeCells( this.slider.children );
	  this.positionCells();
	  this._getWrapShiftCells();
	  this.setGallerySize();
	};
	
	/**
	 * turn elements into Flickity.Cells
	 * @param {Array or NodeList or HTMLElement} elems
	 * @returns {Array} items - collection of new Flickity Cells
	 */
	proto._makeCells = function( elems ) {
	  var cellElems = this._filterFindCellElements( elems );
	
	  // create new Flickity for collection
	  var cells = cellElems.map( function( cellElem ) {
	    return new Cell( cellElem, this );
	  }, this );
	
	  return cells;
	};
	
	proto.getLastCell = function() {
	  return this.cells[ this.cells.length - 1 ];
	};
	
	proto.getLastSlide = function() {
	  return this.slides[ this.slides.length - 1 ];
	};
	
	// positions all cells
	proto.positionCells = function() {
	  // size all cells
	  this._sizeCells( this.cells );
	  // position all cells
	  this._positionCells( 0 );
	};
	
	/**
	 * position certain cells
	 * @param {Integer} index - which cell to start with
	 */
	proto._positionCells = function( index ) {
	  index = index || 0;
	  // also measure maxCellHeight
	  // start 0 if positioning all cells
	  this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
	  var cellX = 0;
	  // get cellX
	  if ( index > 0 ) {
	    var startCell = this.cells[ index - 1 ];
	    cellX = startCell.x + startCell.size.outerWidth;
	  }
	  var len = this.cells.length;
	  for ( var i=index; i < len; i++ ) {
	    var cell = this.cells[i];
	    cell.setPosition( cellX );
	    cellX += cell.size.outerWidth;
	    this.maxCellHeight = Math.max( cell.size.outerHeight, this.maxCellHeight );
	  }
	  // keep track of cellX for wrap-around
	  this.slideableWidth = cellX;
	  // slides
	  this.updateSlides();
	  // contain slides target
	  this._containSlides();
	  // update slidesWidth
	  this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
	};
	
	/**
	 * cell.getSize() on multiple cells
	 * @param {Array} cells
	 */
	proto._sizeCells = function( cells ) {
	  cells.forEach( function( cell ) {
	    cell.getSize();
	  });
	};
	
	// --------------------------  -------------------------- //
	
	proto.updateSlides = function() {
	  this.slides = [];
	  if ( !this.cells.length ) {
	    return;
	  }
	
	  var slide = new Slide( this );
	  this.slides.push( slide );
	  var isOriginLeft = this.originSide == 'left';
	  var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';
	
	  var canCellFit = this._getCanCellFit();
	
	  this.cells.forEach( function( cell, i ) {
	    // just add cell if first cell in slide
	    if ( !slide.cells.length ) {
	      slide.addCell( cell );
	      return;
	    }
	
	    var slideWidth = ( slide.outerWidth - slide.firstMargin ) +
	      ( cell.size.outerWidth - cell.size[ nextMargin ] );
	
	    if ( canCellFit.call( this, i, slideWidth ) ) {
	      slide.addCell( cell );
	    } else {
	      // doesn't fit, new slide
	      slide.updateTarget();
	
	      slide = new Slide( this );
	      this.slides.push( slide );
	      slide.addCell( cell );
	    }
	  }, this );
	  // last slide
	  slide.updateTarget();
	  // update .selectedSlide
	  this.updateSelectedSlide();
	};
	
	proto._getCanCellFit = function() {
	  var groupCells = this.options.groupCells;
	  if ( !groupCells ) {
	    return function() {
	      return false;
	    };
	  } else if ( typeof groupCells == 'number' ) {
	    // group by number. 3 -> [0,1,2], [3,4,5], ...
	    var number = parseInt( groupCells, 10 );
	    return function( i ) {
	      return ( i % number ) !== 0;
	    };
	  }
	  // default, group by width of slide
	  // parse '75%
	  var percentMatch = typeof groupCells == 'string' &&
	    groupCells.match(/^(\d+)%$/);
	  var percent = percentMatch ? parseInt( percentMatch[1], 10 ) / 100 : 1;
	  return function( i, slideWidth ) {
	    return slideWidth <= ( this.size.innerWidth + 1 ) * percent;
	  };
	};
	
	// alias _init for jQuery plugin .flickity()
	proto._init =
	proto.reposition = function() {
	  this.positionCells();
	  this.positionSliderAtSelected();
	};
	
	proto.getSize = function() {
	  this.size = getSize( this.element );
	  this.setCellAlign();
	  this.cursorPosition = this.size.innerWidth * this.cellAlign;
	};
	
	var cellAlignShorthands = {
	  // cell align, then based on origin side
	  center: {
	    left: 0.5,
	    right: 0.5
	  },
	  left: {
	    left: 0,
	    right: 1
	  },
	  right: {
	    right: 0,
	    left: 1
	  }
	};
	
	proto.setCellAlign = function() {
	  var shorthand = cellAlignShorthands[ this.options.cellAlign ];
	  this.cellAlign = shorthand ? shorthand[ this.originSide ] : this.options.cellAlign;
	};
	
	proto.setGallerySize = function() {
	  if ( this.options.setGallerySize ) {
	    var height = this.options.adaptiveHeight && this.selectedSlide ?
	      this.selectedSlide.height : this.maxCellHeight;
	    this.viewport.style.height = height + 'px';
	  }
	};
	
	proto._getWrapShiftCells = function() {
	  // only for wrap-around
	  if ( !this.options.wrapAround ) {
	    return;
	  }
	  // unshift previous cells
	  this._unshiftCells( this.beforeShiftCells );
	  this._unshiftCells( this.afterShiftCells );
	  // get before cells
	  // initial gap
	  var gapX = this.cursorPosition;
	  var cellIndex = this.cells.length - 1;
	  this.beforeShiftCells = this._getGapCells( gapX, cellIndex, -1 );
	  // get after cells
	  // ending gap between last cell and end of gallery viewport
	  gapX = this.size.innerWidth - this.cursorPosition;
	  // start cloning at first cell, working forwards
	  this.afterShiftCells = this._getGapCells( gapX, 0, 1 );
	};
	
	proto._getGapCells = function( gapX, cellIndex, increment ) {
	  // keep adding cells until the cover the initial gap
	  var cells = [];
	  while ( gapX > 0 ) {
	    var cell = this.cells[ cellIndex ];
	    if ( !cell ) {
	      break;
	    }
	    cells.push( cell );
	    cellIndex += increment;
	    gapX -= cell.size.outerWidth;
	  }
	  return cells;
	};
	
	// ----- contain ----- //
	
	// contain cell targets so no excess sliding
	proto._containSlides = function() {
	  if ( !this.options.contain || this.options.wrapAround || !this.cells.length ) {
	    return;
	  }
	  var isRightToLeft = this.options.rightToLeft;
	  var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
	  var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
	  var contentWidth = this.slideableWidth - this.getLastCell().size[ endMargin ];
	  // content is less than gallery size
	  var isContentSmaller = contentWidth < this.size.innerWidth;
	  // bounds
	  var beginBound = this.cursorPosition + this.cells[0].size[ beginMargin ];
	  var endBound = contentWidth - this.size.innerWidth * ( 1 - this.cellAlign );
	  // contain each cell target
	  this.slides.forEach( function( slide ) {
	    if ( isContentSmaller ) {
	      // all cells fit inside gallery
	      slide.target = contentWidth * this.cellAlign;
	    } else {
	      // contain to bounds
	      slide.target = Math.max( slide.target, beginBound );
	      slide.target = Math.min( slide.target, endBound );
	    }
	  }, this );
	};
	
	// -----  ----- //
	
	/**
	 * emits events via eventEmitter and jQuery events
	 * @param {String} type - name of event
	 * @param {Event} event - original event
	 * @param {Array} args - extra arguments
	 */
	proto.dispatchEvent = function( type, event, args ) {
	  var emitArgs = event ? [ event ].concat( args ) : args;
	  this.emitEvent( type, emitArgs );
	
	  if ( jQuery && this.$element ) {
	    // default trigger with type if no event
	    type += this.options.namespaceJQueryEvents ? '.flickity' : '';
	    var $event = type;
	    if ( event ) {
	      // create jQuery event
	      var jQEvent = jQuery.Event( event );
	      jQEvent.type = type;
	      $event = jQEvent;
	    }
	    this.$element.trigger( $event, args );
	  }
	};
	
	// -------------------------- select -------------------------- //
	
	/**
	 * @param {Integer} index - index of the slide
	 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
	 * @param {Boolean} isInstant - will immediately set position at selected cell
	 */
	proto.select = function( index, isWrap, isInstant ) {
	  if ( !this.isActive ) {
	    return;
	  }
	  index = parseInt( index, 10 );
	  this._wrapSelect( index );
	
	  if ( this.options.wrapAround || isWrap ) {
	    index = utils.modulo( index, this.slides.length );
	  }
	  // bail if invalid index
	  if ( !this.slides[ index ] ) {
	    return;
	  }
	  this.selectedIndex = index;
	  this.updateSelectedSlide();
	  if ( isInstant ) {
	    this.positionSliderAtSelected();
	  } else {
	    this.startAnimation();
	  }
	  if ( this.options.adaptiveHeight ) {
	    this.setGallerySize();
	  }
	
	  this.dispatchEvent('select');
	  // old v1 event name, remove in v3
	  this.dispatchEvent('cellSelect');
	};
	
	// wraps position for wrapAround, to move to closest slide. #113
	proto._wrapSelect = function( index ) {
	  var len = this.slides.length;
	  var isWrapping = this.options.wrapAround && len > 1;
	  if ( !isWrapping ) {
	    return index;
	  }
	  var wrapIndex = utils.modulo( index, len );
	  // go to shortest
	  var delta = Math.abs( wrapIndex - this.selectedIndex );
	  var backWrapDelta = Math.abs( ( wrapIndex + len ) - this.selectedIndex );
	  var forewardWrapDelta = Math.abs( ( wrapIndex - len ) - this.selectedIndex );
	  if ( !this.isDragSelect && backWrapDelta < delta ) {
	    index += len;
	  } else if ( !this.isDragSelect && forewardWrapDelta < delta ) {
	    index -= len;
	  }
	  // wrap position so slider is within normal area
	  if ( index < 0 ) {
	    this.x -= this.slideableWidth;
	  } else if ( index >= len ) {
	    this.x += this.slideableWidth;
	  }
	};
	
	proto.previous = function( isWrap, isInstant ) {
	  this.select( this.selectedIndex - 1, isWrap, isInstant );
	};
	
	proto.next = function( isWrap, isInstant ) {
	  this.select( this.selectedIndex + 1, isWrap, isInstant );
	};
	
	proto.updateSelectedSlide = function() {
	  var slide = this.slides[ this.selectedIndex ];
	  // selectedIndex could be outside of slides, if triggered before resize()
	  if ( !slide ) {
	    return;
	  }
	  // unselect previous selected slide
	  this.unselectSelectedSlide();
	  // update new selected slide
	  this.selectedSlide = slide;
	  slide.select();
	  this.selectedCells = slide.cells;
	  this.selectedElements = slide.getCellElements();
	  // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
	  // Remove in v3?
	  this.selectedCell = slide.cells[0];
	  this.selectedElement = this.selectedElements[0];
	};
	
	proto.unselectSelectedSlide = function() {
	  if ( this.selectedSlide ) {
	    this.selectedSlide.unselect();
	  }
	};
	
	/**
	 * select slide from number or cell element
	 * @param {Element or Number} elem
	 */
	proto.selectCell = function( value, isWrap, isInstant ) {
	  // get cell
	  var cell;
	  if ( typeof value == 'number' ) {
	    cell = this.cells[ value ];
	  } else {
	    // use string as selector
	    if ( typeof value == 'string' ) {
	      value = this.element.querySelector( value );
	    }
	    // get cell from element
	    cell = this.getCell( value );
	  }
	  // select slide that has cell
	  for ( var i=0; cell && i < this.slides.length; i++ ) {
	    var slide = this.slides[i];
	    var index = slide.cells.indexOf( cell );
	    if ( index != -1 ) {
	      this.select( i, isWrap, isInstant );
	      return;
	    }
	  }
	};
	
	// -------------------------- get cells -------------------------- //
	
	/**
	 * get Flickity.Cell, given an Element
	 * @param {Element} elem
	 * @returns {Flickity.Cell} item
	 */
	proto.getCell = function( elem ) {
	  // loop through cells to get the one that matches
	  for ( var i=0; i < this.cells.length; i++ ) {
	    var cell = this.cells[i];
	    if ( cell.element == elem ) {
	      return cell;
	    }
	  }
	};
	
	/**
	 * get collection of Flickity.Cells, given Elements
	 * @param {Element, Array, NodeList} elems
	 * @returns {Array} cells - Flickity.Cells
	 */
	proto.getCells = function( elems ) {
	  elems = utils.makeArray( elems );
	  var cells = [];
	  elems.forEach( function( elem ) {
	    var cell = this.getCell( elem );
	    if ( cell ) {
	      cells.push( cell );
	    }
	  }, this );
	  return cells;
	};
	
	/**
	 * get cell elements
	 * @returns {Array} cellElems
	 */
	proto.getCellElements = function() {
	  return this.cells.map( function( cell ) {
	    return cell.element;
	  });
	};
	
	/**
	 * get parent cell from an element
	 * @param {Element} elem
	 * @returns {Flickit.Cell} cell
	 */
	proto.getParentCell = function( elem ) {
	  // first check if elem is cell
	  var cell = this.getCell( elem );
	  if ( cell ) {
	    return cell;
	  }
	  // try to get parent cell elem
	  elem = utils.getParent( elem, '.flickity-slider > *' );
	  return this.getCell( elem );
	};
	
	/**
	 * get cells adjacent to a slide
	 * @param {Integer} adjCount - number of adjacent slides
	 * @param {Integer} index - index of slide to start
	 * @returns {Array} cells - array of Flickity.Cells
	 */
	proto.getAdjacentCellElements = function( adjCount, index ) {
	  if ( !adjCount ) {
	    return this.selectedSlide.getCellElements();
	  }
	  index = index === undefined ? this.selectedIndex : index;
	
	  var len = this.slides.length;
	  if ( 1 + ( adjCount * 2 ) >= len ) {
	    return this.getCellElements();
	  }
	
	  var cellElems = [];
	  for ( var i = index - adjCount; i <= index + adjCount ; i++ ) {
	    var slideIndex = this.options.wrapAround ? utils.modulo( i, len ) : i;
	    var slide = this.slides[ slideIndex ];
	    if ( slide ) {
	      cellElems = cellElems.concat( slide.getCellElements() );
	    }
	  }
	  return cellElems;
	};
	
	// -------------------------- events -------------------------- //
	
	proto.uiChange = function() {
	  this.emitEvent('uiChange');
	};
	
	proto.childUIPointerDown = function( event ) {
	  this.emitEvent( 'childUIPointerDown', [ event ] );
	};
	
	// ----- resize ----- //
	
	proto.onresize = function() {
	  this.watchCSS();
	  this.resize();
	};
	
	utils.debounceMethod( Flickity, 'onresize', 150 );
	
	proto.resize = function() {
	  if ( !this.isActive ) {
	    return;
	  }
	  this.getSize();
	  // wrap values
	  if ( this.options.wrapAround ) {
	    this.x = utils.modulo( this.x, this.slideableWidth );
	  }
	  this.positionCells();
	  this._getWrapShiftCells();
	  this.setGallerySize();
	  this.emitEvent('resize');
	  // update selected index for group slides, instant
	  // TODO: position can be lost between groups of various numbers
	  var selectedElement = this.selectedElements && this.selectedElements[0];
	  this.selectCell( selectedElement, false, true );
	};
	
	// watches the :after property, activates/deactivates
	proto.watchCSS = function() {
	  var watchOption = this.options.watchCSS;
	  if ( !watchOption ) {
	    return;
	  }
	
	  var afterContent = getComputedStyle( this.element, ':after' ).content;
	  // activate if :after { content: 'flickity' }
	  if ( afterContent.indexOf('flickity') != -1 ) {
	    this.activate();
	  } else {
	    this.deactivate();
	  }
	};
	
	// ----- keydown ----- //
	
	// go previous/next if left/right keys pressed
	proto.onkeydown = function( event ) {
	  // only work if element is in focus
	  if ( !this.options.accessibility ||
	    ( document.activeElement && document.activeElement != this.element ) ) {
	    return;
	  }
	
	  if ( event.keyCode == 37 ) {
	    // go left
	    var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
	    this.uiChange();
	    this[ leftMethod ]();
	  } else if ( event.keyCode == 39 ) {
	    // go right
	    var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
	    this.uiChange();
	    this[ rightMethod ]();
	  }
	};
	
	// -------------------------- destroy -------------------------- //
	
	// deactivate all Flickity functionality, but keep stuff available
	proto.deactivate = function() {
	  if ( !this.isActive ) {
	    return;
	  }
	  this.element.classList.remove('flickity-enabled');
	  this.element.classList.remove('flickity-rtl');
	  // destroy cells
	  this.cells.forEach( function( cell ) {
	    cell.destroy();
	  });
	  this.unselectSelectedSlide();
	  this.element.removeChild( this.viewport );
	  // move child elements back into element
	  moveElements( this.slider.children, this.element );
	  if ( this.options.accessibility ) {
	    this.element.removeAttribute('tabIndex');
	    this.element.removeEventListener( 'keydown', this );
	  }
	  // set flags
	  this.isActive = false;
	  this.emitEvent('deactivate');
	};
	
	proto.destroy = function() {
	  this.deactivate();
	  window.removeEventListener( 'resize', this );
	  this.emitEvent('destroy');
	  if ( jQuery && this.$element ) {
	    jQuery.removeData( this.element, 'flickity' );
	  }
	  delete this.element.flickityGUID;
	  delete instances[ this.guid ];
	};
	
	// -------------------------- prototype -------------------------- //
	
	utils.extend( proto, animatePrototype );
	
	// -------------------------- extras -------------------------- //
	
	/**
	 * get Flickity instance from element
	 * @param {Element} elem
	 * @returns {Flickity}
	 */
	Flickity.data = function( elem ) {
	  elem = utils.getQueryElement( elem );
	  var id = elem && elem.flickityGUID;
	  return id && instances[ id ];
	};
	
	utils.htmlInit( Flickity, 'flickity' );
	
	if ( jQuery && jQuery.bridget ) {
	  jQuery.bridget( 'flickity', Flickity );
	}
	
	Flickity.Cell = Cell;
	
	return Flickity;
	
	}));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * EvEmitter v1.0.3
	 * Lil' event emitter
	 * MIT License
	 */
	
	/* jshint unused: true, undef: true, strict: true */
	
	( function( global, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, window */
	  if ( true ) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }
	
	}( typeof window != 'undefined' ? window : this, function() {
	
	"use strict";
	
	function EvEmitter() {}
	
	var proto = EvEmitter.prototype;
	
	proto.on = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // set events hash
	  var events = this._events = this._events || {};
	  // set listeners array
	  var listeners = events[ eventName ] = events[ eventName ] || [];
	  // only add once
	  if ( listeners.indexOf( listener ) == -1 ) {
	    listeners.push( listener );
	  }
	
	  return this;
	};
	
	proto.once = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // add event
	  this.on( eventName, listener );
	  // set once flag
	  // set onceEvents hash
	  var onceEvents = this._onceEvents = this._onceEvents || {};
	  // set onceListeners object
	  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
	  // set flag
	  onceListeners[ listener ] = true;
	
	  return this;
	};
	
	proto.off = function( eventName, listener ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var index = listeners.indexOf( listener );
	  if ( index != -1 ) {
	    listeners.splice( index, 1 );
	  }
	
	  return this;
	};
	
	proto.emitEvent = function( eventName, args ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var i = 0;
	  var listener = listeners[i];
	  args = args || [];
	  // once stuff
	  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];
	
	  while ( listener ) {
	    var isOnce = onceListeners && onceListeners[ listener ];
	    if ( isOnce ) {
	      // remove listener
	      // remove before trigger to prevent recursion
	      this.off( eventName, listener );
	      // unset once flag
	      delete onceListeners[ listener ];
	    }
	    // trigger listener
	    listener.apply( this, args );
	    // get next listener
	    i += isOnce ? 0 : 1;
	    listener = listeners[i];
	  }
	
	  return this;
	};
	
	return EvEmitter;
	
	}));


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * getSize v2.0.2
	 * measure size of elements
	 * MIT license
	 */
	
	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, module: false, console: false */
	
	( function( window, factory ) {
	  'use strict';
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return factory();
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.getSize = factory();
	  }
	
	})( window, function factory() {
	'use strict';
	
	// -------------------------- helpers -------------------------- //
	
	// get a number from a string, not a percentage
	function getStyleSize( value ) {
	  var num = parseFloat( value );
	  // not a percent like '100%', and a number
	  var isValid = value.indexOf('%') == -1 && !isNaN( num );
	  return isValid && num;
	}
	
	function noop() {}
	
	var logError = typeof console == 'undefined' ? noop :
	  function( message ) {
	    console.error( message );
	  };
	
	// -------------------------- measurements -------------------------- //
	
	var measurements = [
	  'paddingLeft',
	  'paddingRight',
	  'paddingTop',
	  'paddingBottom',
	  'marginLeft',
	  'marginRight',
	  'marginTop',
	  'marginBottom',
	  'borderLeftWidth',
	  'borderRightWidth',
	  'borderTopWidth',
	  'borderBottomWidth'
	];
	
	var measurementsLength = measurements.length;
	
	function getZeroSize() {
	  var size = {
	    width: 0,
	    height: 0,
	    innerWidth: 0,
	    innerHeight: 0,
	    outerWidth: 0,
	    outerHeight: 0
	  };
	  for ( var i=0; i < measurementsLength; i++ ) {
	    var measurement = measurements[i];
	    size[ measurement ] = 0;
	  }
	  return size;
	}
	
	// -------------------------- getStyle -------------------------- //
	
	/**
	 * getStyle, get style of element, check for Firefox bug
	 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	 */
	function getStyle( elem ) {
	  var style = getComputedStyle( elem );
	  if ( !style ) {
	    logError( 'Style returned ' + style +
	      '. Are you running this code in a hidden iframe on Firefox? ' +
	      'See http://bit.ly/getsizebug1' );
	  }
	  return style;
	}
	
	// -------------------------- setup -------------------------- //
	
	var isSetup = false;
	
	var isBoxSizeOuter;
	
	/**
	 * setup
	 * check isBoxSizerOuter
	 * do on first getSize() rather than on page load for Firefox bug
	 */
	function setup() {
	  // setup once
	  if ( isSetup ) {
	    return;
	  }
	  isSetup = true;
	
	  // -------------------------- box sizing -------------------------- //
	
	  /**
	   * WebKit measures the outer-width on style.width on border-box elems
	   * IE & Firefox<29 measures the inner-width
	   */
	  var div = document.createElement('div');
	  div.style.width = '200px';
	  div.style.padding = '1px 2px 3px 4px';
	  div.style.borderStyle = 'solid';
	  div.style.borderWidth = '1px 2px 3px 4px';
	  div.style.boxSizing = 'border-box';
	
	  var body = document.body || document.documentElement;
	  body.appendChild( div );
	  var style = getStyle( div );
	
	  getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
	  body.removeChild( div );
	
	}
	
	// -------------------------- getSize -------------------------- //
	
	function getSize( elem ) {
	  setup();
	
	  // use querySeletor if elem is string
	  if ( typeof elem == 'string' ) {
	    elem = document.querySelector( elem );
	  }
	
	  // do not proceed on non-objects
	  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
	    return;
	  }
	
	  var style = getStyle( elem );
	
	  // if hidden, everything is 0
	  if ( style.display == 'none' ) {
	    return getZeroSize();
	  }
	
	  var size = {};
	  size.width = elem.offsetWidth;
	  size.height = elem.offsetHeight;
	
	  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
	
	  // get all measurements
	  for ( var i=0; i < measurementsLength; i++ ) {
	    var measurement = measurements[i];
	    var value = style[ measurement ];
	    var num = parseFloat( value );
	    // any 'auto', 'medium' value will be 0
	    size[ measurement ] = !isNaN( num ) ? num : 0;
	  }
	
	  var paddingWidth = size.paddingLeft + size.paddingRight;
	  var paddingHeight = size.paddingTop + size.paddingBottom;
	  var marginWidth = size.marginLeft + size.marginRight;
	  var marginHeight = size.marginTop + size.marginBottom;
	  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
	  var borderHeight = size.borderTopWidth + size.borderBottomWidth;
	
	  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
	
	  // overwrite width and height if we can get it from style
	  var styleWidth = getStyleSize( style.width );
	  if ( styleWidth !== false ) {
	    size.width = styleWidth +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
	  }
	
	  var styleHeight = getStyleSize( style.height );
	  if ( styleHeight !== false ) {
	    size.height = styleHeight +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
	  }
	
	  size.innerWidth = size.width - ( paddingWidth + borderWidth );
	  size.innerHeight = size.height - ( paddingHeight + borderHeight );
	
	  size.outerWidth = size.width + marginWidth;
	  size.outerHeight = size.height + marginHeight;
	
	  return size;
	}
	
	return getSize;
	
	});


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Fizzy UI utils v2.0.3
	 * MIT license
	 */
	
	/*jshint browser: true, undef: true, unused: true, strict: true */
	
	( function( window, factory ) {
	  // universal module definition
	  /*jshint strict: false */ /*globals define, module, require */
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(13)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( matchesSelector ) {
	      return factory( window, matchesSelector );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('desandro-matches-selector')
	    );
	  } else {
	    // browser global
	    window.fizzyUIUtils = factory(
	      window,
	      window.matchesSelector
	    );
	  }
	
	}( window, function factory( window, matchesSelector ) {
	
	'use strict';
	
	var utils = {};
	
	// ----- extend ----- //
	
	// extends objects
	utils.extend = function( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	};
	
	// ----- modulo ----- //
	
	utils.modulo = function( num, div ) {
	  return ( ( num % div ) + div ) % div;
	};
	
	// ----- makeArray ----- //
	
	// turn element or nodeList into an array
	utils.makeArray = function( obj ) {
	  var ary = [];
	  if ( Array.isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( obj && typeof obj.length == 'number' ) {
	    // convert nodeList to array
	    for ( var i=0; i < obj.length; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	};
	
	// ----- removeFrom ----- //
	
	utils.removeFrom = function( ary, obj ) {
	  var index = ary.indexOf( obj );
	  if ( index != -1 ) {
	    ary.splice( index, 1 );
	  }
	};
	
	// ----- getParent ----- //
	
	utils.getParent = function( elem, selector ) {
	  while ( elem != document.body ) {
	    elem = elem.parentNode;
	    if ( matchesSelector( elem, selector ) ) {
	      return elem;
	    }
	  }
	};
	
	// ----- getQueryElement ----- //
	
	// use element as selector string
	utils.getQueryElement = function( elem ) {
	  if ( typeof elem == 'string' ) {
	    return document.querySelector( elem );
	  }
	  return elem;
	};
	
	// ----- handleEvent ----- //
	
	// enable .ontype to trigger from .addEventListener( elem, 'type' )
	utils.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};
	
	// ----- filterFindElements ----- //
	
	utils.filterFindElements = function( elems, selector ) {
	  // make array of elems
	  elems = utils.makeArray( elems );
	  var ffElems = [];
	
	  elems.forEach( function( elem ) {
	    // check that elem is an actual element
	    if ( !( elem instanceof HTMLElement ) ) {
	      return;
	    }
	    // add elem if no selector
	    if ( !selector ) {
	      ffElems.push( elem );
	      return;
	    }
	    // filter & find items if we have a selector
	    // filter
	    if ( matchesSelector( elem, selector ) ) {
	      ffElems.push( elem );
	    }
	    // find children
	    var childElems = elem.querySelectorAll( selector );
	    // concat childElems to filterFound array
	    for ( var i=0; i < childElems.length; i++ ) {
	      ffElems.push( childElems[i] );
	    }
	  });
	
	  return ffElems;
	};
	
	// ----- debounceMethod ----- //
	
	utils.debounceMethod = function( _class, methodName, threshold ) {
	  // original method
	  var method = _class.prototype[ methodName ];
	  var timeoutName = methodName + 'Timeout';
	
	  _class.prototype[ methodName ] = function() {
	    var timeout = this[ timeoutName ];
	    if ( timeout ) {
	      clearTimeout( timeout );
	    }
	    var args = arguments;
	
	    var _this = this;
	    this[ timeoutName ] = setTimeout( function() {
	      method.apply( _this, args );
	      delete _this[ timeoutName ];
	    }, threshold || 100 );
	  };
	};
	
	// ----- docReady ----- //
	
	utils.docReady = function( callback ) {
	  var readyState = document.readyState;
	  if ( readyState == 'complete' || readyState == 'interactive' ) {
	    // do async to allow for other scripts to run. metafizzy/flickity#441
	    setTimeout( callback );
	  } else {
	    document.addEventListener( 'DOMContentLoaded', callback );
	  }
	};
	
	// ----- htmlInit ----- //
	
	// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
	utils.toDashed = function( str ) {
	  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
	    return $1 + '-' + $2;
	  }).toLowerCase();
	};
	
	var console = window.console;
	/**
	 * allow user to initialize classes via [data-namespace] or .js-namespace class
	 * htmlInit( Widget, 'widgetName' )
	 * options are parsed from data-namespace-options
	 */
	utils.htmlInit = function( WidgetClass, namespace ) {
	  utils.docReady( function() {
	    var dashedNamespace = utils.toDashed( namespace );
	    var dataAttr = 'data-' + dashedNamespace;
	    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
	    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
	    var elems = utils.makeArray( dataAttrElems )
	      .concat( utils.makeArray( jsDashElems ) );
	    var dataOptionsAttr = dataAttr + '-options';
	    var jQuery = window.jQuery;
	
	    elems.forEach( function( elem ) {
	      var attr = elem.getAttribute( dataAttr ) ||
	        elem.getAttribute( dataOptionsAttr );
	      var options;
	      try {
	        options = attr && JSON.parse( attr );
	      } catch ( error ) {
	        // log error, do not initialize
	        if ( console ) {
	          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
	          ': ' + error );
	        }
	        return;
	      }
	      // initialize
	      var instance = new WidgetClass( elem, options );
	      // make available via $().data('namespace')
	      if ( jQuery ) {
	        jQuery.data( elem, namespace, instance );
	      }
	    });
	
	  });
	};
	
	// -----  ----- //
	
	return utils;
	
	}));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * matchesSelector v2.0.1
	 * matchesSelector( element, '.selector' )
	 * MIT license
	 */
	
	/*jshint browser: true, strict: true, undef: true, unused: true */
	
	( function( window, factory ) {
	  /*global define: false, module: false */
	  'use strict';
	  // universal module definition
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.matchesSelector = factory();
	  }
	
	}( window, function factory() {
	  'use strict';
	
	  var matchesMethod = ( function() {
	    var ElemProto = Element.prototype;
	    // check for the standard method name first
	    if ( ElemProto.matches ) {
	      return 'matches';
	    }
	    // check un-prefixed
	    if ( ElemProto.matchesSelector ) {
	      return 'matchesSelector';
	    }
	    // check vendor prefixes
	    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];
	
	    for ( var i=0; i < prefixes.length; i++ ) {
	      var prefix = prefixes[i];
	      var method = prefix + 'MatchesSelector';
	      if ( ElemProto[ method ] ) {
	        return method;
	      }
	    }
	  })();
	
	  return function matchesSelector( elem, selector ) {
	    return elem[ matchesMethod ]( selector );
	  };
	
	}));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity.Cell
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(11)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( getSize ) {
	      return factory( window, getSize );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('get-size')
	    );
	  } else {
	    // browser global
	    window.Flickity = window.Flickity || {};
	    window.Flickity.Cell = factory(
	      window,
	      window.getSize
	    );
	  }
	
	}( window, function factory( window, getSize ) {
	
	'use strict';
	
	function Cell( elem, parent ) {
	  this.element = elem;
	  this.parent = parent;
	
	  this.create();
	}
	
	var proto = Cell.prototype;
	
	proto.create = function() {
	  this.element.style.position = 'absolute';
	  this.x = 0;
	  this.shift = 0;
	};
	
	proto.destroy = function() {
	  // reset style
	  this.element.style.position = '';
	  var side = this.parent.originSide;
	  this.element.style[ side ] = '';
	};
	
	proto.getSize = function() {
	  this.size = getSize( this.element );
	};
	
	proto.setPosition = function( x ) {
	  this.x = x;
	  this.updateTarget();
	  this.renderPosition( x );
	};
	
	// setDefaultTarget v1 method, backwards compatibility, remove in v3
	proto.updateTarget = proto.setDefaultTarget = function() {
	  var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
	  this.target = this.x + this.size[ marginProperty ] +
	    this.size.width * this.parent.cellAlign;
	};
	
	proto.renderPosition = function( x ) {
	  // render position of cell with in slider
	  var side = this.parent.originSide;
	  this.element.style[ side ] = this.parent.getPositionValue( x );
	};
	
	/**
	 * @param {Integer} factor - 0, 1, or -1
	**/
	proto.wrapShift = function( shift ) {
	  this.shift = shift;
	  this.renderPosition( this.x + this.parent.slideableWidth * shift );
	};
	
	proto.remove = function() {
	  this.element.parentNode.removeChild( this.element );
	};
	
	return Cell;
	
	}));


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// slide
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.Flickity = window.Flickity || {};
	    window.Flickity.Slide = factory();
	  }
	
	}( window, function factory() {
	'use strict';
	
	function Slide( parent ) {
	  this.parent = parent;
	  this.isOriginLeft = parent.originSide == 'left';
	  this.cells = [];
	  this.outerWidth = 0;
	  this.height = 0;
	}
	
	var proto = Slide.prototype;
	
	proto.addCell = function( cell ) {
	  this.cells.push( cell );
	  this.outerWidth += cell.size.outerWidth;
	  this.height = Math.max( cell.size.outerHeight, this.height );
	  // first cell stuff
	  if ( this.cells.length == 1 ) {
	    this.x = cell.x; // x comes from first cell
	    var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
	    this.firstMargin = cell.size[ beginMargin ];
	  }
	};
	
	proto.updateTarget = function() {
	  var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
	  var lastCell = this.getLastCell();
	  var lastMargin = lastCell ? lastCell.size[ endMargin ] : 0;
	  var slideWidth = this.outerWidth - ( this.firstMargin + lastMargin );
	  this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
	};
	
	proto.getLastCell = function() {
	  return this.cells[ this.cells.length - 1 ];
	};
	
	proto.select = function() {
	  this.changeSelectedClass('add');
	};
	
	proto.unselect = function() {
	  this.changeSelectedClass('remove');
	};
	
	proto.changeSelectedClass = function( method ) {
	  this.cells.forEach( function( cell ) {
	    cell.element.classList[ method ]('is-selected');
	  });
	};
	
	proto.getCellElements = function() {
	  return this.cells.map( function( cell ) {
	    return cell.element;
	  });
	};
	
	return Slide;
	
	}));


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// animate
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(12)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( utils ) {
	      return factory( window, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    window.Flickity = window.Flickity || {};
	    window.Flickity.animatePrototype = factory(
	      window,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, utils ) {
	
	'use strict';
	
	// -------------------------- requestAnimationFrame -------------------------- //
	
	// get rAF, prefixed, if present
	var requestAnimationFrame = window.requestAnimationFrame ||
	  window.webkitRequestAnimationFrame;
	
	// fallback to setTimeout
	var lastTime = 0;
	if ( !requestAnimationFrame )  {
	  requestAnimationFrame = function( callback ) {
	    var currTime = new Date().getTime();
	    var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
	    var id = setTimeout( callback, timeToCall );
	    lastTime = currTime + timeToCall;
	    return id;
	  };
	}
	
	// -------------------------- animate -------------------------- //
	
	var proto = {};
	
	proto.startAnimation = function() {
	  if ( this.isAnimating ) {
	    return;
	  }
	
	  this.isAnimating = true;
	  this.restingFrames = 0;
	  this.animate();
	};
	
	proto.animate = function() {
	  this.applyDragForce();
	  this.applySelectedAttraction();
	
	  var previousX = this.x;
	
	  this.integratePhysics();
	  this.positionSlider();
	  this.settle( previousX );
	  // animate next frame
	  if ( this.isAnimating ) {
	    var _this = this;
	    requestAnimationFrame( function animateFrame() {
	      _this.animate();
	    });
	  }
	};
	
	
	var transformProperty = ( function () {
	  var style = document.documentElement.style;
	  if ( typeof style.transform == 'string' ) {
	    return 'transform';
	  }
	  return 'WebkitTransform';
	})();
	
	proto.positionSlider = function() {
	  var x = this.x;
	  // wrap position around
	  if ( this.options.wrapAround && this.cells.length > 1 ) {
	    x = utils.modulo( x, this.slideableWidth );
	    x = x - this.slideableWidth;
	    this.shiftWrapCells( x );
	  }
	
	  x = x + this.cursorPosition;
	  // reverse if right-to-left and using transform
	  x = this.options.rightToLeft && transformProperty ? -x : x;
	  var value = this.getPositionValue( x );
	  // use 3D tranforms for hardware acceleration on iOS
	  // but use 2D when settled, for better font-rendering
	  this.slider.style[ transformProperty ] = this.isAnimating ?
	    'translate3d(' + value + ',0,0)' : 'translateX(' + value + ')';
	
	  // scroll event
	  var firstSlide = this.slides[0];
	  if ( firstSlide ) {
	    var positionX = -this.x - firstSlide.target;
	    var progress = positionX / this.slidesWidth;
	    this.dispatchEvent( 'scroll', null, [ progress, positionX ] );
	  }
	};
	
	proto.positionSliderAtSelected = function() {
	  if ( !this.cells.length ) {
	    return;
	  }
	  this.x = -this.selectedSlide.target;
	  this.positionSlider();
	};
	
	proto.getPositionValue = function( position ) {
	  if ( this.options.percentPosition ) {
	    // percent position, round to 2 digits, like 12.34%
	    return ( Math.round( ( position / this.size.innerWidth ) * 10000 ) * 0.01 )+ '%';
	  } else {
	    // pixel positioning
	    return Math.round( position ) + 'px';
	  }
	};
	
	proto.settle = function( previousX ) {
	  // keep track of frames where x hasn't moved
	  if ( !this.isPointerDown && Math.round( this.x * 100 ) == Math.round( previousX * 100 ) ) {
	    this.restingFrames++;
	  }
	  // stop animating if resting for 3 or more frames
	  if ( this.restingFrames > 2 ) {
	    this.isAnimating = false;
	    delete this.isFreeScrolling;
	    // render position with translateX when settled
	    this.positionSlider();
	    this.dispatchEvent('settle');
	  }
	};
	
	proto.shiftWrapCells = function( x ) {
	  // shift before cells
	  var beforeGap = this.cursorPosition + x;
	  this._shiftCells( this.beforeShiftCells, beforeGap, -1 );
	  // shift after cells
	  var afterGap = this.size.innerWidth - ( x + this.slideableWidth + this.cursorPosition );
	  this._shiftCells( this.afterShiftCells, afterGap, 1 );
	};
	
	proto._shiftCells = function( cells, gap, shift ) {
	  for ( var i=0; i < cells.length; i++ ) {
	    var cell = cells[i];
	    var cellShift = gap > 0 ? shift : 0;
	    cell.wrapShift( cellShift );
	    gap -= cell.size.outerWidth;
	  }
	};
	
	proto._unshiftCells = function( cells ) {
	  if ( !cells || !cells.length ) {
	    return;
	  }
	  for ( var i=0; i < cells.length; i++ ) {
	    cells[i].wrapShift( 0 );
	  }
	};
	
	// -------------------------- physics -------------------------- //
	
	proto.integratePhysics = function() {
	  this.x += this.velocity;
	  this.velocity *= this.getFrictionFactor();
	};
	
	proto.applyForce = function( force ) {
	  this.velocity += force;
	};
	
	proto.getFrictionFactor = function() {
	  return 1 - this.options[ this.isFreeScrolling ? 'freeScrollFriction' : 'friction' ];
	};
	
	proto.getRestingPosition = function() {
	  // my thanks to Steven Wittens, who simplified this math greatly
	  return this.x + this.velocity / ( 1 - this.getFrictionFactor() );
	};
	
	proto.applyDragForce = function() {
	  if ( !this.isPointerDown ) {
	    return;
	  }
	  // change the position to drag position by applying force
	  var dragVelocity = this.dragX - this.x;
	  var dragForce = dragVelocity - this.velocity;
	  this.applyForce( dragForce );
	};
	
	proto.applySelectedAttraction = function() {
	  // do not attract if pointer down or no cells
	  if ( this.isPointerDown || this.isFreeScrolling || !this.cells.length ) {
	    return;
	  }
	  var distance = this.selectedSlide.target * -1 - this.x;
	  var force = distance * this.options.selectedAttraction;
	  this.applyForce( force );
	};
	
	return proto;
	
	}));


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// drag
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(9),
	      __webpack_require__(18),
	      __webpack_require__(12)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, Unidragger, utils ) {
	      return factory( window, Flickity, Unidragger, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('unidragger'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    window.Flickity = factory(
	      window,
	      window.Flickity,
	      window.Unidragger,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, Flickity, Unidragger, utils ) {
	
	'use strict';
	
	// ----- defaults ----- //
	
	utils.extend( Flickity.defaults, {
	  draggable: true,
	  dragThreshold: 3,
	});
	
	// ----- create ----- //
	
	Flickity.createMethods.push('_createDrag');
	
	// -------------------------- drag prototype -------------------------- //
	
	var proto = Flickity.prototype;
	utils.extend( proto, Unidragger.prototype );
	
	// --------------------------  -------------------------- //
	
	var isTouch = 'createTouch' in document;
	var isTouchmoveScrollCanceled = false;
	
	proto._createDrag = function() {
	  this.on( 'activate', this.bindDrag );
	  this.on( 'uiChange', this._uiChangeDrag );
	  this.on( 'childUIPointerDown', this._childUIPointerDownDrag );
	  this.on( 'deactivate', this.unbindDrag );
	  // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
	  // #457, RubaXa/Sortable#973
	  if ( isTouch && !isTouchmoveScrollCanceled ) {
	    window.addEventListener( 'touchmove', function() {});
	    isTouchmoveScrollCanceled = true;
	  }
	};
	
	proto.bindDrag = function() {
	  if ( !this.options.draggable || this.isDragBound ) {
	    return;
	  }
	  this.element.classList.add('is-draggable');
	  this.handles = [ this.viewport ];
	  this.bindHandles();
	  this.isDragBound = true;
	};
	
	proto.unbindDrag = function() {
	  if ( !this.isDragBound ) {
	    return;
	  }
	  this.element.classList.remove('is-draggable');
	  this.unbindHandles();
	  delete this.isDragBound;
	};
	
	proto._uiChangeDrag = function() {
	  delete this.isFreeScrolling;
	};
	
	proto._childUIPointerDownDrag = function( event ) {
	  event.preventDefault();
	  this.pointerDownFocus( event );
	};
	
	// -------------------------- pointer events -------------------------- //
	
	// nodes that have text fields
	var cursorNodes = {
	  TEXTAREA: true,
	  INPUT: true,
	  OPTION: true,
	};
	
	// input types that do not have text fields
	var clickTypes = {
	  radio: true,
	  checkbox: true,
	  button: true,
	  submit: true,
	  image: true,
	  file: true,
	};
	
	proto.pointerDown = function( event, pointer ) {
	  // dismiss inputs with text fields. #403, #404
	  var isCursorInput = cursorNodes[ event.target.nodeName ] &&
	    !clickTypes[ event.target.type ];
	  if ( isCursorInput ) {
	    // reset pointerDown logic
	    this.isPointerDown = false;
	    delete this.pointerIdentifier;
	    return;
	  }
	
	  this._dragPointerDown( event, pointer );
	
	  // kludge to blur focused inputs in dragger
	  var focused = document.activeElement;
	  if ( focused && focused.blur && focused != this.element &&
	    // do not blur body for IE9 & 10, #117
	    focused != document.body ) {
	    focused.blur();
	  }
	  this.pointerDownFocus( event );
	  // stop if it was moving
	  this.dragX = this.x;
	  this.viewport.classList.add('is-pointer-down');
	  // bind move and end events
	  this._bindPostStartEvents( event );
	  // track scrolling
	  this.pointerDownScroll = getScrollPosition();
	  window.addEventListener( 'scroll', this );
	
	  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
	};
	
	var touchStartEvents = {
	  touchstart: true,
	  MSPointerDown: true
	};
	
	var focusNodes = {
	  INPUT: true,
	  SELECT: true
	};
	
	proto.pointerDownFocus = function( event ) {
	  // focus element, if not touch, and its not an input or select
	  if ( !this.options.accessibility || touchStartEvents[ event.type ] ||
	      focusNodes[ event.target.nodeName ] ) {
	    return;
	  }
	  var prevScrollY = window.pageYOffset;
	  this.element.focus();
	  // hack to fix scroll jump after focus, #76
	  if ( window.pageYOffset != prevScrollY ) {
	    window.scrollTo( window.pageXOffset, prevScrollY );
	  }
	};
	
	proto.canPreventDefaultOnPointerDown = function( event ) {
	  // prevent default, unless touchstart or <select>
	  var isTouchstart = event.type == 'touchstart';
	  var targetNodeName = event.target.nodeName;
	  return !isTouchstart && targetNodeName != 'SELECT';
	};
	
	// ----- move ----- //
	
	proto.hasDragStarted = function( moveVector ) {
	  return Math.abs( moveVector.x ) > this.options.dragThreshold;
	};
	
	// ----- up ----- //
	
	proto.pointerUp = function( event, pointer ) {
	  delete this.isTouchScrolling;
	  this.viewport.classList.remove('is-pointer-down');
	  this.dispatchEvent( 'pointerUp', event, [ pointer ] );
	  this._dragPointerUp( event, pointer );
	};
	
	proto.pointerDone = function() {
	  window.removeEventListener( 'scroll', this );
	  delete this.pointerDownScroll;
	};
	
	// -------------------------- dragging -------------------------- //
	
	proto.dragStart = function( event, pointer ) {
	  this.dragStartPosition = this.x;
	  this.startAnimation();
	  window.removeEventListener( 'scroll', this );
	  this.dispatchEvent( 'dragStart', event, [ pointer ] );
	};
	
	proto.pointerMove = function( event, pointer ) {
	  var moveVector = this._dragPointerMove( event, pointer );
	  this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
	  this._dragMove( event, pointer, moveVector );
	};
	
	proto.dragMove = function( event, pointer, moveVector ) {
	  event.preventDefault();
	
	  this.previousDragX = this.dragX;
	  // reverse if right-to-left
	  var direction = this.options.rightToLeft ? -1 : 1;
	  var dragX = this.dragStartPosition + moveVector.x * direction;
	
	  if ( !this.options.wrapAround && this.slides.length ) {
	    // slow drag
	    var originBound = Math.max( -this.slides[0].target, this.dragStartPosition );
	    dragX = dragX > originBound ? ( dragX + originBound ) * 0.5 : dragX;
	    var endBound = Math.min( -this.getLastSlide().target, this.dragStartPosition );
	    dragX = dragX < endBound ? ( dragX + endBound ) * 0.5 : dragX;
	  }
	
	  this.dragX = dragX;
	
	  this.dragMoveTime = new Date();
	  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
	};
	
	proto.dragEnd = function( event, pointer ) {
	  if ( this.options.freeScroll ) {
	    this.isFreeScrolling = true;
	  }
	  // set selectedIndex based on where flick will end up
	  var index = this.dragEndRestingSelect();
	
	  if ( this.options.freeScroll && !this.options.wrapAround ) {
	    // if free-scroll & not wrap around
	    // do not free-scroll if going outside of bounding slides
	    // so bounding slides can attract slider, and keep it in bounds
	    var restingX = this.getRestingPosition();
	    this.isFreeScrolling = -restingX > this.slides[0].target &&
	      -restingX < this.getLastSlide().target;
	  } else if ( !this.options.freeScroll && index == this.selectedIndex ) {
	    // boost selection if selected index has not changed
	    index += this.dragEndBoostSelect();
	  }
	  delete this.previousDragX;
	  // apply selection
	  // TODO refactor this, selecting here feels weird
	  // HACK, set flag so dragging stays in correct direction
	  this.isDragSelect = this.options.wrapAround;
	  this.select( index );
	  delete this.isDragSelect;
	  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
	};
	
	proto.dragEndRestingSelect = function() {
	  var restingX = this.getRestingPosition();
	  // how far away from selected slide
	  var distance = Math.abs( this.getSlideDistance( -restingX, this.selectedIndex ) );
	  // get closet resting going up and going down
	  var positiveResting = this._getClosestResting( restingX, distance, 1 );
	  var negativeResting = this._getClosestResting( restingX, distance, -1 );
	  // use closer resting for wrap-around
	  var index = positiveResting.distance < negativeResting.distance ?
	    positiveResting.index : negativeResting.index;
	  return index;
	};
	
	/**
	 * given resting X and distance to selected cell
	 * get the distance and index of the closest cell
	 * @param {Number} restingX - estimated post-flick resting position
	 * @param {Number} distance - distance to selected cell
	 * @param {Integer} increment - +1 or -1, going up or down
	 * @returns {Object} - { distance: {Number}, index: {Integer} }
	 */
	proto._getClosestResting = function( restingX, distance, increment ) {
	  var index = this.selectedIndex;
	  var minDistance = Infinity;
	  var condition = this.options.contain && !this.options.wrapAround ?
	    // if contain, keep going if distance is equal to minDistance
	    function( d, md ) { return d <= md; } : function( d, md ) { return d < md; };
	  while ( condition( distance, minDistance ) ) {
	    // measure distance to next cell
	    index += increment;
	    minDistance = distance;
	    distance = this.getSlideDistance( -restingX, index );
	    if ( distance === null ) {
	      break;
	    }
	    distance = Math.abs( distance );
	  }
	  return {
	    distance: minDistance,
	    // selected was previous index
	    index: index - increment
	  };
	};
	
	/**
	 * measure distance between x and a slide target
	 * @param {Number} x
	 * @param {Integer} index - slide index
	 */
	proto.getSlideDistance = function( x, index ) {
	  var len = this.slides.length;
	  // wrap around if at least 2 slides
	  var isWrapAround = this.options.wrapAround && len > 1;
	  var slideIndex = isWrapAround ? utils.modulo( index, len ) : index;
	  var slide = this.slides[ slideIndex ];
	  if ( !slide ) {
	    return null;
	  }
	  // add distance for wrap-around slides
	  var wrap = isWrapAround ? this.slideableWidth * Math.floor( index / len ) : 0;
	  return x - ( slide.target + wrap );
	};
	
	proto.dragEndBoostSelect = function() {
	  // do not boost if no previousDragX or dragMoveTime
	  if ( this.previousDragX === undefined || !this.dragMoveTime ||
	    // or if drag was held for 100 ms
	    new Date() - this.dragMoveTime > 100 ) {
	    return 0;
	  }
	
	  var distance = this.getSlideDistance( -this.dragX, this.selectedIndex );
	  var delta = this.previousDragX - this.dragX;
	  if ( distance > 0 && delta > 0 ) {
	    // boost to next if moving towards the right, and positive velocity
	    return 1;
	  } else if ( distance < 0 && delta < 0 ) {
	    // boost to previous if moving towards the left, and negative velocity
	    return -1;
	  }
	  return 0;
	};
	
	// ----- staticClick ----- //
	
	proto.staticClick = function( event, pointer ) {
	  // get clickedCell, if cell was clicked
	  var clickedCell = this.getParentCell( event.target );
	  var cellElem = clickedCell && clickedCell.element;
	  var cellIndex = clickedCell && this.cells.indexOf( clickedCell );
	  this.dispatchEvent( 'staticClick', event, [ pointer, cellElem, cellIndex ] );
	};
	
	// ----- scroll ----- //
	
	proto.onscroll = function() {
	  var scroll = getScrollPosition();
	  var scrollMoveX = this.pointerDownScroll.x - scroll.x;
	  var scrollMoveY = this.pointerDownScroll.y - scroll.y;
	  // cancel click/tap if scroll is too much
	  if ( Math.abs( scrollMoveX ) > 3 || Math.abs( scrollMoveY ) > 3 ) {
	    this._pointerDone();
	  }
	};
	
	// ----- utils ----- //
	
	function getScrollPosition() {
	  return {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  };
	}
	
	// -----  ----- //
	
	return Flickity;
	
	}));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Unidragger v2.1.0
	 * Draggable base class
	 * MIT license
	 */
	
	/*jshint browser: true, unused: true, undef: true, strict: true */
	
	( function( window, factory ) {
	  // universal module definition
	  /*jshint strict: false */ /*globals define, module, require */
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(19)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Unipointer ) {
	      return factory( window, Unipointer );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('unipointer')
	    );
	  } else {
	    // browser global
	    window.Unidragger = factory(
	      window,
	      window.Unipointer
	    );
	  }
	
	}( window, function factory( window, Unipointer ) {
	
	'use strict';
	
	// -----  ----- //
	
	function noop() {}
	
	// -------------------------- Unidragger -------------------------- //
	
	function Unidragger() {}
	
	// inherit Unipointer & EvEmitter
	var proto = Unidragger.prototype = Object.create( Unipointer.prototype );
	
	// ----- bind start ----- //
	
	proto.bindHandles = function() {
	  this._bindHandles( true );
	};
	
	proto.unbindHandles = function() {
	  this._bindHandles( false );
	};
	
	var navigator = window.navigator;
	/**
	 * works as unbinder, as you can .bindHandles( false ) to unbind
	 * @param {Boolean} isBind - will unbind if falsey
	 */
	proto._bindHandles = function( isBind ) {
	  // munge isBind, default to true
	  isBind = isBind === undefined ? true : !!isBind;
	  // extra bind logic
	  var binderExtra;
	  if ( navigator.pointerEnabled ) {
	    binderExtra = function( handle ) {
	      // disable scrolling on the element
	      handle.style.touchAction = isBind ? 'none' : '';
	    };
	  } else if ( navigator.msPointerEnabled ) {
	    binderExtra = function( handle ) {
	      // disable scrolling on the element
	      handle.style.msTouchAction = isBind ? 'none' : '';
	    };
	  } else {
	    binderExtra = noop;
	  }
	  // bind each handle
	  var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';
	  for ( var i=0; i < this.handles.length; i++ ) {
	    var handle = this.handles[i];
	    this._bindStartEvent( handle, isBind );
	    binderExtra( handle );
	    handle[ bindMethod ]( 'click', this );
	  }
	};
	
	// ----- start event ----- //
	
	/**
	 * pointer start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerDown = function( event, pointer ) {
	  // dismiss range sliders
	  if ( event.target.nodeName == 'INPUT' && event.target.type == 'range' ) {
	    // reset pointerDown logic
	    this.isPointerDown = false;
	    delete this.pointerIdentifier;
	    return;
	  }
	
	  this._dragPointerDown( event, pointer );
	  // kludge to blur focused inputs in dragger
	  var focused = document.activeElement;
	  if ( focused && focused.blur ) {
	    focused.blur();
	  }
	  // bind move and end events
	  this._bindPostStartEvents( event );
	  this.emitEvent( 'pointerDown', [ event, pointer ] );
	};
	
	// base pointer down logic
	proto._dragPointerDown = function( event, pointer ) {
	  // track to see when dragging starts
	  this.pointerDownPoint = Unipointer.getPointerPoint( pointer );
	
	  var canPreventDefault = this.canPreventDefaultOnPointerDown( event, pointer );
	  if ( canPreventDefault ) {
	    event.preventDefault();
	  }
	};
	
	// overwriteable method so Flickity can prevent for scrolling
	proto.canPreventDefaultOnPointerDown = function( event ) {
	  // prevent default, unless touchstart or <select>
	  return event.target.nodeName != 'SELECT';
	};
	
	// ----- move event ----- //
	
	/**
	 * drag move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerMove = function( event, pointer ) {
	  var moveVector = this._dragPointerMove( event, pointer );
	  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
	  this._dragMove( event, pointer, moveVector );
	};
	
	// base pointer move logic
	proto._dragPointerMove = function( event, pointer ) {
	  var movePoint = Unipointer.getPointerPoint( pointer );
	  var moveVector = {
	    x: movePoint.x - this.pointerDownPoint.x,
	    y: movePoint.y - this.pointerDownPoint.y
	  };
	  // start drag if pointer has moved far enough to start drag
	  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
	    this._dragStart( event, pointer );
	  }
	  return moveVector;
	};
	
	// condition if pointer has moved far enough to start drag
	proto.hasDragStarted = function( moveVector ) {
	  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
	};
	
	
	// ----- end event ----- //
	
	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerUp = function( event, pointer ) {
	  this.emitEvent( 'pointerUp', [ event, pointer ] );
	  this._dragPointerUp( event, pointer );
	};
	
	proto._dragPointerUp = function( event, pointer ) {
	  if ( this.isDragging ) {
	    this._dragEnd( event, pointer );
	  } else {
	    // pointer didn't move enough for drag to start
	    this._staticClick( event, pointer );
	  }
	};
	
	// -------------------------- drag -------------------------- //
	
	// dragStart
	proto._dragStart = function( event, pointer ) {
	  this.isDragging = true;
	  this.dragStartPoint = Unipointer.getPointerPoint( pointer );
	  // prevent clicks
	  this.isPreventingClicks = true;
	
	  this.dragStart( event, pointer );
	};
	
	proto.dragStart = function( event, pointer ) {
	  this.emitEvent( 'dragStart', [ event, pointer ] );
	};
	
	// dragMove
	proto._dragMove = function( event, pointer, moveVector ) {
	  // do not drag if not dragging yet
	  if ( !this.isDragging ) {
	    return;
	  }
	
	  this.dragMove( event, pointer, moveVector );
	};
	
	proto.dragMove = function( event, pointer, moveVector ) {
	  event.preventDefault();
	  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
	};
	
	// dragEnd
	proto._dragEnd = function( event, pointer ) {
	  // set flags
	  this.isDragging = false;
	  // re-enable clicking async
	  setTimeout( function() {
	    delete this.isPreventingClicks;
	  }.bind( this ) );
	
	  this.dragEnd( event, pointer );
	};
	
	proto.dragEnd = function( event, pointer ) {
	  this.emitEvent( 'dragEnd', [ event, pointer ] );
	};
	
	// ----- onclick ----- //
	
	// handle all clicks and prevent clicks when dragging
	proto.onclick = function( event ) {
	  if ( this.isPreventingClicks ) {
	    event.preventDefault();
	  }
	};
	
	// ----- staticClick ----- //
	
	// triggered after pointer down & up with no/tiny movement
	proto._staticClick = function( event, pointer ) {
	  // ignore emulated mouse up clicks
	  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
	    return;
	  }
	
	  // allow click in <input>s and <textarea>s
	  var nodeName = event.target.nodeName;
	  if ( nodeName == 'INPUT' || nodeName == 'TEXTAREA' ) {
	    event.target.focus();
	  }
	  this.staticClick( event, pointer );
	
	  // set flag for emulated clicks 300ms after touchend
	  if ( event.type != 'mouseup' ) {
	    this.isIgnoringMouseUp = true;
	    // reset flag after 300ms
	    setTimeout( function() {
	      delete this.isIgnoringMouseUp;
	    }.bind( this ), 400 );
	  }
	};
	
	proto.staticClick = function( event, pointer ) {
	  this.emitEvent( 'staticClick', [ event, pointer ] );
	};
	
	// ----- utils ----- //
	
	Unidragger.getPointerPoint = Unipointer.getPointerPoint;
	
	// -----  ----- //
	
	return Unidragger;
	
	}));


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Unipointer v2.1.0
	 * base class for doing one thing with pointer event
	 * MIT license
	 */
	
	/*jshint browser: true, undef: true, unused: true, strict: true */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /*global define, module, require */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(10)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter ) {
	      return factory( window, EvEmitter );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('ev-emitter')
	    );
	  } else {
	    // browser global
	    window.Unipointer = factory(
	      window,
	      window.EvEmitter
	    );
	  }
	
	}( window, function factory( window, EvEmitter ) {
	
	'use strict';
	
	function noop() {}
	
	function Unipointer() {}
	
	// inherit EvEmitter
	var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );
	
	proto.bindStartEvent = function( elem ) {
	  this._bindStartEvent( elem, true );
	};
	
	proto.unbindStartEvent = function( elem ) {
	  this._bindStartEvent( elem, false );
	};
	
	/**
	 * works as unbinder, as you can ._bindStart( false ) to unbind
	 * @param {Boolean} isBind - will unbind if falsey
	 */
	proto._bindStartEvent = function( elem, isBind ) {
	  // munge isBind, default to true
	  isBind = isBind === undefined ? true : !!isBind;
	  var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';
	
	  if ( window.navigator.pointerEnabled ) {
	    // W3C Pointer Events, IE11. See https://coderwall.com/p/mfreca
	    elem[ bindMethod ]( 'pointerdown', this );
	  } else if ( window.navigator.msPointerEnabled ) {
	    // IE10 Pointer Events
	    elem[ bindMethod ]( 'MSPointerDown', this );
	  } else {
	    // listen for both, for devices like Chrome Pixel
	    elem[ bindMethod ]( 'mousedown', this );
	    elem[ bindMethod ]( 'touchstart', this );
	  }
	};
	
	// trigger handler methods for events
	proto.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};
	
	// returns the touch that we're keeping track of
	proto.getTouch = function( touches ) {
	  for ( var i=0; i < touches.length; i++ ) {
	    var touch = touches[i];
	    if ( touch.identifier == this.pointerIdentifier ) {
	      return touch;
	    }
	  }
	};
	
	// ----- start event ----- //
	
	proto.onmousedown = function( event ) {
	  // dismiss clicks from right or middle buttons
	  var button = event.button;
	  if ( button && ( button !== 0 && button !== 1 ) ) {
	    return;
	  }
	  this._pointerDown( event, event );
	};
	
	proto.ontouchstart = function( event ) {
	  this._pointerDown( event, event.changedTouches[0] );
	};
	
	proto.onMSPointerDown =
	proto.onpointerdown = function( event ) {
	  this._pointerDown( event, event );
	};
	
	/**
	 * pointer start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto._pointerDown = function( event, pointer ) {
	  // dismiss other pointers
	  if ( this.isPointerDown ) {
	    return;
	  }
	
	  this.isPointerDown = true;
	  // save pointer identifier to match up touch events
	  this.pointerIdentifier = pointer.pointerId !== undefined ?
	    // pointerId for pointer events, touch.indentifier for touch events
	    pointer.pointerId : pointer.identifier;
	
	  this.pointerDown( event, pointer );
	};
	
	proto.pointerDown = function( event, pointer ) {
	  this._bindPostStartEvents( event );
	  this.emitEvent( 'pointerDown', [ event, pointer ] );
	};
	
	// hash of events to be bound after start event
	var postStartEvents = {
	  mousedown: [ 'mousemove', 'mouseup' ],
	  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
	  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
	  MSPointerDown: [ 'MSPointerMove', 'MSPointerUp', 'MSPointerCancel' ]
	};
	
	proto._bindPostStartEvents = function( event ) {
	  if ( !event ) {
	    return;
	  }
	  // get proper events to match start event
	  var events = postStartEvents[ event.type ];
	  // bind events to node
	  events.forEach( function( eventName ) {
	    window.addEventListener( eventName, this );
	  }, this );
	  // save these arguments
	  this._boundPointerEvents = events;
	};
	
	proto._unbindPostStartEvents = function() {
	  // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
	  if ( !this._boundPointerEvents ) {
	    return;
	  }
	  this._boundPointerEvents.forEach( function( eventName ) {
	    window.removeEventListener( eventName, this );
	  }, this );
	
	  delete this._boundPointerEvents;
	};
	
	// ----- move event ----- //
	
	proto.onmousemove = function( event ) {
	  this._pointerMove( event, event );
	};
	
	proto.onMSPointerMove =
	proto.onpointermove = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerMove( event, event );
	  }
	};
	
	proto.ontouchmove = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerMove( event, touch );
	  }
	};
	
	/**
	 * pointer move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerMove = function( event, pointer ) {
	  this.pointerMove( event, pointer );
	};
	
	// public
	proto.pointerMove = function( event, pointer ) {
	  this.emitEvent( 'pointerMove', [ event, pointer ] );
	};
	
	// ----- end event ----- //
	
	
	proto.onmouseup = function( event ) {
	  this._pointerUp( event, event );
	};
	
	proto.onMSPointerUp =
	proto.onpointerup = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerUp( event, event );
	  }
	};
	
	proto.ontouchend = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerUp( event, touch );
	  }
	};
	
	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerUp = function( event, pointer ) {
	  this._pointerDone();
	  this.pointerUp( event, pointer );
	};
	
	// public
	proto.pointerUp = function( event, pointer ) {
	  this.emitEvent( 'pointerUp', [ event, pointer ] );
	};
	
	// ----- pointer done ----- //
	
	// triggered on pointer up & pointer cancel
	proto._pointerDone = function() {
	  // reset properties
	  this.isPointerDown = false;
	  delete this.pointerIdentifier;
	  // remove events
	  this._unbindPostStartEvents();
	  this.pointerDone();
	};
	
	proto.pointerDone = noop;
	
	// ----- pointer cancel ----- //
	
	proto.onMSPointerCancel =
	proto.onpointercancel = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerCancel( event, event );
	  }
	};
	
	proto.ontouchcancel = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerCancel( event, touch );
	  }
	};
	
	/**
	 * pointer cancel
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerCancel = function( event, pointer ) {
	  this._pointerDone();
	  this.pointerCancel( event, pointer );
	};
	
	// public
	proto.pointerCancel = function( event, pointer ) {
	  this.emitEvent( 'pointerCancel', [ event, pointer ] );
	};
	
	// -----  ----- //
	
	// utility function for getting x/y coords from event
	Unipointer.getPointerPoint = function( pointer ) {
	  return {
	    x: pointer.pageX,
	    y: pointer.pageY
	  };
	};
	
	// -----  ----- //
	
	return Unipointer;
	
	}));


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// prev/next buttons
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(9),
	      __webpack_require__(21),
	      __webpack_require__(12)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, TapListener, utils ) {
	      return factory( window, Flickity, TapListener, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('tap-listener'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.TapListener,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, Flickity, TapListener, utils ) {
	'use strict';
	
	var svgURI = 'http://www.w3.org/2000/svg';
	
	// -------------------------- PrevNextButton -------------------------- //
	
	function PrevNextButton( direction, parent ) {
	  this.direction = direction;
	  this.parent = parent;
	  this._create();
	}
	
	PrevNextButton.prototype = new TapListener();
	
	PrevNextButton.prototype._create = function() {
	  // properties
	  this.isEnabled = true;
	  this.isPrevious = this.direction == -1;
	  var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
	  this.isLeft = this.direction == leftDirection;
	
	  var element = this.element = document.createElement('button');
	  element.className = 'flickity-prev-next-button';
	  element.className += this.isPrevious ? ' previous' : ' next';
	  // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
	  element.setAttribute( 'type', 'button' );
	  // init as disabled
	  this.disable();
	
	  element.setAttribute( 'aria-label', this.isPrevious ? 'previous' : 'next' );
	
	  // create arrow
	  var svg = this.createSVG();
	  element.appendChild( svg );
	  // events
	  this.on( 'tap', this.onTap );
	  this.parent.on( 'select', this.update.bind( this ) );
	  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
	};
	
	PrevNextButton.prototype.activate = function() {
	  this.bindTap( this.element );
	  // click events from keyboard
	  this.element.addEventListener( 'click', this );
	  // add to DOM
	  this.parent.element.appendChild( this.element );
	};
	
	PrevNextButton.prototype.deactivate = function() {
	  // remove from DOM
	  this.parent.element.removeChild( this.element );
	  // do regular TapListener destroy
	  TapListener.prototype.destroy.call( this );
	  // click events from keyboard
	  this.element.removeEventListener( 'click', this );
	};
	
	PrevNextButton.prototype.createSVG = function() {
	  var svg = document.createElementNS( svgURI, 'svg');
	  svg.setAttribute( 'viewBox', '0 0 100 100' );
	  var path = document.createElementNS( svgURI, 'path');
	  var pathMovements = getArrowMovements( this.parent.options.arrowShape );
	  path.setAttribute( 'd', pathMovements );
	  path.setAttribute( 'class', 'arrow' );
	  // rotate arrow
	  if ( !this.isLeft ) {
	    path.setAttribute( 'transform', 'translate(100, 100) rotate(180) ' );
	  }
	  svg.appendChild( path );
	  return svg;
	};
	
	// get SVG path movmement
	function getArrowMovements( shape ) {
	  // use shape as movement if string
	  if ( typeof shape == 'string' ) {
	    return shape;
	  }
	  // create movement string
	  return 'M ' + shape.x0 + ',50' +
	    ' L ' + shape.x1 + ',' + ( shape.y1 + 50 ) +
	    ' L ' + shape.x2 + ',' + ( shape.y2 + 50 ) +
	    ' L ' + shape.x3 + ',50 ' +
	    ' L ' + shape.x2 + ',' + ( 50 - shape.y2 ) +
	    ' L ' + shape.x1 + ',' + ( 50 - shape.y1 ) +
	    ' Z';
	}
	
	PrevNextButton.prototype.onTap = function() {
	  if ( !this.isEnabled ) {
	    return;
	  }
	  this.parent.uiChange();
	  var method = this.isPrevious ? 'previous' : 'next';
	  this.parent[ method ]();
	};
	
	PrevNextButton.prototype.handleEvent = utils.handleEvent;
	
	PrevNextButton.prototype.onclick = function() {
	  // only allow clicks from keyboard
	  var focused = document.activeElement;
	  if ( focused && focused == this.element ) {
	    this.onTap();
	  }
	};
	
	// -----  ----- //
	
	PrevNextButton.prototype.enable = function() {
	  if ( this.isEnabled ) {
	    return;
	  }
	  this.element.disabled = false;
	  this.isEnabled = true;
	};
	
	PrevNextButton.prototype.disable = function() {
	  if ( !this.isEnabled ) {
	    return;
	  }
	  this.element.disabled = true;
	  this.isEnabled = false;
	};
	
	PrevNextButton.prototype.update = function() {
	  // index of first or last slide, if previous or next
	  var slides = this.parent.slides;
	  // enable is wrapAround and at least 2 slides
	  if ( this.parent.options.wrapAround && slides.length > 1 ) {
	    this.enable();
	    return;
	  }
	  var lastIndex = slides.length ? slides.length - 1 : 0;
	  var boundIndex = this.isPrevious ? 0 : lastIndex;
	  var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
	  this[ method ]();
	};
	
	PrevNextButton.prototype.destroy = function() {
	  this.deactivate();
	};
	
	// -------------------------- Flickity prototype -------------------------- //
	
	utils.extend( Flickity.defaults, {
	  prevNextButtons: true,
	  arrowShape: {
	    x0: 10,
	    x1: 60, y1: 50,
	    x2: 70, y2: 40,
	    x3: 30
	  }
	});
	
	Flickity.createMethods.push('_createPrevNextButtons');
	var proto = Flickity.prototype;
	
	proto._createPrevNextButtons = function() {
	  if ( !this.options.prevNextButtons ) {
	    return;
	  }
	
	  this.prevButton = new PrevNextButton( -1, this );
	  this.nextButton = new PrevNextButton( 1, this );
	
	  this.on( 'activate', this.activatePrevNextButtons );
	};
	
	proto.activatePrevNextButtons = function() {
	  this.prevButton.activate();
	  this.nextButton.activate();
	  this.on( 'deactivate', this.deactivatePrevNextButtons );
	};
	
	proto.deactivatePrevNextButtons = function() {
	  this.prevButton.deactivate();
	  this.nextButton.deactivate();
	  this.off( 'deactivate', this.deactivatePrevNextButtons );
	};
	
	// --------------------------  -------------------------- //
	
	Flickity.PrevNextButton = PrevNextButton;
	
	return Flickity;
	
	}));


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Tap listener v2.0.0
	 * listens to taps
	 * MIT license
	 */
	
	/*jshint browser: true, unused: true, undef: true, strict: true */
	
	( function( window, factory ) {
	  // universal module definition
	  /*jshint strict: false*/ /*globals define, module, require */
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(19)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Unipointer ) {
	      return factory( window, Unipointer );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('unipointer')
	    );
	  } else {
	    // browser global
	    window.TapListener = factory(
	      window,
	      window.Unipointer
	    );
	  }
	
	}( window, function factory( window, Unipointer ) {
	
	'use strict';
	
	// --------------------------  TapListener -------------------------- //
	
	function TapListener( elem ) {
	  this.bindTap( elem );
	}
	
	// inherit Unipointer & EventEmitter
	var proto = TapListener.prototype = Object.create( Unipointer.prototype );
	
	/**
	 * bind tap event to element
	 * @param {Element} elem
	 */
	proto.bindTap = function( elem ) {
	  if ( !elem ) {
	    return;
	  }
	  this.unbindTap();
	  this.tapElement = elem;
	  this._bindStartEvent( elem, true );
	};
	
	proto.unbindTap = function() {
	  if ( !this.tapElement ) {
	    return;
	  }
	  this._bindStartEvent( this.tapElement, true );
	  delete this.tapElement;
	};
	
	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerUp = function( event, pointer ) {
	  // ignore emulated mouse up clicks
	  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
	    return;
	  }
	
	  var pointerPoint = Unipointer.getPointerPoint( pointer );
	  var boundingRect = this.tapElement.getBoundingClientRect();
	  var scrollX = window.pageXOffset;
	  var scrollY = window.pageYOffset;
	  // calculate if pointer is inside tapElement
	  var isInside = pointerPoint.x >= boundingRect.left + scrollX &&
	    pointerPoint.x <= boundingRect.right + scrollX &&
	    pointerPoint.y >= boundingRect.top + scrollY &&
	    pointerPoint.y <= boundingRect.bottom + scrollY;
	  // trigger callback if pointer is inside element
	  if ( isInside ) {
	    this.emitEvent( 'tap', [ event, pointer ] );
	  }
	
	  // set flag for emulated clicks 300ms after touchend
	  if ( event.type != 'mouseup' ) {
	    this.isIgnoringMouseUp = true;
	    // reset flag after 300ms
	    var _this = this;
	    setTimeout( function() {
	      delete _this.isIgnoringMouseUp;
	    }, 400 );
	  }
	};
	
	proto.destroy = function() {
	  this.pointerDone();
	  this.unbindTap();
	};
	
	// -----  ----- //
	
	return TapListener;
	
	}));


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// page dots
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(9),
	      __webpack_require__(21),
	      __webpack_require__(12)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, TapListener, utils ) {
	      return factory( window, Flickity, TapListener, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('tap-listener'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.TapListener,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, Flickity, TapListener, utils ) {
	
	// -------------------------- PageDots -------------------------- //
	
	'use strict';
	
	function PageDots( parent ) {
	  this.parent = parent;
	  this._create();
	}
	
	PageDots.prototype = new TapListener();
	
	PageDots.prototype._create = function() {
	  // create holder element
	  this.holder = document.createElement('ol');
	  this.holder.className = 'flickity-page-dots';
	  // create dots, array of elements
	  this.dots = [];
	  // events
	  this.on( 'tap', this.onTap );
	  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
	};
	
	PageDots.prototype.activate = function() {
	  this.setDots();
	  this.bindTap( this.holder );
	  // add to DOM
	  this.parent.element.appendChild( this.holder );
	};
	
	PageDots.prototype.deactivate = function() {
	  // remove from DOM
	  this.parent.element.removeChild( this.holder );
	  TapListener.prototype.destroy.call( this );
	};
	
	PageDots.prototype.setDots = function() {
	  // get difference between number of slides and number of dots
	  var delta = this.parent.slides.length - this.dots.length;
	  if ( delta > 0 ) {
	    this.addDots( delta );
	  } else if ( delta < 0 ) {
	    this.removeDots( -delta );
	  }
	};
	
	PageDots.prototype.addDots = function( count ) {
	  var fragment = document.createDocumentFragment();
	  var newDots = [];
	  while ( count ) {
	    var dot = document.createElement('li');
	    dot.className = 'dot';
	    fragment.appendChild( dot );
	    newDots.push( dot );
	    count--;
	  }
	  this.holder.appendChild( fragment );
	  this.dots = this.dots.concat( newDots );
	};
	
	PageDots.prototype.removeDots = function( count ) {
	  // remove from this.dots collection
	  var removeDots = this.dots.splice( this.dots.length - count, count );
	  // remove from DOM
	  removeDots.forEach( function( dot ) {
	    this.holder.removeChild( dot );
	  }, this );
	};
	
	PageDots.prototype.updateSelected = function() {
	  // remove selected class on previous
	  if ( this.selectedDot ) {
	    this.selectedDot.className = 'dot';
	  }
	  // don't proceed if no dots
	  if ( !this.dots.length ) {
	    return;
	  }
	  this.selectedDot = this.dots[ this.parent.selectedIndex ];
	  this.selectedDot.className = 'dot is-selected';
	};
	
	PageDots.prototype.onTap = function( event ) {
	  var target = event.target;
	  // only care about dot clicks
	  if ( target.nodeName != 'LI' ) {
	    return;
	  }
	
	  this.parent.uiChange();
	  var index = this.dots.indexOf( target );
	  this.parent.select( index );
	};
	
	PageDots.prototype.destroy = function() {
	  this.deactivate();
	};
	
	Flickity.PageDots = PageDots;
	
	// -------------------------- Flickity -------------------------- //
	
	utils.extend( Flickity.defaults, {
	  pageDots: true
	});
	
	Flickity.createMethods.push('_createPageDots');
	
	var proto = Flickity.prototype;
	
	proto._createPageDots = function() {
	  if ( !this.options.pageDots ) {
	    return;
	  }
	  this.pageDots = new PageDots( this );
	  // events
	  this.on( 'activate', this.activatePageDots );
	  this.on( 'select', this.updateSelectedPageDots );
	  this.on( 'cellChange', this.updatePageDots );
	  this.on( 'resize', this.updatePageDots );
	  this.on( 'deactivate', this.deactivatePageDots );
	};
	
	proto.activatePageDots = function() {
	  this.pageDots.activate();
	};
	
	proto.updateSelectedPageDots = function() {
	  this.pageDots.updateSelected();
	};
	
	proto.updatePageDots = function() {
	  this.pageDots.setDots();
	};
	
	proto.deactivatePageDots = function() {
	  this.pageDots.deactivate();
	};
	
	// -----  ----- //
	
	Flickity.PageDots = PageDots;
	
	return Flickity;
	
	}));


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// player & autoPlay
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(10),
	      __webpack_require__(12),
	      __webpack_require__(9)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter, utils, Flickity ) {
	      return factory( EvEmitter, utils, Flickity );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('ev-emitter'),
	      require('fizzy-ui-utils'),
	      require('./flickity')
	    );
	  } else {
	    // browser global
	    factory(
	      window.EvEmitter,
	      window.fizzyUIUtils,
	      window.Flickity
	    );
	  }
	
	}( window, function factory( EvEmitter, utils, Flickity ) {
	
	'use strict';
	
	// -------------------------- Page Visibility -------------------------- //
	// https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API
	
	var hiddenProperty, visibilityEvent;
	if ( 'hidden' in document ) {
	  hiddenProperty = 'hidden';
	  visibilityEvent = 'visibilitychange';
	} else if ( 'webkitHidden' in document ) {
	  hiddenProperty = 'webkitHidden';
	  visibilityEvent = 'webkitvisibilitychange';
	}
	
	// -------------------------- Player -------------------------- //
	
	function Player( parent ) {
	  this.parent = parent;
	  this.state = 'stopped';
	  // visibility change event handler
	  if ( visibilityEvent ) {
	    this.onVisibilityChange = function() {
	      this.visibilityChange();
	    }.bind( this );
	    this.onVisibilityPlay = function() {
	      this.visibilityPlay();
	    }.bind( this );
	  }
	}
	
	Player.prototype = Object.create( EvEmitter.prototype );
	
	// start play
	Player.prototype.play = function() {
	  if ( this.state == 'playing' ) {
	    return;
	  }
	  // do not play if page is hidden, start playing when page is visible
	  var isPageHidden = document[ hiddenProperty ];
	  if ( visibilityEvent && isPageHidden ) {
	    document.addEventListener( visibilityEvent, this.onVisibilityPlay );
	    return;
	  }
	
	  this.state = 'playing';
	  // listen to visibility change
	  if ( visibilityEvent ) {
	    document.addEventListener( visibilityEvent, this.onVisibilityChange );
	  }
	  // start ticking
	  this.tick();
	};
	
	Player.prototype.tick = function() {
	  // do not tick if not playing
	  if ( this.state != 'playing' ) {
	    return;
	  }
	
	  var time = this.parent.options.autoPlay;
	  // default to 3 seconds
	  time = typeof time == 'number' ? time : 3000;
	  var _this = this;
	  // HACK: reset ticks if stopped and started within interval
	  this.clear();
	  this.timeout = setTimeout( function() {
	    _this.parent.next( true );
	    _this.tick();
	  }, time );
	};
	
	Player.prototype.stop = function() {
	  this.state = 'stopped';
	  this.clear();
	  // remove visibility change event
	  if ( visibilityEvent ) {
	    document.removeEventListener( visibilityEvent, this.onVisibilityChange );
	  }
	};
	
	Player.prototype.clear = function() {
	  clearTimeout( this.timeout );
	};
	
	Player.prototype.pause = function() {
	  if ( this.state == 'playing' ) {
	    this.state = 'paused';
	    this.clear();
	  }
	};
	
	Player.prototype.unpause = function() {
	  // re-start play if paused
	  if ( this.state == 'paused' ) {
	    this.play();
	  }
	};
	
	// pause if page visibility is hidden, unpause if visible
	Player.prototype.visibilityChange = function() {
	  var isPageHidden = document[ hiddenProperty ];
	  this[ isPageHidden ? 'pause' : 'unpause' ]();
	};
	
	Player.prototype.visibilityPlay = function() {
	  this.play();
	  document.removeEventListener( visibilityEvent, this.onVisibilityPlay );
	};
	
	// -------------------------- Flickity -------------------------- //
	
	utils.extend( Flickity.defaults, {
	  pauseAutoPlayOnHover: true
	});
	
	Flickity.createMethods.push('_createPlayer');
	var proto = Flickity.prototype;
	
	proto._createPlayer = function() {
	  this.player = new Player( this );
	
	  this.on( 'activate', this.activatePlayer );
	  this.on( 'uiChange', this.stopPlayer );
	  this.on( 'pointerDown', this.stopPlayer );
	  this.on( 'deactivate', this.deactivatePlayer );
	};
	
	proto.activatePlayer = function() {
	  if ( !this.options.autoPlay ) {
	    return;
	  }
	  this.player.play();
	  this.element.addEventListener( 'mouseenter', this );
	};
	
	// Player API, don't hate the ... thanks I know where the door is
	
	proto.playPlayer = function() {
	  this.player.play();
	};
	
	proto.stopPlayer = function() {
	  this.player.stop();
	};
	
	proto.pausePlayer = function() {
	  this.player.pause();
	};
	
	proto.unpausePlayer = function() {
	  this.player.unpause();
	};
	
	proto.deactivatePlayer = function() {
	  this.player.stop();
	  this.element.removeEventListener( 'mouseenter', this );
	};
	
	// ----- mouseenter/leave ----- //
	
	// pause auto-play on hover
	proto.onmouseenter = function() {
	  if ( !this.options.pauseAutoPlayOnHover ) {
	    return;
	  }
	  this.player.pause();
	  this.element.addEventListener( 'mouseleave', this );
	};
	
	// resume auto-play on hover off
	proto.onmouseleave = function() {
	  this.player.unpause();
	  this.element.removeEventListener( 'mouseleave', this );
	};
	
	// -----  ----- //
	
	Flickity.Player = Player;
	
	return Flickity;
	
	}));


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// add, remove cell
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(9),
	      __webpack_require__(12)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, utils ) {
	      return factory( window, Flickity, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, Flickity, utils ) {
	
	'use strict';
	
	// append cells to a document fragment
	function getCellsFragment( cells ) {
	  var fragment = document.createDocumentFragment();
	  cells.forEach( function( cell ) {
	    fragment.appendChild( cell.element );
	  });
	  return fragment;
	}
	
	// -------------------------- add/remove cell prototype -------------------------- //
	
	var proto = Flickity.prototype;
	
	/**
	 * Insert, prepend, or append cells
	 * @param {Element, Array, NodeList} elems
	 * @param {Integer} index
	 */
	proto.insert = function( elems, index ) {
	  var cells = this._makeCells( elems );
	  if ( !cells || !cells.length ) {
	    return;
	  }
	  var len = this.cells.length;
	  // default to append
	  index = index === undefined ? len : index;
	  // add cells with document fragment
	  var fragment = getCellsFragment( cells );
	  // append to slider
	  var isAppend = index == len;
	  if ( isAppend ) {
	    this.slider.appendChild( fragment );
	  } else {
	    var insertCellElement = this.cells[ index ].element;
	    this.slider.insertBefore( fragment, insertCellElement );
	  }
	  // add to this.cells
	  if ( index === 0 ) {
	    // prepend, add to start
	    this.cells = cells.concat( this.cells );
	  } else if ( isAppend ) {
	    // append, add to end
	    this.cells = this.cells.concat( cells );
	  } else {
	    // insert in this.cells
	    var endCells = this.cells.splice( index, len - index );
	    this.cells = this.cells.concat( cells ).concat( endCells );
	  }
	
	  this._sizeCells( cells );
	
	  var selectedIndexDelta = index > this.selectedIndex ? 0 : cells.length;
	  this._cellAddedRemoved( index, selectedIndexDelta );
	};
	
	proto.append = function( elems ) {
	  this.insert( elems, this.cells.length );
	};
	
	proto.prepend = function( elems ) {
	  this.insert( elems, 0 );
	};
	
	/**
	 * Remove cells
	 * @param {Element, Array, NodeList} elems
	 */
	proto.remove = function( elems ) {
	  var cells = this.getCells( elems );
	  var selectedIndexDelta = 0;
	  var len = cells.length;
	  var i, cell;
	  // calculate selectedIndexDelta, easier if done in seperate loop
	  for ( i=0; i < len; i++ ) {
	    cell = cells[i];
	    var wasBefore = this.cells.indexOf( cell ) < this.selectedIndex;
	    selectedIndexDelta -= wasBefore ? 1 : 0;
	  }
	
	  for ( i=0; i < len; i++ ) {
	    cell = cells[i];
	    cell.remove();
	    // remove item from collection
	    utils.removeFrom( this.cells, cell );
	  }
	
	  if ( cells.length ) {
	    // update stuff
	    this._cellAddedRemoved( 0, selectedIndexDelta );
	  }
	};
	
	// updates when cells are added or removed
	proto._cellAddedRemoved = function( changedCellIndex, selectedIndexDelta ) {
	  // TODO this math isn't perfect with grouped slides
	  selectedIndexDelta = selectedIndexDelta || 0;
	  this.selectedIndex += selectedIndexDelta;
	  this.selectedIndex = Math.max( 0, Math.min( this.slides.length - 1, this.selectedIndex ) );
	
	  this.cellChange( changedCellIndex, true );
	  // backwards compatibility
	  this.emitEvent( 'cellAddedRemoved', [ changedCellIndex, selectedIndexDelta ] );
	};
	
	/**
	 * logic to be run after a cell's size changes
	 * @param {Element} elem - cell's element
	 */
	proto.cellSizeChange = function( elem ) {
	  var cell = this.getCell( elem );
	  if ( !cell ) {
	    return;
	  }
	  cell.getSize();
	
	  var index = this.cells.indexOf( cell );
	  this.cellChange( index );
	};
	
	/**
	 * logic any time a cell is changed: added, removed, or size changed
	 * @param {Integer} changedCellIndex - index of the changed cell, optional
	 */
	proto.cellChange = function( changedCellIndex, isPositioningSlider ) {
	  var prevSlideableWidth = this.slideableWidth;
	  this._positionCells( changedCellIndex );
	  this._getWrapShiftCells();
	  this.setGallerySize();
	  this.emitEvent( 'cellChange', [ changedCellIndex ] );
	  // position slider
	  if ( this.options.freeScroll ) {
	    // shift x by change in slideableWidth
	    // TODO fix position shifts when prepending w/ freeScroll
	    var deltaX = prevSlideableWidth - this.slideableWidth;
	    this.x += deltaX * this.cellAlign;
	    this.positionSlider();
	  } else {
	    // do not position slider after lazy load
	    if ( isPositioningSlider ) {
	      this.positionSliderAtSelected();
	    }
	    this.select( this.selectedIndex );
	  }
	};
	
	// -----  ----- //
	
	return Flickity;
	
	}));


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// lazyload
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(9),
	      __webpack_require__(12)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, utils ) {
	      return factory( window, Flickity, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, Flickity, utils ) {
	'use strict';
	
	Flickity.createMethods.push('_createLazyload');
	var proto = Flickity.prototype;
	
	proto._createLazyload = function() {
	  this.on( 'select', this.lazyLoad );
	};
	
	proto.lazyLoad = function() {
	  var lazyLoad = this.options.lazyLoad;
	  if ( !lazyLoad ) {
	    return;
	  }
	  // get adjacent cells, use lazyLoad option for adjacent count
	  var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
	  var cellElems = this.getAdjacentCellElements( adjCount );
	  // get lazy images in those cells
	  var lazyImages = [];
	  cellElems.forEach( function( cellElem ) {
	    var lazyCellImages = getCellLazyImages( cellElem );
	    lazyImages = lazyImages.concat( lazyCellImages );
	  });
	  // load lazy images
	  lazyImages.forEach( function( img ) {
	    new LazyLoader( img, this );
	  }, this );
	};
	
	function getCellLazyImages( cellElem ) {
	  // check if cell element is lazy image
	  if ( cellElem.nodeName == 'IMG' &&
	    cellElem.getAttribute('data-flickity-lazyload') ) {
	    return [ cellElem ];
	  }
	  // select lazy images in cell
	  var imgs = cellElem.querySelectorAll('img[data-flickity-lazyload]');
	  return utils.makeArray( imgs );
	}
	
	// -------------------------- LazyLoader -------------------------- //
	
	/**
	 * class to handle loading images
	 */
	function LazyLoader( img, flickity ) {
	  this.img = img;
	  this.flickity = flickity;
	  this.load();
	}
	
	LazyLoader.prototype.handleEvent = utils.handleEvent;
	
	LazyLoader.prototype.load = function() {
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  // load image
	  this.img.src = this.img.getAttribute('data-flickity-lazyload');
	  // remove attr
	  this.img.removeAttribute('data-flickity-lazyload');
	};
	
	LazyLoader.prototype.onload = function( event ) {
	  this.complete( event, 'flickity-lazyloaded' );
	};
	
	LazyLoader.prototype.onerror = function( event ) {
	  this.complete( event, 'flickity-lazyerror' );
	};
	
	LazyLoader.prototype.complete = function( event, className ) {
	  // unbind events
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	
	  var cell = this.flickity.getParentCell( this.img );
	  var cellElem = cell && cell.element;
	  this.flickity.cellSizeChange( cellElem );
	
	  this.img.classList.add( className );
	  this.flickity.dispatchEvent( 'lazyLoad', event, cellElem );
	};
	
	// -----  ----- //
	
	Flickity.LazyLoader = LazyLoader;
	
	return Flickity;
	
	}));


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Packery v2.1.1
	 * Gapless, draggable grid layouts
	 *
	 * Licensed GPLv3 for open source use
	 * or Packery Commercial License for commercial use
	 *
	 * http://packery.metafizzy.co
	 * Copyright 2016 Metafizzy
	 */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, require */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(11),
	        __webpack_require__(27),
	        __webpack_require__(29),
	        __webpack_require__(30),
	        __webpack_require__(31)
	      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('get-size'),
	      require('outlayer'),
	      require('./rect'),
	      require('./packer'),
	      require('./item')
	    );
	  } else {
	    // browser global
	    window.Packery = factory(
	      window.getSize,
	      window.Outlayer,
	      window.Packery.Rect,
	      window.Packery.Packer,
	      window.Packery.Item
	    );
	  }
	
	}( window, function factory( getSize, Outlayer, Rect, Packer, Item ) {
	'use strict';
	
	// ----- Rect ----- //
	
	// allow for pixel rounding errors IE8-IE11 & Firefox; #227
	Rect.prototype.canFit = function( rect ) {
	  return this.width >= rect.width - 1 && this.height >= rect.height - 1;
	};
	
	// -------------------------- Packery -------------------------- //
	
	// create an Outlayer layout class
	var Packery = Outlayer.create('packery');
	Packery.Item = Item;
	
	var proto = Packery.prototype;
	
	proto._create = function() {
	  // call super
	  Outlayer.prototype._create.call( this );
	
	  // initial properties
	  this.packer = new Packer();
	  // packer for drop targets
	  this.shiftPacker = new Packer();
	  this.isEnabled = true;
	
	  this.dragItemCount = 0;
	
	  // create drag handlers
	  var _this = this;
	  this.handleDraggabilly = {
	    dragStart: function() {
	      _this.itemDragStart( this.element );
	    },
	    dragMove: function() {
	      _this.itemDragMove( this.element, this.position.x, this.position.y );
	    },
	    dragEnd: function() {
	      _this.itemDragEnd( this.element );
	    }
	  };
	
	  this.handleUIDraggable = {
	    start: function handleUIDraggableStart( event, ui ) {
	      // HTML5 may trigger dragstart, dismiss HTML5 dragging
	      if ( !ui ) {
	        return;
	      }
	      _this.itemDragStart( event.currentTarget );
	    },
	    drag: function handleUIDraggableDrag( event, ui ) {
	      if ( !ui ) {
	        return;
	      }
	      _this.itemDragMove( event.currentTarget, ui.position.left, ui.position.top );
	    },
	    stop: function handleUIDraggableStop( event, ui ) {
	      if ( !ui ) {
	        return;
	      }
	      _this.itemDragEnd( event.currentTarget );
	    }
	  };
	
	};
	
	
	// ----- init & layout ----- //
	
	/**
	 * logic before any new layout
	 */
	proto._resetLayout = function() {
	  this.getSize();
	
	  this._getMeasurements();
	
	  // reset packer
	  var width, height, sortDirection;
	  // packer settings, if horizontal or vertical
	  if ( this._getOption('horizontal') ) {
	    width = Infinity;
	    height = this.size.innerHeight + this.gutter;
	    sortDirection = 'rightwardTopToBottom';
	  } else {
	    width = this.size.innerWidth + this.gutter;
	    height = Infinity;
	    sortDirection = 'downwardLeftToRight';
	  }
	
	  this.packer.width = this.shiftPacker.width = width;
	  this.packer.height = this.shiftPacker.height = height;
	  this.packer.sortDirection = this.shiftPacker.sortDirection = sortDirection;
	
	  this.packer.reset();
	
	  // layout
	  this.maxY = 0;
	  this.maxX = 0;
	};
	
	/**
	 * update columnWidth, rowHeight, & gutter
	 * @private
	 */
	proto._getMeasurements = function() {
	  this._getMeasurement( 'columnWidth', 'width' );
	  this._getMeasurement( 'rowHeight', 'height' );
	  this._getMeasurement( 'gutter', 'width' );
	};
	
	proto._getItemLayoutPosition = function( item ) {
	  this._setRectSize( item.element, item.rect );
	  if ( this.isShifting || this.dragItemCount > 0 ) {
	    var packMethod = this._getPackMethod();
	    this.packer[ packMethod ]( item.rect );
	  } else {
	    this.packer.pack( item.rect );
	  }
	
	  this._setMaxXY( item.rect );
	  return item.rect;
	};
	
	proto.shiftLayout = function() {
	  this.isShifting = true;
	  this.layout();
	  delete this.isShifting;
	};
	
	proto._getPackMethod = function() {
	  return this._getOption('horizontal') ? 'rowPack' : 'columnPack';
	};
	
	
	/**
	 * set max X and Y value, for size of container
	 * @param {Packery.Rect} rect
	 * @private
	 */
	proto._setMaxXY = function( rect ) {
	  this.maxX = Math.max( rect.x + rect.width, this.maxX );
	  this.maxY = Math.max( rect.y + rect.height, this.maxY );
	};
	
	/**
	 * set the width and height of a rect, applying columnWidth and rowHeight
	 * @param {Element} elem
	 * @param {Packery.Rect} rect
	 */
	proto._setRectSize = function( elem, rect ) {
	  var size = getSize( elem );
	  var w = size.outerWidth;
	  var h = size.outerHeight;
	  // size for columnWidth and rowHeight, if available
	  // only check if size is non-zero, #177
	  if ( w || h ) {
	    w = this._applyGridGutter( w, this.columnWidth );
	    h = this._applyGridGutter( h, this.rowHeight );
	  }
	  // rect must fit in packer
	  rect.width = Math.min( w, this.packer.width );
	  rect.height = Math.min( h, this.packer.height );
	};
	
	/**
	 * fits item to columnWidth/rowHeight and adds gutter
	 * @param {Number} measurement - item width or height
	 * @param {Number} gridSize - columnWidth or rowHeight
	 * @returns measurement
	 */
	proto._applyGridGutter = function( measurement, gridSize ) {
	  // just add gutter if no gridSize
	  if ( !gridSize ) {
	    return measurement + this.gutter;
	  }
	  gridSize += this.gutter;
	  // fit item to columnWidth/rowHeight
	  var remainder = measurement % gridSize;
	  var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
	  measurement = Math[ mathMethod ]( measurement / gridSize ) * gridSize;
	  return measurement;
	};
	
	proto._getContainerSize = function() {
	  if ( this._getOption('horizontal') ) {
	    return {
	      width: this.maxX - this.gutter
	    };
	  } else {
	    return {
	      height: this.maxY - this.gutter
	    };
	  }
	};
	
	
	// -------------------------- stamp -------------------------- //
	
	/**
	 * makes space for element
	 * @param {Element} elem
	 */
	proto._manageStamp = function( elem ) {
	
	  var item = this.getItem( elem );
	  var rect;
	  if ( item && item.isPlacing ) {
	    rect = item.rect;
	  } else {
	    var offset = this._getElementOffset( elem );
	    rect = new Rect({
	      x: this._getOption('originLeft') ? offset.left : offset.right,
	      y: this._getOption('originTop') ? offset.top : offset.bottom
	    });
	  }
	
	  this._setRectSize( elem, rect );
	  // save its space in the packer
	  this.packer.placed( rect );
	  this._setMaxXY( rect );
	};
	
	// -------------------------- methods -------------------------- //
	
	function verticalSorter( a, b ) {
	  return a.position.y - b.position.y || a.position.x - b.position.x;
	}
	
	function horizontalSorter( a, b ) {
	  return a.position.x - b.position.x || a.position.y - b.position.y;
	}
	
	proto.sortItemsByPosition = function() {
	  var sorter = this._getOption('horizontal') ? horizontalSorter : verticalSorter;
	  this.items.sort( sorter );
	};
	
	/**
	 * Fit item element in its current position
	 * Packery will position elements around it
	 * useful for expanding elements
	 *
	 * @param {Element} elem
	 * @param {Number} x - horizontal destination position, optional
	 * @param {Number} y - vertical destination position, optional
	 */
	proto.fit = function( elem, x, y ) {
	  var item = this.getItem( elem );
	  if ( !item ) {
	    return;
	  }
	
	  // stamp item to get it out of layout
	  this.stamp( item.element );
	  // set placing flag
	  item.enablePlacing();
	  this.updateShiftTargets( item );
	  // fall back to current position for fitting
	  x = x === undefined ? item.rect.x: x;
	  y = y === undefined ? item.rect.y: y;
	  // position it best at its destination
	  this.shift( item, x, y );
	  this._bindFitEvents( item );
	  item.moveTo( item.rect.x, item.rect.y );
	  // layout everything else
	  this.shiftLayout();
	  // return back to regularly scheduled programming
	  this.unstamp( item.element );
	  this.sortItemsByPosition();
	  item.disablePlacing();
	};
	
	/**
	 * emit event when item is fit and other items are laid out
	 * @param {Packery.Item} item
	 * @private
	 */
	proto._bindFitEvents = function( item ) {
	  var _this = this;
	  var ticks = 0;
	  function onLayout() {
	    ticks++;
	    if ( ticks != 2 ) {
	      return;
	    }
	    _this.dispatchEvent( 'fitComplete', null, [ item ] );
	  }
	  // when item is laid out
	  item.once( 'layout', onLayout );
	  // when all items are laid out
	  this.once( 'layoutComplete', onLayout );
	};
	
	// -------------------------- resize -------------------------- //
	
	// debounced, layout on resize
	proto.resize = function() {
	  // don't trigger if size did not change
	  // or if resize was unbound. See #285, outlayer#9
	  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
	    return;
	  }
	
	  if ( this.options.shiftPercentResize ) {
	    this.resizeShiftPercentLayout();
	  } else {
	    this.layout();
	  }
	};
	
	/**
	 * check if layout is needed post layout
	 * @returns Boolean
	 */
	proto.needsResizeLayout = function() {
	  var size = getSize( this.element );
	  var innerSize = this._getOption('horizontal') ? 'innerHeight' : 'innerWidth';
	  return size[ innerSize ] != this.size[ innerSize ];
	};
	
	proto.resizeShiftPercentLayout = function() {
	  var items = this._getItemsForLayout( this.items );
	
	  var isHorizontal = this._getOption('horizontal');
	  var coord = isHorizontal ? 'y' : 'x';
	  var measure = isHorizontal ? 'height' : 'width';
	  var segmentName = isHorizontal ? 'rowHeight' : 'columnWidth';
	  var innerSize = isHorizontal ? 'innerHeight' : 'innerWidth';
	
	  // proportional re-align items
	  var previousSegment = this[ segmentName ];
	  previousSegment = previousSegment && previousSegment + this.gutter;
	
	  if ( previousSegment ) {
	    this._getMeasurements();
	    var currentSegment = this[ segmentName ] + this.gutter;
	    items.forEach( function( item ) {
	      var seg = Math.round( item.rect[ coord ] / previousSegment );
	      item.rect[ coord ] = seg * currentSegment;
	    });
	  } else {
	    var currentSize = getSize( this.element )[ innerSize ] + this.gutter;
	    var previousSize = this.packer[ measure ];
	    items.forEach( function( item ) {
	      item.rect[ coord ] = ( item.rect[ coord ] / previousSize ) * currentSize;
	    });
	  }
	
	  this.shiftLayout();
	};
	
	// -------------------------- drag -------------------------- //
	
	/**
	 * handle an item drag start event
	 * @param {Element} elem
	 */
	proto.itemDragStart = function( elem ) {
	  if ( !this.isEnabled ) {
	    return;
	  }
	  this.stamp( elem );
	  // this.ignore( elem );
	  var item = this.getItem( elem );
	  if ( !item ) {
	    return;
	  }
	
	  item.enablePlacing();
	  item.showDropPlaceholder();
	  this.dragItemCount++;
	  this.updateShiftTargets( item );
	};
	
	proto.updateShiftTargets = function( dropItem ) {
	  this.shiftPacker.reset();
	
	  // pack stamps
	  this._getBoundingRect();
	  var isOriginLeft = this._getOption('originLeft');
	  var isOriginTop = this._getOption('originTop');
	  this.stamps.forEach( function( stamp ) {
	    // ignore dragged item
	    var item = this.getItem( stamp );
	    if ( item && item.isPlacing ) {
	      return;
	    }
	    var offset = this._getElementOffset( stamp );
	    var rect = new Rect({
	      x: isOriginLeft ? offset.left : offset.right,
	      y: isOriginTop ? offset.top : offset.bottom
	    });
	    this._setRectSize( stamp, rect );
	    // save its space in the packer
	    this.shiftPacker.placed( rect );
	  }, this );
	
	  // reset shiftTargets
	  var isHorizontal = this._getOption('horizontal');
	  var segmentName = isHorizontal ? 'rowHeight' : 'columnWidth';
	  var measure = isHorizontal ? 'height' : 'width';
	
	  this.shiftTargetKeys = [];
	  this.shiftTargets = [];
	  var boundsSize;
	  var segment = this[ segmentName ];
	  segment = segment && segment + this.gutter;
	
	  if ( segment ) {
	    var segmentSpan = Math.ceil( dropItem.rect[ measure ] / segment );
	    var segs = Math.floor( ( this.shiftPacker[ measure ] + this.gutter ) / segment );
	    boundsSize = ( segs - segmentSpan ) * segment;
	    // add targets on top
	    for ( var i=0; i < segs; i++ ) {
	      var initialX = isHorizontal ? 0 : i * segment;
	      var initialY = isHorizontal ? i * segment : 0;
	      this._addShiftTarget( initialX, initialY, boundsSize );
	    }
	  } else {
	    boundsSize = ( this.shiftPacker[ measure ] + this.gutter ) - dropItem.rect[ measure ];
	    this._addShiftTarget( 0, 0, boundsSize );
	  }
	
	  // pack each item to measure where shiftTargets are
	  var items = this._getItemsForLayout( this.items );
	  var packMethod = this._getPackMethod();
	  items.forEach( function( item ) {
	    var rect = item.rect;
	    this._setRectSize( item.element, rect );
	    this.shiftPacker[ packMethod ]( rect );
	
	    // add top left corner
	    this._addShiftTarget( rect.x, rect.y, boundsSize );
	    // add bottom left / top right corner
	    var cornerX = isHorizontal ? rect.x + rect.width : rect.x;
	    var cornerY = isHorizontal ? rect.y : rect.y + rect.height;
	    this._addShiftTarget( cornerX, cornerY, boundsSize );
	
	    if ( segment ) {
	      // add targets for each column on bottom / row on right
	      var segSpan = Math.round( rect[ measure ] / segment );
	      for ( var i=1; i < segSpan; i++ ) {
	        var segX = isHorizontal ? cornerX : rect.x + segment * i;
	        var segY = isHorizontal ? rect.y + segment * i : cornerY;
	        this._addShiftTarget( segX, segY, boundsSize );
	      }
	    }
	  }, this );
	
	};
	
	proto._addShiftTarget = function( x, y, boundsSize ) {
	  var checkCoord = this._getOption('horizontal') ? y : x;
	  if ( checkCoord !== 0 && checkCoord > boundsSize ) {
	    return;
	  }
	  // create string for a key, easier to keep track of what targets
	  var key = x + ',' + y;
	  var hasKey = this.shiftTargetKeys.indexOf( key ) != -1;
	  if ( hasKey ) {
	    return;
	  }
	  this.shiftTargetKeys.push( key );
	  this.shiftTargets.push({ x: x, y: y });
	};
	
	// -------------------------- drop -------------------------- //
	
	proto.shift = function( item, x, y ) {
	  var shiftPosition;
	  var minDistance = Infinity;
	  var position = { x: x, y: y };
	  this.shiftTargets.forEach( function( target ) {
	    var distance = getDistance( target, position );
	    if ( distance < minDistance ) {
	      shiftPosition = target;
	      minDistance = distance;
	    }
	  });
	  item.rect.x = shiftPosition.x;
	  item.rect.y = shiftPosition.y;
	};
	
	function getDistance( a, b ) {
	  var dx = b.x - a.x;
	  var dy = b.y - a.y;
	  return Math.sqrt( dx * dx + dy * dy );
	}
	
	// -------------------------- drag move -------------------------- //
	
	var DRAG_THROTTLE_TIME = 120;
	
	/**
	 * handle an item drag move event
	 * @param {Element} elem
	 * @param {Number} x - horizontal change in position
	 * @param {Number} y - vertical change in position
	 */
	proto.itemDragMove = function( elem, x, y ) {
	  var item = this.isEnabled && this.getItem( elem );
	  if ( !item ) {
	    return;
	  }
	
	  x -= this.size.paddingLeft;
	  y -= this.size.paddingTop;
	
	  var _this = this;
	  function onDrag() {
	    _this.shift( item, x, y );
	    item.positionDropPlaceholder();
	    _this.layout();
	  }
	
	  // throttle
	  var now = new Date();
	  if ( this._itemDragTime && now - this._itemDragTime < DRAG_THROTTLE_TIME ) {
	    clearTimeout( this.dragTimeout );
	    this.dragTimeout = setTimeout( onDrag, DRAG_THROTTLE_TIME );
	  } else {
	    onDrag();
	    this._itemDragTime = now;
	  }
	};
	
	// -------------------------- drag end -------------------------- //
	
	/**
	 * handle an item drag end event
	 * @param {Element} elem
	 */
	proto.itemDragEnd = function( elem ) {
	  var item = this.isEnabled && this.getItem( elem );
	  if ( !item ) {
	    return;
	  }
	
	  clearTimeout( this.dragTimeout );
	  item.element.classList.add('is-positioning-post-drag');
	
	  var completeCount = 0;
	  var _this = this;
	  function onDragEndLayoutComplete() {
	    completeCount++;
	    if ( completeCount != 2 ) {
	      return;
	    }
	    // reset drag item
	    item.element.classList.remove('is-positioning-post-drag');
	    item.hideDropPlaceholder();
	    _this.dispatchEvent( 'dragItemPositioned', null, [ item ] );
	  }
	
	  item.once( 'layout', onDragEndLayoutComplete );
	  this.once( 'layoutComplete', onDragEndLayoutComplete );
	  item.moveTo( item.rect.x, item.rect.y );
	  this.layout();
	  this.dragItemCount = Math.max( 0, this.dragItemCount - 1 );
	  this.sortItemsByPosition();
	  item.disablePlacing();
	  this.unstamp( item.element );
	};
	
	/**
	 * binds Draggabilly events
	 * @param {Draggabilly} draggie
	 */
	proto.bindDraggabillyEvents = function( draggie ) {
	  this._bindDraggabillyEvents( draggie, 'on' );
	};
	
	proto.unbindDraggabillyEvents = function( draggie ) {
	  this._bindDraggabillyEvents( draggie, 'off' );
	};
	
	proto._bindDraggabillyEvents = function( draggie, method ) {
	  var handlers = this.handleDraggabilly;
	  draggie[ method ]( 'dragStart', handlers.dragStart );
	  draggie[ method ]( 'dragMove', handlers.dragMove );
	  draggie[ method ]( 'dragEnd', handlers.dragEnd );
	};
	
	/**
	 * binds jQuery UI Draggable events
	 * @param {jQuery} $elems
	 */
	proto.bindUIDraggableEvents = function( $elems ) {
	  this._bindUIDraggableEvents( $elems, 'on' );
	};
	
	proto.unbindUIDraggableEvents = function( $elems ) {
	  this._bindUIDraggableEvents( $elems, 'off' );
	};
	
	proto._bindUIDraggableEvents = function( $elems, method ) {
	  var handlers = this.handleUIDraggable;
	  $elems
	    [ method ]( 'dragstart', handlers.start )
	    [ method ]( 'drag', handlers.drag )
	    [ method ]( 'dragstop', handlers.stop );
	};
	
	// ----- destroy ----- //
	
	var _destroy = proto.destroy;
	proto.destroy = function() {
	  _destroy.apply( this, arguments );
	  // disable flag; prevent drag events from triggering. #72
	  this.isEnabled = false;
	};
	
	// -----  ----- //
	
	Packery.Rect = Rect;
	Packery.Packer = Packer;
	
	return Packery;
	
	}));


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Outlayer v2.1.0
	 * the brains and guts of a layout library
	 * MIT license
	 */
	
	( function( window, factory ) {
	  'use strict';
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, require */
	  if ( true ) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(10),
	        __webpack_require__(11),
	        __webpack_require__(12),
	        __webpack_require__(28)
	      ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter, getSize, utils, Item ) {
	        return factory( window, EvEmitter, getSize, utils, Item);
	      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory(
	      window,
	      require('ev-emitter'),
	      require('get-size'),
	      require('fizzy-ui-utils'),
	      require('./item')
	    );
	  } else {
	    // browser global
	    window.Outlayer = factory(
	      window,
	      window.EvEmitter,
	      window.getSize,
	      window.fizzyUIUtils,
	      window.Outlayer.Item
	    );
	  }
	
	}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
	'use strict';
	
	// ----- vars ----- //
	
	var console = window.console;
	var jQuery = window.jQuery;
	var noop = function() {};
	
	// -------------------------- Outlayer -------------------------- //
	
	// globally unique identifiers
	var GUID = 0;
	// internal store of all Outlayer intances
	var instances = {};
	
	
	/**
	 * @param {Element, String} element
	 * @param {Object} options
	 * @constructor
	 */
	function Outlayer( element, options ) {
	  var queryElement = utils.getQueryElement( element );
	  if ( !queryElement ) {
	    if ( console ) {
	      console.error( 'Bad element for ' + this.constructor.namespace +
	        ': ' + ( queryElement || element ) );
	    }
	    return;
	  }
	  this.element = queryElement;
	  // add jQuery
	  if ( jQuery ) {
	    this.$element = jQuery( this.element );
	  }
	
	  // options
	  this.options = utils.extend( {}, this.constructor.defaults );
	  this.option( options );
	
	  // add id for Outlayer.getFromElement
	  var id = ++GUID;
	  this.element.outlayerGUID = id; // expando
	  instances[ id ] = this; // associate via id
	
	  // kick it off
	  this._create();
	
	  var isInitLayout = this._getOption('initLayout');
	  if ( isInitLayout ) {
	    this.layout();
	  }
	}
	
	// settings are for internal use only
	Outlayer.namespace = 'outlayer';
	Outlayer.Item = Item;
	
	// default options
	Outlayer.defaults = {
	  containerStyle: {
	    position: 'relative'
	  },
	  initLayout: true,
	  originLeft: true,
	  originTop: true,
	  resize: true,
	  resizeContainer: true,
	  // item options
	  transitionDuration: '0.4s',
	  hiddenStyle: {
	    opacity: 0,
	    transform: 'scale(0.001)'
	  },
	  visibleStyle: {
	    opacity: 1,
	    transform: 'scale(1)'
	  }
	};
	
	var proto = Outlayer.prototype;
	// inherit EvEmitter
	utils.extend( proto, EvEmitter.prototype );
	
	/**
	 * set options
	 * @param {Object} opts
	 */
	proto.option = function( opts ) {
	  utils.extend( this.options, opts );
	};
	
	/**
	 * get backwards compatible option value, check old name
	 */
	proto._getOption = function( option ) {
	  var oldOption = this.constructor.compatOptions[ option ];
	  return oldOption && this.options[ oldOption ] !== undefined ?
	    this.options[ oldOption ] : this.options[ option ];
	};
	
	Outlayer.compatOptions = {
	  // currentName: oldName
	  initLayout: 'isInitLayout',
	  horizontal: 'isHorizontal',
	  layoutInstant: 'isLayoutInstant',
	  originLeft: 'isOriginLeft',
	  originTop: 'isOriginTop',
	  resize: 'isResizeBound',
	  resizeContainer: 'isResizingContainer'
	};
	
	proto._create = function() {
	  // get items from children
	  this.reloadItems();
	  // elements that affect layout, but are not laid out
	  this.stamps = [];
	  this.stamp( this.options.stamp );
	  // set container style
	  utils.extend( this.element.style, this.options.containerStyle );
	
	  // bind resize method
	  var canBindResize = this._getOption('resize');
	  if ( canBindResize ) {
	    this.bindResize();
	  }
	};
	
	// goes through all children again and gets bricks in proper order
	proto.reloadItems = function() {
	  // collection of item elements
	  this.items = this._itemize( this.element.children );
	};
	
	
	/**
	 * turn elements into Outlayer.Items to be used in layout
	 * @param {Array or NodeList or HTMLElement} elems
	 * @returns {Array} items - collection of new Outlayer Items
	 */
	proto._itemize = function( elems ) {
	
	  var itemElems = this._filterFindItemElements( elems );
	  var Item = this.constructor.Item;
	
	  // create new Outlayer Items for collection
	  var items = [];
	  for ( var i=0; i < itemElems.length; i++ ) {
	    var elem = itemElems[i];
	    var item = new Item( elem, this );
	    items.push( item );
	  }
	
	  return items;
	};
	
	/**
	 * get item elements to be used in layout
	 * @param {Array or NodeList or HTMLElement} elems
	 * @returns {Array} items - item elements
	 */
	proto._filterFindItemElements = function( elems ) {
	  return utils.filterFindElements( elems, this.options.itemSelector );
	};
	
	/**
	 * getter method for getting item elements
	 * @returns {Array} elems - collection of item elements
	 */
	proto.getItemElements = function() {
	  return this.items.map( function( item ) {
	    return item.element;
	  });
	};
	
	// ----- init & layout ----- //
	
	/**
	 * lays out all items
	 */
	proto.layout = function() {
	  this._resetLayout();
	  this._manageStamps();
	
	  // don't animate first layout
	  var layoutInstant = this._getOption('layoutInstant');
	  var isInstant = layoutInstant !== undefined ?
	    layoutInstant : !this._isLayoutInited;
	  this.layoutItems( this.items, isInstant );
	
	  // flag for initalized
	  this._isLayoutInited = true;
	};
	
	// _init is alias for layout
	proto._init = proto.layout;
	
	/**
	 * logic before any new layout
	 */
	proto._resetLayout = function() {
	  this.getSize();
	};
	
	
	proto.getSize = function() {
	  this.size = getSize( this.element );
	};
	
	/**
	 * get measurement from option, for columnWidth, rowHeight, gutter
	 * if option is String -> get element from selector string, & get size of element
	 * if option is Element -> get size of element
	 * else use option as a number
	 *
	 * @param {String} measurement
	 * @param {String} size - width or height
	 * @private
	 */
	proto._getMeasurement = function( measurement, size ) {
	  var option = this.options[ measurement ];
	  var elem;
	  if ( !option ) {
	    // default to 0
	    this[ measurement ] = 0;
	  } else {
	    // use option as an element
	    if ( typeof option == 'string' ) {
	      elem = this.element.querySelector( option );
	    } else if ( option instanceof HTMLElement ) {
	      elem = option;
	    }
	    // use size of element, if element
	    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
	  }
	};
	
	/**
	 * layout a collection of item elements
	 * @api public
	 */
	proto.layoutItems = function( items, isInstant ) {
	  items = this._getItemsForLayout( items );
	
	  this._layoutItems( items, isInstant );
	
	  this._postLayout();
	};
	
	/**
	 * get the items to be laid out
	 * you may want to skip over some items
	 * @param {Array} items
	 * @returns {Array} items
	 */
	proto._getItemsForLayout = function( items ) {
	  return items.filter( function( item ) {
	    return !item.isIgnored;
	  });
	};
	
	/**
	 * layout items
	 * @param {Array} items
	 * @param {Boolean} isInstant
	 */
	proto._layoutItems = function( items, isInstant ) {
	  this._emitCompleteOnItems( 'layout', items );
	
	  if ( !items || !items.length ) {
	    // no items, emit event with empty array
	    return;
	  }
	
	  var queue = [];
	
	  items.forEach( function( item ) {
	    // get x/y object from method
	    var position = this._getItemLayoutPosition( item );
	    // enqueue
	    position.item = item;
	    position.isInstant = isInstant || item.isLayoutInstant;
	    queue.push( position );
	  }, this );
	
	  this._processLayoutQueue( queue );
	};
	
	/**
	 * get item layout position
	 * @param {Outlayer.Item} item
	 * @returns {Object} x and y position
	 */
	proto._getItemLayoutPosition = function( /* item */ ) {
	  return {
	    x: 0,
	    y: 0
	  };
	};
	
	/**
	 * iterate over array and position each item
	 * Reason being - separating this logic prevents 'layout invalidation'
	 * thx @paul_irish
	 * @param {Array} queue
	 */
	proto._processLayoutQueue = function( queue ) {
	  this.updateStagger();
	  queue.forEach( function( obj, i ) {
	    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
	  }, this );
	};
	
	// set stagger from option in milliseconds number
	proto.updateStagger = function() {
	  var stagger = this.options.stagger;
	  if ( stagger === null || stagger === undefined ) {
	    this.stagger = 0;
	    return;
	  }
	  this.stagger = getMilliseconds( stagger );
	  return this.stagger;
	};
	
	/**
	 * Sets position of item in DOM
	 * @param {Outlayer.Item} item
	 * @param {Number} x - horizontal position
	 * @param {Number} y - vertical position
	 * @param {Boolean} isInstant - disables transitions
	 */
	proto._positionItem = function( item, x, y, isInstant, i ) {
	  if ( isInstant ) {
	    // if not transition, just set CSS
	    item.goTo( x, y );
	  } else {
	    item.stagger( i * this.stagger );
	    item.moveTo( x, y );
	  }
	};
	
	/**
	 * Any logic you want to do after each layout,
	 * i.e. size the container
	 */
	proto._postLayout = function() {
	  this.resizeContainer();
	};
	
	proto.resizeContainer = function() {
	  var isResizingContainer = this._getOption('resizeContainer');
	  if ( !isResizingContainer ) {
	    return;
	  }
	  var size = this._getContainerSize();
	  if ( size ) {
	    this._setContainerMeasure( size.width, true );
	    this._setContainerMeasure( size.height, false );
	  }
	};
	
	/**
	 * Sets width or height of container if returned
	 * @returns {Object} size
	 *   @param {Number} width
	 *   @param {Number} height
	 */
	proto._getContainerSize = noop;
	
	/**
	 * @param {Number} measure - size of width or height
	 * @param {Boolean} isWidth
	 */
	proto._setContainerMeasure = function( measure, isWidth ) {
	  if ( measure === undefined ) {
	    return;
	  }
	
	  var elemSize = this.size;
	  // add padding and border width if border box
	  if ( elemSize.isBorderBox ) {
	    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
	      elemSize.borderLeftWidth + elemSize.borderRightWidth :
	      elemSize.paddingBottom + elemSize.paddingTop +
	      elemSize.borderTopWidth + elemSize.borderBottomWidth;
	  }
	
	  measure = Math.max( measure, 0 );
	  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
	};
	
	/**
	 * emit eventComplete on a collection of items events
	 * @param {String} eventName
	 * @param {Array} items - Outlayer.Items
	 */
	proto._emitCompleteOnItems = function( eventName, items ) {
	  var _this = this;
	  function onComplete() {
	    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
	  }
	
	  var count = items.length;
	  if ( !items || !count ) {
	    onComplete();
	    return;
	  }
	
	  var doneCount = 0;
	  function tick() {
	    doneCount++;
	    if ( doneCount == count ) {
	      onComplete();
	    }
	  }
	
	  // bind callback
	  items.forEach( function( item ) {
	    item.once( eventName, tick );
	  });
	};
	
	/**
	 * emits events via EvEmitter and jQuery events
	 * @param {String} type - name of event
	 * @param {Event} event - original event
	 * @param {Array} args - extra arguments
	 */
	proto.dispatchEvent = function( type, event, args ) {
	  // add original event to arguments
	  var emitArgs = event ? [ event ].concat( args ) : args;
	  this.emitEvent( type, emitArgs );
	
	  if ( jQuery ) {
	    // set this.$element
	    this.$element = this.$element || jQuery( this.element );
	    if ( event ) {
	      // create jQuery event
	      var $event = jQuery.Event( event );
	      $event.type = type;
	      this.$element.trigger( $event, args );
	    } else {
	      // just trigger with type if no event available
	      this.$element.trigger( type, args );
	    }
	  }
	};
	
	// -------------------------- ignore & stamps -------------------------- //
	
	
	/**
	 * keep item in collection, but do not lay it out
	 * ignored items do not get skipped in layout
	 * @param {Element} elem
	 */
	proto.ignore = function( elem ) {
	  var item = this.getItem( elem );
	  if ( item ) {
	    item.isIgnored = true;
	  }
	};
	
	/**
	 * return item to layout collection
	 * @param {Element} elem
	 */
	proto.unignore = function( elem ) {
	  var item = this.getItem( elem );
	  if ( item ) {
	    delete item.isIgnored;
	  }
	};
	
	/**
	 * adds elements to stamps
	 * @param {NodeList, Array, Element, or String} elems
	 */
	proto.stamp = function( elems ) {
	  elems = this._find( elems );
	  if ( !elems ) {
	    return;
	  }
	
	  this.stamps = this.stamps.concat( elems );
	  // ignore
	  elems.forEach( this.ignore, this );
	};
	
	/**
	 * removes elements to stamps
	 * @param {NodeList, Array, or Element} elems
	 */
	proto.unstamp = function( elems ) {
	  elems = this._find( elems );
	  if ( !elems ){
	    return;
	  }
	
	  elems.forEach( function( elem ) {
	    // filter out removed stamp elements
	    utils.removeFrom( this.stamps, elem );
	    this.unignore( elem );
	  }, this );
	};
	
	/**
	 * finds child elements
	 * @param {NodeList, Array, Element, or String} elems
	 * @returns {Array} elems
	 */
	proto._find = function( elems ) {
	  if ( !elems ) {
	    return;
	  }
	  // if string, use argument as selector string
	  if ( typeof elems == 'string' ) {
	    elems = this.element.querySelectorAll( elems );
	  }
	  elems = utils.makeArray( elems );
	  return elems;
	};
	
	proto._manageStamps = function() {
	  if ( !this.stamps || !this.stamps.length ) {
	    return;
	  }
	
	  this._getBoundingRect();
	
	  this.stamps.forEach( this._manageStamp, this );
	};
	
	// update boundingLeft / Top
	proto._getBoundingRect = function() {
	  // get bounding rect for container element
	  var boundingRect = this.element.getBoundingClientRect();
	  var size = this.size;
	  this._boundingRect = {
	    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
	    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
	    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
	    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
	  };
	};
	
	/**
	 * @param {Element} stamp
	**/
	proto._manageStamp = noop;
	
	/**
	 * get x/y position of element relative to container element
	 * @param {Element} elem
	 * @returns {Object} offset - has left, top, right, bottom
	 */
	proto._getElementOffset = function( elem ) {
	  var boundingRect = elem.getBoundingClientRect();
	  var thisRect = this._boundingRect;
	  var size = getSize( elem );
	  var offset = {
	    left: boundingRect.left - thisRect.left - size.marginLeft,
	    top: boundingRect.top - thisRect.top - size.marginTop,
	    right: thisRect.right - boundingRect.right - size.marginRight,
	    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
	  };
	  return offset;
	};
	
	// -------------------------- resize -------------------------- //
	
	// enable event handlers for listeners
	// i.e. resize -> onresize
	proto.handleEvent = utils.handleEvent;
	
	/**
	 * Bind layout to window resizing
	 */
	proto.bindResize = function() {
	  window.addEventListener( 'resize', this );
	  this.isResizeBound = true;
	};
	
	/**
	 * Unbind layout to window resizing
	 */
	proto.unbindResize = function() {
	  window.removeEventListener( 'resize', this );
	  this.isResizeBound = false;
	};
	
	proto.onresize = function() {
	  this.resize();
	};
	
	utils.debounceMethod( Outlayer, 'onresize', 100 );
	
	proto.resize = function() {
	  // don't trigger if size did not change
	  // or if resize was unbound. See #9
	  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
	    return;
	  }
	
	  this.layout();
	};
	
	/**
	 * check if layout is needed post layout
	 * @returns Boolean
	 */
	proto.needsResizeLayout = function() {
	  var size = getSize( this.element );
	  // check that this.size and size are there
	  // IE8 triggers resize on body size change, so they might not be
	  var hasSizes = this.size && size;
	  return hasSizes && size.innerWidth !== this.size.innerWidth;
	};
	
	// -------------------------- methods -------------------------- //
	
	/**
	 * add items to Outlayer instance
	 * @param {Array or NodeList or Element} elems
	 * @returns {Array} items - Outlayer.Items
	**/
	proto.addItems = function( elems ) {
	  var items = this._itemize( elems );
	  // add items to collection
	  if ( items.length ) {
	    this.items = this.items.concat( items );
	  }
	  return items;
	};
	
	/**
	 * Layout newly-appended item elements
	 * @param {Array or NodeList or Element} elems
	 */
	proto.appended = function( elems ) {
	  var items = this.addItems( elems );
	  if ( !items.length ) {
	    return;
	  }
	  // layout and reveal just the new items
	  this.layoutItems( items, true );
	  this.reveal( items );
	};
	
	/**
	 * Layout prepended elements
	 * @param {Array or NodeList or Element} elems
	 */
	proto.prepended = function( elems ) {
	  var items = this._itemize( elems );
	  if ( !items.length ) {
	    return;
	  }
	  // add items to beginning of collection
	  var previousItems = this.items.slice(0);
	  this.items = items.concat( previousItems );
	  // start new layout
	  this._resetLayout();
	  this._manageStamps();
	  // layout new stuff without transition
	  this.layoutItems( items, true );
	  this.reveal( items );
	  // layout previous items
	  this.layoutItems( previousItems );
	};
	
	/**
	 * reveal a collection of items
	 * @param {Array of Outlayer.Items} items
	 */
	proto.reveal = function( items ) {
	  this._emitCompleteOnItems( 'reveal', items );
	  if ( !items || !items.length ) {
	    return;
	  }
	  var stagger = this.updateStagger();
	  items.forEach( function( item, i ) {
	    item.stagger( i * stagger );
	    item.reveal();
	  });
	};
	
	/**
	 * hide a collection of items
	 * @param {Array of Outlayer.Items} items
	 */
	proto.hide = function( items ) {
	  this._emitCompleteOnItems( 'hide', items );
	  if ( !items || !items.length ) {
	    return;
	  }
	  var stagger = this.updateStagger();
	  items.forEach( function( item, i ) {
	    item.stagger( i * stagger );
	    item.hide();
	  });
	};
	
	/**
	 * reveal item elements
	 * @param {Array}, {Element}, {NodeList} items
	 */
	proto.revealItemElements = function( elems ) {
	  var items = this.getItems( elems );
	  this.reveal( items );
	};
	
	/**
	 * hide item elements
	 * @param {Array}, {Element}, {NodeList} items
	 */
	proto.hideItemElements = function( elems ) {
	  var items = this.getItems( elems );
	  this.hide( items );
	};
	
	/**
	 * get Outlayer.Item, given an Element
	 * @param {Element} elem
	 * @param {Function} callback
	 * @returns {Outlayer.Item} item
	 */
	proto.getItem = function( elem ) {
	  // loop through items to get the one that matches
	  for ( var i=0; i < this.items.length; i++ ) {
	    var item = this.items[i];
	    if ( item.element == elem ) {
	      // return item
	      return item;
	    }
	  }
	};
	
	/**
	 * get collection of Outlayer.Items, given Elements
	 * @param {Array} elems
	 * @returns {Array} items - Outlayer.Items
	 */
	proto.getItems = function( elems ) {
	  elems = utils.makeArray( elems );
	  var items = [];
	  elems.forEach( function( elem ) {
	    var item = this.getItem( elem );
	    if ( item ) {
	      items.push( item );
	    }
	  }, this );
	
	  return items;
	};
	
	/**
	 * remove element(s) from instance and DOM
	 * @param {Array or NodeList or Element} elems
	 */
	proto.remove = function( elems ) {
	  var removeItems = this.getItems( elems );
	
	  this._emitCompleteOnItems( 'remove', removeItems );
	
	  // bail if no items to remove
	  if ( !removeItems || !removeItems.length ) {
	    return;
	  }
	
	  removeItems.forEach( function( item ) {
	    item.remove();
	    // remove item from collection
	    utils.removeFrom( this.items, item );
	  }, this );
	};
	
	// ----- destroy ----- //
	
	// remove and disable Outlayer instance
	proto.destroy = function() {
	  // clean up dynamic styles
	  var style = this.element.style;
	  style.height = '';
	  style.position = '';
	  style.width = '';
	  // destroy items
	  this.items.forEach( function( item ) {
	    item.destroy();
	  });
	
	  this.unbindResize();
	
	  var id = this.element.outlayerGUID;
	  delete instances[ id ]; // remove reference to instance by id
	  delete this.element.outlayerGUID;
	  // remove data for jQuery
	  if ( jQuery ) {
	    jQuery.removeData( this.element, this.constructor.namespace );
	  }
	
	};
	
	// -------------------------- data -------------------------- //
	
	/**
	 * get Outlayer instance from element
	 * @param {Element} elem
	 * @returns {Outlayer}
	 */
	Outlayer.data = function( elem ) {
	  elem = utils.getQueryElement( elem );
	  var id = elem && elem.outlayerGUID;
	  return id && instances[ id ];
	};
	
	
	// -------------------------- create Outlayer class -------------------------- //
	
	/**
	 * create a layout class
	 * @param {String} namespace
	 */
	Outlayer.create = function( namespace, options ) {
	  // sub-class Outlayer
	  var Layout = subclass( Outlayer );
	  // apply new options and compatOptions
	  Layout.defaults = utils.extend( {}, Outlayer.defaults );
	  utils.extend( Layout.defaults, options );
	  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );
	
	  Layout.namespace = namespace;
	
	  Layout.data = Outlayer.data;
	
	  // sub-class Item
	  Layout.Item = subclass( Item );
	
	  // -------------------------- declarative -------------------------- //
	
	  utils.htmlInit( Layout, namespace );
	
	  // -------------------------- jQuery bridge -------------------------- //
	
	  // make into jQuery plugin
	  if ( jQuery && jQuery.bridget ) {
	    jQuery.bridget( namespace, Layout );
	  }
	
	  return Layout;
	};
	
	function subclass( Parent ) {
	  function SubClass() {
	    Parent.apply( this, arguments );
	  }
	
	  SubClass.prototype = Object.create( Parent.prototype );
	  SubClass.prototype.constructor = SubClass;
	
	  return SubClass;
	}
	
	// ----- helpers ----- //
	
	// how many milliseconds are in each unit
	var msUnits = {
	  ms: 1,
	  s: 1000
	};
	
	// munge time-like parameter into millisecond number
	// '0.4s' -> 40
	function getMilliseconds( time ) {
	  if ( typeof time == 'number' ) {
	    return time;
	  }
	  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
	  var num = matches && matches[1];
	  var unit = matches && matches[2];
	  if ( !num.length ) {
	    return 0;
	  }
	  num = parseFloat( num );
	  var mult = msUnits[ unit ] || 1;
	  return num * mult;
	}
	
	// ----- fin ----- //
	
	// back in global
	Outlayer.Item = Item;
	
	return Outlayer;
	
	}));


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Outlayer Item
	 */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, require */
	  if ( true ) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(10),
	        __webpack_require__(11)
	      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory(
	      require('ev-emitter'),
	      require('get-size')
	    );
	  } else {
	    // browser global
	    window.Outlayer = {};
	    window.Outlayer.Item = factory(
	      window.EvEmitter,
	      window.getSize
	    );
	  }
	
	}( window, function factory( EvEmitter, getSize ) {
	'use strict';
	
	// ----- helpers ----- //
	
	function isEmptyObj( obj ) {
	  for ( var prop in obj ) {
	    return false;
	  }
	  prop = null;
	  return true;
	}
	
	// -------------------------- CSS3 support -------------------------- //
	
	
	var docElemStyle = document.documentElement.style;
	
	var transitionProperty = typeof docElemStyle.transition == 'string' ?
	  'transition' : 'WebkitTransition';
	var transformProperty = typeof docElemStyle.transform == 'string' ?
	  'transform' : 'WebkitTransform';
	
	var transitionEndEvent = {
	  WebkitTransition: 'webkitTransitionEnd',
	  transition: 'transitionend'
	}[ transitionProperty ];
	
	// cache all vendor properties that could have vendor prefix
	var vendorProperties = {
	  transform: transformProperty,
	  transition: transitionProperty,
	  transitionDuration: transitionProperty + 'Duration',
	  transitionProperty: transitionProperty + 'Property',
	  transitionDelay: transitionProperty + 'Delay'
	};
	
	// -------------------------- Item -------------------------- //
	
	function Item( element, layout ) {
	  if ( !element ) {
	    return;
	  }
	
	  this.element = element;
	  // parent layout class, i.e. Masonry, Isotope, or Packery
	  this.layout = layout;
	  this.position = {
	    x: 0,
	    y: 0
	  };
	
	  this._create();
	}
	
	// inherit EvEmitter
	var proto = Item.prototype = Object.create( EvEmitter.prototype );
	proto.constructor = Item;
	
	proto._create = function() {
	  // transition objects
	  this._transn = {
	    ingProperties: {},
	    clean: {},
	    onEnd: {}
	  };
	
	  this.css({
	    position: 'absolute'
	  });
	};
	
	// trigger specified handler for event type
	proto.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};
	
	proto.getSize = function() {
	  this.size = getSize( this.element );
	};
	
	/**
	 * apply CSS styles to element
	 * @param {Object} style
	 */
	proto.css = function( style ) {
	  var elemStyle = this.element.style;
	
	  for ( var prop in style ) {
	    // use vendor property if available
	    var supportedProp = vendorProperties[ prop ] || prop;
	    elemStyle[ supportedProp ] = style[ prop ];
	  }
	};
	
	 // measure position, and sets it
	proto.getPosition = function() {
	  var style = getComputedStyle( this.element );
	  var isOriginLeft = this.layout._getOption('originLeft');
	  var isOriginTop = this.layout._getOption('originTop');
	  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
	  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
	  // convert percent to pixels
	  var layoutSize = this.layout.size;
	  var x = xValue.indexOf('%') != -1 ?
	    ( parseFloat( xValue ) / 100 ) * layoutSize.width : parseInt( xValue, 10 );
	  var y = yValue.indexOf('%') != -1 ?
	    ( parseFloat( yValue ) / 100 ) * layoutSize.height : parseInt( yValue, 10 );
	
	  // clean up 'auto' or other non-integer values
	  x = isNaN( x ) ? 0 : x;
	  y = isNaN( y ) ? 0 : y;
	  // remove padding from measurement
	  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
	  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
	
	  this.position.x = x;
	  this.position.y = y;
	};
	
	// set settled position, apply padding
	proto.layoutPosition = function() {
	  var layoutSize = this.layout.size;
	  var style = {};
	  var isOriginLeft = this.layout._getOption('originLeft');
	  var isOriginTop = this.layout._getOption('originTop');
	
	  // x
	  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
	  var xProperty = isOriginLeft ? 'left' : 'right';
	  var xResetProperty = isOriginLeft ? 'right' : 'left';
	
	  var x = this.position.x + layoutSize[ xPadding ];
	  // set in percentage or pixels
	  style[ xProperty ] = this.getXValue( x );
	  // reset other property
	  style[ xResetProperty ] = '';
	
	  // y
	  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
	  var yProperty = isOriginTop ? 'top' : 'bottom';
	  var yResetProperty = isOriginTop ? 'bottom' : 'top';
	
	  var y = this.position.y + layoutSize[ yPadding ];
	  // set in percentage or pixels
	  style[ yProperty ] = this.getYValue( y );
	  // reset other property
	  style[ yResetProperty ] = '';
	
	  this.css( style );
	  this.emitEvent( 'layout', [ this ] );
	};
	
	proto.getXValue = function( x ) {
	  var isHorizontal = this.layout._getOption('horizontal');
	  return this.layout.options.percentPosition && !isHorizontal ?
	    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
	};
	
	proto.getYValue = function( y ) {
	  var isHorizontal = this.layout._getOption('horizontal');
	  return this.layout.options.percentPosition && isHorizontal ?
	    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
	};
	
	proto._transitionTo = function( x, y ) {
	  this.getPosition();
	  // get current x & y from top/left
	  var curX = this.position.x;
	  var curY = this.position.y;
	
	  var compareX = parseInt( x, 10 );
	  var compareY = parseInt( y, 10 );
	  var didNotMove = compareX === this.position.x && compareY === this.position.y;
	
	  // save end position
	  this.setPosition( x, y );
	
	  // if did not move and not transitioning, just go to layout
	  if ( didNotMove && !this.isTransitioning ) {
	    this.layoutPosition();
	    return;
	  }
	
	  var transX = x - curX;
	  var transY = y - curY;
	  var transitionStyle = {};
	  transitionStyle.transform = this.getTranslate( transX, transY );
	
	  this.transition({
	    to: transitionStyle,
	    onTransitionEnd: {
	      transform: this.layoutPosition
	    },
	    isCleaning: true
	  });
	};
	
	proto.getTranslate = function( x, y ) {
	  // flip cooridinates if origin on right or bottom
	  var isOriginLeft = this.layout._getOption('originLeft');
	  var isOriginTop = this.layout._getOption('originTop');
	  x = isOriginLeft ? x : -x;
	  y = isOriginTop ? y : -y;
	  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
	};
	
	// non transition + transform support
	proto.goTo = function( x, y ) {
	  this.setPosition( x, y );
	  this.layoutPosition();
	};
	
	proto.moveTo = proto._transitionTo;
	
	proto.setPosition = function( x, y ) {
	  this.position.x = parseInt( x, 10 );
	  this.position.y = parseInt( y, 10 );
	};
	
	// ----- transition ----- //
	
	/**
	 * @param {Object} style - CSS
	 * @param {Function} onTransitionEnd
	 */
	
	// non transition, just trigger callback
	proto._nonTransition = function( args ) {
	  this.css( args.to );
	  if ( args.isCleaning ) {
	    this._removeStyles( args.to );
	  }
	  for ( var prop in args.onTransitionEnd ) {
	    args.onTransitionEnd[ prop ].call( this );
	  }
	};
	
	/**
	 * proper transition
	 * @param {Object} args - arguments
	 *   @param {Object} to - style to transition to
	 *   @param {Object} from - style to start transition from
	 *   @param {Boolean} isCleaning - removes transition styles after transition
	 *   @param {Function} onTransitionEnd - callback
	 */
	proto.transition = function( args ) {
	  // redirect to nonTransition if no transition duration
	  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
	    this._nonTransition( args );
	    return;
	  }
	
	  var _transition = this._transn;
	  // keep track of onTransitionEnd callback by css property
	  for ( var prop in args.onTransitionEnd ) {
	    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
	  }
	  // keep track of properties that are transitioning
	  for ( prop in args.to ) {
	    _transition.ingProperties[ prop ] = true;
	    // keep track of properties to clean up when transition is done
	    if ( args.isCleaning ) {
	      _transition.clean[ prop ] = true;
	    }
	  }
	
	  // set from styles
	  if ( args.from ) {
	    this.css( args.from );
	    // force redraw. http://blog.alexmaccaw.com/css-transitions
	    var h = this.element.offsetHeight;
	    // hack for JSHint to hush about unused var
	    h = null;
	  }
	  // enable transition
	  this.enableTransition( args.to );
	  // set styles that are transitioning
	  this.css( args.to );
	
	  this.isTransitioning = true;
	
	};
	
	// dash before all cap letters, including first for
	// WebkitTransform => -webkit-transform
	function toDashedAll( str ) {
	  return str.replace( /([A-Z])/g, function( $1 ) {
	    return '-' + $1.toLowerCase();
	  });
	}
	
	var transitionProps = 'opacity,' + toDashedAll( transformProperty );
	
	proto.enableTransition = function(/* style */) {
	  // HACK changing transitionProperty during a transition
	  // will cause transition to jump
	  if ( this.isTransitioning ) {
	    return;
	  }
	
	  // make `transition: foo, bar, baz` from style object
	  // HACK un-comment this when enableTransition can work
	  // while a transition is happening
	  // var transitionValues = [];
	  // for ( var prop in style ) {
	  //   // dash-ify camelCased properties like WebkitTransition
	  //   prop = vendorProperties[ prop ] || prop;
	  //   transitionValues.push( toDashedAll( prop ) );
	  // }
	  // munge number to millisecond, to match stagger
	  var duration = this.layout.options.transitionDuration;
	  duration = typeof duration == 'number' ? duration + 'ms' : duration;
	  // enable transition styles
	  this.css({
	    transitionProperty: transitionProps,
	    transitionDuration: duration,
	    transitionDelay: this.staggerDelay || 0
	  });
	  // listen for transition end event
	  this.element.addEventListener( transitionEndEvent, this, false );
	};
	
	// ----- events ----- //
	
	proto.onwebkitTransitionEnd = function( event ) {
	  this.ontransitionend( event );
	};
	
	proto.onotransitionend = function( event ) {
	  this.ontransitionend( event );
	};
	
	// properties that I munge to make my life easier
	var dashedVendorProperties = {
	  '-webkit-transform': 'transform'
	};
	
	proto.ontransitionend = function( event ) {
	  // disregard bubbled events from children
	  if ( event.target !== this.element ) {
	    return;
	  }
	  var _transition = this._transn;
	  // get property name of transitioned property, convert to prefix-free
	  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;
	
	  // remove property that has completed transitioning
	  delete _transition.ingProperties[ propertyName ];
	  // check if any properties are still transitioning
	  if ( isEmptyObj( _transition.ingProperties ) ) {
	    // all properties have completed transitioning
	    this.disableTransition();
	  }
	  // clean style
	  if ( propertyName in _transition.clean ) {
	    // clean up style
	    this.element.style[ event.propertyName ] = '';
	    delete _transition.clean[ propertyName ];
	  }
	  // trigger onTransitionEnd callback
	  if ( propertyName in _transition.onEnd ) {
	    var onTransitionEnd = _transition.onEnd[ propertyName ];
	    onTransitionEnd.call( this );
	    delete _transition.onEnd[ propertyName ];
	  }
	
	  this.emitEvent( 'transitionEnd', [ this ] );
	};
	
	proto.disableTransition = function() {
	  this.removeTransitionStyles();
	  this.element.removeEventListener( transitionEndEvent, this, false );
	  this.isTransitioning = false;
	};
	
	/**
	 * removes style property from element
	 * @param {Object} style
	**/
	proto._removeStyles = function( style ) {
	  // clean up transition styles
	  var cleanStyle = {};
	  for ( var prop in style ) {
	    cleanStyle[ prop ] = '';
	  }
	  this.css( cleanStyle );
	};
	
	var cleanTransitionStyle = {
	  transitionProperty: '',
	  transitionDuration: '',
	  transitionDelay: ''
	};
	
	proto.removeTransitionStyles = function() {
	  // remove transition
	  this.css( cleanTransitionStyle );
	};
	
	// ----- stagger ----- //
	
	proto.stagger = function( delay ) {
	  delay = isNaN( delay ) ? 0 : delay;
	  this.staggerDelay = delay + 'ms';
	};
	
	// ----- show/hide/remove ----- //
	
	// remove element from DOM
	proto.removeElem = function() {
	  this.element.parentNode.removeChild( this.element );
	  // remove display: none
	  this.css({ display: '' });
	  this.emitEvent( 'remove', [ this ] );
	};
	
	proto.remove = function() {
	  // just remove element if no transition support or no transition
	  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
	    this.removeElem();
	    return;
	  }
	
	  // start transition
	  this.once( 'transitionEnd', function() {
	    this.removeElem();
	  });
	  this.hide();
	};
	
	proto.reveal = function() {
	  delete this.isHidden;
	  // remove display: none
	  this.css({ display: '' });
	
	  var options = this.layout.options;
	
	  var onTransitionEnd = {};
	  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
	  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;
	
	  this.transition({
	    from: options.hiddenStyle,
	    to: options.visibleStyle,
	    isCleaning: true,
	    onTransitionEnd: onTransitionEnd
	  });
	};
	
	proto.onRevealTransitionEnd = function() {
	  // check if still visible
	  // during transition, item may have been hidden
	  if ( !this.isHidden ) {
	    this.emitEvent('reveal');
	  }
	};
	
	/**
	 * get style property use for hide/reveal transition end
	 * @param {String} styleProperty - hiddenStyle/visibleStyle
	 * @returns {String}
	 */
	proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
	  var optionStyle = this.layout.options[ styleProperty ];
	  // use opacity
	  if ( optionStyle.opacity ) {
	    return 'opacity';
	  }
	  // get first property
	  for ( var prop in optionStyle ) {
	    return prop;
	  }
	};
	
	proto.hide = function() {
	  // set flag
	  this.isHidden = true;
	  // remove display: none
	  this.css({ display: '' });
	
	  var options = this.layout.options;
	
	  var onTransitionEnd = {};
	  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
	  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;
	
	  this.transition({
	    from: options.visibleStyle,
	    to: options.hiddenStyle,
	    // keep hidden stuff hidden
	    isCleaning: true,
	    onTransitionEnd: onTransitionEnd
	  });
	};
	
	proto.onHideTransitionEnd = function() {
	  // check if still hidden
	  // during transition, item may have been un-hidden
	  if ( this.isHidden ) {
	    this.css({ display: 'none' });
	    this.emitEvent('hide');
	  }
	};
	
	proto.destroy = function() {
	  this.css({
	    position: '',
	    left: '',
	    right: '',
	    top: '',
	    bottom: '',
	    transition: '',
	    transform: ''
	  });
	};
	
	return Item;
	
	}));


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Rect
	 * low-level utility class for basic geometry
	 */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.Packery = window.Packery || {};
	    window.Packery.Rect = factory();
	  }
	
	}( window, function factory() {
	'use strict';
	
	// -------------------------- Rect -------------------------- //
	
	function Rect( props ) {
	  // extend properties from defaults
	  for ( var prop in Rect.defaults ) {
	    this[ prop ] = Rect.defaults[ prop ];
	  }
	
	  for ( prop in props ) {
	    this[ prop ] = props[ prop ];
	  }
	
	}
	
	Rect.defaults = {
	  x: 0,
	  y: 0,
	  width: 0,
	  height: 0
	};
	
	var proto = Rect.prototype;
	
	/**
	 * Determines whether or not this rectangle wholly encloses another rectangle or point.
	 * @param {Rect} rect
	 * @returns {Boolean}
	**/
	proto.contains = function( rect ) {
	  // points don't have width or height
	  var otherWidth = rect.width || 0;
	  var otherHeight = rect.height || 0;
	  return this.x <= rect.x &&
	    this.y <= rect.y &&
	    this.x + this.width >= rect.x + otherWidth &&
	    this.y + this.height >= rect.y + otherHeight;
	};
	
	/**
	 * Determines whether or not the rectangle intersects with another.
	 * @param {Rect} rect
	 * @returns {Boolean}
	**/
	proto.overlaps = function( rect ) {
	  var thisRight = this.x + this.width;
	  var thisBottom = this.y + this.height;
	  var rectRight = rect.x + rect.width;
	  var rectBottom = rect.y + rect.height;
	
	  // http://stackoverflow.com/a/306332
	  return this.x < rectRight &&
	    thisRight > rect.x &&
	    this.y < rectBottom &&
	    thisBottom > rect.y;
	};
	
	/**
	 * @param {Rect} rect - the overlapping rect
	 * @returns {Array} freeRects - rects representing the area around the rect
	**/
	proto.getMaximalFreeRects = function( rect ) {
	
	  // if no intersection, return false
	  if ( !this.overlaps( rect ) ) {
	    return false;
	  }
	
	  var freeRects = [];
	  var freeRect;
	
	  var thisRight = this.x + this.width;
	  var thisBottom = this.y + this.height;
	  var rectRight = rect.x + rect.width;
	  var rectBottom = rect.y + rect.height;
	
	  // top
	  if ( this.y < rect.y ) {
	    freeRect = new Rect({
	      x: this.x,
	      y: this.y,
	      width: this.width,
	      height: rect.y - this.y
	    });
	    freeRects.push( freeRect );
	  }
	
	  // right
	  if ( thisRight > rectRight ) {
	    freeRect = new Rect({
	      x: rectRight,
	      y: this.y,
	      width: thisRight - rectRight,
	      height: this.height
	    });
	    freeRects.push( freeRect );
	  }
	
	  // bottom
	  if ( thisBottom > rectBottom ) {
	    freeRect = new Rect({
	      x: this.x,
	      y: rectBottom,
	      width: this.width,
	      height: thisBottom - rectBottom
	    });
	    freeRects.push( freeRect );
	  }
	
	  // left
	  if ( this.x < rect.x ) {
	    freeRect = new Rect({
	      x: this.x,
	      y: this.y,
	      width: rect.x - this.x,
	      height: this.height
	    });
	    freeRects.push( freeRect );
	  }
	
	  return freeRects;
	};
	
	proto.canFit = function( rect ) {
	  return this.width >= rect.width && this.height >= rect.height;
	};
	
	return Rect;
	
	}));


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Packer
	 * bin-packing algorithm
	 */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, require */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(29) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('./rect')
	    );
	  } else {
	    // browser global
	    var Packery = window.Packery = window.Packery || {};
	    Packery.Packer = factory( Packery.Rect );
	  }
	
	}( window, function factory( Rect ) {
	'use strict';
	
	// -------------------------- Packer -------------------------- //
	
	/**
	 * @param {Number} width
	 * @param {Number} height
	 * @param {String} sortDirection
	 *   topLeft for vertical, leftTop for horizontal
	 */
	function Packer( width, height, sortDirection ) {
	  this.width = width || 0;
	  this.height = height || 0;
	  this.sortDirection = sortDirection || 'downwardLeftToRight';
	
	  this.reset();
	}
	
	var proto = Packer.prototype;
	
	proto.reset = function() {
	  this.spaces = [];
	
	  var initialSpace = new Rect({
	    x: 0,
	    y: 0,
	    width: this.width,
	    height: this.height
	  });
	
	  this.spaces.push( initialSpace );
	  // set sorter
	  this.sorter = sorters[ this.sortDirection ] || sorters.downwardLeftToRight;
	};
	
	// change x and y of rect to fit with in Packer's available spaces
	proto.pack = function( rect ) {
	  for ( var i=0; i < this.spaces.length; i++ ) {
	    var space = this.spaces[i];
	    if ( space.canFit( rect ) ) {
	      this.placeInSpace( rect, space );
	      break;
	    }
	  }
	};
	
	proto.columnPack = function( rect ) {
	  for ( var i=0; i < this.spaces.length; i++ ) {
	    var space = this.spaces[i];
	    var canFitInSpaceColumn = space.x <= rect.x &&
	      space.x + space.width >= rect.x + rect.width &&
	      space.height >= rect.height - 0.01; // fudge number for rounding error
	    if ( canFitInSpaceColumn ) {
	      rect.y = space.y;
	      this.placed( rect );
	      break;
	    }
	  }
	};
	
	proto.rowPack = function( rect ) {
	  for ( var i=0; i < this.spaces.length; i++ ) {
	    var space = this.spaces[i];
	    var canFitInSpaceRow = space.y <= rect.y &&
	      space.y + space.height >= rect.y + rect.height &&
	      space.width >= rect.width - 0.01; // fudge number for rounding error
	    if ( canFitInSpaceRow ) {
	      rect.x = space.x;
	      this.placed( rect );
	      break;
	    }
	  }
	};
	
	proto.placeInSpace = function( rect, space ) {
	  // place rect in space
	  rect.x = space.x;
	  rect.y = space.y;
	
	  this.placed( rect );
	};
	
	// update spaces with placed rect
	proto.placed = function( rect ) {
	  // update spaces
	  var revisedSpaces = [];
	  for ( var i=0; i < this.spaces.length; i++ ) {
	    var space = this.spaces[i];
	    var newSpaces = space.getMaximalFreeRects( rect );
	    // add either the original space or the new spaces to the revised spaces
	    if ( newSpaces ) {
	      revisedSpaces.push.apply( revisedSpaces, newSpaces );
	    } else {
	      revisedSpaces.push( space );
	    }
	  }
	
	  this.spaces = revisedSpaces;
	
	  this.mergeSortSpaces();
	};
	
	proto.mergeSortSpaces = function() {
	  // remove redundant spaces
	  Packer.mergeRects( this.spaces );
	  this.spaces.sort( this.sorter );
	};
	
	// add a space back
	proto.addSpace = function( rect ) {
	  this.spaces.push( rect );
	  this.mergeSortSpaces();
	};
	
	// -------------------------- utility functions -------------------------- //
	
	/**
	 * Remove redundant rectangle from array of rectangles
	 * @param {Array} rects: an array of Rects
	 * @returns {Array} rects: an array of Rects
	**/
	Packer.mergeRects = function( rects ) {
	  var i = 0;
	  var rect = rects[i];
	
	  rectLoop:
	  while ( rect ) {
	    var j = 0;
	    var compareRect = rects[ i + j ];
	
	    while ( compareRect ) {
	      if  ( compareRect == rect ) {
	        j++; // next
	      } else if ( compareRect.contains( rect ) ) {
	        // remove rect
	        rects.splice( i, 1 );
	        rect = rects[i]; // set next rect
	        continue rectLoop; // bail on compareLoop
	      } else if ( rect.contains( compareRect ) ) {
	        // remove compareRect
	        rects.splice( i + j, 1 );
	      } else {
	        j++;
	      }
	      compareRect = rects[ i + j ]; // set next compareRect
	    }
	    i++;
	    rect = rects[i];
	  }
	
	  return rects;
	};
	
	
	// -------------------------- sorters -------------------------- //
	
	// functions for sorting rects in order
	var sorters = {
	  // top down, then left to right
	  downwardLeftToRight: function( a, b ) {
	    return a.y - b.y || a.x - b.x;
	  },
	  // left to right, then top down
	  rightwardTopToBottom: function( a, b ) {
	    return a.x - b.x || a.y - b.y;
	  }
	};
	
	
	// --------------------------  -------------------------- //
	
	return Packer;
	
	}));


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Packery Item Element
	**/
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, require */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(27),
	        __webpack_require__(29)
	      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('outlayer'),
	      require('./rect')
	    );
	  } else {
	    // browser global
	    window.Packery.Item = factory(
	      window.Outlayer,
	      window.Packery.Rect
	    );
	  }
	
	}( window, function factory( Outlayer, Rect ) {
	'use strict';
	
	// -------------------------- Item -------------------------- //
	
	var docElemStyle = document.documentElement.style;
	
	var transformProperty = typeof docElemStyle.transform == 'string' ?
	  'transform' : 'WebkitTransform';
	
	// sub-class Item
	var Item = function PackeryItem() {
	  Outlayer.Item.apply( this, arguments );
	};
	
	var proto = Item.prototype = Object.create( Outlayer.Item.prototype );
	
	var __create = proto._create;
	proto._create = function() {
	  // call default _create logic
	  __create.call( this );
	  this.rect = new Rect();
	};
	
	var _moveTo = proto.moveTo;
	proto.moveTo = function( x, y ) {
	  // don't shift 1px while dragging
	  var dx = Math.abs( this.position.x - x );
	  var dy = Math.abs( this.position.y - y );
	
	  var canHackGoTo = this.layout.dragItemCount && !this.isPlacing &&
	    !this.isTransitioning && dx < 1 && dy < 1;
	  if ( canHackGoTo ) {
	    this.goTo( x, y );
	    return;
	  }
	  _moveTo.apply( this, arguments );
	};
	
	// -------------------------- placing -------------------------- //
	
	proto.enablePlacing = function() {
	  this.removeTransitionStyles();
	  // remove transform property from transition
	  if ( this.isTransitioning && transformProperty ) {
	    this.element.style[ transformProperty ] = 'none';
	  }
	  this.isTransitioning = false;
	  this.getSize();
	  this.layout._setRectSize( this.element, this.rect );
	  this.isPlacing = true;
	};
	
	proto.disablePlacing = function() {
	  this.isPlacing = false;
	};
	
	// -----  ----- //
	
	// remove element from DOM
	proto.removeElem = function() {
	  this.element.parentNode.removeChild( this.element );
	  // add space back to packer
	  this.layout.packer.addSpace( this.rect );
	  this.emitEvent( 'remove', [ this ] );
	};
	
	// ----- dropPlaceholder ----- //
	
	proto.showDropPlaceholder = function() {
	  var dropPlaceholder = this.dropPlaceholder;
	  if ( !dropPlaceholder ) {
	    // create dropPlaceholder
	    dropPlaceholder = this.dropPlaceholder = document.createElement('div');
	    dropPlaceholder.className = 'packery-drop-placeholder';
	    dropPlaceholder.style.position = 'absolute';
	  }
	
	  dropPlaceholder.style.width = this.size.width + 'px';
	  dropPlaceholder.style.height = this.size.height + 'px';
	  this.positionDropPlaceholder();
	  this.layout.element.appendChild( dropPlaceholder );
	};
	
	proto.positionDropPlaceholder = function() {
	  this.dropPlaceholder.style[ transformProperty ] = 'translate(' +
	    this.rect.x + 'px, ' + this.rect.y + 'px)';
	};
	
	proto.hideDropPlaceholder = function() {
	  // only remove once, #333
	  var parent = this.dropPlaceholder.parentNode;
	  if ( parent ) {
	    parent.removeChild( this.dropPlaceholder );
	  }
	};
	
	// -----  ----- //
	
	return Item;
	
	}));


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * imagesLoaded v4.1.1
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */
	
	( function( window, factory ) { 'use strict';
	  // universal module definition
	
	  /*global define: false, module: false, require: false */
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(10)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter ) {
	      return factory( window, EvEmitter );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('ev-emitter')
	    );
	  } else {
	    // browser global
	    window.imagesLoaded = factory(
	      window,
	      window.EvEmitter
	    );
	  }
	
	})( window,
	
	// --------------------------  factory -------------------------- //
	
	function factory( window, EvEmitter ) {
	
	'use strict';
	
	var $ = window.jQuery;
	var console = window.console;
	
	// -------------------------- helpers -------------------------- //
	
	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}
	
	// turn element or nodeList into an array
	function makeArray( obj ) {
	  var ary = [];
	  if ( Array.isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( typeof obj.length == 'number' ) {
	    // convert nodeList to array
	    for ( var i=0; i < obj.length; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	}
	
	// -------------------------- imagesLoaded -------------------------- //
	
	/**
	 * @param {Array, Element, NodeList, String} elem
	 * @param {Object or Function} options - if function, use as callback
	 * @param {Function} onAlways - callback function
	 */
	function ImagesLoaded( elem, options, onAlways ) {
	  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
	  if ( !( this instanceof ImagesLoaded ) ) {
	    return new ImagesLoaded( elem, options, onAlways );
	  }
	  // use elem as selector string
	  if ( typeof elem == 'string' ) {
	    elem = document.querySelectorAll( elem );
	  }
	
	  this.elements = makeArray( elem );
	  this.options = extend( {}, this.options );
	
	  if ( typeof options == 'function' ) {
	    onAlways = options;
	  } else {
	    extend( this.options, options );
	  }
	
	  if ( onAlways ) {
	    this.on( 'always', onAlways );
	  }
	
	  this.getImages();
	
	  if ( $ ) {
	    // add jQuery Deferred object
	    this.jqDeferred = new $.Deferred();
	  }
	
	  // HACK check async to allow time to bind listeners
	  setTimeout( function() {
	    this.check();
	  }.bind( this ));
	}
	
	ImagesLoaded.prototype = Object.create( EvEmitter.prototype );
	
	ImagesLoaded.prototype.options = {};
	
	ImagesLoaded.prototype.getImages = function() {
	  this.images = [];
	
	  // filter & find items if we have an item selector
	  this.elements.forEach( this.addElementImages, this );
	};
	
	/**
	 * @param {Node} element
	 */
	ImagesLoaded.prototype.addElementImages = function( elem ) {
	  // filter siblings
	  if ( elem.nodeName == 'IMG' ) {
	    this.addImage( elem );
	  }
	  // get background image on element
	  if ( this.options.background === true ) {
	    this.addElementBackgroundImages( elem );
	  }
	
	  // find children
	  // no non-element nodes, #143
	  var nodeType = elem.nodeType;
	  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
	    return;
	  }
	  var childImgs = elem.querySelectorAll('img');
	  // concat childElems to filterFound array
	  for ( var i=0; i < childImgs.length; i++ ) {
	    var img = childImgs[i];
	    this.addImage( img );
	  }
	
	  // get child background images
	  if ( typeof this.options.background == 'string' ) {
	    var children = elem.querySelectorAll( this.options.background );
	    for ( i=0; i < children.length; i++ ) {
	      var child = children[i];
	      this.addElementBackgroundImages( child );
	    }
	  }
	};
	
	var elementNodeTypes = {
	  1: true,
	  9: true,
	  11: true
	};
	
	ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
	  var style = getComputedStyle( elem );
	  if ( !style ) {
	    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
	    return;
	  }
	  // get url inside url("...")
	  var reURL = /url\((['"])?(.*?)\1\)/gi;
	  var matches = reURL.exec( style.backgroundImage );
	  while ( matches !== null ) {
	    var url = matches && matches[2];
	    if ( url ) {
	      this.addBackground( url, elem );
	    }
	    matches = reURL.exec( style.backgroundImage );
	  }
	};
	
	/**
	 * @param {Image} img
	 */
	ImagesLoaded.prototype.addImage = function( img ) {
	  var loadingImage = new LoadingImage( img );
	  this.images.push( loadingImage );
	};
	
	ImagesLoaded.prototype.addBackground = function( url, elem ) {
	  var background = new Background( url, elem );
	  this.images.push( background );
	};
	
	ImagesLoaded.prototype.check = function() {
	  var _this = this;
	  this.progressedCount = 0;
	  this.hasAnyBroken = false;
	  // complete if no images
	  if ( !this.images.length ) {
	    this.complete();
	    return;
	  }
	
	  function onProgress( image, elem, message ) {
	    // HACK - Chrome triggers event before object properties have changed. #83
	    setTimeout( function() {
	      _this.progress( image, elem, message );
	    });
	  }
	
	  this.images.forEach( function( loadingImage ) {
	    loadingImage.once( 'progress', onProgress );
	    loadingImage.check();
	  });
	};
	
	ImagesLoaded.prototype.progress = function( image, elem, message ) {
	  this.progressedCount++;
	  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
	  // progress event
	  this.emitEvent( 'progress', [ this, image, elem ] );
	  if ( this.jqDeferred && this.jqDeferred.notify ) {
	    this.jqDeferred.notify( this, image );
	  }
	  // check if completed
	  if ( this.progressedCount == this.images.length ) {
	    this.complete();
	  }
	
	  if ( this.options.debug && console ) {
	    console.log( 'progress: ' + message, image, elem );
	  }
	};
	
	ImagesLoaded.prototype.complete = function() {
	  var eventName = this.hasAnyBroken ? 'fail' : 'done';
	  this.isComplete = true;
	  this.emitEvent( eventName, [ this ] );
	  this.emitEvent( 'always', [ this ] );
	  if ( this.jqDeferred ) {
	    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
	    this.jqDeferred[ jqMethod ]( this );
	  }
	};
	
	// --------------------------  -------------------------- //
	
	function LoadingImage( img ) {
	  this.img = img;
	}
	
	LoadingImage.prototype = Object.create( EvEmitter.prototype );
	
	LoadingImage.prototype.check = function() {
	  // If complete is true and browser supports natural sizes,
	  // try to check for image status manually.
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    // report based on naturalWidth
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    return;
	  }
	
	  // If none of the checks above matched, simulate loading on detached element.
	  this.proxyImage = new Image();
	  this.proxyImage.addEventListener( 'load', this );
	  this.proxyImage.addEventListener( 'error', this );
	  // bind to image as well for Firefox. #191
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.proxyImage.src = this.img.src;
	};
	
	LoadingImage.prototype.getIsImageComplete = function() {
	  return this.img.complete && this.img.naturalWidth !== undefined;
	};
	
	LoadingImage.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.img, message ] );
	};
	
	// ----- events ----- //
	
	// trigger specified handler for event type
	LoadingImage.prototype.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};
	
	LoadingImage.prototype.onload = function() {
	  this.confirm( true, 'onload' );
	  this.unbindEvents();
	};
	
	LoadingImage.prototype.onerror = function() {
	  this.confirm( false, 'onerror' );
	  this.unbindEvents();
	};
	
	LoadingImage.prototype.unbindEvents = function() {
	  this.proxyImage.removeEventListener( 'load', this );
	  this.proxyImage.removeEventListener( 'error', this );
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};
	
	// -------------------------- Background -------------------------- //
	
	function Background( url, element ) {
	  this.url = url;
	  this.element = element;
	  this.img = new Image();
	}
	
	// inherit LoadingImage prototype
	Background.prototype = Object.create( LoadingImage.prototype );
	
	Background.prototype.check = function() {
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.img.src = this.url;
	  // check if image is already complete
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    this.unbindEvents();
	  }
	};
	
	Background.prototype.unbindEvents = function() {
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};
	
	Background.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.element, message ] );
	};
	
	// -------------------------- jQuery -------------------------- //
	
	ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
	  jQuery = jQuery || window.jQuery;
	  if ( !jQuery ) {
	    return;
	  }
	  // set local variable
	  $ = jQuery;
	  // $().imagesLoaded()
	  $.fn.imagesLoaded = function( options, callback ) {
	    var instance = new ImagesLoaded( this, options, callback );
	    return instance.jqDeferred.promise( $(this) );
	  };
	};
	// try making plugin
	ImagesLoaded.makeJQueryPlugin();
	
	// --------------------------  -------------------------- //
	
	return ImagesLoaded;
	
	});


/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GalleryData = function () {
	  function GalleryData() {
	    _classCallCheck(this, GalleryData);
	
	    console.log('GALLERY DATA MANAGER');
	  }
	
	  _createClass(GalleryData, [{
	    key: 'load',
	    value: function load(slug) {
	
	      return new Promise(function (resolve, reject) {
	
	        $.getJSON('/api/portfolio/' + slug).done(function (data) {
	          resolve(data);
	        }).fail(function () {
	          reject('Cannot load data for album: ' + slug);
	        });
	      });
	    }
	  }]);
	
	  return GalleryData;
	}();
	
	exports.default = GalleryData;

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var About = function () {
	  function About() {
	    _classCallCheck(this, About);
	
	    console.log('ABOUT MANAGER');
	    $('section.about').css('height', '0vh');
	  }
	
	  _createClass(About, [{
	    key: 'transitionIn',
	    value: function transitionIn(speed) {
	
	      return new Promise(function (resolve) {
	
	        $('section.about').on('transitionend', function () {
	          $('section.about').off('transitionend');
	          console.log('DONE ABOUT TRAN IN!!');
	          resolve();
	        });
	
	        $('section.about').css('transition-duration', speed);
	        $('section.about').addClass('is-active');
	
	        $(window).scrollTop(0);
	        $('section.about').css('height', '');
	      });
	    }
	  }, {
	    key: 'transitionOut',
	    value: function transitionOut() {
	      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1s';
	
	
	      return new Promise(function (resolve) {
	
	        $('section.about').on('transitionend', function () {
	          $('section.about').off('transitionend');
	          console.log('DONE ABOUT TRAN OUT!!');
	          $('section.about').css('height', '0vh');
	          resolve();
	        });
	
	        $('section.about').css('transition-duration', speed);
	        $('section.about').removeClass('is-active');
	      });
	    }
	  }, {
	    key: 'initialize',
	    value: function initialize() {
	      return new Promise(function (resolve) {
	        resolve();
	      });
	    }
	  }, {
	    key: 'updateState',
	    value: function updateState() {
	      return true;
	    }
	  }, {
	    key: 'handleResize',
	    value: function handleResize() {}
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {}
	  }]);
	
	  return About;
	}();
	
	exports.default = About;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jsCookie = __webpack_require__(3);
	
	var _jsCookie2 = _interopRequireDefault(_jsCookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Subscribe = function () {
	  function Subscribe() {
	    var _this = this;
	
	    _classCallCheck(this, Subscribe);
	
	    console.log('SUBSCRIBE MANAGER');
	
	    $('#mce-EMAIL').on('focus', function () {
	      $('#mce-EMAIL').removeClass('error');
	
	      if ($('#mce-EMAIL').val() === 'Your e-mail address') {
	        $('#mce-EMAIL').val('');
	      }
	    });
	
	    $('#mce-EMAIL').on('blur', function () {
	      if ($('#mce-EMAIL').val() === '') {
	        $('#mce-EMAIL').val('Your e-mail address');
	      } else if (!_this.validEmail($('#mce-EMAIL').val())) {
	        $('#mce-EMAIL').addClass('error');
	      } else {
	        $('#mce-EMAIL').removeClass('error');
	      }
	    });
	
	    $('#subscribeButton').on('click', function (e) {
	      if (!_this.validEmail($('#mce-EMAIL').val())) {
	        $('#mce-EMAIL').addClass('error');
	        e.preventDefault();
	        return;
	      }
	
	      $('#mce-EMAIL').removeClass('error');
	
	      $('#mc-embedded-subscribe-form').submit();
	      $('#mce-EMAIL').val('Your e-mail address');
	    });
	  }
	
	  _createClass(Subscribe, [{
	    key: 'validEmail',
	    value: function validEmail(email) {
	      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	      return re.test(email);
	    }
	  }, {
	    key: 'transitionIn',
	    value: function transitionIn(speed) {
	
	      return new Promise(function (resolve) {
	
	        $('section.subscribe').on('transitionend', function () {
	          $('section.subscribe').off('transitionend');
	          console.log('DONE SUBSCRIBE TRAN IN!!');
	          resolve();
	        });
	
	        $('section.subscribe').css('transition-duration', speed);
	        $('section.subscribe').addClass('is-active');
	
	        $(window).scrollTop(0);
	
	        $('#mce-EMAIL').val('Your e-mail address');
	        $('#mce-EMAIL').removeClass('error');
	
	        if (_jsCookie2.default.get('subscribe_tip') === undefined) {
	          _jsCookie2.default.set('subscribe_tip', '1', { expires: 7 });
	        }
	      });
	    }
	  }, {
	    key: 'transitionOut',
	    value: function transitionOut() {
	      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1s';
	
	
	      return new Promise(function (resolve) {
	
	        $('section.subscribe').on('transitionend', function () {
	          $('section.subscribe').off('transitionend');
	          console.log('DONE ABOUT TRAN OUT!!');
	          resolve();
	        });
	
	        $('section.subscribe').css('transition-duration', speed);
	        $('section.subscribe').removeClass('is-active');
	      });
	    }
	  }, {
	    key: 'initialize',
	    value: function initialize() {
	      return new Promise(function (resolve) {
	        resolve();
	      });
	    }
	  }, {
	    key: 'updateState',
	    value: function updateState() {
	      return true;
	    }
	  }, {
	    key: 'handleResize',
	    value: function handleResize() {}
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {}
	  }]);
	
	  return Subscribe;
	}();
	
	exports.default = Subscribe;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NotFound = function () {
	  function NotFound(options) {
	    _classCallCheck(this, NotFound);
	
	    console.log('NOT FOUND MANAGER');
	
	    this.options = options || {};
	
	    $('section.notfound').css('height', '0vh');
	  }
	
	  _createClass(NotFound, [{
	    key: 'transitionIn',
	    value: function transitionIn(speed) {
	      var _this = this;
	
	      return new Promise(function (resolve) {
	
	        $('section.notfound').on('transitionend', function () {
	          $('section.notfound').off('transitionend');
	          console.log('DONE NOT FOUND TRAN IN!!');
	          resolve();
	
	          _this.options.menu.openNav();
	        });
	
	        $('section.notfound').css('transition-duration', speed);
	        $('section.notfound').addClass('is-active');
	
	        $(window).scrollTop(0);
	        $('section.notfound').css('height', '');
	      });
	    }
	  }, {
	    key: 'transitionOut',
	    value: function transitionOut() {
	      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1s';
	
	
	      return new Promise(function (resolve) {
	
	        $('section.notfound').on('transitionend', function () {
	          $('section.notfound').off('transitionend');
	          console.log('DONE ABOUT TRAN OUT!!');
	          $('section.notfound').css('height', '0vh');
	
	          resolve();
	        });
	
	        $('section.notfound').css('transition-duration', speed);
	        $('section.notfound').removeClass('is-active');
	      });
	    }
	  }, {
	    key: 'initialize',
	    value: function initialize() {
	      return new Promise(function (resolve) {
	        resolve();
	      });
	    }
	  }, {
	    key: 'updateState',
	    value: function updateState() {
	      return true;
	    }
	  }, {
	    key: 'handleResize',
	    value: function handleResize() {}
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {}
	  }]);
	
	  return NotFound;
	}();
	
	exports.default = NotFound;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Route = __webpack_require__(38);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Router = function () {
	  function Router(options) {
	    _classCallCheck(this, Router);
	
	    // retreive options
	    this.options = options || {};
	    this.routes = [];
	  }
	
	  _createClass(Router, [{
	    key: 'addRoutes',
	    value: function addRoutes(routes) {
	      var _this = this;
	
	      routes.forEach(function (route) {
	        _this.addRoute(route[0], route[1]);
	      });
	    }
	  }, {
	    key: 'addRoute',
	    value: function addRoute(path, controller, rdata) {
	      var r = new _Route2.default(path, controller, rdata);
	      this.routes.push(r);
	    }
	  }, {
	    key: 'getManualRoute',
	    value: function getManualRoute(controllerName) {
	      var foundRoute = false;
	
	      this.routes.forEach(function (route) {
	        if (route.controller === controllerName) {
	          console.log('GMR FOUND ROUTE: ' + route);
	          foundRoute = route;
	        }
	      });
	
	      return foundRoute;
	    }
	  }, {
	    key: 'route',
	    value: function route() {
	      var controller = {};
	
	      this.routes.forEach(function (route) {
	        if (route.match(window.location.pathname)) {
	          console.log('FOUND ROUTE: ' + route.controller);
	          controller = route;
	        }
	      });
	
	      return controller;
	    }
	  }]);
	
	  return Router;
	}();
	
	exports.default = Router;

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Route = function () {
	  function Route(path, controller) {
	    var rdata = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    _classCallCheck(this, Route);
	
	    // retreive options
	    this.path = path;
	    this.controller = controller;
	    this.rdata = rdata;
	    this.matches = {};
	  }
	
	  _createClass(Route, [{
	    key: 'initialize',
	    value: function initialize() {
	      console.log(this.rdata);
	      return this.controller.initialize(this.rdata);
	    }
	  }, {
	    key: 'transitionIn',
	    value: function transitionIn(speed) {
	      return this.controller.transitionIn(speed);
	    }
	  }, {
	    key: 'transitionOut',
	    value: function transitionOut(speed) {
	      return this.controller.transitionOut(speed);
	    }
	  }, {
	    key: 'updateState',
	    value: function updateState(udata) {
	      return this.controller.updateState(udata);
	    }
	  }, {
	    key: 'match',
	    value: function match(uri) {
	      var re = new RegExp('' + this.path);
	      var matches = uri.match(re);
	      this.rdata.matches = this.matches = matches;
	
	      console.log('MATCHES', matches);
	
	      if (matches !== null) {
	        console.log('FOUND');
	        return true;
	      }
	
	      return false;
	    }
	  }]);
	
	  return Route;
	}();
	
	exports.default = Route;

/***/ },
/* 39 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map