import React, { useState, useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import MobileNav from '../mobile/mobileNav';
import * as styles from './navigation.module.css';

const Navigation = () => {
  let width;
  if (typeof window !== 'undefined') {
    width = window.innerWidth;
  }

  const [width, setWidth] = useState(width);

  useEffect(() => {
    window.addEventListener('resize', updateDimension);
    return () => window.addEventListener('resize', updateDimension);
  }, []);

  const updateDimension = () => {
    setWidth(window.innerWidth);
  };

  return (
    <nav className={styles.nav}>
      <button className={styles.logo} onClick={() => scrollTo('#top')}>
        YUMIE.T
      </button>
      {width < 450 ? (
        <MobileNav />
      ) : (
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <button
              className={styles.navLink}
              onClick={() => scrollTo('#about')}
            >
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
      )}
    </nav>
  );
};

export default Navigation;
