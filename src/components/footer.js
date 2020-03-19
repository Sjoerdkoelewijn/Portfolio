import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styles from "../styles/modules/footer.module.scss";
import htmlSerializer from "../utils/htmlSerializer";
import LinkResolver from "../utils/linkResolver";
import SocialIcon from "../components/SocialIcon";

const Footer = () => {
    const data = useStaticQuery(graphql`
    query getFooter{
        prismic {       
            allFooters {
                edges {
                    node {
                        contact
                        social {
                            url {
                                ... on PRISMIC__ExternalLink {
                                    url
                                }
                            }
                            name
                        }
                        copyright
                        page_links {
                            name
                            url {
                                ... on PRISMIC_Pages {
                                    title
                                    _linkType
                                    _meta {
                                    uid
                                    }
                                }
                                ... on PRISMIC__ExternalLink {
                                    _linkType
                                    url
                                }
                            }
                        }
                    }
                }
            }

            allServices_items(sortBy: order_ASC) {
                edges {
                    node {
                        title
                        _meta  {
                            uid
                            type
                        }          
                    }
                }
            }
        }
    }    
    `)

    const footer = data.prismic.allFooters.edges.slice(0,1).pop();
    if (!footer) return null;

    const service = data.prismic.allServices_items.edges.slice(0,1).pop();
    if (!service) return null;
    
    return (

        <article class={styles.footer}>

            <div className={styles.contact}>

                <h2>
                    Contact.
                </h2>

                {RichText.render(footer.node.contact)}

            </div>

            <div className={styles.services_wrap}>

                <div className={styles.services}>

                    <h2>
                        Services.
                    </h2>

                    {data.prismic.allServices_items.edges.map(doc => {


                        return (

                            <Link to={LinkResolver(doc.node._meta)} className={styles.service_link}>
                                
                                <RichText render={doc.node.title} htmlSerializer={htmlSerializer} />

                            </Link>

                        );

                    })}

                </div>

                <div className={styles.social}>
                    
                    {footer.node.social.map(icon => {

                        return (

                            <a title={icon.name} className={styles.social_icon} href={icon.url.url}>

                                <SocialIcon socialPlatform={icon.name} />
                        
                            </a>

                        );

                    })}

                </div>

                <div className={styles.copyright}>
                    {RichText.render(footer.node.copyright)}
                </div>

                <div className={styles.page_links}>
                
                    {footer.node.page_links.map(doc => {

                    let link;                     

                    if (doc.url._linkType === 'Link.web') link = doc.url.url;
                    if (doc.url._linkType === 'Link.document') link = LinkResolver(doc.url._meta);

                        return (

                            <a className={styles.link} title={doc.name} href={link}>
                               {doc.name}
                            </a>

                        );

                    })}
                
                </div>

            </div>

        </article>

    )
}

export default Footer 