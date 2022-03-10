

import React from "react";
import styled from 'styled-components';
import imgBottom from '../images/prout.svg';
import imgContact from '../images/prout5.svg';
import GithubIcon from "../components/icons/github";
import LinkedInIcon from "../components/icons/linkedin";
import { Link } from 'gatsby'

{/* <div className="section contact" id="section-contact" data-aos="fade-down"> */}
const Section = styled.section`  
  position: relative;
  width: 100%;
  border: 2px solid #333;
  border-top: none;
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

const Heading = styled.h4`
position: relative;
margin-top: -14px;
display: inline-block;
letter-spacing: 4px;
font-size: 3rem;
font-family: 'Kristi', cursive;
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
  line-height: 30px;
  padding: 20px;
  height: 100%;
  font-family: 'Julius Sans One', sans-serif;
  font-size: 17px;
  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
    line-height: 1.7;
  }
`;
const TopBorderleft = styled.div`
position: absolute;
height: 2px;
left: 0;
width: 30%;
background-color: #333;
`;
const TopBorderright = styled.div`
position: absolute;
right: 0;
height: 2px;
width: 30%;
background-color: #333;
`;
// if you can read this then you're pretty
const BottomImgLeft= styled.div`
  background-image: url(${imgBottom});
  width: 150px;
  height: 200px;
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
  position: absolute;
  left: -60px;
  top: 0;
  background-repeat: no-repeat;
  background-position: left;
`;
const BottomImgRight = styled.div`
  background-image: url(${imgBottom});
  width: 150px;
  height: 200px;
  position: absolute;
  right: 5px;
  top: 0;
  background-repeat: no-repeat;
  background-position: right;
  
`;
const ImageContact = styled.div`
  background-image: url(${imgContact});
  background-size: contain;
  width: 50px;
  height: 50px;
  position: absolute;
  top: -35px;
  left: 47%;
  background-repeat: no-repeat;
  
`;
const List = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 10rem;
  @media screen and (max-width: 600px) {
    width: 5rem;
  }
`;

const SocialLink = styled.a`
  display: inline-block;
  & > svg {
    width: 30px;
    transition: all 250ms ease-out;
  }
  &:hover > svg {
    opacity: 0.8;
  }
`;

const Contact = () => {
  return (
    <Section id="contact" data-aos="fade-down" data-aos-easing="linear"
    data-aos-duration="1500">
        <ImageContact></ImageContact>
        <TopBorderleft></TopBorderleft>
        <TopBorderright></TopBorderright>
        <Heading data-aos="fade-up" data-aos-duration="350" data-aos-delay="250">
            CONTACT ME
        </Heading>
        <List>
          <li>
            <SocialLink
              href="https://www.linkedin.com/in/morganemeganck/"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon width="64" />
            </SocialLink>
          </li>
          <li>
            <SocialLink
              href="https://github.com/morganemeganck"
              aria-label="GitHub Profile"
            >
              <GithubIcon width="64" />
            </SocialLink>
          </li>
        </List>
        <Text >
            Brussels morgane.meganck@gmail.com
        </Text>
        <BottomImgLeft></BottomImgLeft>
        <BottomImgRight></BottomImgRight>
    </Section>
  );
};

export default Contact;