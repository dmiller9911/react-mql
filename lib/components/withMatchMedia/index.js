'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withMatchMediaHoc;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _queryUtil = require('../../common/queryUtil');

var queryUtil = _interopRequireWildcard(_queryUtil);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withMatchMediaHoc() {
  for (var _len = arguments.length, mediaQueries = Array(_len), _key = 0; _key < _len; _key++) {
    mediaQueries[_key] = arguments[_key];
  }

  return function (WrappedComponent) {
    var MatchMedia = function (_Component) {
      _inherits(MatchMedia, _Component);

      function MatchMedia(props) {
        _classCallCheck(this, MatchMedia);

        var _this = _possibleConstructorReturn(this, (MatchMedia.__proto__ || Object.getPrototypeOf(MatchMedia)).call(this, props));

        _this.state = {
          matchesMedia: {}
        };

        _this.handleMatchMedia = _this.handleMatchMedia.bind(_this);
        return _this;
      }

      _createClass(MatchMedia, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          queryUtil.addListeners.apply(queryUtil, [this.handleMatchMedia].concat(mediaQueries));
          this.setState({
            matchesMedia: queryUtil.getMatchMediaValues.apply(queryUtil, mediaQueries)
          });
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          queryUtil.removeListeners.apply(queryUtil, [this.handleMatchMedia].concat(mediaQueries));
        }
      }, {
        key: 'handleMatchMedia',
        value: function handleMatchMedia(mediaQueryList) {
          this.setState({
            matchesMedia: Object.assign({}, this.state.matchesMedia, _defineProperty({}, mediaQueryList.media, mediaQueryList.matches))
          });
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
            matchesMedia: this.state.matchesMedia
          }));
        }
      }]);

      return MatchMedia;
    }(_react.Component);

    return MatchMedia;
  };
}