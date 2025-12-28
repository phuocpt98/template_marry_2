
import React from 'react';
import { motion } from 'framer-motion';
import { LOVE_STORY } from '../constants';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-[#faf7f2]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-amber-600 font-handwriting text-3xl mb-2"
          >
            Hành Trình Tình Yêu
          </motion.p>
          <h2 className="text-4xl font-serif-title text-gray-800">Câu Chuyện Của Chúng Mình</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-amber-200 hidden md:block"></div>

          <div className="space-y-12">
            {LOVE_STORY.map((event, idx) => (
              <motion.div 
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white font-serif-title text-xl">{event.year}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-10 h-10 rounded-full bg-white border-4 border-amber-300 z-10 hidden md:flex items-center justify-center shrink-0 shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                </div>

                <div className="flex-1 w-full text-center md:text-left space-y-4">
                  <span className="text-amber-600 font-bold text-sm tracking-widest uppercase block md:hidden">{event.year}</span>
                  <h3 className="text-2xl font-serif-title text-gray-800">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
