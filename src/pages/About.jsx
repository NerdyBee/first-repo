import React from 'react';
import Hero from "../components/Hero";
import { SliderData } from "../data/SliderData";

const About = () => {
  return (
    <>
      <Hero slides={SliderData} />
    </>
  );
};

export default About;
