'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchMedia = matchMedia;
var MATCH_MEDIA = exports.MATCH_MEDIA = '@@Match_MEDIA@@';

function matchMedia(mediaQueryList) {
  return {
    type: MATCH_MEDIA,
    query: mediaQueryList.media,
    matches: mediaQueryList.matches
  };
}