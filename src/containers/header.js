import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from 'gatsby'
import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import PortfolioPage from '../pages/portfolio'
import AboutPage from '../pages/about'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from "../components/logo/logo";
import Hamburger from "../components/hamburger/hamburger";

const HeaderTag = styled.header`
 
`;
const Intro = styled.div`
    -webkit-transform: skewY(-7deg);
    -moz-transform: skewY(-7deg);
    -ms-transform: skewY(-7deg);
    -o-transform: skewY(-7deg);
    transform: skewY(-7deg);
    text-align: center;
`;
const Heading = styled.h1`
font-family: 'Julius Sans One', sans-serif;
font-size: 3.5em;
line-height: 100px;
font-weight: 600;
letter-spacing: 15px;
margin: 0;
padding: 0;
text-transform: uppercase;
color: black;
-webkit-transition: 0.5s;
-o-transition: 0.5s;
transition: 0.5s;
 span {
  font-family: 'Kristi', cursive;
  font-style: italic;
  text-transform: none !important;
}
  @media screen and (max-width: 900px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 3rem;
  }
`;

const Text = styled.p`
    font-family: 'Kristi', cursive;
    font-weight: 400;
    font-size: 30px;
    line-height: 34px;
    font-style: italic;
    letter-spacing: .09em;
    margin: 0;
    padding: 0;
  @media screen and (max-width: 600px) {
    font-weight: 400;
      font-size: 18px;
      line-height: 30px;
  }
`;
const ImageLeft = styled.div`
  width: 150px;
  height: 150px;
  transform: rotate(-90deg);
  position: absolute;
  top: 5rem;
  left:0;
`;
const ImageRight = styled.div`
  width: 150px;
  height: 150px;
  transform: rotate(90deg);
  position: absolute;
  right: 0px;
  bottom:0;
  
`;
const HeaderDiv = styled.div`
  height: 400px;
  width: 100%;
  position: relative;
  content: 'viewport-units-buggyfill; height:100vh; width: 100vw';
  display: table;
`;
const TextWrap = styled.div`
  height: 70vh;
  width: 100vw;
  content: 'viewport-units-buggyfill; height:100vh; width: 100vw';
  display: table-cell;
  vertical-align: middle;
`;

const Header = ({ show }) => {

  return (
    <HeaderTag show={show}>

<Navbar collapseOnSelect expand="lg" id="header" className="navbar" fixed="top" >
          <div id="header-container" className="container navbar-container justify-content-center">
         
          <Navbar.Brand className="navbar-brand" href="#" >
             <img className="logoResponsive" src="/img/logomm.png" width="50" height="50" top="2" alt=""/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to={'/about'} className="navbarLink">About</Link>
              <Link to={'/portfolio'} className="navbarLink">Portfolio</Link>
              <Nav.Link target="_blank" href="MorganeMeganckCV.pdf" className="navbarLink">Curriculum Vitae</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          </div>
      </Navbar>
   

      <HeaderDiv className="container">
      <ImageLeft  style={{ backgroundImage: "url(/img/prout2.svg)" }}></ImageLeft>
      <TextWrap>
        <Intro className="intro" >
          <Heading id="more">
            Hello, I'm Morgane Meganck <span>from</span> Brussels
          </Heading>
          <Text>
            Junior UX/UI designer & Front-end developer
          </Text>
        </Intro>
      </TextWrap>
      <ImageRight  style={{ backgroundImage: "url(/img/prout2.svg)" }}></ImageRight>
      {/* <Link to="/more" className="arrowContainer">
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>
      </Link> */}
      </HeaderDiv>
      
      
      
     
    </HeaderTag>
  );
};

export default Header;