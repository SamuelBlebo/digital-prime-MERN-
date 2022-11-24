import React from "react";
import { AboutHero } from "../components/about/AboutHero";
import { InfoBoxes } from "../components/about/InfoBoxes";
import { Process } from "../components/about/Process";
import { Toggle } from "../components/about/Toggle";
import { GetAQuote } from "../components/about/GetAQuote";
const About = () => {
  return (
    <>
      <div>
        <AboutHero />
        <InfoBoxes />
        <Process />
        <Toggle />
        <GetAQuote />
      </div>
    </>
  );
};

export default About;
