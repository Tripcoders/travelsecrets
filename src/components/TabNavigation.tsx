import React from 'react';
import { Plane, Hotel } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface TabNavigationProps {
  activeTab: 'flights' | 'hotels';
  setActiveTab: (tab: 'flights' | 'hotels') => void;
}
export function TabNavigation({
  activeTab,
  setActiveTab
}: TabNavigationProps) {
  return <div className="sticky top-0 bg-white border-b z-10">
      <div className="flex">
        <motion.button whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.98
      }} className={`flex-1 py-3 flex items-center justify-center gap-2 font-medium relative ${activeTab === 'flights' ? 'text-[#FF385C]' : 'text-gray-500'}`} onClick={() => setActiveTab('flights')}>
          <Plane strokeWidth={2.2} size={20} />
          <span>Flights</span>
          {activeTab === 'flights' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF385C]" initial={false} transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30
        }} />}
        </motion.button>
        <motion.button whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.98
      }} className={`flex-1 py-3 flex items-center justify-center gap-2 font-medium relative ${activeTab === 'hotels' ? 'text-[#FF385C]' : 'text-gray-500'}`} onClick={() => setActiveTab('hotels')}>
          <Hotel strokeWidth={2.2} size={20} />
          <span>Hotels</span>
          {activeTab === 'hotels' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF385C]" initial={false} transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30
        }} />}
        </motion.button>
      </div>
    </div>;
}