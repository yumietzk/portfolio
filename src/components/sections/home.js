import React, { useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css';
import * as IoIcons from 'react-icons/io';
import Navigation from '../UI/navigation/navigation';
import * as styles from './home.module.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <header className={styles.header} id="top">
      <Navigation />
      <div className={styles.headerTitle}>
        <div className={styles.headerText} data-aos="zoom-in">
          <h1>Hi, I'm Yumie 👋🏻</h1>
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1900)
                .typeString('A front-end developer based in Toronto.')
                .pauseFor(2000)
                .deleteAll()
                .typeString('A sushi lover from Japan.')
                .pauseFor(2000)
                .deleteAll()
                .typeString('A passionate soccer fan.')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <div className={styles.headerImg} data-aos="flip-up"></div>
      </div>
      <button className={styles.btn} onClick={() => scrollTo('#about')}>
        <IoIcons.IoIosArrowDropdownCircle className={styles.btnIcon} />
      </button>
    </header>
  );
};

export default Home;
