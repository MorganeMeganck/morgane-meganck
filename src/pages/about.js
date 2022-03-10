

import React from "react";
import Layout from '../layout'
import IndexPage from '../pages/index'
import About from "../containers/about";
import Contact from "../containers/contact";

const AboutPage = () => {
  return (
    <>
      <IndexPage>
        <About />
      </IndexPage>
    </>
  );
};

export default AboutPage;