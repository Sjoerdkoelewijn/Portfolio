import React from "react";
import { graphql } from 'gatsby';
import Img from "gatsby-image";

export const fragment = graphql`
  fragment CoreImageBlock on WPGraphQL_CoreImageBlock {
    attributes {
      url
      imageFile {
        childImageSharp {
          fluid(quality: 90, maxWidth: 960) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }  
    }      
  }
`;

const ImageBlock = ({attributes}) => {

    return (

       <>
            <Img 
              Tag="article"
              fluid={attributes.imageFile.childImageSharp.fluid}
              backgroundColor={`#CAEFFA`}
            />
       </> 
                
)};

export default ImageBlock;