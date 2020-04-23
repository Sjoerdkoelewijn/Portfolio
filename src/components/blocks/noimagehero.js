import React from 'react';
import { graphql } from 'gatsby';
import styles from '../../styles/modules/blocks/noimagehero.module.scss';

import Menu from '../menu';
import ArrowDownIcon from '../icons/arrowDownIcon';

export const fragment = graphql`
  fragment CustomNoImageHero on WPGraphQL_CustomBlocksNoimageheroBlock {
    attributes {
      title
      introduction             
      
    }    
  }
`;

const NoImageHero = ({attributes}) => {

    return (

      <article className={styles.hero}>

        <div className={styles.text_area}>

          <Menu />
                    
          <h1 className={styles.header}>
            {attributes.title}
          </h1>
          <p
              dangerouslySetInnerHTML={{
                __html: attributes.introduction,
            }}
          />

        </div>  

        <ArrowDownIcon />

      </article>
        
                
)};

export default NoImageHero;