import Company from "@/components/section/about-us/Company";
import Greeting from "@/components/section/about-us/Greeting";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <section id="greeting">
        <Greeting />
      </section>
      <section id="company">
        <Company />
      </section>
    </>
  );
};

export default AboutUs;
