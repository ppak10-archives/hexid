/**
 * reducer.ts
 * Reducer for api.
 */

// Node Modules
import {combineReducers} from 'redux';

// Constants
import {API} from './constants.json';

export const INITIAL_STATE = {
  error: {},
  exception: null,
  isLoading: false,
  statusCode: null,
};

// Utils
import {createReducerKey} from './utils';

/**
 * @description Creates reducer function with given api key
 * @param key
 * @returns
 */
const apiReducer = (key: string) => (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${key}_ERROR`:
      return {
        ...state,
        error: action.payload.error,
      };

    case `${key}_EXCEPTION`:
      return {
        ...state,
        exception: action.payload.exception,
      };

    case `${key}_INITIAL_STATE`:
      return INITIAL_STATE;

    case `${key}_STATUS_CODE`:
      return {
        ...state,
        statusCode: action.payload.statusCode,
      }

    case `${key}_IS_LOADING`:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    default:
      return state;
  }
}

// TODO: look into creating appropriate reducer type / interface.
const reducer = combineReducers({
  // Creates reducer functions for provided api keys.
  // That way it can be referenced consistently with `useSelector` hook, i.e.:
  // ```
  // const {isLoading, error, statusCode} = useSelector(({api}) => api.user);
  // ```
  ...API.reduce((acc, key) => {
    acc[createReducerKey(key)] = apiReducer(key);
    return acc;
  }, {}),
});

export default reducer;
