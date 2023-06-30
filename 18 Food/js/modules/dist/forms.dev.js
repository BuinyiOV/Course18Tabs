"use strict";

function forms() {
  // Forms
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
    return regeneratorRuntime.async(function postData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: data
            }));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(res.json());

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
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
}

module.exports = forms;