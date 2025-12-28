
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Info } from 'lucide-react';

const EventLocation: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-amber-600 font-handwriting text-3xl mb-2"
          >
            Thông Tin Tiệc Cưới
          </motion.p>
          <h2 className="text-4xl font-serif-title text-gray-800">Thời Gian & Địa Điểm</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Ceremony Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-amber-400 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-serif-title mb-4">Lễ Thành Hôn</h3>
            <p className="text-lg font-bold text-amber-700 mb-2">18:00 - 25.12.2025</p>
            <p className="text-gray-500 max-w-xs mb-6">
              Vui lòng có mặt đúng giờ để chứng kiến giây phút thiêng liêng trao nhẫn của chúng mình.
            </p>
            <div className="w-12 h-px bg-amber-200 mb-6"></div>
            <div className="flex items-center text-gray-600 gap-2">
              <MapPin className="w-5 h-5" />
              <span>JW Marriott Hotel Hanoi</span>
            </div>
          </motion.div>

          {/* Banquet Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-pink-400 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mb-6">
              <Info className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-2xl font-serif-title mb-4">Tiệc Rượu Chúc Mừng</h3>
            <p className="text-lg font-bold text-pink-600 mb-2">19:30 - 25.12.2025</p>
            <p className="text-gray-500 max-w-xs mb-6">
              Cùng nâng ly và chia sẻ niềm vui bên những món ăn ngon và điệu nhạc du dương.
            </p>
            <div className="w-12 h-px bg-pink-200 mb-6"></div>
            <div className="flex items-center text-gray-600 gap-2">
              <MapPin className="w-5 h-5" />
              <span>Phòng Ballroom A, Tầng 2</span>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-inner relative group"
        >
          <img src="https://picsum.photos/seed/map/1200/400" alt="Map" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
          <div className="absolute inset-0 flex items-center justify-center">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              className="bg-white/90 px-8 py-3 rounded-full text-gray-800 font-bold shadow-lg hover:bg-amber-500 hover:text-white transition-colors flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Xem bản đồ Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventLocation;
