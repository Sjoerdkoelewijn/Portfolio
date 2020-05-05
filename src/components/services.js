import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "../styles/modules/services.module.scss";

const ServicesList = () => {
    const data = useStaticQuery(graphql`
    query getServices {
        wordPress {
            services {
                edges {
                    node {
                        title
                        excerpt
                        slug
                    }
                }
            } 
        }
    }

    `)

    return (

        <div className={styles.service_inner}>
        
            {data.wordPress.services.edges.map(service => {

                return (
        
                    <article className={styles.service_block}>
        
                        <Link aria-label={service.node.title} to={`/services/${service.node.slug}`}>
                            <h2
                                dangerouslySetInnerHTML={{
                                    __html: service.node.title,
                                }}
                            />
                        </Link> 
        
                        <p
                            dangerouslySetInnerHTML={{
                                __html: service.node.excerpt,
                            }}
                        />                                                
                        
                    </article>
        
                )
        
            })} 

        </div>

    )

};

export default ServicesList;



