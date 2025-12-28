
import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Couple from './components/Couple';
import Story from './components/Story';
import Gallery from './components/Gallery';
import EventLocation from './components/EventLocation';
import AIGreeting from './components/AIGreeting';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-[#faf7f2]">
      {/* Floating Navigation (Optional) */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto bg-white/30 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 shadow-sm hidden md:flex gap-8 text-sm uppercase tracking-widest font-bold text-gray-800">
          <a href="#couple" className="hover:text-amber-600 transition-colors">Cặp đôi</a>
          <a href="#story" className="hover:text-amber-600 transition-colors">Câu chuyện</a>
          <a href="#gallery" className="hover:text-amber-600 transition-colors">Album</a>
          <a href="#location" className="hover:text-amber-600 transition-colors">Địa điểm</a>
        </div>
      </nav>

      <Hero />
      <Countdown />
      <Couple />
      <Story />
      <Gallery />
      <EventLocation />
      <AIGreeting />
      <Footer />
    </main>
  );
};

export default App;
