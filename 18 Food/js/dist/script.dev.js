"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("nodelist-foreach-polyfill");

var _tabs = _interopRequireDefault(require("./modules/tabs"));

var _modal = _interopRequireWildcard(require("./modules/modal"));

var _timer = _interopRequireDefault(require("./modules/timer"));

var _cards = _interopRequireDefault(require("./modules/cards"));

var _calc = _interopRequireDefault(require("./modules/calc"));

var _forms = _interopRequireDefault(require("./modules/forms"));

var _slider = _interopRequireDefault(require("./modules/slider"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('es6-promise').polyfill();

window.addEventListener('DOMContentLoaded', function () {
  var modalTimerId = setTimeout(function () {
    return (0, _modal.openModal)('.modal', modalTimerId);
  }, 300000); // Изменил значение, чтобы не отвлекало

  (0, _tabs["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  (0, _modal["default"])('[data-modal]', '.modal', modalTimerId);
  (0, _timer["default"])('.timer', '2024-06-11');
  (0, _cards["default"])();
  (0, _calc["default"])();
  (0, _forms["default"])('form', modalTimerId);
  (0, _slider["default"])({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
});