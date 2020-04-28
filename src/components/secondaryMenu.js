import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "../styles/modules/menu.module.scss";

const SecondaryMenu = () => {
    const data = useStaticQuery(graphql`
    query getSecondaryMenu{
        wordPress {
            menuItems(where: {location: SECONDARY_NAVIGATION}) {
                nodes {
                    label
                    url
                }
            }
        }
    }

    `)
    return(
                        
    <nav className={styles.secondary_menu}>        

        {data.wordPress.menuItems.nodes.map(node => {

        const wpurl = `https://api.sjoerdkoelewijn.com`
        const onlyPath = node.url.replace(wpurl, ``)

            return (
                
                <Link key={node.id} aria-label={node.label} to={`/${onlyPath}/`} className={styles.menu_link}>
                    {node.label}
                </Link>

                
            )
        })}

    </nav>

    )
}


export default SecondaryMenu 