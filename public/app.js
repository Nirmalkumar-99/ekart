"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Place = function () {
  function Place(plc) {
    _classCallCheck(this, Place);

    this.plc = plc;
  }

  _createClass(Place, [{
    key: "getPlace",
    value: function getPlace() {
      return "I like " + this.plc;
    }
  }]);

  return Place;
}();

function App() {
  var pp = new Place("kashmir");

  var detail = {
    name: "welcome"
  };

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      Toggle = _useState2[0],
      state = _useState2[1];

  var toggleHandler = function toggleHandler() {
    var temp = Toggle;
    state(!temp);
  };
  var displayContent = detail.name + " Hello.. this is react!!";
  if (Toggle) {
    displayContent = "bye..";
  }

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: toggleHandler },
      "clickme"
    ),
    React.createElement(
      "div",
      { className: "content" },
      displayContent
    ),
    pp.getPlace()
  );
}

exports.default = App;
