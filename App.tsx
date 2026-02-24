
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Showcase from './components/Showcase';
import AdSamples from './components/AdSamples';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SolutionsPage from './components/CampaignsPage';
import ResultsPage from './components/ResultsPage';

/**
 * Main Application Component
 * Structured as a focused, single-page landing page with multi-view support.
 */
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'campaigns' | 'results'>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'campaigns':
        return <SolutionsPage />;
      case 'results':
        return <ResultsPage />;
      default:
        return (
          <>
            <Hero />
            <Services />
            <Showcase />
            <AdSamples />
            <Stats />
            <Portfolio />
            <Testimonials />
            <Contact onNavigate={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <div className="relative overflow-x-hidden bg-slate-50 min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
