import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styles from "../styles/modules/menu.module.scss";
import BurgerIcon from "../components/icons/burgerIcon";
import HireIcon from "../components/icons/hireIcon";
import OverlayMenu from "../components/overlayMenu";
import LinkResolver from "../utils/linkResolver";
import { Location } from '@reach/router'

const Menu = () => {
    const data = useStaticQuery(graphql`
    query getMenu{
        prismic {
            allMain_menus {
                edges {
                    node {
                        link {
                            ... on PRISMIC_About {
                            _meta {
                                uid
                                type
                            }
                            }
                            ... on PRISMIC_Services_item {
                            _meta {
                                uid
                                type
                            }
                            }
                            ... on PRISMIC_Home {
                            _meta {
                                uid
                                type
                            }
                            }
                            ... on PRISMIC_Categories {
                            _meta {
                                uid
                                type
                            }
                            }
                            ... on PRISMIC_Portfolio_item {
                            _meta {
                                uid
                                type
                            }
                            }
                        }
                        close
                        hire
                        menu
                        main_menu {
                            link {
                            ... on PRISMIC_Home {
                                _meta {
                                uid
                                type
                                }
                                intro_title
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
                            }
                        }

                    }
                }
            }
        }
    }

    `)

    const [menuOpen, setMenuOpen] = useState(false);

    const handleOverlayMenu = () => {
        setMenuOpen(!menuOpen);
      }

    const doc = data.prismic.allMain_menus.edges.slice(0,1).pop();
    if (!doc) return null;

    return (

    <Location>

    {({ location }) =>

        <>

        <div className={styles.menu}>

            <div className={styles.menu_btn} onClick={handleOverlayMenu}>
                <BurgerIcon />
                {RichText.render(doc.node.menu)}
            </div>

            {location.pathname !== '/contact' &&

                <Link to={LinkResolver(doc.node.link._meta)} className={styles.hire_btn}>
                    <HireIcon />
                    {RichText.render(doc.node.hire)}
                    
                </Link>

            }
        
        </div>

        <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />    

        </>
    }    
    </Location>

    )
}



export default Menu 