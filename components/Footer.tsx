
import React from 'react';
import { Heart } from 'lucide-react';
import { BRIDE_NAME, GROOM_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-[#4a4a4a] text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <Heart className="w-10 h-10 text-pink-400 mx-auto mb-6 animate-pulse" />
        <h2 className="text-4xl font-handwriting mb-4">Cảm ơn bạn đã chia sẻ niềm vui!</h2>
        <p className="text-gray-400 font-light mb-8 max-w-md mx-auto">
          Sự hiện diện của bạn là món quà vô giá đối với chúng tôi trong ngày khởi đầu hành trình mới này.
        </p>
        <div className="flex items-center justify-center gap-4 text-2xl font-serif-title text-amber-200">
           <span>{GROOM_NAME.split(' ').pop()}</span>
           <span className="text-sm font-handwriting">&</span>
           <span>{BRIDE_NAME.split(' ').pop()}</span>
        </div>
        <p className="mt-12 text-xs text-gray-500 tracking-widest uppercase">
          &copy; 2025 Wedding Invitation. Designed with Love.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
