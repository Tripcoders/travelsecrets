import React, { useState } from 'react';
import { X, User, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProfilePanel } from './ProfilePanel';
import { SettingsPanel } from './SettingsPanel';
export function ExtensionHeader() {
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  return <>
      <div className="bg-[#FF385C] p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF385C]" initial={{
              scale: 0.5,
              opacity: 0
            }} animate={{
              scale: 1,
              opacity: 1
            }} transition={{
              type: 'spring',
              duration: 0.5
            }}>
                <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 14L14 9L9 7L7 12L9 17L14 19L16 14Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </div>
            <motion.span className="text-white font-bold text-lg" initial={{
            x: -20,
            opacity: 0
          }} animate={{
            x: 0,
            opacity: 1
          }} transition={{
            duration: 0.3
          }}>
              TravelSaver
            </motion.span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-2 mr-4 border-r border-white/20 pr-4">
              <motion.button whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }} className="text-white hover:bg-white/10 rounded-full p-1.5" onClick={() => setShowSettings(true)}>
                <Settings strokeWidth={2.2} size={20} />
              </motion.button>
              <motion.button whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }} className="text-white hover:bg-white/10 rounded-full p-1.5" onClick={() => setShowProfile(true)}>
                <User strokeWidth={2.2} size={20} />
              </motion.button>
            </div>
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }} className="text-white hover:bg-white/10 rounded-full p-1.5">
              <X strokeWidth={2.2} size={20} />
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showProfile && <ProfilePanel onClose={() => setShowProfile(false)} />}
        {showSettings && <SettingsPanel onClose={() => setShowSettings(false)} />}
      </AnimatePresence>
    </>;
}