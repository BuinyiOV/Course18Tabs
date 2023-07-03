"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResource = getResource;
exports.postData = void 0;

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

exports.postData = postData;

function getResource(url) {
  var res;
  return regeneratorRuntime.async(function getResource$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch(url));

        case 2:
          res = _context2.sent;

          if (res.ok) {
            _context2.next = 5;
            break;
          }

          throw new Error("Could not fetch ".concat(url, ", status: ").concat(res.status));

        case 5:
          _context2.next = 7;
          return regeneratorRuntime.awrap(res.json());

        case 7:
          return _context2.abrupt("return", _context2.sent);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}