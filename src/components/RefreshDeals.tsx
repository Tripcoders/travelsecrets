import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
interface RefreshDealsProps {
  onRefresh: () => void;
  validUntil: string;
  type: 'flights' | 'hotels';
}
export function RefreshDeals({
  onRefresh,
  validUntil,
  type
}: RefreshDealsProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await onRefresh();
    setTimeout(() => setIsRefreshing(false), 2000);
  };
  const timeLeft = new Date(validUntil).getTime() - new Date().getTime();
  const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutesLeft = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
  const buttonConfig = {
    flights: {
      color: 'bg-[#FF385C] hover:bg-[#E0314F]',
      text: 'Book Now on lastminute.com'
    },
    hotels: {
      color: 'bg-[#003580] hover:bg-[#00224F]',
      text: 'Book Now on Booking.com'
    }
  };
  return <div className="sticky bottom-0 w-full bg-white/85 backdrop-blur-md border-t shadow-lg">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Deals valid for: </span>
            <span className={type === 'flights' ? 'text-[#FF385C]' : 'text-[#003580]'}>
              {hoursLeft}h {minutesLeft}m
            </span>
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={handleRefresh} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#FF385C] transition-colors" disabled={isRefreshing}>
            <motion.div animate={isRefreshing ? {
            rotate: 360
          } : {}} transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear'
          }}>
              <RefreshCw size={16} strokeWidth={2.2} />
            </motion.div>
            {isRefreshing ? 'Checking new deals...' : 'Refresh deals'}
          </motion.button>
        </div>
        <motion.button whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.98
      }} className={`w-full mt-3 py-3 text-white font-medium rounded-lg transition-colors ${buttonConfig[type].color}`}>
          {buttonConfig[type].text}
        </motion.button>
      </div>
    </div>;
}