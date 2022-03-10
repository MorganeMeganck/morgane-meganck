import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ReactDOM from "react-dom";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import Head from "./components/head";
import Footer from "./components/footer";
import Header from "./containers/header";
import useScrollDirection from "./hooks/useScrollDirection";


const Main = styled.main`
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { show } = useScrollDirection();

  let AOS;

  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <React.Fragment>
      <div className="container">
      <Head />
      <Header show={show} />
      <Main>{children}</Main>
      <Footer />
      </div>
      
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;


