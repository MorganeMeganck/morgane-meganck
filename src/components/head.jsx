
 import React from "react";
 import PropTypes from "prop-types";
 import Helmet from "react-helmet";
 import { useStaticQuery, graphql } from "gatsby";
 
 function Head({ description, lang, meta, title }) {
   const { site
   } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
           }
         }
       }
     `
   );
 
   const metaDescription = description || site.siteMetadata.description;
   const metaTitle = title || site.siteMetadata.title;
 
   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={metaTitle}
       meta={[
         {
           name: `description`,
           content: metaDescription,
         },
         {
           property: `og:title`,
           content: metaTitle,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
           property: `og:url`,
           content: site.siteMetadata.siteUrl,
         },
         {
           name: `twitter:card`,
           content: `summary`,
         },
         {
           name: `twitter:creator`,
           content: site.siteMetadata.author,
         },
         {
           name: `twitter:title`,
           content: metaTitle,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
       ].concat(meta)}
     >
     </Helmet>
   );
 }
 
 Head.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
 };
 
 Head.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string,
 };
 
 export default Head;