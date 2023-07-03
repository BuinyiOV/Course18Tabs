"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modal = require("./modal");

var _services = require("../services/services");

function forms(formSelector, modalTimerId) {
  // Forms
  var forms = document.querySelectorAll(formSelector);
  var message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  forms.forEach(function (item) {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = "\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmargin: 0 auto;\n\t\t\t";
      form.insertAdjacentElement('afterend', statusMessage);
      var formData = new FormData(form);
      var json = JSON.stringify(Object.fromEntries(formData.entries()));
      (0, _services.postData)('http://localhost:3000/requests', json).then(function (data) {
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
    (0, _modal.openModal)('.modal', modalTimerId);
    var thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = "\n\t\t\t<div class=\"modal__content\">\n\t\t\t\t\t<div class=\"modal__close\" data-close>\xD7</div>\n\t\t\t\t\t<div class=\"modal__title\">".concat(message, "</div>\n\t\t\t</div>\n\t\t");
    document.querySelector('.modal').append(thanksModal);
    setTimeout(function () {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      (0, _modal.closeModal)('.modal');
    }, 4000);
  }

  ;
  fetch("http://localhost:3000/menu").then(function (data) {
    return data.json();
  }); //.then (res => console.log(res)
  //);
}

var _default = forms;
exports["default"] = _default;