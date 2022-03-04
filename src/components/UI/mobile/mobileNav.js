import React, { useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
// import * as styles from './mobileNav.module.css';

const NavBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  text-decoration: none;
`;

const NavIcon = styled(FaBars)`
  font-size: 2.5rem;
  fill: #081217;
  transition: all 0.4s;

  ${NavBtn}:hover & {
    fill: #0e3f42;
  }
`;

const Navigation = styled.nav`
  background-color: #081217;
  width: 21rem;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${(props) => (props.mobileNav ? 0 : '-100%')};
  z-index: 1000;

  display: flex;
  flex-direction: column;
`;

const ToggleBtn = styled.button`
  flex: 0 1 2rem;
  align-self: flex-end;

  border: none;
  background: none;
  cursor: pointer;
  margin: 2rem 2.5rem 2rem 0;
`;

const ToggleIcon = styled(AiOutlineClose)`
  font-size: 2.2rem;
  background: none;
  fill: #ccc;
  transition: all 0.3s;

  ${ToggleBtn}:hover & {
    fill: #f6d2c6;
  }
`;

const NavLinks = styled.ul`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #081217;
  list-style: none;
`;

const NavLink = styled.li`
  margin: 1.5rem 0;
  background-color: #081217;
`;

const LinkBtn = styled.a`
  color: #fff;
  border: none;
  background: none;
  font-size: 1.7rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #f6d2c6;
  }
`;

const MobileNav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const showMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <React.Fragment>
      <NavBtn onClick={showMobileNav}>
        <NavIcon />
      </NavBtn>
      <Navigation mobileNav={mobileNav}>
        <ToggleBtn onClick={showMobileNav}>
          <ToggleIcon />
        </ToggleBtn>
        <NavLinks>
          <NavLink>
            <LinkBtn
              onClick={() => {
                scrollTo('#about');
                setMobileNav(!mobileNav);
              }}
            >
              About
            </LinkBtn>
          </NavLink>
          <NavLink>
            <LinkBtn
              onClick={() => {
                scrollTo('#projects');
                setMobileNav(!mobileNav);
              }}
            >
              Projects
            </LinkBtn>
          </NavLink>
          <NavLink>
            <LinkBtn
              onClick={() => {
                scrollTo('#contact');
                setMobileNav(!mobileNav);
              }}
            >
              Contact
            </LinkBtn>
          </NavLink>
        </NavLinks>
      </Navigation>
    </React.Fragment>
  );
};

export default MobileNav;
