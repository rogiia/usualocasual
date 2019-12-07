import { FARE_TYPES } from "../actions";

const STATE_KEY = 'state';
const DEFAULT_STATE = {
  zone: "1",
  jove: false,
  fareType: FARE_TYPES.NORMAL,
  atur: false
};

export const loadState = () => {
  if (!window.localStorage) {
    console.error(new Error('LocalStorage not found'));
    return DEFAULT_STATE;
  }
  try {
    const serializedState = window.localStorage.getItem(STATE_KEY);
    if (serializedState === null) {
      return DEFAULT_STATE;
    }
    return JSON.parse(serializedState);
  } catch(error) {
    console.error(error);
    return DEFAULT_STATE;
  }
};

export const saveState = (state) => {
  if (!window.localStorage) {
    throw new Error('LocalStorage not found');
  }
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem(STATE_KEY, serializedState);
  } catch(error) {
    throw error;
  }
};