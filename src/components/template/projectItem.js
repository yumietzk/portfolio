import React, { useEffect, useState } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BsLink45Deg } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import '@fontsource/playfair-display';
import styled, { css } from 'styled-components';
// import * as styles from './projectItem.module.css';

const Project = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};

  width: 95%;

  &:not(:last-child) {
    margin-bottom: 12rem;
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
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.5s;
`;

const Description = styled.div`
  flex: 1;
  padding: 0 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
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
    background-color: #f8906c;
  }
`;

const Content = styled.p`
  font-size: 2.5rem;
  margin-bottom: 2.3rem;
  text-align: center;
  line-height: 2;
`;

const Stack = styled.p`
  width: 80%;
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 3rem;
  font-style: italic;
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
    padding: 0.8rem 1.8rem;
    border-radius: 10rem;
    color: #ccc;
    font-size: 1.3rem;
    font-weight: 500;
    transition: all 0.3s;

    display: flex;
    align-items: center;
  }

  &:hover,
  &:active {
    background-color: #ccc;
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
  font-size: 1.5rem;
  background-color: transparent;
  fill: #ccc;
  margin-bottom: 0.2rem;
  transition: all 0.3s;

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
      <Description>
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
            {/* more detailとかにしたい */}
            Source
          </SourceLink>
        </LinkWrapper>
      </Description>
    </Project>
    // <div
    //   className={`${styles.item} ${reverse ? styles.itemReverse : null}`}
    //   data-aos={reverse ? 'flip-left' : 'flip-right'}
    // >
    //   <div className={styles.card}>
    //     <div className={styles.cardItem}>
    //       <GatsbyImage image={image} alt={data.frontmatter.image_alt} />
    //     </div>
    //   </div>
    //   <div className={styles.description}>
    //     <h3 className={styles.title}>{data.frontmatter.title}</h3>
    //     <div className={styles.content}>
    //       <MDXRenderer>{data.body}</MDXRenderer>
    //     </div>
    //     <p className={styles.stack}>{data.frontmatter.stack}</p>
    //     <div className={styles.links}>
    //       <a
    //         className={styles.linkVisit}
    //         href={data.frontmatter.live}
    //         target="_blank"
    //       >
    //         <BsIcons.BsLink45Deg className={styles.linkIcon} />
    //         Visit
    //       </a>
    //       <a
    //         className={styles.linkSource}
    //         href={data.frontmatter.source}
    //         target="_blank"
    //       >
    //         <FaIcons.FaGithub className={styles.linkIcon} />
    //         {/* more detailとかにしたい */}
    //         Source
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProjectItem;
