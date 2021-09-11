import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as FaIcons from 'react-icons/fa';
import * as styles from './contact.module.css';

const Contact = () => {
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
    <div className={styles.contact}>
      <h1>Contact</h1>
      <p>Please reach me at: </p>
      <a href={`mailto:${data.site.siteMetadata.social.email}`}>
        {data.site.siteMetadata.social.email}
      </a>
      <div>
        <a href={`https://github.com/${data.site.siteMetadata.social.github}`}>
          <FaIcons.FaGithub />
        </a>
        <a
          href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}
        >
          <FaIcons.FaLinkedin />
        </a>
        <a
          href={`https://www.facebook.com/${data.site.siteMetadata.social.facebook}`}
        >
          <FaIcons.FaFacebook />
        </a>
        <a
          href={`https://www.instagram.com/${data.site.siteMetadata.social.instagram}`}
        >
          <FaIcons.FaInstagram />
        </a>
      </div>
      <p>Copyright ©︎ 2021, Yumie Tsuuzki</p>
    </div>
  );
};

export default Contact;
