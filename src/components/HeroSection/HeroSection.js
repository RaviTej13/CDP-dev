import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  Content,
  ContentH1,
  ContentP,
  ContentBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import video from "../../videos/plan4.mp4";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
      <VideoBg  src={video} autoPlay loop muted  type="video/mp4" />
      </HeroBg>
      <Content>
        <ContentH1>CUSTOMIZABLE DIGITAL PLANNING </ContentH1>
        <ContentP>
          Draw and Plan your house with ease and accurate.
        </ContentP>
        <ContentBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
            offset={-80}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </ContentBtnWrapper>
      </Content>
    </HeroContainer>
  );
};

export default HeroSection;
