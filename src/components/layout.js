import React from 'react';
import '@fontsource/vollkorn/400.css';
import '@fontsource/vollkorn/400-italic.css';
import '@fontsource/vollkorn/500.css';
import '@fontsource/vollkorn/500-italic.css';
import '@fontsource/vollkorn/600.css';
import '@fontsource/vollkorn/600-italic.css';
import '@fontsource/vollkorn/700.css';
import '@fontsource/vollkorn/800.css';
import './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav></nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
