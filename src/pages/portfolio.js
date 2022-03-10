

import React from "react";
import Layout from '../layout'
import IndexPage from '../pages/index'
import Collection from "../components/collection";
import Contact from "../containers/contact";

const PortfolioPage = () => {
  return (
    <>
      <IndexPage>
        <Collection />
      </IndexPage>
    </>
  );
};

export default PortfolioPage;