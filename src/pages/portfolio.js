import React from "react";
import IndexPage from "../pages/index";
import Head from "../components/head";
import Footer from "../components/footer";
import Collection from "../components/collection";
import NavbarComp from "../components/navbarcomp";
import { projects } from "../data/index.json";

const PortfolioPage = () => {
  //TODO Sort Projects by date
  return (
    <>
      <Head />
      <NavbarComp />
      <Collection projects={projects} />
      <Footer />
    </>
  );
};

export default PortfolioPage;
