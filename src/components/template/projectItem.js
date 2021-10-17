import React, { useEffect, useState } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import * as styles from './projectItem.module.css';

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
    <div
      className={`${styles.item} ${reverse ? styles.itemReverse : null}`}
      data-aos={reverse ? 'flip-left' : 'flip-right'}
    >
      <div className={styles.card}>
        <div className={styles.cardItem}>
          <GatsbyImage image={image} alt={data.frontmatter.image_alt} />
        </div>
      </div>
      <div className={styles.description}>
        <h3 className={styles.title}>{data.frontmatter.title}</h3>
        <div className={styles.content}>
          <MDXRenderer>{data.body}</MDXRenderer>
        </div>
        <p className={styles.stack}>{data.frontmatter.stack}</p>
        <div className={styles.links}>
          <a
            className={styles.linkVisit}
            href={data.frontmatter.live}
            target="_blank"
          >
            <BsIcons.BsLink45Deg className={styles.linkIcon} />
            Visit
          </a>
          <a
            className={styles.linkSource}
            href={data.frontmatter.source}
            target="_blank"
          >
            <FaIcons.FaGithub className={styles.linkIcon} />
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
