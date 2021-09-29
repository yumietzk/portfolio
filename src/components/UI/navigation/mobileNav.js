import React, { useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as styles from './mobileNav.module.css';

const MobileNav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const showMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div>
      <button className={styles.navBtn}>
        <FaIcons.FaBars onClick={showMobileNav} className={styles.navIcon} />
      </button>
      <nav
        className={mobileNav ? `${styles.nav} ${styles.active}` : styles.nav}
      >
        <button className={styles.toggle}>
          <AiIcons.AiOutlineClose
            onClick={showMobileNav}
            className={styles.toggleIcon}
          />
        </button>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <a
              className={styles.navBtn}
              onClick={() => {
                scrollTo('#about');
                setMobileNav(!mobileNav);
              }}
            >
              About
            </a>
          </li>
          <li className={styles.navLink}>
            <a
              className={styles.navBtn}
              onClick={() => {
                scrollTo('#projects');
                setMobileNav(!mobileNav);
              }}
            >
              Projects
            </a>
          </li>
          <li className={styles.navLink}>
            <a
              className={styles.navBtn}
              onClick={() => {
                scrollTo('#contact');
                setMobileNav(!mobileNav);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
