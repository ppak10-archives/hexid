/**
 * actions.ts
 * Common redux actions.
 */

export const setTheme = (theme: string) => ({
  type: 'SET_COMMON_THEME',
  payload: {
    theme,
  }
});
