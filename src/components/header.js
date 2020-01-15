import { Link } from 'gatsby';
import React from 'react';
import styles from '../styles/modules/header.module.scss';
import LogoIcon from '../images/logo-icon.svg';

const Header = () => {

  return(

    <header className={styles.header}>
      <Link to="/" >
        <div className={styles.header__logo}>
          <img className={styles.header__logo_icon}
          src={LogoIcon} 
          alt="Logo" />
          <span>
            Sjoerd Koelewijn
          </span>
        </div>
      </Link>
      
    </header>
  )
}



export default Header;