import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styles from "../styles/modules/menu.module.scss";
import CloseIcon from "../components/icons/closeIcon";
import htmlSerializer from "../utils/htmlSerializer";
import SocialIcon from "../components/socialIcon";

const OverlayMenu = ({ menuOpen, callback }) => {
    const data = useStaticQuery(graphql`
    query getOverlayMenu{
        prismic {
            allMain_menus {
                edges {
                    node {
                        close
                        text
                        main_menu {
                            link {
                            ... on PRISMIC_Home {
                                _meta {
                                uid
                                type
                                }
                                title
                            }
                            ... on PRISMIC_Services_item {
                                _meta {
                                uid
                                type
                                }
                                title
                            }
                            ... on PRISMIC_Categories {
                                _meta {
                                uid
                                }
                                title
                            }
                            ... on PRISMIC_About {
                                _meta {
                                uid
                                }
                                title
                            }
                            ... on PRISMIC_Portfolio_item {
                                _meta {
                                uid
                                }
                                title
                            }
                            ... on PRISMIC_Contact {
                                _meta {
                                uid
                                }
                                title
                            }
                            }
                        }

                        social {
                            name
                            url
                        }

                    }
                }
            }
        }
    }

    `)

    const doc = data.prismic.allMain_menus.edges.slice(0,1).pop();
    if (!doc) return null;

    return (


        <div className={[styles.overlay_menu, styles[menuOpen]].join(' ')}>

            <div className={styles.overlay_menu_inner}>
                
                <div className={styles.close_btn} role="button" aria-label="close" onClick={callback} tabIndex="0" onKeyDown={callback}>
                    <CloseIcon />
                    {RichText.render(doc.node.close)}
                </div>

                <div className={styles.main_menu}>

                    {doc.node.main_menu.map(doc => {
                        return (
                            
                            <Link aria-label={doc.link._meta.uid} to={doc.link._meta.uid} className={styles.menu_link}>

                                <RichText render={doc.link.title} htmlSerializer={htmlSerializer} />

                            </Link>
                        
                        )
                    })}

                </div>

                <div className={styles.text_area}>

                    {RichText.render(doc.node.text)}

                    <div className={styles.social_menu}>

                        {doc.node.social.map(icon => {
                            return (
                                
                                <a title={icon.name} className={styles.social_icon} href={icon.url}>
                                    
                                    <SocialIcon socialPlatform={icon.name} />
                        
                                </a>

                            )
                        })}

                    </div>

                </div>
                
            </div>

        </div>


    )
}


export default OverlayMenu 