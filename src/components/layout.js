import React from 'react';
import '@fontsource/vollkorn/400.css';
import '@fontsource/vollkorn/400-italic.css';
import '@fontsource/vollkorn/500.css';
import '@fontsource/vollkorn/500-italic.css';
import '@fontsource/vollkorn/600.css';
import '@fontsource/vollkorn/600-italic.css';
import '@fontsource/vollkorn/700.css';
import '@fontsource/vollkorn/800.css';

import { useStaticQuery, graphql } from 'gatsby';
import * as styles from './layout.module.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={styles.container}>
      <title>{data.site.siteMetadata.title}</title>
      {children}
    </div>
  );
};

export default Layout;
