import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../styles/theme";
import img from "../images/prout.svg";
import classNames from "classnames";
import ProjectCard from "./projectCard";
const { fonts, colors, flexCenter, initialAnimationDuration, delay } = Theme;
const Section = styled.section`
  position: relative;
  margin: 60px auto;
  @media screen and (max-width: 900px) {
    padding: 0 4rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0 2.5rem;
  }
  @media screen and (max-width: 400px) {
    padding: 0 1rem;
  }
`;
const ProjectCol = styled.div`
  flex-basis: 30%;
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

const Collection = (props) => {
  return (
    <Section
      className="container mt-0"
      id="projects"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="2000"
    >
      <Wrap>
        {props.projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </Wrap>
    </Section>
  );
};

export default Collection;
