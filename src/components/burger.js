import React from 'react';
import PropTypes from 'prop-types';
import styles from "../styles/modules/burger.module.scss";

const Burger = ({ handleOverlayMenu }) => {

  return (
    <div className={styles.menu__openbtn} role="button" aria-label="menu" onClick={handleOverlayMenu} tabIndex="0" onKeyDown={handleOverlayMenu}>
        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20.5498" y="0.333984" width="3.33333" height="19.8623" transform="rotate(90 20.5498 0.333984)" fill="#FE5862"/>
          <rect x="20.5498" y="7.00049" width="3.33333" height="19.8623" transform="rotate(90 20.5498 7.00049)" fill="#FE5862"/>
          <rect x="20.5498" y="13.6675" width="3.33333" height="19.8623" transform="rotate(90 20.5498 13.6675)" fill="#FE5862"/>
        </svg>
        Menu
    </div>
  )
  
};

Burger.propTypes = {
    handleOverlayMenu: PropTypes.func,
  };

export default Burger 