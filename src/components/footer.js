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
  height: 2px;
  text-align: center;
  font-family: 'Julius Sans One', sans-serif;
  margin: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-top: 100px;
  padding: 0 50px;
  box-sizing: border-box;
  background: black;
  width: 80%;
  position: relative;
  span{
    position: absolute;
    top: 3px;
  }
  &:before {
    content: '2022 Brussels, BE';
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 35px;
    padding: 0px 10px;
    background: white;
    border-right: 1px black solid;
    border-left: 1px black solid;
    color: black;
  }
`;

const Footer = () => {
  return (
    <FooterTag>
      <Copyright> <span>&copy; </span></Copyright>
    </FooterTag>
  );
};

export default Footer;