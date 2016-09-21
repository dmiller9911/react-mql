export const MATCH_MEDIA = '@@Match_MEDIA@@';

export function matchMedia(mediaQueryList) {
  return {
    type: MATCH_MEDIA,
    query: mediaQueryList.media,
    matches: mediaQueryList.matches
  };
}
