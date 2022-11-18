import React from "react";
import { ContactHero } from "../components/contact/ContactHero";
import { GetInTouch } from "../components/contact/GetInTouch";
import { ContactBoxes } from "../components/contact/ContactBoxes";

const Contact = () => {
  return (
    <>
      <div>
        <ContactHero />
        <ContactBoxes />

        <GetInTouch />
      </div>
    </>
  );
};

export default Contact;
