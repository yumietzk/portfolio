import React, { useState, useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import MobileNav from '../mobile/mobileNav';
import styled, { css } from 'styled-components';
// import * as styles from './navigation.module.css';

const NavWrapper = styled.nav`
  height: 10rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 0 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled.button`
  font-size: 4.5rem;
  font-weight: 700;
  border: none;
  background: none;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 4rem;
  }
`;

const sharedLinkStyle = css`
  font-size: 2rem;
  text-transform: uppercase;
  border: none;
  background: none;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ccc;
    height: 3rem;
    border-radius: 500rem;
    transform: skew(15deg, 10deg);
    z-index: -1;
    transition: all 0.4s;
  }

  &:hover {
    &::after {
      display: block;
    }
  }
`;

const NavLinkAbout = styled.button`
  ${sharedLinkStyle}

  &::after {
    width: 7rem;
  }
`;

const NavLinkProjects = styled.button`
  ${sharedLinkStyle}

  &::after {
    width: 10rem;
  }
`;

const NavLinkContact = styled.button`
  ${sharedLinkStyle}
  position: relative;

  &::after {
    width: 9rem;
  }
`;

const Navigation = () => {
  let width;
  if (typeof window !== 'undefined') {
    width = window.innerWidth;
  }

  const [windowWidth, setWindowWidth] = useState(width);

  useEffect(() => {
    window.addEventListener('resize', updateDimension);
    return () => window.addEventListener('resize', updateDimension);
  }, []);

  const updateDimension = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <NavWrapper>
      <NavLogo onClick={() => scrollTo('#top')}>YUMIE.T</NavLogo>
      {windowWidth < 450 ? (
        <MobileNav />
      ) : (
        <NavLinks>
          <NavItem>
            <NavLinkProjects onClick={() => scrollTo('#projects')}>
              Projects
            </NavLinkProjects>
          </NavItem>
          <NavItem>
            <NavLinkAbout onClick={() => scrollTo('#about')}>
              About
            </NavLinkAbout>
          </NavItem>

          <NavItem>
            <NavLinkContact onClick={() => scrollTo('#contact')}>
              Contact
            </NavLinkContact>
          </NavItem>
        </NavLinks>
      )}
    </NavWrapper>
    // <nav className={styles.nav}>
    //   <button className={styles.logo} onClick={() => scrollTo('#top')}>
    //     YUMIE.T
    //   </button>
    //   {windowWidth < 450 ? (
    //     <MobileNav />
    //   ) : (
    //     <ul className={styles.navLinks}>
    //       <li className={styles.navItem}>
    //         <button
    //           className={styles.navLink}
    //           onClick={() => scrollTo('#about')}
    //         >
    //           About
    //         </button>
    //       </li>
    //       <li className={styles.navItem}>
    //         <button
    //           className={styles.navLink}
    //           onClick={() => scrollTo('#projects')}
    //         >
    //           Projects
    //         </button>
    //       </li>
    //       <li className={styles.navItem}>
    //         <button
    //           className={styles.navLink}
    //           onClick={() => scrollTo('#contact')}
    //         >
    //           Contact
    //         </button>
    //       </li>
    //     </ul>
    //   )}
    // </nav>
  );
};

export default Navigation;
