import { createStore } from 'redux';
import { saveState } from './persistence';
import reducers from './reducers';

let store;

export function initialize() {
  store = createStore(reducers);

  // Persist store on any change
  store.subscribe(() => {
    saveState(store.getState());
  });
  
  return store;
}

export function getStore() {
  if (!store) {
    throw new Error('Store is not initialized');
  }
  return store;
}