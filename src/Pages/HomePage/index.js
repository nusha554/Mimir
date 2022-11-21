import { React, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import HomeSection from "../../Components/HomeSection"
import InfoSection from "../../Components/InfoSection";
import Services from "../../Components/Services";
import Footer from "../../Components/Footer"
import { aboutSection, discoverSection, signupSection } from "../../Components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <HomeSection />
      <InfoSection {...aboutSection} />
      <InfoSection {...discoverSection} />
      <Services />
      <InfoSection {...signupSection} />
      <Footer/> 
    </>
  );
};

export default Home;
