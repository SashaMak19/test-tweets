import { NavLink } from 'react-router-dom';
import styles from './nav-bar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <NavLink to="/" className={styles.title}>
            Home
          </NavLink>
        </div>
        <div className={styles.rightHeader}>
          <NavLink to="/tweets" className={styles.tweetsLink}>
            Tweets
          </NavLink>
        </div>
      </div>
    </div>
  );
};
