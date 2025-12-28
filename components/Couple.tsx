
import React from 'react';
import { motion } from 'framer-motion';
import { BRIDE_NAME, GROOM_NAME } from '../constants';

const Couple: React.FC = () => {
  return (
    <section id="couple" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-amber-600 font-handwriting text-3xl mb-2"
          >
            Cô Dâu & Chú Rể
          </motion.p>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-5xl font-serif-title text-gray-800"
          >
            Gương mặt chủ nhân bữa tiệc
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Groom */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-end text-center md:text-right"
          >
            <div className="relative mb-6">
              <div className="w-64 h-80 overflow-hidden rounded-t-[120px] rounded-b-2xl shadow-xl">
                <img src="https://picsum.photos/seed/groom/600/800" alt={GROOM_NAME} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg">
                <span className="font-serif-title text-xl">M</span>
              </div>
            </div>
            <h3 className="text-2xl font-serif-title mb-2">{GROOM_NAME}</h3>
            <p className="text-gray-600 leading-relaxed italic max-w-sm">
              "Là một người yêu sự tự do nhưng từ khi gặp Lan, tôi chỉ muốn được 'tự do' bên cạnh cô ấy mãi mãi. Với tôi, Lan là cả thế giới."
            </p>
          </motion.div>

          {/* Bride */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="relative mb-6">
              <div className="w-64 h-80 overflow-hidden rounded-t-[120px] rounded-b-2xl shadow-xl">
                <img src="https://picsum.photos/seed/bride/600/800" alt={BRIDE_NAME} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white shadow-lg">
                <span className="font-serif-title text-xl">L</span>
              </div>
            </div>
            <h3 className="text-2xl font-serif-title mb-2">{BRIDE_NAME}</h3>
            <p className="text-gray-600 leading-relaxed italic max-w-sm">
              "Minh không chỉ là chồng, mà còn là người bạn thân nhất của tôi. Cảm ơn anh đã luôn kiên nhẫn và bao dung cho sự bướng bỉnh của em."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
