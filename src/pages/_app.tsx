/**
 * _app.tsx
 * App component.
 */

// Node Modules
import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';

// Components
import Navbar from 'app/common/components/Navbar';
import Footer from 'app/common/components/Footer';

// Store
import store from 'app/store';

// Styles
import 'app/styles/main.scss';

export default function App({Component}: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component />
      <Footer />
    </Provider>
  );
}
