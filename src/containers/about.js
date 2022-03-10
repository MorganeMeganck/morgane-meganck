

import React from "react";
import styled from 'styled-components';
import Theme from "../styles/theme";
import { Link } from 'gatsby'

const { fonts, colors, flexCenter, initialAnimationDuration, delay } = Theme;

{/* <div className="text aboutcontainer" id="section-contact" data-aos="fade-down"> */}
const Section = styled.section` 
  margin-top: 5rem;
  margin-bottom: 10rem;
  margin-left: 180px;
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

const Heading = styled.h2`
  font-family: ${fonts.secondary};
  font-size: 3rem;
  letter-spacing: 0.8rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 900px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  width: 75vw;
  font-size: 1rem;
  line-height: 3rem;
  padding-left: 0;
  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
    line-height: 1.7;
  }
`;
const Timeline = styled.div`
    margin: 4em auto;
    position: relative;
    max-width: 46em;
    margin-top: 50px;
    list-style: none;

    &:before {
    background-color: ${colors.black};
    content: '';
    margin-left: -1px;
    position: absolute;
    top: -1em;
    left: 1em;
    width: 2px;
    height: 110%;
    }
`;
const TimeList = styled.ul`
&:before {
  background-color: ${colors.black};
  content: '';
  margin-left: -1px;
  position: absolute;
  top: 0;
  left: 2em;
  width: 2px;
  height: 100%;
  }
`;
const TimeEvent = styled.li`
    position: relative;
    list-style-type: none;
    &:hover {
        label{
            transform: rotate(-45deg);
            background-color: ${colors.white};
            border: 1px solid ${colors.black};
        }
        h5{
            box-shadow: inset 40em 0 0 0 ${colors.black};
            border: 1px solid ${colors.black};
            color: ${colors.white};
        }
    }

`;
const TimeEventIcon = styled.label`
    -webkit-transition: -webkit-transform .8s ease-in-out;
    -ms-transition: -ms-transform .8s ease-in-out;
    transition: transform .8s ease-in-out;  
    transform: rotate (45deg);
    background-color: ${colors.white};
    outline: 1px solid ${colors.black};
    display: block;
    margin: 0.5em 0.5em 0.5em -0.5em;
    position: absolute;
    top: 0;
    left: 2em;
    width: 1em;
    height: 1em;
`;
const TimeEventCopy = styled.div`
    padding: 2em;
    position: relative;
    top: -1.875em;
    left: 4em;
    width: 80%;
`;
const TimeEventThumbnail = styled.h5`
    text-transform: uppercase;
    border: 1px solid ${colors.black};
    box-shadow: 0 0 0 #000;
    transition: 0.5s ease-in 0.1s;
    color: ${colors.black};
    font-size: 0.75em;
    background-color: ${colors.white};
    box-shadow: inset 0 0 0 ${colors.white};
    display: inline-block;
    margin-bottom: 1.2em;
    padding: 0.25em 1em 0.2em 1em;
`;
const TimeTitle = styled.h2`
    font-family: ${fonts.secondary};
`;
const TimeTitles = styled.h3`
    font-family: ${fonts.secondary};
`;
const Description = styled.p`
  
`;

const About = () => {
  return (
    <Section id="about" data-aos="fade-down" data-aos-easing="linear"
    data-aos-duration="2000">
        <Heading id="more" >
            Who I am & What I do
        </Heading>
        <Text>
            Junior web developper belge de 28 ans.
            blablabla
            Passionnée de code, café, voyage, littérature et un tas d'autres petites choses.
        </Text>
        <Timeline>
            <TimeList>
                <TimeEvent>
                    <TimeEventIcon></TimeEventIcon>
                    <TimeEventCopy>
                        <TimeEventThumbnail>Novembre 2018 - Février 2021 </TimeEventThumbnail>
                        <TimeTitle>Kalio Tech</TimeTitle>
                        <TimeTitles>UX/UI designer & Front-end developer</TimeTitles>
                        <Description>
                          <strong>Frontend</strong><br></br> HTML5, Bootstrap, CSS/SCSS, JS/jQuery, VueJS, Drupal, Wordpress
                          <br></br><strong>UX/UI</strong><br></br> Adobe XD, Figma, Invision, Illustrator, Photoshop, Approfondissement UX
                          <br></br><strong>Backend</strong><br></br> Laravel
                          <br></br><strong>Divers</strong><br></br> Git, Jira, Agile, ...
                        </Description>
                    </TimeEventCopy>
                </TimeEvent>
                <TimeEvent>
                    <TimeEventIcon></TimeEventIcon>
                    <TimeEventCopy>
                        <TimeEventThumbnail>Mai 2018 - Novembre 2018</TimeEventThumbnail>
                        <TimeTitle>Becode</TimeTitle>
                        <TimeTitles>Formation professionnelle</TimeTitles>
                        <Description>
                          <strong>Frontend</strong><br></br>Apprentissage appronfondi sur projets réels. Sitewebs responsives avec HTML5, CSS/SCSS, Frameworks tels que Bootstrap et Materialize, JS/jQuery, React, Wordpress...
                          <br></br><strong>Backend</strong><br></br> Bases en PHP et SQL
                          <br></br><strong>Divers</strong><br></br>Git/github, lighthouse, figma ...
                        </Description>
                    </TimeEventCopy>
                </TimeEvent>
            </TimeList>
        </Timeline>
  
    </Section>
  );
};

export default About;