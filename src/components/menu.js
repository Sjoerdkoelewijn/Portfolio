import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import styles from "../styles/modules/menu.module.scss";
import BurgerIcon from "../components/icons/burgerIcon";
import HireIcon from "../components/icons/hireIcon";
import OverlayMenu from "../components/overlayMenu";
import { Location } from '@reach/router'

const Menu = () => {
    const data = useStaticQuery(graphql`
    query getMenu{
        wordPress {
            microcopySettings {
                mcHire
                mcMenu
            }   
               
        }
    }

    `)

    const [menuOpen, setMenuOpen] = useState(false);

    const handleOverlayMenu = () => {
        setMenuOpen(!menuOpen);
      }

    const mc = data.wordPress.microcopySettings 

    return (

    <Location>

    {({ location }) =>

        <>

        <div className={styles.menu}>
            
            {location.pathname !== '/contact' &&

                <Link to={`/contact`} className={styles.hire_btn}>
                    <HireIcon />
                    <p>
                        {mc.mcHire}
                    </p>
                </Link>

            }

            <div className={styles.menu_btn} onClick={handleOverlayMenu}>
                <BurgerIcon />
                <p>
                    {mc.mcMenu}
                </p>    
            </div>
        
        </div>

        <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />    

        </>
    }    
    </Location>

    )
}



export default Menu 