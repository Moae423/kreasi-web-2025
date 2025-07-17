import AboutUsAction from "@/components/section/about-us/AboutUsAction";
import Company from "@/components/section/about-us/Company";
import Greeting from "@/components/section/about-us/Greeting";
import Visi from "@/components/section/about-us/Visi";
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
      <section id="visi-misi">
        <Visi />
      </section>
      <section id="visi-misi">
        <AboutUsAction />
      </section>
    </>
  );
};

export default AboutUs;
