
import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-amber-600 font-handwriting text-3xl mb-2"
          >
            Album Ảnh
          </motion.p>
          <h2 className="text-4xl font-serif-title text-gray-800">Khoảnh Khắc Hạnh Phúc</h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-handwriting text-3xl">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
