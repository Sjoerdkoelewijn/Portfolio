import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import styles from "../styles/modules/services.module.scss";

const ServicesList = () => {
    const data = useStaticQuery(graphql`
    query getServices {
        wordPress {
            services {
                edges {
                    node {
                        title
                        blocks {
                            ... on WPGraphQL_CoreParagraphBlock {
                            originalContent
                            }
                        }
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
        
                        <h2
                            dangerouslySetInnerHTML={{
                                __html: service.node.title,
                            }}
                        />
        
                        <p
                            dangerouslySetInnerHTML={{
                                __html: service.node.blocks.originalContent,
                            }}
                        />

                        {service.node.blocks.map(block => {

                            return (
                                <p
                                dangerouslySetInnerHTML={{
                                    __html: block.originalContent,
                                }}
                                />
                            )
                        })}
                        
                    </article>
        
                )
        
            })} 

        </div>

    )

};

export default ServicesList;



