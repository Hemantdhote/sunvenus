import { useState } from 'react';
import useLenis from '@/hooks/useLenis';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CarShowcase from '@/components/CarShowcase';
import Brands from '@/components/Brands';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

import MouseFollower from '@/components/MouseFollower';
import LuxuryStepsSection from '@/components/LuxuryStepsSection';
import FixedLuxuryScroll from '@/components/FixedLuxuryScroll';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  useLenis();

  return (
    <>
      <MouseFollower />
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Navbar />
        <Hero />
        <About />
        <CarShowcase />
        <Brands />
        <LuxuryStepsSection />
        <Testimonials />
         <FixedLuxuryScroll
          backgroundImage="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2400"
        >
          <LuxuryStepsSection />
        </FixedLuxuryScroll>
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Index;
