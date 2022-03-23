import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectItem from '../template/projectItem';
import '@fontsource/playfair-display';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 15rem 1rem;
  display: flex;
  flex-direction: column;
  background-color: #081217;
  color: #ccc;

  // 800px
  @media only screen and (max-width: 50rem) {
    padding: 10rem 1rem;
  }

  // 450px
  @media only screen and (max-width: 28.125rem) {
    padding: 8rem 1rem;
  }
`;

const Title = styled.div`
  font-family: 'Playfair Display';
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10rem;

  // 1200px
  @media only screen and (max-width: 75rem) {
    font-size: 4.5rem;
  }

  // 800px
  @media only screen and (max-width: 50rem) {
    font-size: 4rem;
  }

  // 600px
  @media only screen and (max-width: 37.5rem) {
    font-size: 3.7rem;
    margin-bottom: 4rem;
  }

  // 450px
  @media only screen and (max-width: 28.125rem) {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }
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
  );
};

export default Projects;
