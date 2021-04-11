"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    _classCallCheck(this, App);

    return _super.call(this, props);
  }

  _createClass(App, [{
    key: "handleClick",
    value: function handleClick() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("button", {
        onClick: this.handleClick
      }, "Checkout");
    }
  }]);

  return App;
}(React.Component);

var Checkout = /*#__PURE__*/function (_React$Component2) {
  _inherits(Checkout, _React$Component2);

  var _super2 = _createSuper(Checkout);

  function Checkout(props) {
    _classCallCheck(this, Checkout);

    return _super2.call(this, props);
  }

  _createClass(Checkout, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", null);
    }
  }]);

  return Checkout;
}(React.Component);

var UserAccount = function UserAccount() {
  /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "First Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text"
  }), /*#__PURE__*/React.createElement("label", null, "Last Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text"
  }), /*#__PURE__*/React.createElement("label", null, "Email Address:"), /*#__PURE__*/React.createElement("input", {
    type: "email"
  }), /*#__PURE__*/React.createElement("label", null, "Password:"), /*#__PURE__*/React.createElement("input", {
    type: "password"
  }));
};

var AddressInfo = function AddressInfo() {
  /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Shipping Address"), /*#__PURE__*/React.createElement("label", null, "line 1:"), /*#__PURE__*/React.createElement("input", {
    type: "text"
  }), /*#__PURE__*/React.createElement("label", null, "line 2:"), /*#__PURE__*/React.createElement("input", {
    type: "text"
  }), /*#__PURE__*/React.createElement("label", null, "City:"), /*#__PURE__*/React.createElement("input", {
    type: "text"
  }), /*#__PURE__*/React.createElement("label", null, "State:"), /*#__PURE__*/React.createElement("input", {
    type: "text"
  }), /*#__PURE__*/React.createElement("label", null, "Zip:"), /*#__PURE__*/React.createElement("input", {
    type: "number"
  }));
};

var CreditCardInfo = function CreditCardInfo() {
  /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Credit Card #:"), /*#__PURE__*/React.createElement("input", {
    type: "number"
  }), /*#__PURE__*/React.createElement("label", null, "Exp Date:"), /*#__PURE__*/React.createElement("input", {
    type: "number"
  }), /*#__PURE__*/React.createElement("label", null, "CVV:"), /*#__PURE__*/React.createElement("input", {
    type: "number"
  }));
};

var OrderConfirmation = function OrderConfirmation() {
  /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "First Name:"), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("label", null, "Last Name:"), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("label", null, "Email Address:"), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("label", null, "Shipping Address"), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("label", null, "line 1:"), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("label", null, "line 2:"), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("label", null, "City:"), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("label", null, "State:"), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("label", null, "Zip:"), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("label", null, "Credit Card #:"), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("label", null, "Exp Date:"), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("label", null, "CVV:"), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("button", null, "Purchase"));
};

var NextButton = function NextButton() {
  return /*#__PURE__*/React.createElement("button", null, "Next");
};

var BackButton = function BackButton() {
  return /*#__PURE__*/React.createElement("button", null, "Back");
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));