import React from 'react';
import PropTypes from 'prop-types';
import styles from "../styles/modules/burger.module.scss";
import MenuIcon from '../images/menu-icon.svg';

const Burger = ({ handleOverlayMenu }) => {

  return (
    <div className={styles.menu__openbtn} role="button" aria-label="menu" onClick={handleOverlayMenu} tabIndex="0" onKeyDown={handleOverlayMenu}>
        <img className={styles.menu__openbtn_icon}  src={MenuIcon} alt="Menu" />
    </div>
  )
  
};

Burger.propTypes = {
    handleOverlayMenu: PropTypes.func,
  };

export default Burger 