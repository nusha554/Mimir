import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesParag,
  ServicesIcon
} from "./ServicesElement";
import IconServices1 from '../../assets/img/icons/IconServices1.png'
import IconServices2 from '../../assets/img/icons/IconServices2.png'
import IconServices3 from '../../assets/img/icons/IconServices3.png'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1> Our Services </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={IconServices1} />
          <ServicesH2> Keep data organized all in one place. </ServicesH2>
          <ServicesParag>Services1 Services1 Services1 Services1</ServicesParag>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={IconServices2} />
          <ServicesH2> Share your knowledge with your colleges. </ServicesH2>
          <ServicesParag>Services2 Services2 Services2 Services2</ServicesParag>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={IconServices3} />
          <ServicesH2>  Code editor to run your code snippets </ServicesH2>
          <ServicesParag>Services3 Services3 Services3 Services3</ServicesParag>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
