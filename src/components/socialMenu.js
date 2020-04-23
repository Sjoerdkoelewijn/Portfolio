import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import SocialIcon from "./socialIcon";
import styles from "../styles/modules/menu.module.scss";

const SocialMenu = () => {
    const data = useStaticQuery(graphql`
    query getSocialMenu{
        wordPress {
            menuItems(where: {location: SOCIAL_MENU}) {
                nodes {
                    label
                    url
                }
            }
        }
    }

    `)
    return(
                        
    <nav className={styles.social_menu}>        

        {data.wordPress.menuItems.nodes.map(icon => {
            return (
                
                <a title={icon.label} className={styles.social_icon} href={icon.url}>
                    
                    <SocialIcon socialPlatform={icon.label} />

                </a>

            )
        })}

    </nav>

    )
}


export default SocialMenu 