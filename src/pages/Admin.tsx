import React, { useState, useEffect } from 'react';
import { Copy, Check, Link, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const ENGLISH_PREFIXES = [
  { id: 'mr', label: 'Mr.', type: 'english' },
  { id: 'mrs', label: 'Mrs.', type: 'english' },
  { id: 'miss', label: 'Miss', type: 'english' },
  { id: 'mr_mrs', label: 'Mr. & Mrs.', type: 'english' },
  { id: 'family', label: 'Family', type: 'english' },
  { id: 'dear', label: 'Dear', type: 'english' },
];

const SINHALA_PREFIXES = [
  { id: 'obata', label: 'ඔබට', type: 'sinhala' },
  { id: 'oba_depalata', label: 'ඔබ දෙපළට', type: 'sinhala' },
  { id: 'oba_samata', label: 'ඔබ සැමට', type: 'sinhala' },
];

const ALL_PREFIXES = [...ENGLISH_PREFIXES, ...SINHALA_PREFIXES];

export const Admin: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [selectedPrefixId, setSelectedPrefixId] = useState('mr');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  // Clear copy states after 2 seconds
  useEffect(() => {
    if (copiedLink) setTimeout(() => setCopiedLink(false), 2000);
  }, [copiedLink]);

  useEffect(() => {
    if (copiedMessage) setTimeout(() => setCopiedMessage(false), 2000);
  }, [copiedMessage]);

  const selectedPrefix = ALL_PREFIXES.find(p => p.id === selectedPrefixId);
  const isEnglish = selectedPrefix?.type === 'english';

  const getDisplayName = () => {
    if (!guestName.trim()) return '';
    const name = guestName.trim();
    if (isEnglish) {
      switch (selectedPrefixId) {
        case 'mr': return `Mr. ${name}`;
        case 'mrs': return `Mrs. ${name}`;
        case 'miss': return `Miss ${name}`;
        case 'mr_mrs': return `Mr. & Mrs. ${name}`;
        case 'family': return `${name} and Family`;
        case 'dear': return name; // "Dear" is prepended in the message, but display name is just name
        default: return name;
      }
    } else {
      // Sinhala
      return `${name} ${selectedPrefix?.label}`;
    }
  };

  const displayName = getDisplayName();

  const getWhatsAppMessage = (link: string) => {
    if (!guestName.trim()) return '';
    const name = guestName.trim();
    const groomName = "Kusal";
    const brideName = "Kavishki";

    if (isEnglish) {
      const greetingName = selectedPrefixId === 'dear' ? name : displayName;
      return `Dear ${greetingName} ❤️\n\nWith joyful hearts, we warmly invite you to celebrate one of the most special days of our lives as we begin our journey together.\n\nPlease view our wedding invitation and all the event details through the link below 🌐:\n\n${link}\n\nYour presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.\n\nWith love,\n❤️ ${groomName} & ${brideName}`;
    } else {
      return `${name} ${selectedPrefix?.label} ❤️\n\nඅපගේ විවාහ මංගල උත්සවය සඳහා ඔබට අපගේ ආදරණීය ආරාධනයයි.\n\nඅපගේ විවාහ මංගල උත්සවයේ සියලුම විස්තර පහත සබැඳිය ඔස්සේ නැරඹිය හැකිය 🌐\n\n${link}\n\nඔබගේ පැමිණීම අපට මහත් සතුටක් වනු ඇත.\n\nආදරයෙන්,\n❤️ ${groomName} & ${brideName}`;
    }
  };

  const handleGenerateLink = () => {
    if (!guestName.trim()) return;
    
    // Base URL is the current origin
    const baseUrl = window.location.origin;
    
    // We encode the name for the path, and add prefix id as query param so frontend knows how to render
    const encodedName = encodeURIComponent(guestName.trim());
    const url = `${baseUrl}/${encodedName}?p=${selectedPrefixId}`;
    
    setGeneratedLink(url);
  };

  const handleCopyLink = () => {
    if (!generatedLink) return;
    navigator.clipboard.writeText(generatedLink);
    setCopiedLink(true);
  };

  const handleCopyMessage = () => {
    if (!generatedLink) return;
    const msg = getWhatsAppMessage(generatedLink);
    navigator.clipboard.writeText(msg);
    setCopiedMessage(true);
  };

  return (
    <div className="min-h-screen bg-brand-ivory py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display text-stone-800 mb-4">Invitation Generator</h1>
          <p className="text-stone-500 font-serif italic">Generate personalized links and messages</p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl p-8 sm:p-12 rounded-[2rem] shadow-xl border border-brand-sakura/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Addressing Option */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-stone-700 tracking-wider">
                PREFIX / ADDRESSING
              </label>
              <select
                value={selectedPrefixId}
                onChange={(e) => setSelectedPrefixId(e.target.value)}
                className="w-full p-4 bg-stone-50 border border-brand-sakura/30 rounded-xl focus:ring-2 focus:ring-brand-sakura outline-none text-stone-800 font-medium"
              >
                <optgroup label="English">
                  {ENGLISH_PREFIXES.map(p => (
                    <option key={p.id} value={p.id}>{p.label}</option>
                  ))}
                </optgroup>
                <optgroup label="Sinhala">
                  {SINHALA_PREFIXES.map(p => (
                    <option key={p.id} value={p.id}>{p.label}</option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Guest Name */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-stone-700 tracking-wider">
                GUEST NAME
              </label>
              <input
                type="text"
                placeholder="e.g. Sanjaya"
                value={guestName}
                onChange={(e) => {
                  setGuestName(e.target.value);
                  setGeneratedLink(''); // Reset link on name change
                }}
                className="w-full p-4 bg-stone-50 border border-brand-sakura/30 rounded-xl focus:ring-2 focus:ring-brand-sakura outline-none text-stone-800 font-medium"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGenerateLink}
            disabled={!guestName.trim()}
            className="w-full bg-stone-800 text-brand-champagne py-5 rounded-xl font-bold tracking-widest uppercase hover:bg-stone-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-10"
          >
            Generate Link
          </motion.button>

          {/* Previews */}
          <div className="space-y-8">
            {generatedLink && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-brand-sakura/10 p-6 rounded-xl border border-brand-sakura/30 space-y-6"
              >
                <div>
                  <h3 className="text-xs font-bold text-brand-sakura-deep uppercase tracking-widest mb-2">Generated URL</h3>
                  <div className="bg-white p-4 rounded-lg break-all font-mono text-sm text-stone-700 border border-brand-sakura/20">
                    {generatedLink}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-brand-sakura-deep uppercase tracking-widest mb-2">Generated Message</h3>
                  <div className="bg-white p-4 rounded-lg whitespace-pre-wrap font-sans text-sm text-stone-700 border border-brand-sakura/20 leading-relaxed">
                    {getWhatsAppMessage(generatedLink)}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleCopyLink}
                    className="flex-1 bg-white border-2 border-brand-sakura text-brand-sakura-deep py-4 rounded-xl font-bold tracking-wider hover:bg-brand-sakura/10 transition-colors flex items-center justify-center gap-2"
                  >
                    {copiedLink ? <Check className="w-5 h-5" /> : <Link className="w-5 h-5" />}
                    {copiedLink ? 'Link Copied!' : 'Copy Link Only'}
                  </button>

                  <button
                    onClick={handleCopyMessage}
                    className="flex-1 bg-brand-sakura-deep text-white py-4 rounded-xl font-bold tracking-wider hover:bg-brand-sakura-deep/90 transition-colors flex items-center justify-center gap-2"
                  >
                    {copiedMessage ? <Check className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
                    {copiedMessage ? 'Message Copied!' : 'Copy Full Message'}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
