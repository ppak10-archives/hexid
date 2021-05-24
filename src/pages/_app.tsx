/**
 * _app.tsx
 * App component.
 */

// Node Modules
import type {AppProps} from 'next/app';

// Styles
import 'app/styles/main.scss';

export default function App({Component}: AppProps) {
  return (
    <Component />
  );
}
