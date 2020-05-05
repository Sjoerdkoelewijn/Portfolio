import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "../styles/modules/footer.module.scss";

const LinksMenu = () => {
    const data = useStaticQuery(graphql`
    query getLinksMenu{
        wordPress {
            menuItems(where: {location: LINKS_MENU}) {
                nodes {
                    label
                    url
                }
            }
        }
    }

    `)
    return(
                        
    <nav className={styles.page_links}>        

        {data.wordPress.menuItems.nodes.map(node => {

        const wpurl = `https://api.sjoerdkoelewijn.com`
        const onlyPath = node.url.replace(wpurl, ``)

            return (
               
                <Link key={node.id} aria-label={node.label} to={`/${onlyPath}/`} className={styles.link}>
                    {node.label}
                </Link>

                
            )
        })}

    </nav>

    )
}


export default LinksMenu 