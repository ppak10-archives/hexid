/**
 * index.tsx
 * Home page component.
 */

// Node Modules
import {useState} from 'react';
import {useSelector} from 'react-redux';

// Constants
const AUDIUS_DISCOVERY_API_ROUTE = 'https://discovery-b.mainnet.audius.radar.tech/v1/full/search/autocomplete';
const AUDIUS_NODE_API_ROUTE = 'https://creatornode3.audius.co/ipfs';
// const UJO_IPFS_ROUTE = 'https://ipfs.infura.io/ipfs';

// Styles
import styles from './[[...index]].module.scss';

export default function Home() {
  // Hooks
  const [request, setRequest] = useState('');
  const [data, setData] = useState({});
  const theme = useSelector(({common}) => common.theme);

  // Callbacks
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${AUDIUS_DISCOVERY_API_ROUTE}?limit=3&offset=0&query=${request}`);
    const data = await response.json();
    console.log('data', data)
    if (response.status === 200) {
      setData(data.data);
    }
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
  const trackListItemsJSX = data.tracks && data.tracks.map((track) => (
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
        <button type="submit">Search</button>
      </form>
      <ul>
        {trackListItemsJSX}
      </ul>
    </div>
  );
}
