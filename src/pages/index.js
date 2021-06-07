

import React from "react";
import Layout from '../layout'
import About from "../containers/about";
import Contact from "../containers/contact";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <About />
        <Contact />
      </Layout>
    </>
  );
};

export default IndexPage;
