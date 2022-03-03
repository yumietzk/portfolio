import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectItem from '../template/projectItem';
import '@fontsource/playfair-display';
import styled from 'styled-components';
// import * as styles from './projects.module.css';

const SectionWrapper = styled.section`
  padding: 15rem 1rem;
  display: flex;
  flex-direction: column;
  background-color: #081217;
  color: #ccc;
`;

const Title = styled.div`
  font-family: 'Playfair Display';
  font-size: 6rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10rem;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { regex: "/projects/" }
          extension: { eq: "mdx" }
        }
        sort: { fields: dir, order: ASC }
      ) {
        edges {
          node {
            id
            childMdx {
              frontmatter {
                image_alt
                live
                source
                stack
                title
                image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              body
            }
          }
        }
      }
    }
  `);

  return (
    <SectionWrapper id="projects">
      <Title>Projects</Title>
      <ProjectsWrapper>
        {data.allFile.edges.map((edge, i) => (
          <ProjectItem key={edge.node.id} data={edge.node.childMdx} item={i} />
        ))}
      </ProjectsWrapper>
    </SectionWrapper>
    // <div className={styles.projects} id="projects">
    //   <h1>Projects</h1>
    //   <div className={styles.items}>
    //     {data.allFile.edges.map((edge, i) => (
    //       <ProjectItem key={edge.node.id} data={edge.node.childMdx} item={i} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default Projects;
