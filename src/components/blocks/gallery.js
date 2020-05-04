import React from "react";
import { graphql } from 'gatsby';
import styles from "../../styles/modules/blocks/gallery.module.scss";

export const fragment = graphql`
  fragment CoreGalleryBlock on WPGraphQL_CoreGalleryBlock {
    attributes {
      ... on WPGraphQL_CoreGalleryBlockAttributesV2 {
        images      
                  
      }  
    }      
  }
`;

const GalleryBlock = ({attributes}) => {

  const gallery = JSON.parse(attributes.images);

    return (

       <div className={styles.gallery}>
        
        {gallery.map((image, index) => {
          
          return (
          <img key={index} className={styles.image} src={image.fullUrl} /> 
        )})}

       </div> 
                
)};

export default GalleryBlock;