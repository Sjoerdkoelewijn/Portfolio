import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";

import Anime from 'react-anime';

const Layout = ({ children }) => {
  
  let animeProps = {
    opacity: [0, 1],
  };

  return (
    <>
        <Anime {...animeProps} >
                           
          <main id="main" role="main">
            {children}
          </main>
          <Footer />

        </Anime>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout