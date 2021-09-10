import React from 'react';
import Navigation from '../UI/navigation/navigation';
import * as styles from './home.module.css';

const Home = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <div className={styles.headerTitle}>
        <div className={styles.titleText}>
          <h1>Hi, I'm Yumie 👋</h1>
          <h4>A front-end engineer based in Toronto.</h4>
        </div>
        <img />
      </div>
    </header>
  );
};

export default Home;
