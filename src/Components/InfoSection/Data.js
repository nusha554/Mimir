import iconTeam from '../../assets/img/teams.svg';
import iconPair from '../../assets/img/pair_programming.svg';
import iconProgramming from '../../assets/img/programming.svg';

export const aboutSection = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: "About",
  headLine: "headLine headLine headLine headLine",
  description:
    "description description description description description description description",
  buttonLabel: "Let's Go",
  imgStart: false,
  img: iconPair,
  alt: 'pair',
  dark: false,
  primary: true,
  darkText: false,
};

export const discoverSection = {
    id: "discover",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Discover",
    headLine: "headLine headLine headLine headLine",
    description:
      "description description description description description description description",
    buttonLabel: "Learn more",
    imgStart: true,
    img: iconTeam,
    alt: 'teams',
    dark: true,
    primary: true,
    darkText: true,
  };

  export const signupSection = {
    id: "signup",
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: "Sign Up",
    headLine: "headLine headLine headLine headLine",
    description:
      "description description description description description description description",
    buttonLabel: "Start Now",
    imgStart: true,
    img: iconProgramming,
    alt: 'programming',
    dark: true,
    primary: true,
    darkText: true,
  };