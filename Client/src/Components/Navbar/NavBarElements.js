import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = styled.nav.attrs({
  className: "nav",
})`
  background: ${({scrollNav}) => (scrollNav ? 'var(--black)':'transparent')};
  height: 100px;
  margin-top: -4rem;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  font-size: 0.8rem;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div.attrs({
  className: "navbarContainer",
})`
  display: flex;
  justify-content: space-between;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding: 0 80px;
  max-width: 1400px;
`;

export const NavLogo = styled(LinkRouter).attrs({
  className: "navLogo",
})`
  color: var(--white);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: -20px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    transform: translate(100%, 60%);
    font-size: 1.1rem;
    padding: .5% 0;
  }
`;

export const ImgLogo = styled.img`
  min-width: 2%;
  max-height: 45%;
  margin-left: 1px;
  /* margin: 26.7px -229px 0 30px; */
  /* padding-right: 0; */

  @media screen and (max-width: 1400px) and  (min-width: 767px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    min-width: 30px;
    max-height: 60px;
    transform: translate(90%, 16%);
    padding: -1% 10%;
  }

  /* @media screen and (max-width: 800px) {
    min-width: 5%;
    max-height: 40%;
    transform: translate(60%, -10%);
  } */
`;

export const NavLink = styled(LinkScroll).attrs({
  className: "navLink",
})`
  color: var(--white);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid var(--green);
  }
`;
export const MobileIcon = styled.div.attrs({
  className: "mobileIcon",
})`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.2rem;
    cursor: pointer;
    color: var(--white);
  }
`;

export const NavMenu = styled.ul.attrs({
  className: "navMenu",
})`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavItem = styled.li.attrs({
  className: "navItem",
})`
  height: 80px;
`;

export const NavBtn = styled.nav.attrs({
  className: "navBtn",
})`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter).attrs({
  className: "navBtnLink",
})`
  border-radius: 50px;
  background: var(--green);
  white-space: nowrap;
  padding: 10px 22px;
  color: var(--black);
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &.hover {
    transition: all 0.2s ease-in-out;
    background: var(--white);
    color: var(--black);
  }
`;
