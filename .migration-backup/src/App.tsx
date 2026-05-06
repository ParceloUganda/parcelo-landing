import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import VSL from './components/VSL';
import Marquee from './components/Marquee';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Brands from './components/Brands';
import FAQ from './components/FAQ';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import './parcelo.css';

function App() {
  useEffect(() => {
    // IntersectionObserver for .fade-up
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <VSL />
      <Marquee />
      <Problem />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Brands />
      <FAQ />
      <BottomCTA />
      <Footer />
    </>
  );
}

export default App;
