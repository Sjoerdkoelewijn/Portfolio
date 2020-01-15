import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import styles from "../styles/modules/serviceitem.module.scss";

const ServiceItem = () => {
    const data = useStaticQuery(graphql`
    query getService {
      wordPress {
        services(first: 10) {
          nodes {
            id
            link
            slug
            title
            excerpt(format: RENDERED)
          }
        }
      }
    }
    `)
    return (
        <div className={styles.serviceitems}>
            {data.wordPress.services.nodes.map(post => {
                return (
                    <article className={styles.serviceitem}>
               
                        <div className={styles.serviceitem__text}>

                            <h3 className={styles.serviceitem__text_title}>
                              {post.title}
                            </h3>
                            <p className={styles.serviceitem__text_excerpt}>
                                {post.excerpt}
                            </p>

                        </div>
                  
                    </article>
                )
            })}
          
        </div>
    )
  }

export default ServiceItem