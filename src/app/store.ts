/**
 * store.ts
 * File for creating redux store and attaching middleware.
 */

// Node Modules
import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';

// Reducers
import api from 'app/api/reducer';
import common from 'app/common/reducer';
import search from 'app/search/reducer';

const reducers = combineReducers({
  api,
  common,
  search,
});

const rootReducer = (state, action) => {
  if (action.type === 'INITIAL_STATE') {
    // Catches INITIAL_STATE action type before creating api reducers and
    // resets redux reducer store back to initial state if passed.
    state = undefined;
  }

  return reducers(state, action);
};

// Store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
