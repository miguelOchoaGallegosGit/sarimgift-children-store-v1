import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WaveDivider from './components/WaveDivider/WaveDivider';
import ProductGrid from './components/ProductGrid/ProductGrid';
import GiftCTA from './components/GiftCTA/GiftCTA';
import Footer from './components/Footer/Footer';
import BottomNav from './components/BottomNav/BottomNav';
import './styles/globals.css';

function App() {
  return (
    <div className="app-wrapper">
      {/* Sticky header */}
      <Header cartCount={0} />

      {/* Main content */}
      <main>
        {/* 1. Hero – colección mágica */}
        <Hero />

        {/* 2. Wave divider */}
        <WaveDivider />

        {/* 3. Product grid – favoritos del momento */}
        <ProductGrid />

        {/* 4. Gift CTA – WhatsApp */}
        <GiftCTA />

        {/* 5. Footer */}
        <Footer />
      </main>

      {/* Fixed bottom navigation (mobile only) */}
      <BottomNav />
    </div>
  );
}

export default App;
