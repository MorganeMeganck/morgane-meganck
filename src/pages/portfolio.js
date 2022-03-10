

import React from "react";
import IndexPage from '../pages/index';
import Head from "../components/head";
import Footer from "../components/footer";
import Collection from "../components/collection";
import NavbarComp from "../components/navbarcomp";

const PortfolioPage = () => {
  return (
  
    <>
      <Head />
      <NavbarComp/>
      <Collection />
      <Footer />
    </>

  );
};

export default PortfolioPage;