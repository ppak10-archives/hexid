/**
 * reducer.ts
 * Reducer for redux search.
 */

// Constants
const INITIAL_STATE = {
  results: {},
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case 'SET_SEARCH_AUDIUS_DISCOVERY_B':
      return {
        ...state,
        results: payload.data,
      };

    default:
      return state;
  }
}
