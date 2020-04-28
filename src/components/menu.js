import React, { useState } from 'react';
import { Link } from "gatsby";
import styles from "../styles/modules/menu.module.scss";
import BurgerIcon from "../components/icons/burgerIcon";
import Logo from "../components/icons/logo";
import OverlayMenu from "../components/overlayMenu";
import { Location } from '@reach/router'

const Menu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleOverlayMenu = () => {
        setMenuOpen(!menuOpen);
      }

    return (

    <Location>

    {({ location }) =>

        <>

        <div className={styles.menu}>
            
            {location.pathname !== '/contact' &&

                <Link to={`/`} className={styles.logo}>
                    <Logo />                    
                </Link>

            }

            <div className={styles.menu_btn} onClick={handleOverlayMenu}>
                <BurgerIcon />                   
            </div>
        
        </div>

        <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />    

        </>
    }    
    </Location>

    )
}



export default Menu 