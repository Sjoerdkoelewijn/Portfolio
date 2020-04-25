import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import styles from "../styles/modules/menu.module.scss";
import CloseIcon from "../components/icons/closeIcon";
import SocialMenu from "../components/socialMenu";
import Logo from "../components/icons/logo";

const OverlayMenu = ({ menuOpen, callback }) => {
    const data = useStaticQuery(graphql`
    query getOverlayMenu{
        wordPress {
            microcopySettings {
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

                <div className={styles.logo_close_wrap}>
                
                    <div className={styles.logo} aria-label="logo">
                        <Logo />                       
                    </div>
                    
                    <div className={styles.close_btn} role="button" aria-label="close" onClick={callback} tabIndex="0" onKeyDown={callback}>
                        <CloseIcon />                       
                    </div>

                </div>

                <div className={styles.left_section}>

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

                    <SocialMenu />

                    </div>

                </div>

                <div className={styles.right_section}>

                    <div className={styles.text_area}>

                        <p>
                            {`I'm a freelance designer, web-developer and digital marketing professional.`}
                        </p>
                        <p>
                            {`I use design, marketing and technical know-how to and create fast and efficient websites.`}
                        </p>
                        <p>
                            {`Let's talk about your next project.`}    
                        </p>
       
                        <SocialMenu />

                    </div>
                    
                </div>
                
            </div>

        </div>


    )
}


export default OverlayMenu 