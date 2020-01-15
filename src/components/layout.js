import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Footer from "./footer";
import OverlayMenu from '../components/menu';
import Burger from '../components/burger';

const Layout = ({ children }) => {
 
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen);
  };
  

  return (
    <>
      <Header />
      <Burger handleOverlayMenu={handleOverlayMenu} />
      
        <main id="main" role="main">
          {children}
        </main>
        <Footer />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
