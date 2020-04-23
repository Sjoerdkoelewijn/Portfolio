import React from "react";
import { graphql } from 'gatsby';

export const fragment = graphql`
  fragment CoreQuoteBlock on WPGraphQL_CoreQuoteBlock {
    attributes {
        citation
        value        
    }
  }
`;


const QuoteBlock = ({attributes}) => {

    return (

        <article className="quote">
            <div className="quote_value">
                {attributes.value}
            </div>
            <div className="quote_citation">
                {attributes.citation}
            </div>            
        </article>
        
                
)};

export default QuoteBlock;