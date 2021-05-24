/**
 * index.tsx
 * Home page component.
 */

// Node Modules
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Actions
import {getSearchAudiusDiscoveryB} from 'app/search/actions';

// Constants
const AUDIUS_NODE_API_ROUTE = 'https://creatornode3.audius.co/ipfs';
// const UJO_IPFS_ROUTE = 'https://ipfs.infura.io/ipfs';

// Styles
import styles from './[[...index]].module.scss';

export default function Home() {
  // Hooks
  const dispatch = useDispatch();
  const [request, setRequest] = useState('');
  const theme = useSelector(({common}) => common.theme);
  const results = useSelector(({search}) => search.results);
  const {isLoading} = useSelector(({api}) => api.searchAudiusDiscoveryB);

  // Callbacks
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getSearchAudiusDiscoveryB(request));
  };

  const handleDownload = async (cid) => {
    if (cid) {
      const response = await fetch(`${AUDIUS_NODE_API_ROUTE}/${cid}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${cid}.mp3`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };

  // JSX
  const trackListItemsJSX = results.tracks && results.tracks.map((track) => (
    <li key={track.id}>
      <h1>{track.title}</h1>
      <p>{track.description}</p>
      <button onClick={() => handleDownload(track.download.cid)}>Download</button>
    </li>
  ));

  return (
    <div
      className={`
        page ${theme === 'light' ? styles['light-home'] : styles['dark-home']}
      `}
    >
      <h1>hexid</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Enter Search:</legend>
          <input value={request} onChange={(e) => setRequest(e.target.value)} />
        </fieldset>
        <button disabled={isLoading} type="submit">Search</button>
      </form>
      <ul>
        {trackListItemsJSX}
      </ul>
    </div>
  );
}
