import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import styles from "../styles/modules/services.module.scss";

const ServicesOverview = () => {
    const data = useStaticQuery(graphql`
    query getServicesOverview{
        prismic {
            allCategoriess(uid: "services") {
                edges {
                    node {
                        title
                        subtitle
                        excerpt
                    }
                }
            }

            allServices_items(sortBy: order_ASC) {
                edges {
                    node {
                        title
                        excerpt            
                    }
                }
            }
        }
    }

    `)

    const serv = data.prismic.allCategoriess.edges.slice(0,1).pop();
    if (!serv) return null;

    
    return (

    <div class={styles.services_wrap}>

        <div className={styles.intro_text}>  

            {RichText.render(serv.node.title)}
            {RichText.render(serv.node.subtitle)}
            {RichText.render(serv.node.excerpt)}

        </div>

        <div className={styles.service_inner}>

            {data.prismic.allServices_items.edges.map(service => {

            return (
                <article className={styles.service_block}>
                    
                    {RichText.render(service.node.title)}
                    {RichText.render(service.node.excerpt)}

                </article>
            );

            })}

        </div>

    </div>

    )
}


export default ServicesOverview 