import React, { useState } from 'react';
import { PriceAlert } from './PriceAlert';
import { FlightCard } from './FlightCard';
import { PriceComparison } from './PriceComparison';
import { ActionButton } from './ActionButton';
import { RefreshDeals } from './RefreshDeals';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw } from 'react-feather';
export function FlightDeals() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRefreshing(false);
  };
  const flights = [{
    date: 'May 11',
    departureTime: '16:30',
    departureCode: 'LAX',
    arrivalTime: '23:45',
    arrivalCode: 'NYC',
    duration: '4h 15min',
    stops: '1 stop',
    airline: 'Lufthansa',
    price: 800,
    direction: 'outbound'
  }, {
    date: 'May 11',
    departureTime: '14:15',
    departureCode: 'LAX',
    arrivalTime: '22:30',
    arrivalCode: 'NYC',
    duration: '4h 15min',
    stops: 'Direct',
    airline: 'Delta Airlines',
    price: 750,
    direction: 'outbound'
  }, {
    date: 'May 11',
    departureTime: '18:45',
    departureCode: 'LAX',
    arrivalTime: '02:15',
    arrivalCode: 'NYC',
    duration: '4h 30min',
    stops: '1 stop',
    airline: 'United Airlines',
    price: 700,
    direction: 'outbound'
  }, {
    date: 'May 11',
    departureTime: '12:20',
    departureCode: 'LAX',
    arrivalTime: '20:45',
    arrivalCode: 'NYC',
    duration: '4h 25min',
    stops: 'Direct',
    airline: 'American Airlines',
    price: 650,
    direction: 'outbound'
  }, {
    date: 'May 11',
    departureTime: '15:30',
    departureCode: 'LAX',
    arrivalTime: '23:15',
    arrivalCode: 'NYC',
    duration: '4h 45min',
    stops: '1 stop',
    airline: 'British Airways',
    price: 600,
    direction: 'outbound'
  }, {
    date: 'May 13',
    departureTime: '16:30',
    departureCode: 'NYC',
    arrivalTime: '20:45',
    arrivalCode: 'LAX',
    duration: '4h 15min',
    stops: 'Direct',
    airline: 'AIR CANADA',
    price: 550,
    direction: 'return'
  }, {
    date: 'May 13',
    departureTime: '14:45',
    departureCode: 'NYC',
    arrivalTime: '19:15',
    arrivalCode: 'LAX',
    duration: '4h 30min',
    stops: 'Direct',
    airline: 'Emirates',
    price: 500,
    direction: 'return'
  }, {
    date: 'May 13',
    departureTime: '11:30',
    departureCode: 'NYC',
    arrivalTime: '15:45',
    arrivalCode: 'LAX',
    duration: '4h 15min',
    stops: '1 stop',
    airline: 'KLM',
    price: 450,
    direction: 'return'
  }, {
    date: 'May 13',
    departureTime: '13:20',
    departureCode: 'NYC',
    arrivalTime: '17:45',
    arrivalCode: 'LAX',
    duration: '4h 25min',
    stops: 'Direct',
    airline: 'Air France',
    price: 400,
    direction: 'return'
  }];
  return <div className="relative pb-[140px]">
      <div className="space-y-4">
        <PriceAlert message="We have a better price for your flight." discount="Save $200" />
        <AnimatePresence mode="wait">
          {isRefreshing ? <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="flex justify-center items-center py-8">
              <div className="text-[#FF385C] text-center">
                <motion.div animate={{
              rotate: 360
            }} transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear'
            }} className="inline-block">
                  <RefreshCw size={24} />
                </motion.div>
                <p className="mt-2 text-sm">Checking for better deals...</p>
              </div>
            </motion.div> : <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} className="space-y-4">
              {flights.map((flight, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }}>
                  <FlightCard {...flight} />
                </motion.div>)}
            </motion.div>}
        </AnimatePresence>
        <PriceComparison originalSite="Priceline" originalPrice={1000} discountSite="lastminute.com" discountPrice={800} discountTag="with TravelSaver Extension" type="flights" />
      </div>
      <RefreshDeals onRefresh={handleRefresh} validUntil="2024-01-20T23:59:59" type="flights" />
    </div>;
}