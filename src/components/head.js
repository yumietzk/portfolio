import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return <Helmet title={data.site.siteMetadata.title} />;
  // return (
  //   <Helmet>
  //     <title>{data.site.siteMetadata.title}</title>
  //     <meta name="description" content="Yumie's Portfolio" />
  //     <meta name="viewport" content="target-densitydpi=medium-dpi" />
  //   </Helmet>
  // );
};

export default Head;
