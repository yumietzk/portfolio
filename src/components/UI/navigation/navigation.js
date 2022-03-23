import React, { useState, useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StaticImage } from 'gatsby-plugin-image';
import MobileNav from '../mobile/mobileNav';
import '@fontsource/playfair-display';
import styled, { css } from 'styled-components';

const NavWrapper = styled.nav`
  height: 10rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 0 3rem;
  background-color: #f6d2c6ec;

  display: flex;
  align-items: center;
  justify-content: space-between;

  // 1800px
  @media only screen and (min-width: 112.5rem) {
    height: 11rem;
  }

  // 800px
  @media only screen and (max-width: 50rem) {
    height: 9rem;
  }

  // 600px
  @media only screen and (max-width: 37.5rem) {
    height: 8rem;
  }

  // 450px
  @media only screen and (max-width: 28.125rem) {
    height: 6rem;
  }
`;

const NavLogo = styled.button`
  border: none;
  background: none;
  height: 8rem;
  width: 8rem;
  cursor: pointer;

  // 1800px
  @media only screen and (min-width: 112.5rem) {
    height: 9rem;
    width: 9rem;
  }

  // 800px
  @media only screen and (max-width: 50rem) {
    height: 7rem;
    width: 7rem;
  }

  // 600px
  @media only screen and (max-width: 37.5rem) {
    height: 6rem;
    width: 6rem;
  }

  // 450px
  @media only screen and (max-width: 28.125rem) {
    height: 4.5rem;
    width: 4.5rem;
  }
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

  // 600px
  @media only screen and (max-width: 37.5rem) {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;

const sharedLinkStyle = css`
  font-family: 'Playfair Display';
  font-size: 2rem;
  color: #081217;
  font-weight: 500;
  text-transform: uppercase;
  border: none;
  background: none;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  position: relative;
  z-index: 1;

  // 1800px
  @media only screen and (min-width: 112.5rem) {
    font-size: 2.5rem;
  }

  // 600px
  @media only screen and (max-width: 37.5rem) {
    font-size: 1.7rem;
  }

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
    transition: display 0.4s;

    // 1800px
    @media only screen and (min-width: 112.5rem) {
      height: 4rem;
    }

    // 600px
    @media only screen and (max-width: 37.5rem) {
      height: 2.5rem;
    }
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

    // 1800px
    @media only screen and (min-width: 112.5rem) {
      width: 8rem;
    }

    // 600px
    @media only screen and (max-width: 37.5rem) {
      width: 6rem;
    }
  }
`;

const NavLinkProjects = styled.button`
  ${sharedLinkStyle}

  &::after {
    width: 10rem;

    // 1800px
    @media only screen and (min-width: 112.5rem) {
      width: 12rem;
    }

    // 600px
    @media only screen and (max-width: 37.5rem) {
      width: 8.3rem;
    }
  }
`;

const NavLinkContact = styled.button`
  ${sharedLinkStyle}
  position: relative;

  &::after {
    width: 9rem;

    // 1800px
    @media only screen and (min-width: 112.5rem) {
      width: 11.5rem;
    }

    // 600px
    @media only screen and (max-width: 37.5rem) {
      width: 8rem;
    }
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
      <NavLogo onClick={() => scrollTo('#top')}>
        <StaticImage src="../../../images/logo.svg" alt="logo" />
      </NavLogo>
      {windowWidth <= 450 ? (
        <MobileNav />
      ) : (
        <NavLinks>
          <NavItem>
            <NavLinkAbout onClick={() => scrollTo('#about')}>
              About
            </NavLinkAbout>
          </NavItem>
          <NavItem>
            <NavLinkProjects onClick={() => scrollTo('#projects')}>
              Projects
            </NavLinkProjects>
          </NavItem>
          <NavItem>
            <NavLinkContact onClick={() => scrollTo('#contact')}>
              Contact
            </NavLinkContact>
          </NavItem>
        </NavLinks>
      )}
    </NavWrapper>
  );
};

export default Navigation;
