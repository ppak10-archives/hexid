/**
 * actions.ts
 * Search actions for redux.
 */

// Actions
import api from 'app/api/actions';

// Constants
const AUDIUS_DISCOVERY_B_API_ROUTE = 'https://discovery-b.mainnet.audius.radar.tech/v1/full/search/autocomplete';

export const getSearchAudiusDiscoveryB = (query, offset = 0, limit = 3) =>
  async (dispatch) => {
    dispatch(api.setSearchAudiusDiscoveryBIsLoading(true));

    try {
      const response = await fetch(
        `${AUDIUS_DISCOVERY_B_API_ROUTE}?offset=${offset}&limit=${limit}&query=${query}`
      );
      let data;
      if (response.status === 200) {
        data = await response.json();
        dispatch(setSearchAudiusDiscoveryB(data.data));
      } else if (response.status === 500) {
        dispatch(api.setSearchAudiusDiscoveryBError({
          search: 'Failed to search.',
        }));
      }
      dispatch(api.setSearchAudiusDiscoveryBIsLoading(false));
      return data;
    } catch (e) {
      return e;
    }
  };

export const setSearchAudiusDiscoveryB = (data) => ({
  type: 'SET_SEARCH_AUDIUS_DISCOVERY_B',
  payload: {
    data,
  },
});
