import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HomeContainer = styled.div`
  background: var(--black);
  display: flex;
  justify-content: center;
  justify-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: var(--white);
  filter: blur(4.5px);
`;

export const TextContant = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeHeader = styled.h1`
  text-align: center;
  color: var(--white);
  font-size: 48px;
  margin-top: 250px;

  @media screen and (max-width: 768px) {
    margin-top: 31%;
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HomeParagraph = styled.p`
  margin-top: 70px;
  color: var(--white);
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  line-height: 40px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HomeBtnWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  margin-top: 1.5px;
  font-size: 25px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  margin-top: 1.5px;
  font-size: 25px;
`;
