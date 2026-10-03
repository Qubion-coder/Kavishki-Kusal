import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { motion } from 'motion/react';

interface CountdownProps {
  targetDate: Date;
}

const LotusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12,22 C12,22 19,16.5 19,11 C19,7 16,4.5 13.5,4.5 C12.5,4.5 12,5.5 12,5.5 C12,5.5 11.5,4.5 10.5,4.5 C8,4.5 5,7 5,11 C5,16.5 12,22 12,22 Z M12,19.5 C9.5,15 7,11.5 7,11 C7,8 9,6.5 10.5,6.5 C11.5,6.5 12,8 12,8 C12,8 12.5,6.5 13.5,6.5 C15,6.5 17,8 17,11 C17,11.5 14.5,15 12,19.5 Z" />
    <path d="M12,16.5 C12,16.5 15.5,12 15.5,9 C15.5,7 14.5,6 13.5,6 C13,6 12,7 12,7 C12,7 11,6 10.5,6 C9.5,6 8.5,7 8.5,9 C8.5,12 12,16.5 12,16.5 Z" />
  </svg>
);

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const days = Math.max(0, differenceInDays(targetDate, now));
      const hours = Math.max(0, differenceInHours(targetDate, now) % 24);
      const minutes = Math.max(0, differenceInMinutes(targetDate, now) % 60);
      const seconds = Math.max(0, differenceInSeconds(targetDate, now) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeItemsTop = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
  ];

  return (
    <div 
      className="relative w-full min-h-[800px] bg-cover bg-center flex flex-col items-center py-20 px-4"
      style={{ backgroundImage: "url('/Gemini_Generated_Image_oov0kxoov0kxoov0.jpg')" }}
    >
      <div className="flex items-center gap-4 mb-4 mt-8">
        <span className="h-[1px] w-6 bg-[#b18a61]"></span>
        <h3 className="text-[#845b40] uppercase tracking-[0.3em] text-xs font-semibold">The Final Countdown</h3>
        <span className="h-[1px] w-6 bg-[#b18a61]"></span>
      </div>
      
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#4a1c24] mb-4 text-center">Until We Say "I Do"</h2>
      
      <p className="font-serif italic text-[#725e53] mb-12 max-w-md mx-auto text-center text-sm sm:text-base">
        Time is standing still as we eagerly await the moment our forever begins.
      </p>

      {/* Grid of countdown boxes */}
      <div className="flex flex-col items-center gap-6 z-10 w-full max-w-3xl">
        <div className="flex flex-row justify-center gap-3 sm:gap-6 w-full">
          {timeItemsTop.map((item, i) => (
            <CountdownBox key={item.label} item={item} delay={i * 0.15} />
          ))}
        </div>
        <div className="flex flex-row justify-center w-full">
            <CountdownBox item={{ label: 'Seconds', value: timeLeft.seconds }} delay={0.45} />
        </div>
      </div>
    </div>
  );
};

const CountdownBox = ({ item, delay }: { item: { label: string, value: number }, delay: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center relative w-[105px] h-[160px] sm:w-[130px] sm:h-[190px]"
    >
      {/* Box Background */}
      <svg width="100%" height="100%" viewBox="0 0 100 150" preserveAspectRatio="none" className="absolute inset-0 drop-shadow-sm filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.05)]">
        {/* Outer border */}
        <path d="M 50,2 C 60,2 80,15 100,40 L 100,140 Q 100,150 90,150 L 10,150 Q 0,150 0,140 L 0,40 C 20,15 40,2 50,2 Z" fill="#fdfaf6" stroke="#c09e73" strokeWidth="1.5" />
        {/* Inner border */}
        <path d="M 50,7 C 58,7 76,19 94,42 L 94,138 Q 94,144 88,144 L 12,144 Q 6,144 6,138 L 6,42 C 24,19 42,7 50,7 Z" fill="none" stroke="#c09e73" strokeWidth="0.75" />
        
        {/* Little decorative elements on the straight lines */}
        <circle cx="0" cy="90" r="1.5" fill="#c09e73" />
        <circle cx="100" cy="90" r="1.5" fill="#c09e73" />
        <circle cx="12" cy="90" r="0.75" fill="#c09e73" />
        <circle cx="88" cy="90" r="0.75" fill="#c09e73" />
      </svg>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-6 pb-2">
        {/* Value */}
        <span className="text-4xl sm:text-5xl font-serif text-[#4a1c24] mb-2 leading-none" style={{ fontFamily: 'Georgia, serif' }}>
          {String(item.value).padStart(2, '0')}
        </span>
        
        {/* Divider */}
        <div className="w-10 h-[0.5px] bg-[#c09e73] mb-3 relative flex items-center justify-center">
           <div className="w-1.5 h-1.5 rotate-45 bg-[#c09e73]" />
        </div>
        
        {/* Label */}
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#725e53] font-medium mt-1">
          {item.label}
        </span>

        {/* Small lotus icon at bottom */}
        <LotusIcon className="w-5 h-5 mt-2 text-[#c09e73]" />
      </div>
    </motion.div>
  );
};
