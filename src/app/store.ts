/**
 * store.ts
 * File for creating redux store and attaching middleware.
 */

// Node Modules
import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';

// Reducers
// const reducers = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === 'INITIAL_STATE') {
    // Catches INITIAL_STATE action type before creating api reducers and
    // resets redux reducer store back to initial state if passed.
    state = undefined;
  }

  // return reducers(state, action);
  return state;
};

// Store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
