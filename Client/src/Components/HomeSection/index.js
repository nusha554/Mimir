import React, { useState } from "react";
import {
  HomeContainer,
  VideoBackground,
  Video,
  TextContant,
  HomeHeader,
  HomeParagraph,
  HomeBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./VideoElement";
import { Button } from "../ButtonElement";
import codingVideo from "../../assets/videos/VideoBackground.mp4";

const HomeSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HomeContainer>
      <VideoBackground>
        <Video src={codingVideo} autoPlay loop muted type="video/mp4" />
      </VideoBackground>
      <TextContant>
        <HomeHeader>Knowledge is of no value, unless you share it. </HomeHeader>
        <HomeParagraph>
          hdeskjfs sdfbgwsjdf adsbjkadb dgjasgdb hdeskjfs sdfbgwsjdf adsbjkadb
          dgjasgdb hdeskjfs sdfbgwsjdf adsbjkadb dgjasgdb
        </HomeParagraph>
        <HomeBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="false"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HomeBtnWrapper>
      </TextContant>
    </HomeContainer>
  );
};

export default HomeSection;
