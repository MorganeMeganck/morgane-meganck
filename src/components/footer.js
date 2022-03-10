import React from "react";
import styled from 'styled-components';


const FooterTag = styled.footer`
  width: 100%;
  height: 10rem;
  display: grid;
  grid-template-rows: 1fr min-content;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  justify-items: center;
  align-items: center;
`;


const Copyright = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  
`;

const Footer = () => {
  return (
    <FooterTag>
       <Copyright className="copy"></Copyright>
    </FooterTag>
  );
};

export default Footer;