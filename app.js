"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Category = function (_Place) {
  _inherits(Category, _Place);

  function Category(plc, ctgy) {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this, plc));

    _this.ctgy = ctgy;
    return _this;
  }

  _createClass(Category, [{
    key: "display",
    value: function display() {
      var dis = _get(Category.prototype.__proto__ || Object.getPrototypeOf(Category.prototype), "getPlace", this).call(this);
      dis += this.ctgy;
      return dis;
    }
  }]);

  return Category;
}(Place);

function App() {
  var pp = new Place("kashmir");
  var ctg = new Category("Kashmir ", "a tourist palce");

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
    ctg.display()
  );
}

exports.default = App;
