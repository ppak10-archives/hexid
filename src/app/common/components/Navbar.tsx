/**
 * Navbar.tsx
 * Navigation bar component.
 */

// Node Modules
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Actions
import {setTheme} from 'app/common/actions';

// Styles
import styles from './Navbar.module.scss';

export default function Navbar() {
  // Hooks
  const dispatch = useDispatch();
  const theme = useSelector(({common}) => common.theme);

  // Callbacks
  const handleToggleTheme = useCallback(() => {
    if (theme === 'light') {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
    }
  }, [theme]);

  return (
    <nav className={styles.navbar}>
      <a>hexid</a>
      <button onClick={handleToggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </nav>
  );
}
