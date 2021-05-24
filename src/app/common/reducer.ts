/**
 * reducer.ts
 * Reducer for common redux actions.
 */

// Constants
const INITIAL_STATE = {
  theme: 'light',
};

export default function reducer(state = INITIAL_STATE, {payload, type}) {
  switch (type) {
    case 'SET_COMMON_THEME':
      return {
        ...state,
        theme: payload.theme,
      };
    default:
      return state;
  }
}
