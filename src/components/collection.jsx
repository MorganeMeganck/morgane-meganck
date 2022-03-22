import React, { useState } from "react";
import Layout from "../layout";
import styled from "styled-components";
import IndexPage from "../pages/index";
import Portfolio from "../pages/portfolio";
import img from "../images/prout.svg";
import classNames from "classnames";
import ProjectCard from "./projectCard";

const Collection = (props) => {
  return (
    <div>
      {props.projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default Collection;
