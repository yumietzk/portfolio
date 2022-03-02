import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';
import { DiJavascript1, DiMongodb } from 'react-icons/di';
import {
  SiRedux,
  SiGatsby,
  SiGraphql,
  SiNetlify,
  SiHeroku,
  SiFirebase,
} from 'react-icons/si';
import styled, { css } from 'styled-components';
// import * as styles from './about.module.css';

const SectionWrapper = styled.section`
  padding: 15rem 1rem 12rem 1rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #0e3f42;
`;

const Title = styled.div`
  font-size: 6rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5rem;
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 14rem;
`;

const AboutMeText = styled.p`
  font-size: 3rem;
  width: 75%;
  margin: 0 auto;
  text-align: center;
  line-height: 2.5;
  margin-bottom: 8rem;
`;

const ResumeBtn = styled.a`
  &:link,
  &:visited {
    background-color: #000;
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    padding: 0.8rem 1.3rem;
    border-radius: 10rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    transform: scale(1.1);
  }
`;

const SubTitle = styled.h2`
  font-size: 4.2rem;
  font-weight: 500;
  text-align: center;
  font-style: italic;
  color: #081217;
  margin-bottom: 5rem;
  position: relative;
  z-index: 5;

  &::after {
    content: '';
    display: block;
    background-color: #f8906c;
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    width: 25rem;
    height: 1.5rem;
    margin: 0 auto;
    z-index: -1;
    transform: translateX(-50%) skewX(-30deg);
  }
`;

const Skills = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  margin: 0 auto;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: '#000';
  }

  &::-webkit-scrollbar-thumb {
    background-color: #777;
    border-radius: 3px;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const sharedIconStyle = css`
  font-size: 3rem;
  fill: #0e3f42;
  margin-bottom: 0.8rem;
`;

const StyledReact = styled(FaReact)`
  ${sharedIconStyle}
`;

const StyledHTML = styled(FaHtml5)`
  ${sharedIconStyle}
`;

const StyledCSS = styled(FaCss3Alt)`
  ${sharedIconStyle}
`;

const StyledSass = styled(FaSass)`
  ${sharedIconStyle}
`;

const StyledNodeJS = styled(FaNodeJs)`
  ${sharedIconStyle}
`;

const StyledGithub = styled(FaGithub)`
  ${sharedIconStyle}
`;

const StyledJS = styled(DiJavascript1)`
  ${sharedIconStyle}
`;

const StyledMongodb = styled(DiMongodb)`
  ${sharedIconStyle}
`;

const StyledRedux = styled(SiRedux)`
  ${sharedIconStyle}
`;

const StyledGatsby = styled(SiGatsby)`
  ${sharedIconStyle}
`;

const StyledGraphql = styled(SiGraphql)`
  ${sharedIconStyle}
`;

const StyledNetlify = styled(SiNetlify)`
  ${sharedIconStyle}
`;

const StyledHeroku = styled(SiHeroku)`
  ${sharedIconStyle}
`;

const StyledFirebase = styled(SiFirebase)`
  ${sharedIconStyle}
`;

const SkillName = styled.p`
  font-size: 1.5rem;
`;

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const data = useStaticQuery(graphql`
    query {
      mdx(slug: { eq: "aboutme" }) {
        body
        frontmatter {
          resume
        }
      }
    }
  `);

  return (
    <SectionWrapper id="about">
      <Title>About</Title>
      <AboutMe>
        <AboutMeText>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </AboutMeText>
        <ResumeBtn href={data.mdx.frontmatter.resume} target="_blank">
          Resume
        </ResumeBtn>
      </AboutMe>
      <SubTitle>Skills & Tools</SubTitle>
      <Skills data-aos="fade-up">
        <Skill>
          <StyledReact />
          <SkillName>React</SkillName>
        </Skill>
        <Skill>
          <StyledRedux />
          <SkillName>Redux</SkillName>
        </Skill>
        <Skill>
          <StyledHTML />
          <SkillName>HTML</SkillName>
        </Skill>
        <Skill>
          <StyledCSS />
          <SkillName>CSS</SkillName>
        </Skill>
        <Skill>
          <StyledSass />
          <SkillName>Sass</SkillName>
        </Skill>
        <Skill>
          <StyledJS />
          <SkillName>JavaScript</SkillName>
        </Skill>
        <Skill>
          <StyledNodeJS />
          <SkillName>Node.js</SkillName>
        </Skill>
        <Skill>
          <StyledMongodb />
          <SkillName>Mongo DB</SkillName>
        </Skill>
        <Skill>
          <StyledGatsby />
          <SkillName>Gatsby</SkillName>
        </Skill>
        <Skill>
          <StyledGraphql />
          <SkillName>GraphQL</SkillName>
        </Skill>
        <Skill>
          <StyledGithub />
          <SkillName>Github</SkillName>
        </Skill>
        <Skill>
          <StyledNetlify />
          <SkillName>Netlify</SkillName>
        </Skill>
        <Skill>
          <StyledHeroku />
          <SkillName>Heroku</SkillName>
        </Skill>
        <Skill>
          <StyledFirebase />
          <SkillName>Firebase</SkillName>
        </Skill>
      </Skills>
    </SectionWrapper>

    // <section className={styles.about} id="about">
    //   <h1>About</h1>
    //   <div className={styles.aboutMe}>
    //     <MDXRenderer>{data.mdx.body}</MDXRenderer>
    //     <a
    //       className={styles.resume}
    //       href={data.mdx.frontmatter.resume}
    //       target="_blank"
    //     >
    //       Resume
    //     </a>
    //   </div>
    //   <h2>Skills & Tools</h2>
    //   <div className={styles.skills} data-aos="fade-up">
    //     <div className={styles.skill}>
    //       <FaIcons.FaReact className={styles.icon} />
    //       <p>React</p>
    //     </div>
    //     <div className={styles.skill}>
    //       <SiIcons.SiRedux className={styles.icon} />
    //       <p>Redux</p>
    //     </div>
    //     <div className={styles.skill}>
    //       <FaIcons.FaHtml5 className={styles.icon} />
    //       <p>HTML</p>
    //     </div>
    //     <div className={styles.skill}>
    //       <FaIcons.FaCss3Alt className={styles.icon} />
    //       <p>CSS</p>
    //     </div>
    //     <div className={styles.skill}>
    //       <FaIcons.FaSass className={styles.icon} />
    //       <p>Sass</p>
    //     </div>
    //     <div className={styles.skill}>
    //       <DiIcons.DiJavascript1 className={styles.icon} />
    //       <p>JavaScript</p>
    //     </div>
    //     <div className={styles.skill}>
    //       <FaIcons.FaNodeJs className={styles.icon} />
    //       <p>Node.js</p>
    //     </div>
    //     <div className={styles.skill}>
    //       <DiIcons.DiMongodb className={styles.icon} />
    //       <p>Mongo DB</p>
    //     </div>
    //     <div className={styles.skill}>
    //       <SiIcons.SiGatsby className={styles.icon} />
    //       <p>Gatsby</p>
    //     </div>
    //     <div className={styles.skill}>
    //       <SiIcons.SiGraphql className={styles.icon} />
    //       <p>GraphQL</p>
    //     </div>
    //     <div className={styles.skill}>
    //       <FaIcons.FaGithub className={styles.icon} />
    //       <p>Github</p>
    //     </div>
    //     <div className={styles.skill}>
    //       <SiIcons.SiNetlify className={styles.icon} />
    //       <p>Netlify</p>
    //     </div>
    //     <div className={styles.skill}>
    //       <SiIcons.SiHeroku className={styles.icon} />
    //       <p>Heroku</p>
    //     </div>
    //     <div className={styles.skill}>
    //       <SiIcons.SiFirebase className={styles.icon} />
    //       <p>Firebase</p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default About;
