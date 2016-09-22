'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMatchMediaReducer;

var _queryUtil = require('../common/queryUtil');

var queryUtil = _interopRequireWildcard(_queryUtil);

var _actions = require('./actions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getDefaultState() {
  return queryUtil.getMatchMediaValues.apply(queryUtil, arguments);
}

function createMatchMediaReducer() {
  for (var _len = arguments.length, mediaQueries = Array(_len), _key = 0; _key < _len; _key++) {
    mediaQueries[_key] = arguments[_key];
  }

  return function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? getDefaultState.apply(undefined, mediaQueries) : arguments[0];
    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (action.type === _actions.MATCH_MEDIA) {
      return Object.assign({}, state, _defineProperty({}, action.query, action.matches));
    }
    return state;
  };
}