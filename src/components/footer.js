import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
    return (
        <footer>
           <p> Made with <span role='img' aria-label='coffee'>☕</span> by {data.site.siteMetadata.author}</p>
        </footer>
    );
}

export default Footer;
