
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATE } from '../constants';
import { TimeLeft } from '../types';

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(WEDDING_DATE) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timerItems = [
    { label: "Ngày", value: timeLeft.days },
    { label: "Giờ", value: timeLeft.hours },
    { label: "Phút", value: timeLeft.minutes },
    { label: "Giây", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 bg-[#f4ece1]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-serif-title mb-12 text-[#8c7355]"
        >
          Thời gian đến ngày trọng đại
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {timerItems.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 flex flex-col items-center justify-center aspect-square"
            >
              <span className="text-4xl md:text-5xl font-serif-title text-[#8c7355] mb-2">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
