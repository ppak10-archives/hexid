/**
 * Footer.tsx
 * Footer component
 */

// Node Modules
import {useSelector} from 'react-redux';

// Styles
import styles from './Footer.module.scss';

export default function Footer() {
  // Hooks
  const theme = useSelector(({common}) => common.theme);

  return (
    <footer
      className={
        theme === 'light' ? styles['light-footer'] : styles['dark-footer']
      }
    />
  );
}
