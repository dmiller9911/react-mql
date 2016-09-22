'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = syncMatchMediaWithStore;

var _queryUtil = require('../common/queryUtil');

var queryUtil = _interopRequireWildcard(_queryUtil);

var _actions = require('./actions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function syncMatchMediaWithStore(key, store) {
  var storeRef = store;

  function handleMatchMedia(mediaQueryList) {
    if (storeRef) {
      storeRef.dispatch((0, _actions.matchMedia)(mediaQueryList));
    }
  }

  queryUtil.addListeners.apply(queryUtil, [handleMatchMedia].concat(_toConsumableArray(Object.keys(store.getState()[key]))));
}