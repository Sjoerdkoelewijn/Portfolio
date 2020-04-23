import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import styles from "../styles/modules/menu.module.scss";
import CloseIcon from "../components/icons/closeIcon";
import SocialMenu from "../components/socialMenu";


const OverlayMenu = ({ menuOpen, callback }) => {
    const data = useStaticQuery(graphql`
    query getOverlayMenu{
        wordPress {
            microcopySettings {
                mcClose
                mcMenuText
            }
            menuItems(where: {location: MAIN_NAVIGATION}) {
                nodes {
                    url
                    label
                }
            }  
        }
    }

    `)

    const mc = data.wordPress.microcopySettings

    return (

        <div className={[styles.overlay_menu, styles[menuOpen]].join(' ')}>

            <div className={styles.overlay_menu_inner}>
                
                <div className={styles.close_btn} role="button" aria-label="close" onClick={callback} tabIndex="0" onKeyDown={callback}>
                    <CloseIcon />
                    <p>
                        {mc.mcClose}
                    </p>    
                </div>

                <div className={styles.main_menu}>

                {data.wordPress.menuItems.nodes.map(node => {

                    const wpurl = `https://api.sjoerdkoelewijn.local`
                    const onlyPath = node.url.replace(wpurl, ``)

                        return (
                            
                            <Link key={node.id} aria-label={node.label} to={`/${onlyPath}/`} className={styles.menu_link}>
                                {node.label}
                            </Link>

                            
                        )
                    })}

                </div>

                <div className={styles.text_area}>

                    <p>
                        {mc.mcMenuText}
                    </p>

                    <SocialMenu />

                </div>
                
            </div>

        </div>


    )
}


export default OverlayMenu 