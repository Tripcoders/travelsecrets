import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AirlineComparison } from './AirlineComparison';
import { motion, AnimatePresence } from 'framer-motion';
import { AirlineLogo } from './AirlineLogo';
interface FlightCardProps {
  date: string;
  departureTime: string;
  departureCode: string;
  arrivalTime: string;
  arrivalCode: string;
  duration: string;
  stops: string;
  airline: string;
  direction: 'outbound' | 'return';
}
export function FlightCard({
  date,
  departureTime,
  departureCode,
  arrivalTime,
  arrivalCode,
  duration,
  stops,
  airline,
  direction
}: FlightCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const mockAirlines = [{
    name: 'Lufthansa',
    price: 439.9,
    logo: 'https://example.com/lufthansa.png',
    departure: '16:30',
    arrival: '23:45'
  }, {
    name: 'Air France',
    price: 489.9,
    logo: 'https://example.com/airfrance.png',
    departure: '17:30',
    arrival: '00:45'
  }, {
    name: 'British Airways',
    price: 509.9,
    logo: 'https://example.com/ba.png',
    departure: '15:30',
    arrival: '22:45'
  }];
  return <div className="border rounded-lg p-3 bg-gray-50">
      <div className="text-sm text-gray-500 mb-2">{date}</div>
      <div className="flex items-center justify-between">
        <div className="text-left">
          <div className="text-xl font-bold">{departureTime}</div>
          <div className="text-sm font-medium text-gray-700">
            {departureCode}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center mx-2">
          <div className="text-xs text-gray-500">
            {duration} · {stops}
          </div>
          <div className="w-full flex items-center">
            <div className="h-[1px] flex-1 border-t border-dashed border-gray-300"></div>
            <div className="mx-2">
              {direction === 'outbound' ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                </svg> : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <path d="M6.2 19.2L8 11l-3.5-3.5C3 6 2.5 4 3 3c1-.5 3 0 4.5 1.5L11 8l8.2-1.8c.5-.1.9.1 1.1.5l.3.5c.2.5.1 1-.3 1.3L15 12l2 3h3l1 1-3 2-2 3-1-1v-3l-3-2-3.5 5.3c-.3.4-.8.5-1.3.3l-.5-.2c-.4-.3-.6-.7-.5-1.2z" />
                </svg>}
            </div>
            <div className="h-[1px] flex-1 border-t border-dashed border-gray-300"></div>
          </div>
          <div className="text-xs text-gray-600 flex items-center mt-1">
            <AirlineLogo airline={airline} />
            <span>{airline}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold">{arrivalTime}</div>
          <div className="text-sm font-medium text-gray-700">{arrivalCode}</div>
        </div>
      </div>
      <motion.button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center justify-center w-full mt-2 pt-2 border-t text-gray-500 hover:text-gray-700" animate={{
      rotate: isExpanded ? 180 : 0
    }} transition={{
      duration: 0.3
    }}>
        <ChevronDown strokeWidth={2.2} size={20} />
      </motion.button>
      <AnimatePresence>
        {isExpanded && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: 0.3,
        ease: 'easeInOut'
      }} className="overflow-hidden">
            <div className="mt-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-gray-500">Aircraft</div>
                  <div className="font-medium">Boeing 787-9</div>
                </div>
                <div>
                  <div className="text-gray-500">Flight Number</div>
                  <div className="font-medium">LH 456</div>
                </div>
                <div>
                  <div className="text-gray-500">Cabin</div>
                  <div className="font-medium">Economy</div>
                </div>
                <div>
                  <div className="text-gray-500">Seat Layout</div>
                  <div className="font-medium">3-3-3</div>
                </div>
              </div>
              <AirlineComparison airlines={mockAirlines} />
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}