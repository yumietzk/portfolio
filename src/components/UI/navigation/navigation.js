import React from 'react';
import * as styles from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>YUMIE.T</div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <a className={styles.navLink}>About</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink}>Projects</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
