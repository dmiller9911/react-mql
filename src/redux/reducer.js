import * as queryUtil from '../common/queryUtil';
import { MATCH_MEDIA } from './actions';

function getDefaultState(...mediaQueries) {
  return queryUtil.getMatchMediaValues(...mediaQueries);
}

export default function createMatchMediaReducer(...mediaQueries) {
  return (state = getDefaultState(...mediaQueries), action = {}) => {
    if (action.type === MATCH_MEDIA) {
      return Object.assign({}, state, {
        [action.query]: action.matches
      });
    }
    return state;
  };
}
