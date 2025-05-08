import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProcessSteps from './components/ProcessSteps';
import Testimonials from './components/Testimonials';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'ShineSync - Your Vehicle\'s Shine on Demand';

    // Add animation delay class for staggered animations
    document.documentElement.style.setProperty('--animation-delay-2000', '2s');
    document.documentElement.style.setProperty('--animation-delay-4000', '4s');
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProcessSteps />
        <Testimonials />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;