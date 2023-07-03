"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeModal = closeModal;
exports.openModal = openModal;
exports["default"] = void 0;

function closeModal(modalSelector) {
  var modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
  var modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  console.log(modalTimerId);

  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

;

function modal(triggerSelector, modalSelector, modalTimerId) {
  // Modal
  var modalTrigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector);
  modalTrigger.forEach(function (btn) {
    btn.addEventListener('click', function () {
      return openModal(modalSelector, modalTimerId);
    });
  });
  modal.addEventListener('click', function (e) {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
      closeModal(modalSelector);
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal(modalSelector);
    }
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);
}

var _default = modal;
exports["default"] = _default;