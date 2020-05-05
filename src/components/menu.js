import React, { useState } from 'react';
import { Link } from "gatsby";
import styles from "../styles/modules/menu.module.scss";
import BurgerIcon from "../components/icons/burgerIcon";
import Logo from "../components/icons/logo";
import OverlayMenu from "../components/overlayMenu";

const Menu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleOverlayMenu = () => {
        setMenuOpen(!menuOpen);
      }

    return (

        <>

            <div className={styles.menu}>

                <Link aria-label="Back to index" to={`/`} tabIndex="0" className={styles.logo}>

                    <Logo />    

                </Link>
            
                <button aria-label="Menu button" className={styles.menu_btn} onClick={handleOverlayMenu} tabIndex="0" onKeyDown={handleOverlayMenu}>

                    <BurgerIcon />  

                </button>
            
            </div>

            <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />    

        </>

    )
}

export default Menu 