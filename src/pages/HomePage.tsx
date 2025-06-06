import React from 'react';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import Testimonials from '../components/Testimonials';
import StatsSection from '../components/StatsSection';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProperties />
      <StatsSection />
      <Testimonials />
    </div>
  );
};

export default HomePage;