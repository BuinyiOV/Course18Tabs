"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function slider(_ref) {
  var container = _ref.container,
      slide = _ref.slide,
      nextArrow = _ref.nextArrow,
      prevArrow = _ref.prevArrow,
      totalCounter = _ref.totalCounter,
      currentCounter = _ref.currentCounter,
      wrapper = _ref.wrapper,
      field = _ref.field;
  //Slider
  var slides = document.querySelectorAll(slide),
      slider = document.querySelector(container),
      prev = document.querySelector(prevArrow),
      next = document.querySelector(nextArrow),
      total = document.querySelector(totalCounter),
      current = document.querySelector(currentCounter),
      slidesWrapper = document.querySelector(wrapper),
      slidesField = document.querySelector(field),
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

  ;
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

  function strToNum(str) {
    return +str.replace(/\D/g, '');
  }

  next.addEventListener('click', function () {
    if (offset == strToNum(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += strToNum(width);
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
      offset = strToNum(width) * (slides.length - 1);
    } else {
      offset -= strToNum(width);
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
      offset = strToNum(width) * (slideTo - 1);
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
}

var _default = slider;
exports["default"] = _default;