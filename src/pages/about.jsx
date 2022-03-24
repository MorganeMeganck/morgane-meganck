import React from "react";
import Layout from "../layout";
import IndexPage from "./index";
import About from "../containers/about";
import Head from "../components/head";
import Footer from "../components/footer";
import Contact from "../containers/contact";
import NavbarComp from "../components/navbarcomp";

const AboutPage = () => {
  return (
    <IndexPage>
      <Head />
      <About />
    </IndexPage>
  );
};

export default AboutPage;
