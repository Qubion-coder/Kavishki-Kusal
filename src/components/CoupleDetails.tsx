import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

export const CoupleDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

      <div className="text-center mb-16 sm:mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-4 mb-6 mt-4">
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-brand-sakura-deep/60" />
            <span className="text-brand-sakura-deep uppercase tracking-[0.5em] text-[11px] font-semibold font-sans drop-shadow-sm">the happy couple</span>
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-brand-sakura-deep/60" />
          </div>
          <h2 className="text-5xl sm:text-7xl font-display text-stone-800 tracking-tight drop-shadow-sm flex flex-col items-center gap-4">
            <span>Kavishki <span className="italic text-brand-sakura-deep font-light mx-2">&</span> Kusal</span>
            <span className="text-3xl sm:text-5xl font-sinhala">කවිෂ්කි <span className="italic text-brand-sakura-deep font-light mx-2">&</span> කුසල්</span>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 relative z-10">
        {/* Groom Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center lg:text-right flex-1 lg:pr-10"
        >
          <div className="mb-4 flex flex-col items-center lg:items-end">
            <span className="text-brand-sakura-deep uppercase tracking-widest text-[10px] font-bold mb-2 block">The Groom | මනාලයා</span>
            <h3 className="text-4xl sm:text-5xl font-display text-stone-800 mb-2 drop-shadow-sm flex flex-col items-center lg:items-end gap-2">
              <span>Kusal</span>
              <span className="text-2xl sm:text-3xl font-sinhala">කුසල්</span>
            </h3>
            <div className="text-stone-800 font-serif italic font-bold text-base sm:text-lg flex flex-col items-center lg:items-end gap-1">
              <span>Son of Mr. Thilak Amaranath & Mrs. Dinitha Priyani</span>
            </div>
          </div>
          <div className="hidden lg:flex justify-end mt-8">
            <Heart className="w-6 h-6 text-brand-sakura/60 fill-brand-sakura/20 transform hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </motion.div>

        {/* Decorative Center (Image removed as requested) */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-sakura/30 to-transparent rounded-full blur-3xl opacity-40 scale-150" />
            <motion.img 
              src="/70.png" 
              alt="Couple Illustration" 
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <Sparkles className="absolute top-0 right-0 w-8 h-8 text-brand-sakura-deep animate-pulse" />
          </div>

        {/* Bride Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-center lg:text-left flex-1 lg:pl-10"
        >
          <div className="mb-4 flex flex-col items-center lg:items-start">
            <span className="text-brand-sakura-deep uppercase tracking-widest text-[10px] font-bold mb-2 block">The Bride | මනාලිය</span>
            <h3 className="text-4xl sm:text-5xl font-display text-stone-800 mb-2 drop-shadow-sm flex flex-col items-center lg:items-start gap-2">
              <span>Kavishki</span>
              <span className="text-2xl sm:text-3xl font-sinhala">කවිෂ්කි</span>
            </h3>
            <div className="text-stone-800 font-serif italic font-bold text-base sm:text-lg flex flex-col items-center lg:items-start gap-1">
              <span>Daughter of Mr. Rohan Lalitha & Mrs. Sujeewa Damayanthi</span>
            </div>
          </div>
          <div className="hidden lg:flex justify-start mt-8">
            <Heart className="w-6 h-6 text-brand-sakura/60 fill-brand-sakura/20 transform hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
