import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styled, { css } from 'styled-components';
// import * as styles from './contact.module.css';

const SectionWrapper = styled.div`
  padding: 12rem 1rem 12rem 1rem;
  background-color: #f6d2c6;
  color: #081217;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 6rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10rem;
`;

const Text = styled.p`
  font-size: 3rem;
  font-style: italic;
  margin-bottom: 3.5rem;
`;

const Email = styled.a`
  font-size: 2rem;
  margin-bottom: 5rem;
`;

const SNSWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 30%;
  margin-bottom: 30rem;
`;

const sharedIconStyle = css`
  font-size: 3.5rem;
  fill: rgb(24, 24, 24);
  transition: all 0.3s;
`;

const GithubIcon = styled(FaGithub)`
  ${sharedIconStyle}

  &:hover {
    fill: #000;
    transform: scale(1.03);
  }
`;

const LinkedInIcon = styled(FaLinkedin)`
  ${sharedIconStyle}

  &:hover {
    fill: #007bb5;
    transform: scale(1.03);
  }
`;

const InstagramIcon = styled(FaInstagram)`
  ${sharedIconStyle}

  &:hover {
    fill: #e95950;
    transform: scale(1.03);
  }
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
      <Text>Please reach me at: </Text>
      <Email href={`mailto:${data.site.siteMetadata.social.email}`}>
        {data.site.siteMetadata.social.email}
      </Email>
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
        <a
          href={`https://www.instagram.com/${data.site.siteMetadata.social.instagram}`}
          target="_blank"
        >
          <InstagramIcon />
        </a>
      </SNSWrapper>
      <Copyright>Copyright &copy; 2021, Yumie Tsuzuki</Copyright>
    </SectionWrapper>
  );
};

export default Contact;
