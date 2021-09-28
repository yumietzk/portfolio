import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import { useInView } from 'react-intersection-observer';
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

  // const renderProjects = () => {
  //   if (inView) {
  //     return data.allFile.edges.map((edge, i) => (
  //       <ProjectItem key={edge.node.id} data={edge.node.childMdx} item={i} />
  //     ));
  //   }
  // };

  return (
    <div className={styles.projects} id="projects">
      <h1>Projects</h1>
      <div className={styles.items}>
        {data.allFile.edges.map((edge, i) => (
          <ProjectItem key={edge.node.id} data={edge.node.childMdx} item={i} />
        ))}
        {/* {renderProjects()} */}
      </div>
    </div>
  );
};

export default Projects;
