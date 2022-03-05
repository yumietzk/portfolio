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
import { MdArrowDropDown } from 'react-icons/md';
import '@fontsource/playfair-display';
import styled, { css, keyframes } from 'styled-components';

const SectionWrapper = styled.section`
  padding: 15rem 1rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #0e3f42;

  // 800px
  @media (max-width: 50rem) {
    padding: 10rem 1rem;
  }

  // 450px
  @media (max-width: 28.125rem) {
    padding: 8rem 1rem;
  }
`;

const Title = styled.div`
  font-family: 'Playfair Display';
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5rem;

  // 1200px
  @media (max-width: 75rem) {
    font-size: 4.5rem;
  }

  // 800px
  @media (max-width: 50rem) {
    font-size: 4rem;
  }

  // 600px
  @media (max-width: 37.5rem) {
    font-size: 3.7rem;
    margin-bottom: 4rem;
  }

  // 450px
  @media (max-width: 28.125rem) {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 14rem;

  // 600px
  @media (max-width: 37.5rem) {
    margin-bottom: 9rem;
  }

  // 450px
  @media (max-width: 28.125rem) {
    margin-bottom: 7rem;
  }
`;

const AboutMeText = styled.div`
  font-size: 3rem;
  width: 75%;
  margin: 0 auto;
  text-align: center;
  line-height: 2.5;
  margin-bottom: 0.5rem;

  // 1200px
  @media (max-width: 75rem) {
    width: 85%;
    line-height: 2.3;
  }

  // 800px
  @media (max-width: 50rem) {
    width: 95%;
  }

  // 600px
  @media (max-width: 37.5rem) {
    width: 100%;
  }

  // 450px
  @media (max-width: 28.125rem) {
    line-height: 2.2;
  }
`;

const ArrowWrapper = styled.div`
  height: 10rem;
  margin-bottom: 3rem;
  position: relative;

  // 450px
  @media (max-width: 28.125rem) {
    height: 8rem;
  }
`;

const moveDown = keyframes`
  0%{
    transform: translate(0);
    font-size: 4rem;
  }

  50% {
    transform: translateY(50%);
    font-size: 6rem;
  }


  100% {
    transform: translateY(100%);
    font-size: 8rem;
  }

  // 600px
  @media (max-width: 37.5rem) {
    0%{
      font-size: 3.5rem;
    }
    
    50% {
      font-size: 5rem;
    }
    
    
    100% {
      font-size: 6.5rem;
    }
  }

  // 450px
  @media (max-width: 28.125rem) {
    0%{
      transform: translate(0);
    }
    
    50% {
      transform: translateY(30%);
    }
    
    100% {
      transform: translateY(60%);
    }
  }
`;

const ArrowIcon = styled(MdArrowDropDown)`
  color: #081217;
  animation: ${moveDown} 3s linear infinite;
`;

const glowing = keyframes`
0% {
  background-color: #f39faa;
  box-shadow: 0 0 .9rem #f39faa;
}
50% {
  background-color: #ffbec7;
  box-shadow: 0 0 3rem #ffbec7;
}
100% {
  background-color: #f39faa;
  box-shadow: 0 0 .9rem #f39faa;
}
`;

const ResumeBtn = styled.a`
  &:link,
  &:visited {
    background-color: #f39faa;
    color: #fff;
    font-family: 'Playfair Display';
    font-size: 2.3rem;
    font-weight: 800;
    display: inline-block;
    text-decoration: none;
    padding: 1.2rem 2.1rem;
    border-radius: 10rem;
    animation: ${glowing} 1.5s infinite;
    transition: all 0.3s;

    // 800px
    @media (max-width: 50rem) {
      font-size: 2rem;
    }

    // 600px
    @media (max-width: 37.5rem) {
      font-size: 1.7rem;
    }
  }

  &:hover,
  &:active {
    transform: scale(1.1);
  }
`;

const SubTitle = styled.h2`
  font-family: 'Playfair Display';
  font-size: 4.2rem;
  font-weight: 500;
  text-align: center;
  font-style: italic;
  color: #081217;
  margin-bottom: 5rem;
  position: relative;
  z-index: 5;

  // 1200px
  @media (max-width: 75rem) {
    font-size: 3.8rem;
  }

  // 800px
  @media (max-width: 50rem) {
    font-size: 3.5rem;
  }

  // 600px
  @media (max-width: 37.5rem) {
    font-size: 3.2rem;
    margin-bottom: 3rem;
  }

  // 450px
  @media (max-width: 28.125rem) {
    font-size: 3rem;
  }

  &::after {
    content: '';
    display: block;
    background-color: #f39faa;
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    width: 25rem;
    height: 1.5rem;
    margin: 0 auto;
    z-index: -1;
    transform: translateX(-50%) skewX(-30deg);

    // 600px
    @media (max-width: 37.5rem) {
      width: 22rem;
      height: 1.3rem;
    }

    // 450px
    @media (max-width: 28.125rem) {
      width: 19rem;
      height: 1.2rem;
    }
  }
`;

const Skills = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  margin: 0 auto;

  // 1200px
  @media (max-width: 75rem) {
    width: 95%;
  }

  // 800px
  @media (max-width: 50rem) {
    width: 100%;
  }

  // 600px
  @media (max-width: 37.5rem) {
    justify-content: center;
    flex-wrap: wrap;
    align-content: space-between;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  // 600px
  @media (max-width: 37.5rem) {
    margin-bottom: 0.9rem;

    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }

  // 450px
  @media (max-width: 28.125rem) {
    margin-bottom: 1.1rem;

    &:not(:last-child) {
      margin-right: 0.9rem;
    }
  }
`;

const sharedIconStyle = css`
  font-size: 3rem;
  fill: #0e3f42;
  margin-bottom: 0.8rem;

  // 1200px
  @media (max-width: 75rem) {
    font-size: 2.7rem;
  }

  // 800px
  @media (max-width: 50rem) {
    font-size: 2.5rem;
  }

  // 450px
  @media (max-width: 28.125rem) {
    font-size: 2.2rem;
  }
`;

const ReactIcon = styled(FaReact)`
  ${sharedIconStyle}
`;

const HTMLIcon = styled(FaHtml5)`
  ${sharedIconStyle}
`;

const CSSIcon = styled(FaCss3Alt)`
  ${sharedIconStyle}
`;

const SassIcon = styled(FaSass)`
  ${sharedIconStyle}
`;

const NodeJSIcon = styled(FaNodeJs)`
  ${sharedIconStyle}
`;

const GithubIcon = styled(FaGithub)`
  ${sharedIconStyle}
`;

const JSIcon = styled(DiJavascript1)`
  ${sharedIconStyle}
`;

const MongodbIcon = styled(DiMongodb)`
  ${sharedIconStyle}
`;

const ReduxIcon = styled(SiRedux)`
  ${sharedIconStyle}
`;

const GatsbyIcon = styled(SiGatsby)`
  ${sharedIconStyle}
`;

const GraphqlIcon = styled(SiGraphql)`
  ${sharedIconStyle}
`;

const NetlifyIcon = styled(SiNetlify)`
  ${sharedIconStyle}
`;

const HerokuIcon = styled(SiHeroku)`
  ${sharedIconStyle}
`;

const FirebaseIcon = styled(SiFirebase)`
  ${sharedIconStyle}
`;

const SkillName = styled.p`
  font-size: 1.5rem;

  // 1200px
  @media (max-width: 75rem) {
    font-size: 1.3rem;
  }

  // 800px
  @media (max-width: 50rem) {
    font-size: 1.2rem;
  }

  // 450px
  @media (max-width: 28.125rem) {
    font-size: 1.1rem;
  }
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
        <ArrowWrapper>
          <ArrowIcon />
        </ArrowWrapper>
        <ResumeBtn href={data.mdx.frontmatter.resume} target="_blank">
          Resume
        </ResumeBtn>
      </AboutMe>
      <SubTitle>Skills & Tools</SubTitle>
      <Skills data-aos="fade-up">
        <Skill>
          <ReactIcon />
          <SkillName>React</SkillName>
        </Skill>
        <Skill>
          <ReduxIcon />
          <SkillName>Redux</SkillName>
        </Skill>
        <Skill>
          <HTMLIcon />
          <SkillName>HTML</SkillName>
        </Skill>
        <Skill>
          <CSSIcon />
          <SkillName>CSS</SkillName>
        </Skill>
        <Skill>
          <SassIcon />
          <SkillName>Sass</SkillName>
        </Skill>
        <Skill>
          <JSIcon />
          <SkillName>JavaScript</SkillName>
        </Skill>
        <Skill>
          <NodeJSIcon />
          <SkillName>Node.js</SkillName>
        </Skill>
        <Skill>
          <MongodbIcon />
          <SkillName>Mongo DB</SkillName>
        </Skill>
        <Skill>
          <GatsbyIcon />
          <SkillName>Gatsby</SkillName>
        </Skill>
        <Skill>
          <GraphqlIcon />
          <SkillName>GraphQL</SkillName>
        </Skill>
        <Skill>
          <GithubIcon />
          <SkillName>Github</SkillName>
        </Skill>
        <Skill>
          <NetlifyIcon />
          <SkillName>Netlify</SkillName>
        </Skill>
        <Skill>
          <HerokuIcon />
          <SkillName>Heroku</SkillName>
        </Skill>
        <Skill>
          <FirebaseIcon />
          <SkillName>Firebase</SkillName>
        </Skill>
      </Skills>
    </SectionWrapper>
  );
};

export default About;
