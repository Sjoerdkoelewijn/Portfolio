import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "../styles/modules/workitem.module.scss";
import Img from "gatsby-image";

const WorkItem = () => {
    const data = useStaticQuery(graphql`
    {
        wordPress {
          works(first: 5) {
            nodes {
              id
              link
              slug
              title
              work_fields {
                name
                url
                desktopImage {
                  altText
                  sourceUrl 
                  imageFile {
                    childImageSharp {
                        fluid(maxWidth: 1000, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)
    return (
        <div className={styles.workitems}>
            {data.wordPress.works.nodes.map(post => {
                let realSlug = `/work/${(post.slug)}`;
                return (
                    <article className={styles.workitem}>
                        <Link to={realSlug}>
                            <Img className={styles.workitem__image} fluid={post.work_fields.desktopImage.imageFile.childImageSharp.fluid} alt="alt text" />
                        </Link>
                        <div className={styles.workitem__text}>

                            <h2 className={styles.workitem__text_subtitle}>
                                {post.work_fields.name}
                            </h2>

                            <h1 className={styles.workitem__text_title}>
                                {post.title}
                            </h1>

                        </div>
                        
                        <Link className={styles.workitem__btn} to={realSlug}>
                            See this case.
                        </Link>
                    </article>
                )
            })}
          
        </div>
    )
  }

export default WorkItem