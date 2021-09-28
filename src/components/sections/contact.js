import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Aos from 'aos';
import 'aos/dist/aos.css';
import * as FaIcons from 'react-icons/fa';
import * as styles from './contact.module.css';

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            facebook
            github
            instagram
            linkedin
            email
          }
        }
      }
    }
  `);

  return (
    <div className={styles.contact} id="contact">
      <h1>Contact</h1>
      <p className={styles.message}>Please reach me at: </p>
      <a
        className={styles.email}
        href={`mailto:${data.site.siteMetadata.social.email}`}
      >
        {data.site.siteMetadata.social.email}
      </a>
      <div className={styles.sns} data-aos="zoom-in">
        <a
          href={`https://github.com/${data.site.siteMetadata.social.github}`}
          target="_blank"
        >
          <FaIcons.FaGithub className={`${styles.icon} ${styles.github}`} />
        </a>
        <a
          href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}
          target="_blank"
        >
          <FaIcons.FaLinkedin className={`${styles.icon} ${styles.linkedin}`} />
        </a>
        <a
          href={`https://www.facebook.com/${data.site.siteMetadata.social.facebook}`}
          target="_blank"
        >
          <FaIcons.FaFacebook className={`${styles.icon} ${styles.facebook}`} />
        </a>
        <a
          href={`https://www.instagram.com/${data.site.siteMetadata.social.instagram}`}
          target="_blank"
        >
          <FaIcons.FaInstagram
            className={`${styles.icon} ${styles.instagram}`}
          />
        </a>
      </div>
      <p className={styles.copyright}>Copyright ©︎ 2021, Yumie Tsuuzki</p>
    </div>
  );
};

export default Contact;
