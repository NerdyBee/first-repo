import React from 'react';
import Divider from '../components/Divider';
import History from '../components/History';
import PageHero from '../components/PageHero';
import About from '../components/About';

const Abouts = () => {
  return (
    <>
      <PageHero />
      <Divider />
      <About />
      <History />
    </>
  );
};

export default Abouts;
