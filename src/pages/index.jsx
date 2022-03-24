import React from "react";
import Layout from "../layout";
import styled from "styled-components";
import classNames from "classnames";
import Theme from "../styles/theme";
import PropTypes from "prop-types";
import About from "../containers/about";
import Collection from "../components/collection";
import Contact from "../containers/contact";
import { projects } from "../data/index.json";
const { fonts, colors, flexCenter, initialAnimationDuration, delay } = Theme;
const Section = styled.section``;
const Title = styled.h2`
  font-family: ${fonts.secondary};
  font-size: 3rem;
  letter-spacing: 0.8rem;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  align-items: center;
  height: 500px;
  > * {
    &:first-child {
      align-self: flex-end;
    }
    &:last-child {
      align-self: flex-start;
    }
  }
  @media screen and (max-width: 900px) {
    height: auto;
  }
`;
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
        <Title className="container">Latest Projects</Title>
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
