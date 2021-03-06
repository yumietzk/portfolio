import React from 'react';
import '@fontsource/roboto';
import Head from './head';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-size: 62.5%;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    -webkit-text-size-adjust: 100%;

    // 800px
    @media only screen and (max-width: 50em) {
      font-size: 55%;
    }

    // 450px
    @media only screen and (max-width: 28.125em) {
      font-size: 50%;
    }
}
`;

const Container = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Head />
      {children}
    </Container>
  );
};

export default Layout;
