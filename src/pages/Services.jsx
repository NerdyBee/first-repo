import React from 'react';
import Hero from "../components/Hero";
import { SliderData } from "../data/SliderData";

const Services = () => {
  return (
    <>
      <Hero slides={SliderData} />
    </>
  );
};

export default Services;
