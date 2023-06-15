"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.addEventListener('DOMContentLoaded', function () {
  // Tabs
  var tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach(function (item) {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(function (item) {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach(function (item, i) {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  }); // Timer

  var deadline = '2022-06-11';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60) % 24);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    var timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      var t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline); // Modal

  var modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal');
  modalTrigger.forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  }

  modal.addEventListener('click', function (e) {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
      closeModal();
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });
  var modalTimerId = setTimeout(openModal, 300000); // Изменил значение, чтобы не отвлекало

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll); // Используем классы для создание карточек меню

  var MenuCard =
  /*#__PURE__*/
  function () {
    function MenuCard(src, alt, title, descr, price, parentSelector) {
      _classCallCheck(this, MenuCard);

      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;

      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }

      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    _createClass(MenuCard, [{
      key: "changeToUAH",
      value: function changeToUAH() {
        this.price = this.price * this.transfer;
      }
    }, {
      key: "render",
      value: function render() {
        var element = document.createElement('div');

        if (this.classes.length === 0) {
          this.classes = "menu__item";
          element.classList.add(this.classes);
        } else {
          this.classes.forEach(function (className) {
            return element.classList.add(className);
          });
        }

        element.innerHTML = "\n\t\t\t\t\t<img src=".concat(this.src, " alt=").concat(this.alt, ">\n\t\t\t\t\t<h3 class=\"menu__item-subtitle\">").concat(this.title, "</h3>\n\t\t\t\t\t<div class=\"menu__item-descr\">").concat(this.descr, "</div>\n\t\t\t\t\t<div class=\"menu__item-divider\"></div>\n\t\t\t\t\t<div class=\"menu__item-price\">\n\t\t\t\t\t\t<div class=\"menu__item-cost\">\u0426\u0435\u043D\u0430:</div>\n\t\t\t\t\t\t<div class=\"menu__item-total\"><span>").concat(this.price, "</span> \u0433\u0440\u043D/\u0434\u0435\u043D\u044C</div>\n\t\t\t\t\t</div>\n\t\t\t");
        this.parent.append(element);
      }
    }]);

    return MenuCard;
  }();

  var getResource = function getResource(url) {
    var res;
    return regeneratorRuntime.async(function getResource$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch(url));

          case 2:
            res = _context.sent;

            if (res.ok) {
              _context.next = 5;
              break;
            }

            throw new Error("Could not fetch ".concat(url, ", status: ").concat(res.status));

          case 5:
            _context.next = 7;
            return regeneratorRuntime.awrap(res.json());

          case 7:
            return _context.abrupt("return", _context.sent);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  axios.get('http://localhost:3000/menu').then(function (data) {
    data.data.forEach(function (_ref) {
      var img = _ref.img,
          altimg = _ref.altimg,
          title = _ref.title,
          descr = _ref.descr,
          price = _ref.price;
      new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    });
  }); // Forms

  var forms = document.querySelectorAll('form');
  var message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  forms.forEach(function (item) {
    bindPostData(item);
  });

  var postData = function postData(url, data) {
    var res;
    return regeneratorRuntime.async(function postData$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: data
            }));

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return regeneratorRuntime.awrap(res.json());

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  function bindPostData(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = "\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmargin: 0 auto;\n\t\t\t";
      form.insertAdjacentElement('afterend', statusMessage);
      var formData = new FormData(form);
      var json = JSON.stringify(Object.fromEntries(formData.entries()));
      postData('http://localhost:3000/requests', json).then(function (data) {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      })["catch"](function () {
        showThanksModal(message.failure);
      })["finally"](function () {
        form.reset();
      });
    });
  }

  function showThanksModal(message) {
    var prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    openModal();
    var thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = "\n\t\t\t<div class=\"modal__content\">\n\t\t\t\t\t<div class=\"modal__close\" data-close>\xD7</div>\n\t\t\t\t\t<div class=\"modal__title\">".concat(message, "</div>\n\t\t\t</div>\n\t\t");
    document.querySelector('.modal').append(thanksModal);
    setTimeout(function () {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }

  ;
  fetch("http://localhost:3000/menu").then(function (data) {
    return data.json();
  }); //.then (res => console.log(res)
  //);
  //Slider

  var slides = document.querySelectorAll('.offer__slide'),
      slider = document.querySelector('.offer__slider'),
      prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next'),
      total = document.querySelector('#total'),
      current = document.querySelector('#current'),
      slidesWrapper = document.querySelector('.offer__slider-wrapper'),
      slidesField = document.querySelector('.offer__slider-inner'),
      width = window.getComputedStyle(slidesWrapper).width;
  var slideIndex = 1;
  var offset = 0;

  if (slides.length < 10) {
    total.textContent = "0".concat(slides.length);
    current.textContent = "0".concat(slideIndex);
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';
  slidesWrapper.style.overflow = 'hidden';
  slides.forEach(function (slide) {
    slide.style.width = width;
  });
  slider.style.position = 'relative';
  var indicators = document.createElement('ol'),
      dots = [];

  function dotsOpacity() {
    dots.forEach(function (dot) {
      return dot.style.opacity = '.5';
    });
    dots[slideIndex - 1].style.opacity = 1;
  }

  ;

  function currentIndex() {
    if (slides.length < 10) {
      current.textContent = "0".concat(slideIndex);
    } else {
      current.textContent = slideIndex;
    }
  }

  indicators.classList.add('carousel-indicators');
  indicators.style.cssText = "\n\t\tposition: absolute;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tz-index: 15;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tmargin-right: 15%;\n\t\tmargin-left: 15%;\n\t\tlist-style: none;\n\t";
  slider.append(indicators);

  for (var i = 0; i < slides.length; i++) {
    var dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = "\n\t\t\tbox-sizing: content-box;\n\t\t\tflex: 0 1 auto;\n\t\t\twidth: 30px;\n\t\t\theight: 6px;\n\t\t\tmargin-right: 3px;\n\t\t\tmargin-left: 3px;\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: #fff;\n\t\t\tbackground-clip: padding-box;\n\t\t\tborder-top: 10px solid transparent;\n\t\t\tborder-bottom: 10px solid transparent;\n\t\t\topacity: 0.5;\n\t\t\ttransition: opacity 0.6s ease;\n\t\t";

    if (i == 0) {
      dot.style.opacity = 1;
    }

    indicators.append(dot);
    dots.push(dot);
  }

  next.addEventListener('click', function () {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = "translateX(-".concat(offset, "px)");

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    currentIndex();
    dotsOpacity();
  });
  prev.addEventListener('click', function () {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = "translateX(-".concat(offset, "px)");

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    currentIndex();
    dotsOpacity();
  });
  dots.forEach(function (dot) {
    dot.addEventListener('click', function (e) {
      var slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = +width.slice(0, width.length - 2) * (slideTo - 1);
      slidesField.style.transform = "translateX(-".concat(offset, "px)");
      currentIndex();
      dotsOpacity();
    });
  });
  /* Simple slider
  
  showSlides(slideIndex);
  
  if(slides.length < 10){
  	total.textContent = `0${slides.length}`;
  } else {
  	total.textContent = slides.length;
  }
  
  function showSlides(n) {
  	if (n > slides.length) {
  		slideIndex = 1;
  	}
  
  	if (n < 1){
  		slideIndex = slides.length;
  	}
  
  	slides.forEach(item => item.style.display = 'none');
  
  	slides[slideIndex - 1].style.display = 'block';
  
  	if(slides.length < 10){
  		current.textContent = `0${slideIndex}`;
  	} else {
  		current.textContent = slideIndex;
  	}
  }
  
  function plusSlides(n){
  	showSlides(slideIndex += n);
  }
  
  prev.addEventListener('click', () => {
  	plusSlides(-1);
  });
  
  next.addEventListener('click', () => {
  	plusSlides(1);
  })
  
  */
});