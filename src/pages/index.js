

import React from "react";
import Layout from '../layout'
import styled from 'styled-components';
import PropTypes from "prop-types";
import About from "../containers/about";
import Collection from "../components/collection";
import Contact from "../containers/contact";
const Section = styled.section`  

`;

const IndexPage = ({ children }) => {
  return (
    <>
      <Layout>
        <Section>{children}</Section>
        <Contact />
      </Layout>
    </>
  );
};

IndexPage.propTypes = {
  children: PropTypes.node.isRequired,
};


export default IndexPage;
