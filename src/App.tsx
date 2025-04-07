import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExtensionHeader } from './components/ExtensionHeader';
import { TabNavigation } from './components/TabNavigation';
import { FlightDeals } from './components/FlightDeals';
import { HotelDeals } from './components/HotelDeals';
export function App() {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels'>('flights');
  return <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <motion.div initial={{
      scale: 0.95,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      duration: 0.3
    }} className="w-[400px] h-[600px] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
        <div className="sticky top-0 z-20">
          <ExtensionHeader />
        </div>
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <AnimatePresence mode="wait">
              {activeTab === 'flights' ? <motion.div key="flights" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -20
            }} transition={{
              duration: 0.3
            }}>
                  <FlightDeals />
                </motion.div> : <motion.div key="hotels" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -20
            }} transition={{
              duration: 0.3
            }}>
                  <HotelDeals />
                </motion.div>}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>;
}