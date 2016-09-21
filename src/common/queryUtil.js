const matchMediaObj = {};

export function addListeners(handler, ...mediaQueries) {
  mediaQueries.forEach((q) => {
    if (!matchMediaObj[q]) {
      matchMediaObj[q] = window.matchMedia(q);
    }
    matchMediaObj[q].addListener(handler);
  });
}

export function removeListeners(handler, ...mediaQueries) {
  mediaQueries.forEach((q) => {
    if (!matchMediaObj[q]) {
      return;
    }
    matchMediaObj[q].removeListener(handler);
  });
}

export function getMatchMediaValues(...mediaQueries) {
  return mediaQueries.reduce((prev, q) => {
    if (!matchMediaObj[q]) {
      matchMediaObj[q] = window.matchMedia(q);
    }
    return Object.assign({}, prev, {
      [q]: matchMediaObj[q].matches
    });
  }, {});
}
