import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as styles from './about.module.css';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(slug: { eq: "aboutme" }) {
        id
        body
      }
    }
  `);

  return (
    <section className={styles.about}>
      <h1>About</h1>
      <p className={styles.aboutMe}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </p>
      <h2>Skills + Tools</h2>
    </section>
  );
};

export default About;
