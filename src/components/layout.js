import React, { useState } from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import OverlayMenu from '../components/menu';
import Burger from '../components/burger';
import Anime from 'react-anime';

const Layout = ({ children }) => {
 
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  let animeProps = {
    opacity: [0, 1],
  };

  return (
    <>
        <Burger handleOverlayMenu={handleOverlayMenu} />
        
        <Anime {...animeProps} >
                           
          <main id="main" role="main">
            {children}
          </main>
          <Footer />

        </Anime>
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
