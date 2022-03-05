import React, { useEffect, useState } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BsLink45Deg } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import '@fontsource/playfair-display';
import styled, { css } from 'styled-components';

const Project = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};

  width: 85%;

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
    flex-direction: column;
  }

  &:not(:last-child) {
    margin-bottom: 12rem;

    // 450px
    @media (max-width: 28.125rem) {
      margin-bottom: 9rem;
    }
  }
`;

const CardWrapper = styled.div`
  flex: 0 1 50%;
  position: relative;
`;

const Card = styled.div`
  height: 100%;
  width: 100%;
  object-fit: contain;
  box-shadow: 3px 5px 5px rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  overflow: hidden;

  // 600px
  @media (max-width: 37.5rem) {
    height: 60%;
    width: 60%;
    margin: 0 auto;
  }
`;

const Description = styled.div`
  flex: 1;
  padding: ${(props) => (props.reverse ? '0 4rem 0 .5rem' : '0 .5rem 0 4rem')};

  display: flex;
  flex-direction: column;
  align-items: center;

  // 1200px
  @media (max-width: 75rem) {
    padding: ${(props) => (props.reverse ? '0 2rem 0 0' : '0 0 0 2rem')};
  }

  // 800px
  @media (max-width: 50rem) {
    padding: ${(props) => (props.reverse ? '0 1rem 0 0' : '0 0 0 1rem')};
  }

  // 600px
  @media (max-width: 37.5rem) {
    padding: 0;
    margin-top: 4rem;
  }
`;

const Title = styled.div`
  font-family: 'Playfair Display';
  font-size: 3rem;
  font-weight: 800;
  font-style: italic;
  color: #081217;
  margin-bottom: 4rem;
  z-index: 5;
  position: relative;

  // 1800px
  @media (min-width: 112.5rem) {
    font-size: 3.5rem;
  }

  // 1200px
  @media (max-width: 75rem) {
    font-size: 2.7rem;
    margin-bottom: 3.3rem;
  }

  // 800px
  @media (max-width: 50rem) {
    font-size: 2.5rem;
    margin-bottom: 2.7rem;
  }

  // 600px
  @media (max-width: 37.5rem) {
    font-size: 2.3rem;
  }

  // 450px
  @media (max-width: 28.125rem) {
    font-size: 2.2rem;
  }

  &::after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform: scale(1.07, 1.05) skewX(-15deg);
    background-color: #f39faa;
  }
`;

const Content = styled.div`
  font-size: 2.4rem;
  margin-bottom: 2.3rem;
  text-align: center;
  line-height: 1.5;

  // 1800px
  @media (min-width: 112.5rem) {
    font-size: 3rem;
  }

  // 1200px
  @media (max-width: 75rem) {
    font-size: 2.3rem;
    margin-bottom: 2rem;
  }

  // 800px
  @media (max-width: 50rem) {
    font-size: 2.5rem;
  }

  // 600px
  @media (max-width: 37.5rem) {
    font-size: 2.6rem;
  }

  // 450px
  @media (max-width: 28.125rem) {
    font-size: 2.8rem;
  }
`;

const Stack = styled.div`
  width: 80%;
  font-family: 'Playfair Display';
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-style: italic;

  // 1800px
  @media (min-width: 112.5rem) {
    font-size: 2rem;
  }

  // 1200px
  @media (max-width: 75rem) {
    font-size: 1.4rem;
    margin-bottom: 2.2rem;
  }

  // 600px
  @media (max-width: 37.5rem) {
    font-size: 1.5rem;
  }

  // 450px
  @media (max-width: 28.125rem) {
    font-size: 1.4rem;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const sharedLinkStyle = css`
  &:link,
  &:visited {
    text-decoration: none;
    border: 2px solid #ccc;
    padding: 1rem 1.8rem;
    border-radius: 10rem;
    color: #ccc;
    font-size: 1.4rem;
    font-weight: 500;
    transition: all 0.3s;

    display: flex;
    align-items: center;

    // 1800px
    @media (min-width: 112.5rem) {
      font-size: 1.7rem;
    }

    // 1200px
    @media (max-width: 75rem) {
      font-size: 1.3rem;
      padding: 0.8rem 1.6rem;
    }

    // 600px
    @media (max-width: 37.5rem) {
      font-size: 1.4rem;
    }
  }

  &:hover,
  &:active {
    background-color: #f39faa;
    border: 2px solid #f39faa;
    color: #081217;
  }
`;

const VisitLink = styled.a`
  ${sharedLinkStyle}
  margin-right: 1rem;
`;

const SourceLink = styled.a`
  ${sharedLinkStyle}
  margin-left: 1rem;
`;

const sharedIconStyle = css`
  margin-right: 0.5rem;
  font-size: 1.6rem;
  background-color: transparent;
  fill: #ccc;
  margin-bottom: 0.2rem;
  transition: all 0.3s;

  // 1800px
  @media (min-width: 112.5rem) {
    font-size: 2rem;
  }

  // 1200px
  @media (max-width: 75rem) {
    font-size: 1.5rem;
  }

  ${VisitLink}:hover & {
    fill: #081217;
  }
  ${SourceLink}:hover & {
    fill: #081217;
  }
`;

const VisitIcon = styled(BsLink45Deg)`
  ${sharedIconStyle}
`;

const SourceIcon = styled(FaGithub)`
  ${sharedIconStyle}
`;

const ProjectItem = ({ data, item }) => {
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (item % 2 === 1) {
      setReverse(true);
    }
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const image = getImage(data.frontmatter.image);

  return (
    <Project reverse={reverse} data-aos={reverse ? 'flip-left' : 'flip-right'}>
      <CardWrapper>
        <Card>
          <GatsbyImage image={image} alt={data.frontmatter.image_alt} />
        </Card>
      </CardWrapper>
      <Description reverse={reverse}>
        <Title>{data.frontmatter.title}</Title>
        <Content>
          <MDXRenderer>{data.body}</MDXRenderer>
        </Content>
        <Stack>{data.frontmatter.stack}</Stack>
        <LinkWrapper>
          <VisitLink href={data.frontmatter.live} target="_blank">
            <VisitIcon />
            Visit
          </VisitLink>
          <SourceLink href={data.frontmatter.source} target="_blank">
            <SourceIcon />
            More detail
          </SourceLink>
        </LinkWrapper>
      </Description>
    </Project>
  );
};

export default ProjectItem;
