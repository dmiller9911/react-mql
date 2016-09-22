"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addListeners = addListeners;
exports.removeListeners = removeListeners;
exports.getMatchMediaValues = getMatchMediaValues;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var matchMediaObj = {};

function addListeners(handler) {
  for (var _len = arguments.length, mediaQueries = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    mediaQueries[_key - 1] = arguments[_key];
  }

  mediaQueries.forEach(function (q) {
    if (!matchMediaObj[q]) {
      matchMediaObj[q] = window.matchMedia(q);
    }
    matchMediaObj[q].addListener(handler);
  });
}

function removeListeners(handler) {
  for (var _len2 = arguments.length, mediaQueries = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    mediaQueries[_key2 - 1] = arguments[_key2];
  }

  mediaQueries.forEach(function (q) {
    if (!matchMediaObj[q]) {
      return;
    }
    matchMediaObj[q].removeListener(handler);
  });
}

function getMatchMediaValues() {
  for (var _len3 = arguments.length, mediaQueries = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    mediaQueries[_key3] = arguments[_key3];
  }

  return mediaQueries.reduce(function (prev, q) {
    if (!matchMediaObj[q]) {
      matchMediaObj[q] = window.matchMedia(q);
    }
    return Object.assign({}, prev, _defineProperty({}, q, matchMediaObj[q].matches));
  }, {});
}