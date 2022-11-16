import React from "react";
import { Hero } from "../components/Hero";
import { GetInTouch } from "../components/GetInTouch";
import { ContactBoxes } from "../components/ContactBoxes";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <Hero />
        <ContactBoxes />

        <GetInTouch />
      </div>
    </div>
  );
};

export default Contact;
