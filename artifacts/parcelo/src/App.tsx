import React, { useEffect } from 'react';
import { Switch, Route, Router as WouterRouter } from 'wouter';
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
import ForBusiness from './pages/ForBusiness';
import Login from './pages/Login';
import './parcelo.css';

function LandingPage() {
  useEffect(() => {
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

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Switch>
        <Route path="/for-business" component={ForBusiness} />
        <Route path="/login" component={Login} />
        <Route component={LandingPage} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
