import React from "react";

import Icon1 from "../../images/SVG/building.svg";
import Icon2 from "../../images/SVG/circles.svg";
import Icon3 from "../../images/SVG/design.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>CDP Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} alt="Icon1" />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            {" "}
            We help reduce your fees and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} alt="Icon2" />
          <ServicesH2>Virtual Canvas</ServicesH2>
          <ServicesP>
            {" "}
            You can access our platform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} alt="Icon3" />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            {" "}
            Unlock our special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
