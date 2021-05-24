/**
 * actions.js
 * API redux actions generated from constants file.
 */

// Constants
import {API} from './constants.json';

// Utils
import {createActionKey}  from './utils';

/**
 * @description Action type to set specified API reducer to initial state.
 * @param {string} key
 */
const initialStateAction = (key: string) => ({
  type: `${key}_INITIAL_STATE`,
});

/**
 * @description Action to set loading state for specified API reducer.
 * @param {key} key
 */
const setIsLoadingAction = (key: string) => (isLoading = false) => ({
  type: `${key}_IS_LOADING`,
  payload: {
    isLoading,
  },
});

/**
 * @description Action to set error object for specified API reducer.
 * @param {string} key
 */
const setErrorAction = (key: string) => (error = {}) => ({
  type: `${key}_ERROR`,
  payload: {
    error,
  },
});

/**
 * @description Action to set exception for specified API reducer.
 * @param {string} key
 */
// TODO: Standardize expected exception argument.
const setExceptionAction = (key: string) => (exception) => ({
  type: `${key}_EXCEPTION`,
  payload: {
    exception,
  },
});

/**
 * @description Action to set status code for specified API reducer.
 * @param {string} key
 */
const setStatusCodeAction = (key: string) => (statusCode = null) => ({
  type: `${key}_STATUS_CODE`,
  payload: {
    statusCode,
  },
});

// TODO: Look into specifying interace further.
interface APIActions {
  [key: string]: (arg?: any) => {};
}

/**
 * @description Generates a set of actions that all API calls would utilize.
 */
const apiActions: APIActions = API.reduce((acc, key) => {
  acc[`${key}_INITIAL_STATE_ACTION`] = initialStateAction(key);
  acc[`set${createActionKey(key)}IsLoading`] = setIsLoadingAction(key);
  acc[`set${createActionKey(key)}Error`] = setErrorAction(key);
  acc[`set${createActionKey(key)}Exception`] = setExceptionAction(key);
  acc[`set${createActionKey(key)}StatusCode`] = setStatusCodeAction(key);

  return acc;
}, {});

// TODO: Look into way to resolve ts2305 for these generated exports.
// module.exports = apiActions;

export default apiActions;
