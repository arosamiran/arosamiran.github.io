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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var App = __webpack_require__(2);
	
	// shortcut for logs.
	window.trace = function (str) {
	  console.log(str);
	};
	
	window.app = new App();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var DropDown = __webpack_require__(3);
	var MastHead = __webpack_require__(4);
	var Billboard = __webpack_require__(5);
	var Footer = __webpack_require__(6);
	var PageTransition = __webpack_require__(7);
	var Filter = __webpack_require__(8);
	var ContentFilter = __webpack_require__(9);
	var ContentDropdowns = __webpack_require__(13);
	var CodeSnippet = __webpack_require__(14);
	var Modules = __webpack_require__(15);
	var Notification = __webpack_require__(16);
	var BackToTop = __webpack_require__(17);
	var Navigation = __webpack_require__(18);
	var EqualHeights = __webpack_require__(19);
	var UploadButton = __webpack_require__(20);
	
	var App = function () {
	  var dropDownEl = document.getElementsByClassName('dropdown');
	  var drawer = document.getElementsByClassName('nav-drawer');
	  var footerEl = document.getElementsByClassName('nav-footer');
	  var pageTransition = document.getElementsByClassName('page-transition-container');
	  var notificationEl = document.getElementsByClassName('notification');
	  var filterEl = document.getElementsByClassName('filter');
	  var filters = [];
	  var contentDd = document.getElementsByClassName('cd-item');
	  var codeSn = document.getElementsByClassName('code-snippet');
	  var moduleComp = document.getElementsByClassName('module');
	  var billboardAnims = document.querySelectorAll(".billboard.animate");
	  var backToTopEl = document.querySelectorAll(".back-to-top");
	  var contextNavEl = document.getElementsByClassName('nav-contextual-mobile');
	  var equalHeightElements = document.querySelectorAll(".equal-heights");
	  var uploadButtonEl = document.getElementsByClassName('upload-button');
	
	  if (dropDownEl.length > 0) {
	    Array.prototype.forEach.call(dropDownEl, function (el, i) {
	      var mdd = DropDown(el);
	      mdd._public();
	    });
	  }
	
	  if (drawer.length > 0) {
	    var md = MastHead();
	    md._public();
	  }
	
	  if (billboardAnims.length > 0) {
	    Array.prototype.forEach.call(billboardAnims, function (el, i) {
	      var bb = Billboard();
	      bb._public(el);
	    });
	  }
	
	  if (footerEl.length > 0) {
	    var ffd = Footer();
	    ffd._public();
	  }
	
	  if (filterEl.length > 0) {
	    Array.prototype.forEach.call(filterEl, function (el, i) {
	      var fil = Filter(el);
	      fil._public();
	      filters.push(fil);
	    });
	
	    document.addEventListener('click', function (event) {
	
	      for (var i = 0; i < filters.length; i++) {
	        var currentFilter = filters[i];
	        var filterOpened = currentFilter.getFilterOpened();
	        var currentEl = currentFilter.getEl();
	        if (filterOpened & event.target !== currentEl && !currentEl.contains(event.target)) {
	          currentFilter.close();
	        }
	      }
	      ;
	    });
	
	    var content = document.querySelectorAll('.filtered-modules .module');
	    var contentFilter = ContentFilter(filterEl, content, true);
	  }
	
	  if (contentDd.length > 0) {
	    Array.prototype.forEach.call(contentDd, function (el, i) {
	      var cdd = ContentDropdowns(el);
	      cdd._public();
	    });
	  }
	
	  if (codeSn.length > 0) {
	    Array.prototype.forEach.call(codeSn, function (el, i) {
	      var csn = CodeSnippet(el);
	      csn._public();
	    });
	  }
	
	  if (pageTransition.length > 0) {
	    var pt = PageTransition();
	    pt._public();
	  }
	
	  if (moduleComp.length > 0) {
	    var md = Modules();
	    md._public();
	  }
	
	  if (notificationEl.length > 0) {
	    Array.prototype.forEach.call(notificationEl, function (el, i) {
	      var nt = Notification(el);
	      nt._public(el);
	    });
	  }
	
	  if (backToTopEl.length > 0) {
	    Array.prototype.forEach.call(backToTopEl, function (el, i) {
	      var bt = BackToTop(el);
	      bt._public();
	    });
	  }
	
	  if (contextNavEl.length > 0) {
	    var nv = Navigation(contextNavEl[0]);
	    nv._public();
	  }
	
	  if (equalHeightElements.length > 0) {
	    Array.prototype.forEach.call(equalHeightElements, function (el, i) {
	      var eh = EqualHeights();
	      eh._public(el);
	    });
	  }
	
	  if (uploadButtonEl.length > 0) {
	    Array.prototype.forEach.call(uploadButtonEl, function (el, i) {
	      var ub = UploadButton(el);
	      ub._public();
	    });
	  }
	
	  fluidvids.init();
	
	  return {};
	};
	
	module.exports = App;

/***/ },
/* 3 */
/***/ function(module, exports) {

	function dropdown(el) {
	
	  var errorMsg = document.getElementsByClassName('error-message');
	
	  function _private() {}
	
	  var getParents = function (elem, selector) {
	    var parents = [];
	    if (selector) {
	      var firstChar = selector.charAt(0);
	    }
	
	    // Get matches
	    for (; elem && elem !== document; elem = elem.parentNode) {
	      if (selector) {
	
	        if (firstChar === '.') {
	          if (elem.classList.contains(selector.substr(1))) {
	            parents.push(elem);
	          }
	        }
	
	        if (firstChar === '#') {
	          if (elem.id === selector.substr(1)) {
	            parents.push(elem);
	          }
	        }
	
	        if (firstChar === '[') {
	          if (elem.hasAttribute(selector.substr(1, selector.length - 1))) {
	            parents.push(elem);
	          }
	        }
	
	        if (elem.tagName.toLowerCase() === selector) {
	          parents.push(elem);
	        }
	      } else {
	        parents.push(elem);
	      }
	    }
	
	    // Return parents if any exist
	    if (parents.length === 0) {
	      return null;
	    } else {
	      return parents;
	    }
	  };
	
	  return {
	    _public: function () {
	      _private();
	
	      var dropDownOpened = false;
	      var dropDownTitle = el.getElementsByClassName('title');
	      var hiddenInput = el.getElementsByTagName('input')[0];
	      var dropDownTitleSpan = dropDownTitle[0].getElementsByTagName('span');
	      var dropDownUl = el.getElementsByTagName('ul');
	      var dropDownItems = dropDownUl[0].getElementsByTagName('li');
	      var defaultTitle = dropDownTitleSpan[0].innerHTML;
	      var defaultIn = false;
	
	      var titleSelection = function (e) {
	        var parents = getParents(el, '.dropdown-container');
	        if (parents[0].classList.contains("disabled")) {
	          return;
	        }
	        toggleClass(el, "closed");
	      };
	
	      dropDownTitle[0].addEventListener('keypress', titleSelection);
	      dropDownTitle[0].addEventListener('click', titleSelection);
	
	      function index(element) {
	        var sib = element.parentNode.childNodes;
	        var n = 0;
	        for (var i = 0; i < sib.length; i++) {
	          if (sib[i] == element) return n;
	          if (sib[i].nodeType == 1) n++;
	        }
	        return -1;
	      }
	
	      function eq(index) {
	        if (index >= 0 && index < this.length) return this[index];else return -1;
	      }
	
	      for (var i = 0; i < dropDownItems.length; i++) {
	
	        dropDownItems[i].addEventListener('keypress', itemSelection);
	        dropDownItems[i].addEventListener('click', itemSelection);
	
	        var itemSelection = function (e) {
	          var target = e.target;
	          if (index(target) != 0 && index(target) != dropDownItems.length - 1) {
	            e.preventDefault();
	
	            var itemName = target.innerHTML;
	            var itemValue = target.dataset.val;
	            dropDownTitleSpan[0].innerHTML = itemName;
	            hiddenInput.value = itemValue;
	
	            // Setting "checked" because our fake input uses type "radio",
	            // and to make the input valid, it must have the checked attribute
	            hiddenInput.setAttribute('checked', 'checked');
	
	            toggleClass(el, "closed");
	
	            //errorMsg[1].classList.remove("active");
	            dropDownTitle[0].classList.remove("error");
	
	            if (itemName != defaultTitle && defaultIn === false) {
	              var defaultEl = dropDownUl[0].querySelector('.hidden');
	
	              if (defaultEl) {
	                defaultEl.style.display = 'block';
	              }
	
	              defaultIn = true;
	            }
	          }
	        };
	      }
	
	      document.addEventListener('click', function (event) {
	        if (dropDownOpened == true && event.target !== el && !el.contains(event.target)) {
	          el.classList.add("closed");
	          dropDownOpened = false;
	        }
	      });
	
	      function toggleClass(el, className) {
	        el.classList.toggle(className);
	        if (dropDownOpened == false) {
	          dropDownOpened = true;
	
	          var height = el.querySelector('ul').getBoundingClientRect().height;
	        } else {
	          dropDownOpened = false;
	        }
	      }
	    }
	
	  };
	}
	
	module.exports = dropdown;

/***/ },
/* 4 */
/***/ function(module, exports) {

	function masthead(el) {
	  function _private() {}
	
	  // all public functions
	  return {
	    _public: function () {
	      _private();
	
	      var drawer = document.getElementsByClassName('nav-drawer');
	      var mastheadEl = document.getElementsByClassName('masthead');
	      var signedInDropdownList = document.getElementsByClassName('signed-in_dropdown');
	      var avatarList = document.getElementsByClassName('avatar');
	      var drawerHeader = document.getElementsByClassName('nav-drawer-link');
	      var searchList = document.getElementsByClassName('search');
	      var searchInput = document.querySelector(".search input");
	      var searchSuggestions = document.querySelector('.search-suggestions');
	      var searchSuggList = document.getElementById('search-list');
	      var mastheadLoader = document.getElementById('loader');
	      var stickyCTA = document.getElementsByClassName('sticky-cta');
	
	      var contextualNav = document.querySelector('.nav-contextual-mobile');
	      var contextualTitleArrow = document.querySelector('.nav-contextual-mobile .current > a');
	      var signedInDropdownOpened = false;
	      var searchOpened = false;
	      var suggestionsCalled = false;
	      var searchSuggListItems = [];
	
	      if (stickyCTA.length > 0) {
	        drawer[0].classList.add("with-cta");
	        if (typeof mastheadEl[0] !== 'undefined') {
	          mastheadEl[0].classList.add("with-cta");
	        }
	      }
	
	      function initializeMasthead() {
	        if (typeof mastheadLoader !== 'undefined' && mastheadLoader !== null) {
	          mastheadLoader.classList.remove("active");
	        }
	
	        if (typeof mastheadEl[0] !== 'undefined') {
	          mastheadEl[0].classList.remove("animate");
	        }
	
	        if (typeof drawer[0] !== 'undefined') {
	          drawer[0].classList.remove("animate");
	        }
	      };
	
	      //TO DO: add a function to check the loading of the image
	      setTimeout(function () {
	        initializeMasthead();
	      }, 1000);
	
	      for (var d = 0; d < drawer.length; d++) {
	
	        (function (index) {
	          var headerLeft = drawer[d].getElementsByClassName('nav-drawer-link')[0];
	          headerLeft.addEventListener('click', function (e) {
	            e.preventDefault();
	            var parents = getParents(this, '.nav-drawer');
	            if (parents[0].classList.contains("no-interaction")) {
	              return;
	            } else {
	              toggleClass(drawer[index], "active");
	              toggleClass(navIcon, "active");
	            }
	            return false;
	          });
	
	          var navIcon = drawer[d].getElementsByClassName('nav-icon')[0];
	
	          if (typeof navIcon !== "undefined") {
	            navIcon.addEventListener('click', function (e) {
	              e.preventDefault();
	              toggleClass(drawer[index], "active");
	              toggleClass(navIcon, "active");
	              return false;
	            });
	          }
	
	          var avatarIcon = drawer[d].getElementsByClassName('avatar')[0];
	          var signedInDropdown = drawer[d].getElementsByClassName('signed-in_dropdown')[0];
	          avatarIcon.addEventListener('click', function (e) {
	            e.preventDefault();
	            signedInDropdownOpened = true;
	            toggleClass(signedInDropdown, "active");
	            return false;
	          });
	
	          var searchContainer = drawer[d].getElementsByClassName('search')[0];
	          var searchIcon = drawer[d].getElementsByClassName('search-icon')[0];
	          searchIcon.addEventListener('click', function (e) {
	            e.preventDefault();
	            /*if (searchOpened == true) {
	              searchSuggestions.classList.remove("active");
	            }*/
	            searchOpened = true;
	            searchContainer.classList.add("opened");
	
	            //toggleClass(searchContainer,"opened");
	            searchInput.focus();
	            return false;
	          });
	
	          //closes the drawer
	          document.addEventListener('click', function (event) {
	            if (event.target !== drawer[index] && !drawer[index].contains(event.target)) {
	              drawer[index].classList.remove("active");
	              navIcon.classList.remove("active");
	            }
	          });
	        })(d);
	      }
	
	      var getParents = function (elem, selector) {
	        var parents = [];
	        if (selector) {
	          var firstChar = selector.charAt(0);
	        }
	
	        // Get matches
	        for (; elem && elem !== document; elem = elem.parentNode) {
	          if (selector) {
	
	            if (firstChar === '.') {
	              if (elem.classList.contains(selector.substr(1))) {
	                parents.push(elem);
	              }
	            }
	
	            if (firstChar === '#') {
	              if (elem.id === selector.substr(1)) {
	                parents.push(elem);
	              }
	            }
	
	            if (firstChar === '[') {
	              if (elem.hasAttribute(selector.substr(1, selector.length - 1))) {
	                parents.push(elem);
	              }
	            }
	
	            if (elem.tagName.toLowerCase() === selector) {
	              parents.push(elem);
	            }
	          } else {
	            parents.push(elem);
	          }
	        }
	
	        // Return parents if any exist
	        if (parents.length === 0) {
	          return null;
	        } else {
	          return parents;
	        }
	      };
	
	      // function addSuggestions() {
	      //   suggestionsCalled = true;
	      //   searchSuggestions.classList.add("active");
	      //   var request = new XMLHttpRequest();
	      //   request.open('GET', 'assets/data/suggestions.json', true);
	      //   searchSuggList.innerHTML = "";
	      //   searchSuggListItems = [];
	      //   request.onload = function (datas) {
	      //     if (this.status >= 200 && this.status < 400) {
	      //       var data = JSON.parse(this.response);
	      //       var suggList = data[0]["suggestions"];
	      //       Array.prototype.forEach.call(suggList, function (el, i) {
	      //         var nodeLi = document.createElement("li");
	      //         var textnode = document.createTextNode(el);
	      //         nodeLi.appendChild(textnode);
	      //         searchSuggListItems.push(nodeLi);
	      //         searchSuggList.appendChild(nodeLi);
	      //       });
	      //
	      //       Array.prototype.forEach.call(searchSuggListItems, function (el, i) {
	      //         el.addEventListener('click', function (e) {
	      //           searchInput.value = this.innerHTML;
	      //           searchSuggestions.classList.remove("active");
	      //
	      //         });
	      //       });
	      //
	      //     } else {
	      //
	      //     }
	      //   };
	      //
	      //   request.onerror = function () {
	      //   };
	      //
	      //   request.send();
	      // }
	      //
	      //
	      // searchInput.addEventListener('keypress', function (event) {
	      //   if (suggestionsCalled == false) {
	      //     addSuggestions();
	      //   }
	      // });
	
	      //closes the account tooltip and search input
	      document.addEventListener('click', function (event) {
	        if (signedInDropdownOpened == true && event.target !== avatarList[0] && !avatarList[0].contains(event.target) && event.target !== signedInDropdownList[0] && !signedInDropdownList[0].contains(event.target)) {
	          signedInDropdownList[0].classList.remove("active");
	          signedInDropdownOpened = false;
	        }
	
	        if (searchOpened == true && event.target !== searchList[0] && !searchList[0].contains(event.target)) {
	          // searchSuggestions.classList.remove("active");
	          searchInput.value = "";
	          searchList[0].classList.remove("opened");
	          searchOpened = false;
	          suggestionsCalled = false;
	        }
	      });
	
	      if (typeof contextualTitleArrow !== 'undefined' && contextualTitleArrow !== null) {
	
	        contextualTitleArrow.addEventListener('click', function (event) {
	          event.preventDefault();
	          toggleClass(contextualNav, "active");
	          return false;
	        });
	      }
	
	      function toggleClass(el, className) {
	        if (el.classList) {
	          el.classList.toggle(className);
	        } else {
	          var classes = el.className.split(' ');
	          var existingIndex = classes.indexOf(className);
	
	          if (existingIndex >= 0) {
	            classes.splice(existingIndex, 1);
	          } else {
	            classes.push(className);
	          }
	
	          el.className = classes.join(' ');
	        }
	      }
	    }
	
	  };
	}
	
	module.exports = masthead;

/***/ },
/* 5 */
/***/ function(module, exports) {

	function billboard(el) {
	
	  function _private() {}
	
	  // all public functions
	  return {
	    _public: function (el) {
	      _private();
	
	      window.setTimeout(function () {
	        el.classList.remove("animate");
	      }, 3000);
	    }
	
	  };
	}
	
	module.exports = billboard;

/***/ },
/* 6 */
/***/ function(module, exports) {

	function footer(el) {
	
	  var languageEl = document.getElementsByClassName('language')[0];
	  var languageSelEl = document.getElementsByClassName('lang-selection')[0];
	  var languageFlyout = document.getElementsByClassName('lang-flyout')[0];
	  var languageOpened = false;
	
	  function _private() {}
	
	  // all public functions
	  return {
	    _public: function () {
	      _private();
	
	      languageSelEl.addEventListener('click', function (e) {
	        e.preventDefault();
	        if (languageOpened == false) {
	          languageOpened = true;
	          languageEl.classList.add("active");
	        } else {
	          languageOpened = false;
	          languageEl.classList.remove("active");
	        }
	        return false;
	      });
	
	      document.addEventListener('click', function (event) {
	        if (languageOpened == true && event.target !== languageFlyout && !languageFlyout.contains(event.target) && event.target !== languageSelEl && !languageSelEl.contains(event.target)) {
	          languageEl.classList.remove("active");
	          languageOpened = false;
	        }
	      });
	
	      function toggleClass(el, className) {
	        if (el.classList) {
	          el.classList.toggle(className);
	        } else {
	          var classes = el.className.split(' ');
	          var existingIndex = classes.indexOf(className);
	
	          if (existingIndex >= 0) {
	            classes.splice(existingIndex, 1);
	          } else {
	            classes.push(className);
	          }
	
	          el.className = classes.join(' ');
	        }
	      }
	    }
	
	  };
	}
	
	module.exports = footer;

/***/ },
/* 7 */
/***/ function(module, exports) {

	function pageTransition(el) {
	
	  var loader = document.getElementById('loader');
	  var firstContainer = document.getElementById('first');
	  var secondContainer = document.getElementById('second');
	  //var info = document.getElementById('info');
	  var currentW;
	  var animComplete = false;
	
	  function _private() {}
	
	  // all public functions
	  return {
	    _public: function () {
	      _private();
	
	      var request = new XMLHttpRequest();
	      request.open('GET', 'page-transition-content-1.html', true);
	      request.onload = function () {
	        if (this.status >= 200 && this.status < 400) {
	          firstContainer.innerHTML = this.response;
	        } else {
	          // error
	        }
	      };
	      request.send();
	
	      setTimeout(function () {
	        loader.classList.add("active");
	      }, 2000);
	
	      setTimeout(function () {
	        first.classList.add("active");
	        loader.classList.remove("active");
	      }, 4500);
	
	      resize();
	
	      secondContainer.style.left = currentW + "px";
	
	      firstContainer.addEventListener('click', function (e) {
	        setTimeout(function () {
	          loader.classList.add("active");
	        }, 1000);
	        initTransition();
	      });
	
	      function initTransition() {
	        first.classList.remove("active");
	        var request = new XMLHttpRequest();
	        request.open('GET', 'page-transition-content-2.html', true);
	        request.onload = function () {
	          if (this.status >= 200 && this.status < 400) {
	            secondContainer.innerHTML = this.response;
	          } else {
	            // error
	          }
	        };
	        request.send();
	
	        setTimeout(function () {
	          firstContainer.style.left = -currentW + "px";
	          secondContainer.style.left = "0px";
	          loader.classList.remove("active");
	        }, 3000);
	
	        setTimeout(function () {
	          info.classList.add("active");
	        }, 4000);
	
	        animComplete = true;
	      }
	
	      function resize() {
	        currentW = window.innerWidth;
	        loader.width = currentW + "px";
	        if (animComplete == false) {
	          secondContainer.style.left = currentW + "px";
	        }
	      }
	
	      window.addEventListener('resize', function (event) {
	        resize();
	      });
	    }
	
	  };
	}
	
	module.exports = pageTransition;

/***/ },
/* 8 */
/***/ function(module, exports) {

	function filter(el) {
	
	  var activeInput = [];
	
	  var filterTitle = null;
	  var filterTitleSpan = null;
	  var filterUl = null;
	  var filterItems = null;
	
	  var filterOpened = false;
	
	  function _private() {}
	
	  function init(el) {
	
	    var el = el;
	
	    filterOpened = false;
	    filterTitle = el.getElementsByClassName('title');
	    filterTitleSpan = el.getElementsByTagName('span');
	    filterUl = el.getElementsByTagName('ul');
	    filterItems = el.getElementsByTagName('li');
	
	    //bindEvents();
	  }
	
	  function bindEvents() {
	
	    window.addEventListener('resize', function (event) {
	      resize();
	    });
	
	    filterTitle[0].addEventListener('click', function (e) {
	      toggleClass(el, "closed");
	    });
	  }
	
	  function close() {
	
	    el.classList.add("closed");
	    filterOpened = false;
	  }
	
	  function toggleClass(el, className) {
	
	    el.classList.toggle(className);
	
	    if (filterOpened == false) {
	      filterOpened = true;
	    } else {
	      filterOpened = false;
	    }
	  }
	
	  function resize() {
	
	    // var parentWidth = getComputedStyle(filterTitle[0])["width"];
	
	    // var newWidth = Math.floor(parseInt(parentWidth));
	    // el.style.width = newWidth + 'px';
	
	    // for(var j = 0; j < filterItems.length; j++) {
	    // 	filterItems[j].style.width = 	newWidth + 'px';
	    // }
	
	  }
	
	  return {
	    _public: function () {
	
	      init(el);
	      bindEvents();
	    },
	    getFilterOpened: function () {
	
	      return filterOpened;
	    },
	    getEl: function () {
	
	      return el;
	    },
	    close: function () {
	
	      close();
	    },
	    resize: function () {
	      resize();
	    }
	
	  };
	}
	
	module.exports = filter;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var addClass = __webpack_require__(10);
	var removeClass = __webpack_require__(12);
	
	function contentFilter(el, content, updateMargins) {
	  updateMargins = updateMargins || false;
	
	  var filters = [],
	      filtersEl = null,
	      contentEl = null,
	      columns = 3,
	      contentItems = [],
	      delay = 500,
	      timeoutOneRunning = false,
	      timeoutTwoRunning = false,
	      stagger = 120,
	      i;
	
	  function simulateAllInputs() {
	    var simulationPrefix = /^simulate-all-/,
	        simulatingInputs = [],
	        realInputs = [],
	        inputs = document.getElementsByTagName('input'),
	        i,
	        l;
	
	    for (i = 0, l = inputs.length; i < l; i += 1) {
	      if (simulationPrefix.test(inputs[i].id)) {
	        simulatingInputs.push(inputs[i]);
	        realInputs.push(inputs[i]);
	      }
	    }
	  }
	
	  function init(el) {
	    var i, j;
	
	    filtersEl = el;
	    contentEl = content;
	
	    // build array for each filter
	    for (i = 0; i < filtersEl.length; i += 1) {
	      var filter = filtersEl[i];
	
	      filters.push({
	        active: [],
	        tracker: false,
	        inputsEl: filter.getElementsByTagName("input")
	      });
	    }
	
	    // build array for each content, containing parsed data
	    for (i = 0; i < contentEl.length; i += 1) {
	      var item = contentEl[i],
	          parsedFilter;
	
	      var dataset = item.dataset.tags;
	      var parsedDatas = [];
	      if (typeof dataset !== 'undefined') {
	
	        // filter empty strings
	        var dataArray = dataset.split(',');
	        dataArray = dataArray.filter(Boolean);
	
	        for (j = 0; j < dataArray.length; j += 1) {
	          // create an array containing the filter names
	          // pattern : [category,[name,name,name]]
	          // using / for category splitting and + for name splitting
	          var parsedCategory = dataArray[j].split("/");
	          if (parsedCategory.length > 1) {
	            parsedFilter = parsedCategory[1].split("+");
	          }
	          if (parsedFilter.length > 1) {
	            parsedCategory[1] = parsedFilter;
	          }
	          parsedDatas.concat(parsedFilter);
	          //concat arrays together without creating a new one
	          Array.prototype.push.apply(parsedDatas, parsedFilter);
	        }
	        parsedDatas = dataArray;
	      }
	
	      contentItems.push({
	        active: true,
	        filters: parsedDatas,
	        itemEl: contentEl[i]
	      });
	    }
	
	    simulateAllInputs();
	    filterBasedOnUrl();
	  }
	
	  // Used to abort timeout if it is not relevant anymore.
	  // A timeout is only relevant when it's "true".
	  function isTimeoutStillRelevant(itemspecificTimeoutNumber) {
	    if (timeoutOneRunning && !timeoutTwoRunning && itemspecificTimeoutNumber === 1 || !timeoutOneRunning && timeoutTwoRunning && itemspecificTimeoutNumber === 2) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // This item-specific timeout number must be assigned BEFORE the timeout gets initialized
	  function getItemspecificTimeoutNumber() {
	    var itemspecificTimeoutNumber;
	
	    if (timeoutOneRunning && !timeoutTwoRunning) {
	      itemspecificTimeoutNumber = 1;
	    } else if (!timeoutOneRunning && timeoutTwoRunning) {
	      itemspecificTimeoutNumber = 2;
	    }
	
	    return itemspecificTimeoutNumber;
	  }
	
	  function animateFilterItem() {
	    var currentDelay = delay,
	        currentIndex = 0,
	        i;
	
	    function reveal(item, currentDelay, currentIndex) {
	      var itemspecificTimeoutNumber = getItemspecificTimeoutNumber();
	
	      // two timeouts here because if set inline-block and opacity at the same frame, animation
	      // is not played...
	      setTimeout(function () {
	        if (!isTimeoutStillRelevant(itemspecificTimeoutNumber)) {
	          return;
	        }
	
	        item.itemEl.style.display = 'inline-block';
	
	        if (updateMargins) {
	          removeClass(item.itemEl, "no-margin");
	          if (currentIndex % columns === 0) {
	            addClass(item.itemEl, "no-margin");
	          } else {
	            addClass(item.itemEl, "active");
	          }
	        }
	      }, currentDelay - 50);
	
	      setTimeout(function () {
	        if (!isTimeoutStillRelevant(itemspecificTimeoutNumber)) {
	          return;
	        }
	
	        item.itemEl.style.opacity = 1;
	      }, currentDelay);
	    }
	
	    function hide(item, currentDelay) {
	      var itemspecificTimeoutNumber = getItemspecificTimeoutNumber();
	
	      setTimeout(function () {
	        if (!isTimeoutStillRelevant(itemspecificTimeoutNumber)) {
	          return;
	        }
	
	        item.itemEl.style.display = 'none';
	      }, currentDelay);
	    }
	
	    // Before loop which initializes lots of timeouts...
	    // Make sure that two timeouts are never running at the same time
	    // (thus, never timeoutOneRunning === timeoutTwoRunning)
	    if (!timeoutOneRunning && !timeoutTwoRunning) {
	      timeoutOneRunning = true;
	    } else if (timeoutOneRunning && !timeoutTwoRunning) {
	      timeoutOneRunning = false;
	      timeoutTwoRunning = true;
	    } else if (!timeoutOneRunning && timeoutTwoRunning) {
	      timeoutOneRunning = true;
	      timeoutTwoRunning = false;
	    }
	
	    for (i = 0; i < contentItems.length; i += 1) {
	      var currentContent = contentItems[i];
	      currentContent.itemEl.style.opacity = 0;
	
	      if (currentContent.active) {
	        currentIndex += 1;
	        reveal(currentContent, currentDelay, currentIndex);
	        currentDelay += stagger;
	      } else {
	        hide(currentContent, delay);
	      }
	    }
	  }
	
	  function filterItems() {
	    var cache = '',
	        crawled = false,
	        i,
	        j,
	        k,
	        checkFilter = function (item) {
	      var match = true;
	
	      for (i = 0; i < filters.length; i += 1) {
	        var currentFilter = filters[i];
	        var filterMatch = true;
	
	        if (currentFilter.active.length) {
	          filterMatch = false;
	
	          for (j = 0; j < currentFilter.active.length; j += 1) {
	            var currentItemFilter = currentFilter.active[j];
	
	            for (k = 0; k < item.filters.length; k += 1) {
	              var itemFilter = item.filters[k];
	
	              if (itemFilter === currentItemFilter) {
	                filterMatch = true;
	              }
	            }
	          }
	          if (filterMatch === false) {
	            match = false;
	          }
	        }
	      }
	      return match;
	    },
	        crawl = function () {
	      var i;
	
	      if (contentItems.length === 0) {
	        crawled = true;
	      }
	
	      // go through each DOM element and check if they match
	      for (i = 0; i < contentItems.length; i += 1) {
	        var currentItem = contentItems[i];
	
	        var matched = checkFilter(currentItem);
	        if (matched) {
	          currentItem.active = true;
	        } else {
	          currentItem.active = false;
	        }
	        if (i === contentItems.length - 1) {
	          crawled = true;
	        }
	      }
	    },
	        outputArray = []; // reset output array
	
	    do {
	      crawl();
	    } while (!crawled);
	
	    animateFilterItem();
	  }
	
	  function parseFilter() {
	    var i, j;
	
	    // loop through each filter group and add active filters to arrays
	    for (i = 0; i < filters.length; i += 1) {
	      var currentFilter = filters[i];
	      currentFilter.active = [];
	
	      for (j = 0; j < currentFilter.inputsEl.length; j += 1) {
	        var currentInput = currentFilter.inputsEl[j];
	        var value = currentInput.getAttribute('value');
	        if (value !== null && value !== "" && currentInput.checked) {
	          currentFilter.active.push(value);
	        }
	      }
	
	      if (currentFilter.active.length) {
	        currentFilter.tracker = 0;
	      }
	    }
	    filterItems();
	  }
	
	  function bindEvents() {
	    var i;
	
	    for (i = 0; i < filtersEl.length; i += 1) {
	
	      filtersEl[i].addEventListener('change', function (event, params) {
	
	        parseFilter();
	      });
	    }
	  }
	
	  function resetFilters() {
	    var i;
	
	    for (i = 0; i < filters.length; i += 1) {
	      filters[i].active = [];
	    }
	
	    filterItems();
	  }
	
	  function filterBasedOnUrl() {
	    var selectedFilters = window.location.hash.substring(1).split(',');
	    if (selectedFilters.length > 0) {
	      selectedFilters.forEach(function (id) {
	        var el = document.getElementById(id);
	        if (el) {
	          el.checked = true;
	        }
	      });
	      parseFilter();
	    }
	  }
	
	  function _resize() {}
	
	  // var parentWidth = getComputedStyle(filterTitle[0])["width"];
	
	  // var newWidth = Math.floor(parseInt(parentWidth));
	  // el.style.width = newWidth + 'px';
	
	  // for(var j = 0; j < filterItems.length; j += 1) {
	  // filterItems[j].style.width = newWidth + 'px';
	  // }
	
	  // ---- initialize ---
	  init(el);
	  bindEvents();
	
	  return {
	    _public: function () {},
	    resetFilters: function () {
	      resetFilters();
	    },
	    resize: function () {
	
	      _resize();
	    }
	
	  };
	}
	
	module.exports = contentFilter;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var hasClass = __webpack_require__(11);
	
	function addClass(el, className) {
	  if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) el.className += " " + className;
	}
	
	module.exports = addClass;

/***/ },
/* 11 */
/***/ function(module, exports) {

	function hasClass(el, className) {
	  if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}
	
	module.exports = hasClass;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var hasClass = __webpack_require__(11);
	
	function removeClass(el, className) {
	  if (el.classList) el.classList.remove(className);else if (hasClass(el, className)) {
	    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
	    el.className = el.className.replace(reg, ' ');
	  }
	}
	
	module.exports = removeClass;

/***/ },
/* 13 */
/***/ function(module, exports) {

	function contentDropdowns(el) {
	
	  var dropDownTitle = el.querySelector("h5");
	  var cdiContent = el.querySelectorAll(".cdi-content");
	  var arrowDown = el.querySelectorAll(".arrow-down");
	
	  function _private() {}
	
	  return {
	    _public: function () {
	      _private();
	
	      dropDownTitle.addEventListener('click', function (e) {
	        el.classList.toggle("opened");
	        e.preventDefault();
	      });
	    }
	
	  };
	}
	
	module.exports = contentDropdowns;

/***/ },
/* 14 */
/***/ function(module, exports) {

	function codeSnippet(el) {
	  var copyCodeLineBtns = el.getElementsByClassName("codelinecopybtn");
	  var csCode = el.getElementsByClassName("cs-code");
	  var csCodeFormat = csCode[0].getElementsByTagName("code");
	
	  function _private() {}
	
	  return {
	    _public: function () {
	      _private();
	
	      //Convert code from div
	      Array.prototype.forEach.call(csCodeFormat, function (el, i) {
	        _transformCodeElToDiv(el);
	      });
	
	      //Management copy code
	      Array.prototype.forEach.call(copyCodeLineBtns, function (el, i) {
	
	        if (document.queryCommandSupported('copy')) {
	          //api - native browser
	          el.addEventListener('click', function (e) {
	            _CopyCode(el);
	          });
	        } else {
	          //external lib - flash
	          ZeroClipboard.config({
	            swfPath: "/etc/designs/common-twitter/clientlib-site/swf/zeroclipboard.swf",
	            cacheBust: true
	          });
	
	          _CopyCodeByZeroClipboard(el);
	        }
	      });
	
	      var self = el;
	      //button see more/less
	      Array.prototype.forEach.call(csCode, function (el, i) {
	        var codeSnippetCollapsed = self.classList.contains("code-snippet-collapsed");
	        var linesNum = el.querySelectorAll(".cs-code-line").length;
	        if (linesNum > 16 && !codeSnippetCollapsed) {
	          el.classList.add("reduced");
	          el.parentElement.classList.add("grad");
	          for (var i = 16; i < linesNum; i++) {
	            el.querySelectorAll(".cs-code-line")[i].classList.add("hidden");
	          }
	          var seeBtn = el.parentNode.querySelector(".see");
	
	          seeBtn.classList.add("active");
	          seeBtn.classList.add("more");
	
	          seeBtn.addEventListener('click', function (e) {
	
	            if (this.classList.contains("more")) {
	
	              this.getElementsByTagName('span')[0].innerHTML = "See Less";
	              for (var i = 16; i < linesNum; i++) {
	                el.querySelectorAll(".cs-code-line")[i].classList.remove("hidden");
	              }
	              el.parentElement.classList.remove("grad");
	              this.classList.remove("more");
	              this.classList.add("less");
	            } else {
	              this.getElementsByTagName('span')[0].innerHTML = "See More";
	              for (var i = 16; i < linesNum; i++) {
	                el.querySelectorAll(".cs-code-line")[i].classList.add("hidden");
	              }
	              this.classList.remove("less");
	              this.classList.add("more");
	              el.parentElement.classList.add("grad");
	            }
	          });
	        }
	      });
	
	      // Functions
	      //
	      function _transformCodeElToDiv(code) {
	
	        var container = findAncestor(code, "cs-code");
	        var c = code.innerHTML;
	
	        var lines = c.split("\n");
	
	        //Hide tag code or pre
	        code.style.display = "none";
	
	        //Case if you use PRE tag before CODE
	        if (code.parentElement.nodeName == "PRE") {
	          code.parentElement.style.display = "none";
	        }
	
	        for (var i = 0; i < lines.length; i++) {
	
	          //format number like 1 to 01
	          var nb_line = i + 1;
	          if (nb_line < 10) {
	            nb_line = "0" + nb_line;
	          }
	
	          //Check if first and last line contains only space or empty var
	          /*if (i == 0 || i == lines.length - 1) {
	            var patt = new RegExp("\\s", "g");
	           var res = patt.test(lines[i]);
	            if (res || lines[i] == "") {
	           //next iteration
	           continue;
	           }
	           }*/
	
	          //Default action
	          _transformLineTextToHtml(nb_line, lines[i], container);
	        };
	      }
	
	      function _transformLineTextToHtml(line_number, line_content, container) {
	        //Read from inverse - syntax obligation
	        var code_TagLineContent = document.createElement('code');
	        code_TagLineContent.innerHTML = line_content;
	
	        var pre_TagLineContent = document.createElement('pre');
	        pre_TagLineContent.appendChild(code_TagLineContent);
	
	        var div_TagLineNumber = document.createElement('div');
	        div_TagLineNumber.className = "number-line";
	        div_TagLineNumber.innerHTML = line_number;
	
	        var div_TagLine = document.createElement('div');
	        div_TagLine.className = "cs-code-line";
	
	        div_TagLine.appendChild(div_TagLineNumber);
	        div_TagLine.appendChild(pre_TagLineContent);
	
	        container.appendChild(div_TagLine);
	
	        /*
	         <div class="cs-code-line">
	         <div class="number-line">01</div>
	         <div> <pre><code>"place": {</code></pre></div>
	         </div> */
	      }
	
	      function _CopyCodeByZeroClipboard(button) {
	
	        var codelines, codes, textareaTmp;
	        var i;
	        codes = "";
	        codelines = button.parentNode.previousElementSibling.querySelectorAll('div.cs-code-line code');
	
	        if (codelines.length > 0) {
	
	          for (i = 0; i < codelines.length; i++) {
	            codes = codes + codelines[i].textContent + " \n";
	          }
	
	          var client = new ZeroClipboard(button);
	
	          client.on('ready', function (event) {
	
	            client.on('copy', function (event) {
	              event.clipboardData.setData('text/plain', codes);
	            });
	
	            client.on('aftercopy', function (event) {
	              //console.log('Copied text to clipboard: ' + event.data['text/plain']);
	            });
	          });
	
	          client.on('error', function (event) {
	            //console.log('ZeroClipboard error of type "' + event.name + '": ' + event.message);
	            ZeroClipboard.destroy();
	          });
	        }
	      }
	
	      function _CopyCode(button) {
	        var codelines, codes, textareaTmp;
	        var i;
	        codes = "";
	        codelines = button.parentNode.previousElementSibling.querySelectorAll('div.cs-code-line code');
	        if (codelines.length > 0) {
	          for (i = 0; i < codelines.length; i++) {
	            codes = codes + codelines[i].textContent + " \n";
	          }
	
	          var tmpDateId = Math.floor(new Date().getTime() / 1000);
	          var tmpId = "cs_code_copy_" + tmpDateId;
	
	          textareaTmp = document.createElement('textarea');
	          textareaTmp.id = tmpId;
	          textareaTmp.style.position = 'fixed';
	          textareaTmp.style.opacity = 0;
	          textareaTmp.value = codes;
	          document.body.appendChild(textareaTmp);
	
	          document.getElementById(tmpId).focus();
	          document.getElementById(tmpId).select();
	
	          try {
	            var successful = document.execCommand('copy');
	            //var msg = successful ? 'successful' : 'unsuccessful';
	            //console.log('Copying text command was ' + msg);
	          } catch (err) {
	            //console.log('Unable to copy');
	          } finally {
	            document.body.removeChild(textareaTmp);
	          }
	        }
	      }
	
	      function findAncestor(el, cls) {
	        while ((el = el.parentElement) && !el.classList.contains(cls));
	        return el;
	      }
	
	      //console.log(el.classList.contains("code-snippet-collapsed"));
	
	      if (el.classList.contains("code-snippet-collapsed")) {
	        //console.log("here");
	
	        var closeButton = el.getElementsByClassName("close-snippet")[0];
	        var cdTitle = el.getElementsByTagName("h5")[0];
	
	        closeButton.addEventListener('click', function (e) {
	          el.classList.toggle("opened");
	        });
	
	        cdTitle.addEventListener('click', function (e) {
	          el.classList.toggle("opened");
	        });
	      }
	    }
	
	  };
	}
	
	module.exports = codeSnippet;

/***/ },
/* 15 */
/***/ function(module, exports) {

	function modules(el) {
	
	  function _private() {}
	
	  // all public functions
	  return {
	    _public: function () {
	      _private();
	    }
	
	  };
	}
	
	module.exports = modules;

/***/ },
/* 16 */
/***/ function(module, exports) {

	function notification(el) {
	
	  function _private() {}
	
	  // all public functions
	  return {
	    _public: function () {
	      _private();
	
	      el.addEventListener('click', function (e) {
	        e.preventDefault();
	        this.classList.remove("active");
	        return false;
	      });
	    }
	
	  };
	}
	
	module.exports = notification;

/***/ },
/* 17 */
/***/ function(module, exports) {

	function backToTop(el) {
	
	  function _private() {}
	
	  return {
	    _public: function () {
	      _private();
	
	      checkOffset();
	
	      el.addEventListener('click', function (event) {
	        var elem = document.documentElement.scrollTop > 0 ? document.documentElement : document.body;
	
	        scrollTo(elem, 0, 1000);
	      });
	
	      var clearTimer = null;
	
	      el.addEventListener('mouseover', function (event) {
	        var elemScrollTop = document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop : document.body.scrollTop;
	
	        if (elemScrollTop > 400) {
	          clearTimeout(clearTimer);
	          el.classList.add("reveal");
	        } else {
	          el.classList.remove("reveal");
	        }
	      });
	
	      document.addEventListener('scroll', function () {
	        clearTimeout(clearTimer);
	        var elemScrollTop = document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop : document.body.scrollTop;
	
	        if (elemScrollTop > 400) {
	          el.classList.add("reveal");
	
	          checkOffset();
	        } else {
	          el.classList.remove("reveal");
	        }
	
	        clearTimer = setTimeout(function () {
	          el.classList.remove("reveal");
	        }, 500);
	      });
	
	      function checkOffset() {
	        var footer = document.querySelector('footer');
	        var button = el.querySelector('button');
	
	        if (button.getBoundingClientRect().top >= footer.getBoundingClientRect().top - 200) button.classList.add('absolute');
	
	        if (footer.getBoundingClientRect().top - window.innerHeight > 10) button.classList.remove('absolute');
	      }
	
	      // simple scroll to function with easeOutQuart easing
	      function scrollTo(element, to, duration) {
	        var start = element.scrollTop,
	            change = to - start,
	            currentTime = 0,
	            increment = 20;
	
	        var animateScroll = function () {
	          currentTime += increment;
	
	          var val = Math.easeOutQuart(currentTime, start, change, duration);
	          element.scrollTop = val;
	
	          if (currentTime < duration) {
	            setTimeout(animateScroll, increment);
	          }
	        };
	
	        animateScroll();
	      }
	
	      Math.easeOutQuart = function (t, b, c, d) {
	        t /= d;
	        t--;
	        return -c * (t * t * t * t - 1) + b;
	      };
	    }
	  };
	}
	
	module.exports = backToTop;

/***/ },
/* 18 */
/***/ function(module, exports) {

	function navigation(el) {
	
	  function _private() {}
	
	  // all public functions
	  return {
	    _public: function () {
	      _private();
	
	      var transparentMasthead = document.getElementsByClassName('transparent');
	
	      var getParents = function (elem, selector) {
	        var parents = [];
	        if (selector) {
	          var firstChar = selector.charAt(0);
	        }
	
	        // Get matches
	        for (; elem && elem !== document; elem = elem.parentNode) {
	          if (selector) {
	
	            if (firstChar === '.') {
	              if (elem.classList.contains(selector.substr(1))) {
	                parents.push(elem);
	              }
	            }
	
	            if (firstChar === '#') {
	              if (elem.id === selector.substr(1)) {
	                parents.push(elem);
	              }
	            }
	
	            if (firstChar === '[') {
	              if (elem.hasAttribute(selector.substr(1, selector.length - 1))) {
	                parents.push(elem);
	              }
	            }
	
	            if (elem.tagName.toLowerCase() === selector) {
	              parents.push(elem);
	            }
	          } else {
	            parents.push(elem);
	          }
	        }
	
	        // Return parents if any exist
	        if (parents.length === 0) {
	          return null;
	        } else {
	          return parents;
	        }
	      };
	
	      var parents = getParents(el, '.t-row');
	      if (parents !== null) {
	        parents[0].classList.add("t-row-contextual");
	
	        if (transparentMasthead.length > 0) {
	          parents[0].classList.add("transp");
	        }
	      }
	    }
	
	  };
	}
	
	module.exports = navigation;

/***/ },
/* 19 */
/***/ function(module, exports) {

	function equalHeights(el) {
	
	  function _private() {}
	
	  // all public functions
	  return {
	    _public: function (el) {
	      _private();
	
	      var items;
	
	      var getTallest = function () {
	
	        var tallest = 0;
	
	        for (var i = 0; i < items.length; i++) {
	
	          var offsetHeight = items[i].offsetHeight;
	
	          if (offsetHeight > tallest) {
	
	            tallest = offsetHeight;
	          }
	        }
	
	        return tallest;
	      };
	
	      var makeEqual = function () {
	
	        for (var i = 0; i < items.length; i++) {
	
	          items[i].style.height = "auto";
	        }
	
	        if (window.innerWidth > 900) {
	
	          var tallest = getTallest();
	
	          for (var i = 0; i < items.length; i++) {
	
	            items[i].style.height = tallest + "px";
	          }
	        }
	      };
	
	      // Store the actual items in a variable
	      items = el.querySelectorAll(".comp-wrapper");
	      if (items.length > 1) {
	
	        // Bind an event listener to change heights when the window size changes
	        window.addEventListener("resize", makeEqual);
	
	        makeEqual();
	      }
	    }
	
	  };
	}
	
	module.exports = equalHeights;

/***/ },
/* 20 */
/***/ function(module, exports) {

	function uploadButton(el) {
	
	  function _private() {}
	
	  return {
	    _public: function () {
	      _private();
	
	      var input = el.querySelector('.input-file'),
	          label = input.nextElementSibling,
	          labelVal = label.textContent,
	          labelSpan = label.querySelector('span'),
	          closeBtn = label.querySelector('.upload-button-close'),
	          errorMessage = el.querySelector('.error-message');
	
	      input.addEventListener('change', function (e) {
	        var fileName = getFileName();
	
	        closeBtn.classList.remove('hide');
	
	        if (fileName) {
	          labelSpan.textContent = fileName;
	          label.classList.add('file-added');
	
	          if (errorMessage) {
	            errorMessage.classList.remove('active');
	            label.classList.remove('error');
	          }
	        } else {
	          labelSpan.textContent = labelVal;
	          label.classList.remove('file-added');
	        }
	      });
	
	      closeBtn.addEventListener('click', function (e) {
	        e.preventDefault();
	
	        input.value = null;
	
	        labelSpan.textContent = labelVal;
	        label.classList.remove('file-added');
	
	        closeBtn.classList.add('hide');
	      });
	
	      function getFileName() {
	        var fileName;
	        fileName = input.value.split('\\').pop();
	
	        return fileName;
	      }
	    }
	  };
	}
	
	module.exports = uploadButton;

/***/ }
/******/ ]);
//# sourceMappingURL=common.js.map