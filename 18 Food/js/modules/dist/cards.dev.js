"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _services = require("../services/services");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function cards() {
  // Используем классы для создания карточек меню
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

        element.innerHTML = "\n\t\t\t\t\t\t<img src=".concat(this.src, " alt=").concat(this.alt, ">\n\t\t\t\t\t\t<h3 class=\"menu__item-subtitle\">").concat(this.title, "</h3>\n\t\t\t\t\t\t<div class=\"menu__item-descr\">").concat(this.descr, "</div>\n\t\t\t\t\t\t<div class=\"menu__item-divider\"></div>\n\t\t\t\t\t\t<div class=\"menu__item-price\">\n\t\t\t\t\t\t\t<div class=\"menu__item-cost\">\u0426\u0435\u043D\u0430:</div>\n\t\t\t\t\t\t\t<div class=\"menu__item-total\"><span>").concat(this.price, "</span> \u0433\u0440\u043D/\u0434\u0435\u043D\u044C</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t");
        this.parent.append(element);
      }
    }]);

    return MenuCard;
  }();

  axios.get('http://localhost:3000/menu').then(function (data) {
    data.data.forEach(function (_ref) {
      var img = _ref.img,
          altimg = _ref.altimg,
          title = _ref.title,
          descr = _ref.descr,
          price = _ref.price;
      new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    });
  });
}

var _default = cards;
exports["default"] = _default;