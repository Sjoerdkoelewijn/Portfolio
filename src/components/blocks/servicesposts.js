import React from 'react';
import { graphql } from 'gatsby';
import styles from '../../styles/modules/blocks/servicesposts.module.scss';
import ServicesList from "../services";

export const fragment = graphql`
  fragment CustomServicesPosts on WPGraphQL_CustomBlocksServicesPostsBlock {
    attributes {
      title
      subtitle
      introduction
    }    
  }
`;

const ServicesPosts = ({attributes}) => {

    return (

      <article className={styles.services}>

      <div className={styles.intro_text}>

        <h1>
          {attributes.title}
        </h1>
        
        <h2
            dangerouslySetInnerHTML={{
              __html: attributes.subtitle,
          }}
        />
        
        <p
            dangerouslySetInnerHTML={{
              __html: attributes.introduction,
          }}
        />
      
      </div>

      <ServicesList /> 

    </article>
                
)};

export default ServicesPosts;