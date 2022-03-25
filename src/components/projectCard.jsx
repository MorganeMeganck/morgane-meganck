import React from "react";
import styled from "styled-components";
import Theme from "../styles/theme";
const { fonts, colors, flexCenter, initialAnimationDuration, delay } = Theme;
const ImgWrap = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  width: 350px;
  height: 250px;
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

const Img = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(100%);
  transition: all 300ms ease-in-out;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  &:hover,
  &:focus {
    filter: grayscale(0%);
    transform: scale(1.1);
  }
`;
const Description = styled.div`
  border-bottom: 1px solid black;
`;
const Title = styled.h3`
  font-family: ${fonts.primary};
  font-size: 2rem;
  letter-spacing: 0.8rem;
`;
const ProjectCard = (props) => {
  return (
    <ProjectCol>
      <Description>
        <Title>{props.project.name}</Title>
        <p>{props.project.technos}</p>
      </Description>
      <ImgWrap>
        <Img
          style={{ backgroundImage: `url(${props.project.cover_image})` }}
        ></Img>
      </ImgWrap>
    </ProjectCol>
  );
};

export default ProjectCard;

// https://dribbble.com/shots/17035515/attachments/12119517?mode=media

// TODO see if possible to add h2 title on top of first card
