import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as FaIcons from 'react-icons/fa';
import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';
import * as styles from './about.module.css';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(slug: { eq: "aboutme" }) {
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
      <h2>Skills & Tools</h2>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <FaIcons.FaHtml5 className={styles.icon} />
          <p>HTML</p>
        </div>
        <div className={styles.skill}>
          <FaIcons.FaCss3Alt className={styles.icon} />
          <p>CSS</p>
        </div>
        <div className={styles.skill}>
          <FaIcons.FaSass className={styles.icon} />
          <p>Sass</p>
        </div>
        <div className={styles.skill}>
          <DiIcons.DiJavascript1 className={styles.icon} />
          <p>JavaScript</p>
        </div>
        <div className={styles.skill}>
          <FaIcons.FaReact className={styles.icon} />
          <p>React</p>
        </div>
        <div className={styles.skill}>
          <SiIcons.SiRedux className={styles.icon} />
          <p>Redux</p>
        </div>
        <div className={styles.skill}>
          <FaIcons.FaNodeJs className={styles.icon} />
          <p>Node.js</p>
        </div>
        <div className={styles.skill}>
          <DiIcons.DiMongodb className={styles.icon} />
          <p>Mongo DB</p>
        </div>
        <div className={styles.skill}>
          <SiIcons.SiGatsby className={styles.icon} />
          <p>Gatsby</p>
        </div>
        <div className={styles.skill}>
          <SiIcons.SiGraphql className={styles.icon} />
          <p>GraphQL</p>
        </div>
        <div className={styles.skill}>
          <FaIcons.FaGithub className={styles.icon} />
          <p>Github</p>
        </div>
        <div className={styles.skill}>
          <SiIcons.SiNetlify className={styles.icon} />
          <p>Netlify</p>
        </div>
        <div className={styles.skill}>
          <SiIcons.SiHeroku className={styles.icon} />
          <p>Heroku</p>
        </div>
        <div className={styles.skill}>
          <SiIcons.SiFirebase className={styles.icon} />
          <p>Firebase</p>
        </div>
        {/* <div className={styles.skill}>
          <img
            src="/Users/yumie/Desktop/Programming/Project/Portfolio/my-portfolio/src/images/express-logo.png"
            alt="Express logo"
          />
          <p>Express</p>
        </div> */}
      </div>
    </section>
  );
};

export default About;
