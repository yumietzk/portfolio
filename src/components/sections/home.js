import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import * as IoIcons from 'react-icons/io';
import Navigation from '../UI/navigation/navigation';
import * as styles from './home.module.css';

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home-image.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const image = getImage(data.file);

  return (
    <header className={styles.header} id="top">
      <Navigation />
      <div className={styles.headerTitle}>
        <div className={styles.headerText}>
          <h1>Hi, I'm Yumie 👋🏻</h1>
          <h4>A front-end developer based in Toronto</h4>
        </div>
        <div className={styles.headerImg}>
          <div className={styles.headerPoster}>
            <GatsbyImage image={image} alt="My profile photo" />
          </div>
        </div>
      </div>
      <button className={styles.btn} onClick={() => scrollTo('#about')}>
        <IoIcons.IoIosArrowDropdownCircle className={styles.btnIcon} />
      </button>
    </header>
  );
};

export default Home;
