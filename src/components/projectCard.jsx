import React from "react";
import styled from "styled-components";
const Card = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  width: 300px;
  height: 300px;
  border: 2px solid #333;
  border-radius: 10px;
  text-align: center;
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
const ProjectCard = (props) => {
  return (
    <ProjectCol>
      <Card>{props.project.name}</Card>
    </ProjectCol>
  );
};

export default ProjectCard;

// https://dribbble.com/shots/17035515/attachments/12119517?mode=media

// TODO see if possible to add h2 title on top of first card
