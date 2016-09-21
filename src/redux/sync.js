import * as queryUtil from '../common/queryUtil';
import { matchMedia } from './actions';

export default function syncMatchMediaWithStore(key, store) {
  const storeRef = store;

  function handleMatchMedia(mediaQueryList) {
    if (storeRef) {
      storeRef.dispatch(matchMedia(mediaQueryList));
    }
  }

  queryUtil.addListeners(handleMatchMedia, ...Object.keys(store.getState()[key]));
}
