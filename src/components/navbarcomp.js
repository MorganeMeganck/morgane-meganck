import React from "react";
import styled from 'styled-components';
import logo from '../images/logomm.png';
import { Link } from 'gatsby';
import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import PortfolioPage from '../pages/portfolio'
import AboutPage from '../pages/about'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from "./logo/logo";
import Hamburger from "./hamburger/hamburger";

const NavbarComp = () => {
  return (
  <Navbar id="header" className="navbar">
    <div id="header-container" className="container navbar-container">
        <div className="navbar-header">
            <Navbar.Brand className="navbar-brand" href="#">
                <img className="logoResponsive" src={logo} width="50" height="50" top="2" alt=""/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to={'/about'} className="navbarLink">About</Link>
            <Link to={'/portfolio'} className="navbarLink">Portfolio</Link>
          </Nav>
        </Navbar.Collapse>
    </div>
  </Navbar>
  );
};
export default NavbarComp;