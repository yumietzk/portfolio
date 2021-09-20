import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import * as styles from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <button className={styles.logo} onClick={() => scrollTo('#top')}>
        YUMIE.T
      </button>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <button className={styles.navLink} onClick={() => scrollTo('#about')}>
            About
          </button>
        </li>
        <li className={styles.navItem}>
          <button
            className={styles.navLink}
            onClick={() => scrollTo('#projects')}
          >
            Projects
          </button>
        </li>
        <li className={styles.navItem}>
          <button
            className={styles.navLink}
            onClick={() => scrollTo('#contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
