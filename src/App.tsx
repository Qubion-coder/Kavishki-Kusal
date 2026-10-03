import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';
import { FloatingPetals } from './components/FloatingPetals';
import { IntroVideo } from './components/IntroVideo';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { CeremonyDetails } from './components/CeremonyDetails';
import { CoupleDetails } from './components/CoupleDetails';
// Removed Timeline import
import { Location } from './components/Location';
// Removed RSVPForm import
import { Footer } from './components/Footer';

export default function App() {
  const [showMain, setShowMain] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const weddingDate = new Date('2026-11-06T09:00:00');

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play blocked: ", err));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-gold selection:text-white overflow-x-hidden bg-brand-ivory">
      <FloatingPetals />

      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/paulyudin-wedding-485932.mp3"
        loop
      />

      <AnimatePresence mode="wait">
        {!showMain ? (
          <IntroVideo key="intro" onComplete={() => setShowMain(true)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Music Toggle Button */}
            <button
              onClick={toggleMusic}
              className="fixed bottom-8 right-8 z-[60] w-14 h-14 glass rounded-full flex items-center justify-center text-brand-sakura-deep hover:bg-stone-800 hover:text-brand-champagne transition-all active:scale-90 shadow-2xl group"
            >
              <div className="absolute inset-0 rounded-full border border-brand-sakura/20 scale-110 group-hover:scale-125 transition-transform" />
              {isMusicPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
            </button>

            <section id="hero">
              <Hero />
            </section>

            {/* Countdown Section */}
            <section id="countdown" className="w-full">
              <Countdown targetDate={weddingDate} />
            </section>

            <section id="couple" className="pt-0 sm:pt-32 pb-0 relative overflow-hidden">
              {/* Section Background Image */}
              <div className="absolute inset-0 -z-10">
                <div
                  className="hidden sm:block absolute inset-0 bg-cover bg-center opacity-100"
                  style={{ backgroundImage: "url('/ChatGPT Image May 14, 2026, 03_54_56 PM.png')" }}
                />
                <img 
                  src="/ChatGPT Image May 14, 2026, 03_54_56 PM.png" 
                  alt="Couple Mobile Background" 
                  className="block sm:hidden w-full h-full object-cover absolute inset-0 opacity-100" 
                />
                {/* Optional: Add a subtle overlay if needed for readability, but user said "no want add as watermark" before */}
              </div>
              <CoupleDetails />
            </section>

            <section id="ceremony" className="w-full bg-brand-ivory">
              <CeremonyDetails />
            </section>

            {/* Timeline section removed entirely as requested */}

            <section id="location" className="pt-0 pb-16 sm:pb-32 relative overflow-hidden">
              {/* Section Background Image */}
              <div className="absolute inset-0 -z-10">
                <div
                  className="hidden sm:block absolute inset-0 bg-cover bg-center opacity-100"
                  style={{ backgroundImage: "url('/ChatGPT Image May 14, 2026, 03_54_56 PM.png')" }}
                />
                <img 
                  src="/ChatGPT Image May 14, 2026, 03_54_56 PM.png" 
                  alt="Location Mobile Background" 
                  className="block sm:hidden w-full h-full object-cover absolute inset-0 opacity-100" 
                />
              </div>
              <Location />
            </section>



            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

