import React from 'react';
import { motion } from 'motion/react';

const LotusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12,22 C12,22 19,16.5 19,11 C19,7 16,4.5 13.5,4.5 C12.5,4.5 12,5.5 12,5.5 C12,5.5 11.5,4.5 10.5,4.5 C8,4.5 5,7 5,11 C5,16.5 12,22 12,22 Z M12,19.5 C9.5,15 7,11.5 7,11 C7,8 9,6.5 10.5,6.5 C11.5,6.5 12,8 12,8 C12,8 12.5,6.5 13.5,6.5 C15,6.5 17,8 17,11 C17,11.5 14.5,15 12,19.5 Z" />
    <path d="M12,16.5 C12,16.5 15.5,12 15.5,9 C15.5,7 14.5,6 13.5,6 C13,6 12,7 12,7 C12,7 11,6 10.5,6 C9.5,6 8.5,7 8.5,9 C8.5,12 12,16.5 12,16.5 Z" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <rect x="7" y="14" width="3" height="3" />
    <rect x="11" y="14" width="3" height="3" />
    <rect x="15" y="14" width="3" height="3" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="6" x2="12" y2="12" />
    <line x1="16" y1="14" x2="12" y2="12" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const CeremonyDetails: React.FC = () => {
  return (
    <div 
      className="relative w-full min-h-[1000px] bg-cover bg-top flex flex-col items-center py-20 sm:py-28 px-4 overflow-hidden"
      style={{ backgroundImage: "url('/Gemini_Generated_Image_3my21m3my21m3my2.jpg')" }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center z-10 w-full max-w-2xl mx-auto pt-[8vh] sm:pt-12"
      >
        <LotusIcon className="w-8 h-8 text-[#c09e73] mb-4" />
        
        <div className="flex items-center gap-4 mb-4">
          <span className="h-[1px] w-12 bg-[#c09e73] relative">
             <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#c09e73]"></span>
          </span>
          <h3 className="text-[#4a1c24] uppercase tracking-[0.3em] text-[10px] font-bold">The Wedding Day</h3>
          <span className="h-[1px] w-12 bg-[#c09e73] relative">
             <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#c09e73]"></span>
          </span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] text-[#4a1c24] mb-8 text-center leading-[1.1]">
          <span className="font-serif block">A Journey of</span>
          <span className="font-serif italic block mt-1">Tradition & Grace</span>
        </h2>
        
        <p className="font-serif text-[#725e53] max-w-[420px] mx-auto text-center text-[15px] sm:text-[17px] leading-relaxed mb-12 px-2">
          With joyful hearts, we invite you to witness our union in a timeless Poruwa ceremony, surrounded by family, blessings, and the enchanting beauty of Sri Lanka.
        </p>

        {/* Timeline Section */}
        <div className="relative w-full max-w-[400px] mx-auto pl-[40px] sm:pl-[44px]">
          {/* Continuous Vertical Line */}
          <div className="absolute left-[40px] sm:left-[44px] top-4 bottom-4 w-[1px] bg-[#c09e73] -translate-x-1/2 z-0" />

          {/* Top start dot */}
          <div className="absolute left-[40px] sm:left-[44px] -top-2 w-1.5 h-1.5 rounded-full bg-[#c09e73] -translate-x-1/2 z-0" />
          {/* Bottom end dot */}
          <div className="absolute left-[40px] sm:left-[44px] -bottom-2 w-1.5 h-1.5 rounded-full bg-[#c09e73] -translate-x-1/2 z-0" />

          <div className="flex flex-col gap-8 relative z-10">
            <TimelineCard 
              icon={<CalendarIcon />} 
              title="Friday, November 06" 
              sinhalaText="2026 නොවැම්බර් 06 සිකුරාදා" 
              subText="2 0 2 6" 
            />
            <TimelineCard 
              icon={<MapPinIcon />} 
              title="Lili Luxury Hall" 
              sinhalaText="Aknara Water Front, Panadura" 
              subText="THE VENUE" 
            />
            <TimelineCard 
              icon={<ClockIcon />} 
              title="09:48 AM" 
              sinhalaText="පෝරුව චාරිත්‍ර" 
              subText="PORUWA CEREMONY" 
            />
            <TimelineCard 
              icon={<ClockIcon />} 
              title="10:24 AM" 
              sinhalaText="විවාහ ලියාපදිංචිය" 
              subText="MARRIAGE REGISTRATION" 
            />
            <TimelineCard 
              icon={<ClockIcon />} 
              title="12:30 PM" 
              sinhalaText="දිවා ආහාරය" 
              subText="BUFFET TIME" 
            />
            <TimelineCard 
              icon={<ClockIcon />} 
              title="03:24 PM" 
              sinhalaText="යුවල පිටත්වීම" 
              subText="YUWALA PITATH WIMA" 
              isLast={true}
            />
          </div>
        </div>

      </motion.div>
    </div>
  );
};

const TimelineCard = ({ icon, title, sinhalaText, subText, isLast }: any) => {
  return (
    <div className="relative w-full">
      {!isLast && (
         <div className="absolute left-0 -bottom-[18px] w-1.5 h-1.5 rounded-full bg-[#c09e73] -translate-x-1/2 z-0" />
      )}
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex items-center bg-[#fdfaf6]/95 border border-[#c09e73]/40 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 w-[270px] sm:w-[320px]"
      >
        <div className="absolute left-0 -translate-x-1/2 w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full bg-[#591e28] border-[2.5px] border-[#fdfaf6] outline outline-[1px] outline-[#c09e73] flex items-center justify-center shadow-md z-10 text-[#f8ead8]">
          {icon}
        </div>
        
        <div className="ml-[34px] sm:ml-[40px] flex flex-col items-start text-left w-full">
          <h4 className="text-[#591e28] font-serif text-[17px] sm:text-[19px] mb-1 leading-tight">{title}</h4>
          <p className="text-[#725e53] font-sans text-[12px] sm:text-[13px] mb-2">{sinhalaText}</p>
          <span className="text-[#c09e73] uppercase tracking-[0.2em] text-[9px] font-bold">{subText}</span>
        </div>
      </motion.div>
    </div>
  );
};
