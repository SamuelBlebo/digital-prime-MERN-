import React from "react";
import { Hero } from "../components/Hero";
import { GetInTouch } from "../components/GetInTouch";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="container">
        <Hero />
        <GetInTouch />
      </div>
    </>
  );
};

export default Contact;
