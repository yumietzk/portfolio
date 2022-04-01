import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import '@fontsource/playfair-display';
import styled, { css } from 'styled-components';

const SectionWrapper = styled.div`
  padding: 10rem 1rem 2rem 1rem;
  background-color: #f6d2c6;
  color: #081217;

  display: flex;
  flex-direction: column;
  align-items: center;

  // 800px
  @media only screen and (max-width: 50em) {
    padding: 7rem 1rem 2rem 1rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    padding: 5rem 1rem 2rem 1rem;
  }
`;

const Title = styled.div`
  font-family: 'Playfair Display';
  font-size: 4.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5rem;

  // 1200px
  @media only screen and (max-width: 75em) {
    font-size: 4rem;
  }

  // 800px
  @media only screen and (max-width: 50em) {
    font-size: 3.7rem;
  }

  // 600px
  @media only screen and (max-width: 37.5em) {
    font-size: 3.5rem;
    margin-bottom: 4rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    font-size: 3.2rem;
    margin-bottom: 3rem;
  }
`;

const Text = styled.div`
  font-size: 2.1rem;
  margin-bottom: 2.5rem;
  position: relative;

  // 1800px
  @media only screen and (min-width: 112.5em) {
    font-size: 2.5rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    font-size: 1.9rem;
    margin-bottom: 2rem;
  }
`;

const ContactLogo = styled.div`
  position: absolute;
  right: -10rem;
  top: -5rem;
  height: 8.5rem;
  width: 8.5rem;

  // 450px
  @media only screen and (max-width: 28.125em) {
    right: -8rem;
    height: 7.5rem;
    width: 7.5rem;
  }
`;

const SNSWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 23rem;
  margin-bottom: 15rem;

  // 450px
  @media only screen and (max-width: 28.125em) {
    width: 14rem;
    margin-bottom: 7rem;
  }
`;

const sharedIconStyle = css`
  font-size: 3.1rem;
  fill: rgb(24, 24, 24);
  transition: all 0.3s;

  // 1800px
  @media only screen and (min-width: 112.5em) {
    font-size: 3.5rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    font-size: 2.6rem;
  }

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

  // 450px
  @media only screen and (max-width: 28.125em) {
    font-size: 1.3rem;
  }
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
      </SNSWrapper>
      <Copyright>Copyright &copy; 2022, Yumie Tsuzuki</Copyright>
    </SectionWrapper>
  );
};

export default Contact;
