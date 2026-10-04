import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, User, Users, CheckCircle, XCircle } from 'lucide-react';

export const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    attending: 'pamine',
    guestCount: '1'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx464zG2c8xVIrp1B6FU5oQMDXBOTKVHMMAD4KdScwp_IGeVMl42Xj4ihuOIDvEI68F/exec';
    
    try {
      const formDataObj = new FormData();
      formDataObj.append('Name', formData.name);
      formDataObj.append('Attending', formData.attending === 'pamine' ? 'Yes' : 'No');
      formDataObj.append('GuestCount', formData.attending === 'pamine' ? formData.guestCount : '0');
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataObj,
        mode: 'no-cors' // Required for Google Apps Script
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form', error);
      alert('There was an error submitting your RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[85rem] mx-auto px-6 relative py-16 sm:py-24">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-brand-sakura/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-2xl p-10 sm:p-16 rounded-[2.5rem] shadow-[0_30px_60px_rgba(251,113,133,0.1)] border border-brand-sakura/30 relative overflow-hidden"
        >
          {/* Elegant top border gradient */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-champagne via-brand-sakura to-brand-sakura-deep" />

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-brand-sakura-deep/60" />
              <span className="text-brand-sakura-deep uppercase tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm">
                RSVP
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-r from-brand-sakura-deep/60 to-transparent" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-display text-stone-800 mb-6 leading-tight drop-shadow-sm">
              Are you <span className="italic font-light text-brand-sakura-deep">Attending?</span>
            </h2>
            <p className="text-stone-500 font-serif italic text-lg">
              කරුණාකර ඔබගේ පැමිණීම තහවුරු කරන්න
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="space-y-3">
                <label htmlFor="name" className="block text-sm font-bold text-stone-700 tracking-wider">
                  නම / NAME
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-brand-sakura-deep/70" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="block w-full pl-12 pr-4 py-4 bg-stone-50/50 border border-brand-sakura/30 rounded-2xl focus:ring-2 focus:ring-brand-sakura focus:border-brand-sakura transition-all duration-300 outline-none text-stone-800 font-medium"
                    placeholder="ඔබගේ නම ඇතුලත් කරන්න"
                  />
                </div>
              </div>

              {/* Attendance Field */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-stone-700 tracking-wider">
                  පැමිණීම / ATTENDANCE
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className={`relative flex items-center justify-center p-4 cursor-pointer rounded-2xl border-2 transition-all duration-300 ${formData.attending === 'pamine' ? 'border-brand-sakura bg-brand-sakura/10' : 'border-brand-sakura/20 bg-stone-50/50 hover:border-brand-sakura/50'}`}>
                    <input
                      type="radio"
                      name="attending"
                      value="pamine"
                      checked={formData.attending === 'pamine'}
                      onChange={(e) => setFormData({...formData, attending: e.target.value})}
                      className="sr-only"
                    />
                    <div className="flex flex-col items-center gap-2">
                      <CheckCircle className={`w-6 h-6 ${formData.attending === 'pamine' ? 'text-brand-sakura-deep' : 'text-stone-400'}`} />
                      <span className={`font-bold ${formData.attending === 'pamine' ? 'text-brand-sakura-deep' : 'text-stone-500'}`}>පැමිණේ</span>
                      <span className={`text-[10px] uppercase tracking-wider ${formData.attending === 'pamine' ? 'text-brand-sakura-deep/70' : 'text-stone-400'}`}>Will Attend</span>
                    </div>
                  </label>

                  <label className={`relative flex items-center justify-center p-4 cursor-pointer rounded-2xl border-2 transition-all duration-300 ${formData.attending === 'nopamine' ? 'border-stone-400 bg-stone-100' : 'border-brand-sakura/20 bg-stone-50/50 hover:border-brand-sakura/50'}`}>
                    <input
                      type="radio"
                      name="attending"
                      value="nopamine"
                      checked={formData.attending === 'nopamine'}
                      onChange={(e) => setFormData({...formData, attending: e.target.value})}
                      className="sr-only"
                    />
                    <div className="flex flex-col items-center gap-2">
                      <XCircle className={`w-6 h-6 ${formData.attending === 'nopamine' ? 'text-stone-600' : 'text-stone-400'}`} />
                      <span className={`font-bold ${formData.attending === 'nopamine' ? 'text-stone-700' : 'text-stone-500'}`}>නොපැමිණේ</span>
                      <span className={`text-[10px] uppercase tracking-wider ${formData.attending === 'nopamine' ? 'text-stone-500' : 'text-stone-400'}`}>Will Not Attend</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Guest Count Field - Only show if attending */}
              <AnimatePresence>
                {formData.attending === 'pamine' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3 overflow-hidden"
                  >
                    <label htmlFor="guestCount" className="block text-sm font-bold text-stone-700 tracking-wider">
                      සහභාගී වන සංඛ්‍යාව / GUEST COUNT
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-brand-sakura-deep/70" />
                      </div>
                      <select
                        id="guestCount"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({...formData, guestCount: e.target.value})}
                        className="block w-full pl-12 pr-10 py-4 bg-stone-50/50 border border-brand-sakura/30 rounded-2xl focus:ring-2 focus:ring-brand-sakura focus:border-brand-sakura transition-all duration-300 outline-none text-stone-800 font-medium appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6].map(num => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Person' : 'People'}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-stone-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-8 bg-stone-800 text-brand-champagne px-8 py-5 rounded-2xl font-sans tracking-[0.2em] text-sm uppercase hover:bg-stone-900 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Mail className="w-5 h-5 text-brand-sakura group-hover:scale-110 transition-transform" />
                {isSubmitting ? 'Submitting...' : 'Confirm RSVP / තහවුරු කරන්න'}
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-display text-stone-800 mb-4">Thank You! / ස්තුතියි!</h3>
              <p className="text-stone-500">
                ඔබගේ පිළිතුර ලැබුණා. (We have received your response.)
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-sm text-brand-sakura-deep hover:text-stone-800 underline transition-colors"
              >
                Submit another response
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
