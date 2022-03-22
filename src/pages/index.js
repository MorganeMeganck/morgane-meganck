import React from "react";
import Layout from "../layout";
import styled from "styled-components";
import PropTypes from "prop-types";
import About from "../containers/about";
import Collection from "../components/collection";
import Contact from "../containers/contact";
import { projects } from "./../data/index.json";
const Section = styled.section``;

const IndexPage = ({ children }) => {
  const copyProject = projects.map((project) => project);

  copyProject.sort(function (a, b) {
    return b.created_at - a.created_at;
  });

  return (
    <>
      <Layout>
        <Section>{children}</Section>
        <About />
        <Collection projects={copyProject.slice(0, 3)} />
        <Contact />
      </Layout>
    </>
  );
};

IndexPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexPage;
