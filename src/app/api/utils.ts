/**
 * utils.ts
 * Commonly used utility function within api folder.
 */

/**
 * @description Capitalizes the first letter of the given input.
 * @param s
 * @returns
 */
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);


/**
 * @description Creates action key by capitalizing every word.
 * @param key
 * @returns
 */
export const createActionKey = (key: string) =>
  key.split('_').reduce((acc, word) => {
    acc += capitalize(word.toLowerCase());
    return acc;
  }, '');

/**
 * @description Creates reducer key by converting api key to camelcase.
 * @param key
 * @returns
 */
export const createReducerKey = (key: string) =>
  key.split('_').reduce((acc, word, index) => {
    if (index) {
      // Converts to lowercase and capitalizes.
      acc += capitalize(word.toLowerCase());
    } else {
      // Converts entire word to lowercase if first.
      acc += word.toLowerCase();
    }
    return acc;
  }, '');
