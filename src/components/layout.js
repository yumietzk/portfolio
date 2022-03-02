import React from 'react';
import '@fontsource/roboto';
import Head from './head';
import styled, { createGlobalStyle } from 'styled-components';
// import * as styles from './layout.module.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-size: 62.5%;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
`;

const Container = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    // <div className={styles.container}>
    <Container>
      <GlobalStyle />
      <Head />
      {children}
    </Container>
    // </div>
  );
};

export default Layout;
