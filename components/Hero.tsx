
import React from 'react';
import { motion } from 'framer-motion';
import { BRIDE_NAME, GROOM_NAME } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
        style={{ backgroundImage: `url('https://picsum.photos/seed/wedding-hero/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-4"
      >
        <p className="text-lg md:text-2xl uppercase tracking-[0.3em] mb-4 font-light">Lễ Thành Hôn</p>
        <h1 className="text-5xl md:text-8xl font-serif-title mb-6 leading-tight">
          {GROOM_NAME.split(' ').pop()} <span className="font-handwriting text-6xl md:text-9xl text-amber-200">&</span> {BRIDE_NAME.split(' ').pop()}
        </h1>
        <p className="text-xl md:text-3xl font-handwriting mb-8 italic">Mãi mãi một tình yêu</p>
        <div className="w-24 h-px bg-white/50 mx-auto mb-8"></div>
        <p className="text-lg md:text-xl tracking-widest font-medium uppercase">25 . 12 . 2025</p>
      </motion.div>

      {/* Decorative Scroll Down */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest mb-2 opacity-70">Cuộn xuống</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
