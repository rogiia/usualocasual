import { FARE_TYPES } from "../actions";
import { loadState } from "../persistence";

export default (state = loadState(), action) => {
  switch (action.type) {
    case 'SET_ZONE':
      if (action.zoneNum > 0 && action.zoneNum < 7) {
        return {
          ...state,
          zone: action.zoneNum
        };
      }
      return state;
    case 'SET_JOVE':
      return {
        ...state,
        jove: !!action.isJove
      };
    case 'SET_REDUCED_FARE':
      if (action.fareType in Object.values(FARE_TYPES)) {
        return {
          ...state,
          fareType: action.fareType
        };
      }
      return state;
    case 'SET_ATUR':
      return {
        ...state,
        atur: !!action.isAtur
      };
    default:
      return state;
  }
}
