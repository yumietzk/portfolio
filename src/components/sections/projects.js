import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectItem from '../template/projectItem';
import * as styles from './projects.module.css';

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
    <div className={styles.projects}>
      <h1>Projects</h1>
      <div className={styles.items}>
        {data.allFile.edges.map((edge) => (
          <ProjectItem key={edge.node.id} data={edge.node.childMdx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
