import React from 'react';
import '@fontsource/vollkorn/400.css';
import '@fontsource/vollkorn/400-italic.css';
import '@fontsource/vollkorn/500.css';
import '@fontsource/vollkorn/500-italic.css';
import '@fontsource/vollkorn/600.css';
import '@fontsource/vollkorn/600-italic.css';
import '@fontsource/vollkorn/700.css';
import '@fontsource/vollkorn/800.css';
import Head from './head';
import * as styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head />
      {children}
    </div>
  );
};

export default Layout;
