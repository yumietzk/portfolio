import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import '@fontsource/playfair-display';
import styled, { css } from 'styled-components';
// import * as styles from './contact.module.css';

const SectionWrapper = styled.div`
  padding: 7rem 1rem 2rem 1rem;
  background-color: #f6d2c6;
  color: #081217;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-family: 'Playfair Display';
  font-size: 4.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5rem;
`;

const Text = styled.div`
  font-size: 2rem;
  margin-bottom: 2.5rem;
  position: relative;
`;

const ContactLogo = styled.div`
  position: absolute;
  right: -10rem;
  top: -5rem;
  height: 8.5rem;
  width: 8.5rem;
`;

const Email = styled.a`
  font-size: 2rem;
  margin-bottom: 5rem;
`;

const SNSWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 20%;
  margin-bottom: 10rem;
`;

const sharedIconStyle = css`
  font-size: 3rem;
  fill: rgb(24, 24, 24);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px) scale(1.03);
  }
`;

const GithubIcon = styled(FaGithub)`
  ${sharedIconStyle}
`;

const LinkedInIcon = styled(FaLinkedin)`
  ${sharedIconStyle}
`;

const EmailIcon = styled(AiOutlineMail)`
  ${sharedIconStyle}
`;

const Copyright = styled.p`
  font-size: 1.5rem;
`;

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
    <SectionWrapper id="contact">
      <Title>Contact</Title>
      <Text>
        Please reach me at:
        <ContactLogo>
          <StaticImage src="../../images/contact.svg" alt="Contact logo" />
        </ContactLogo>
      </Text>
      {/* <Email href={`mailto:${data.site.siteMetadata.social.email}`}>
        {data.site.siteMetadata.social.email}
      </Email> */}
      <SNSWrapper data-aos="slide-up">
        <a
          href={`https://github.com/${data.site.siteMetadata.social.github}`}
          target="_blank"
        >
          <GithubIcon />
        </a>
        <a
          href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a href={`mailto:${data.site.siteMetadata.social.email}`}>
          <EmailIcon />
        </a>
        {/* <a
          href={`https://www.instagram.com/${data.site.siteMetadata.social.instagram}`}
          target="_blank"
        >
          <InstagramIcon />
        </a> */}
      </SNSWrapper>
      <Copyright>Copyright &copy; 2022, Yumie Tsuzuki</Copyright>
    </SectionWrapper>
  );
};

export default Contact;
