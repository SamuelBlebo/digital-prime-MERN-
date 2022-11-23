import React from "react";
import { AboutHero } from "../components/about/AboutHero";
import { InfoBoxes } from "../components/about/InfoBoxes";
import { Process } from "../components/about/Process";
const About = () => {
  return (
    <>
      <div>
        <AboutHero />
        <InfoBoxes />
        <Process />
      </div>
    </>
  );
};

export default About;
