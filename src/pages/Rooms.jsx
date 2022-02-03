import React from 'react';
import Hero from "../components/Hero";
import { SliderData } from "../data/SliderData";

const Rooms = () => {
  return (
    <>
      <Hero slides={SliderData} />
    </>
  );
};

export default Rooms;
