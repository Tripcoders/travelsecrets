import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
interface PriceComparisonProps {
  originalSite: string;
  originalPrice: number;
  discountSite: string;
  discountPrice: number;
  discountTag?: string;
  type: 'flights' | 'hotels';
}
export function PriceComparison({
  originalSite,
  originalPrice,
  discountSite,
  discountPrice,
  discountTag,
  type
}: PriceComparisonProps) {
  const competitors = type === 'flights' ? [{
    name: 'Expedia',
    price: originalPrice + 150
  }, {
    name: 'Kayak',
    price: originalPrice + 89
  }, {
    name: 'Skyscanner',
    price: originalPrice + 45
  }, {
    name: originalSite,
    price: originalPrice
  }] : [{
    name: 'Hotels.com',
    price: originalPrice + 120
  }, {
    name: 'Expedia',
    price: originalPrice + 95
  }, {
    name: 'Agoda',
    price: originalPrice + 75
  }, {
    name: originalSite,
    price: originalPrice
  }];
  const savings = Math.round(originalPrice - discountPrice);
  const maxPrice = Math.max(...competitors.map(c => c.price));
  const savingsFromMax = Math.round(maxPrice - discountPrice);
  return <div className="space-y-4 mt-6 bg-gray-50 rounded-lg p-4">
      <div className="text-sm font-medium text-gray-600 mb-3">
        Compare prices:
      </div>
      <div className="space-y-2">
        {competitors.map((competitor, index) => <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} key={competitor.name} className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
            <div className="text-gray-600">{competitor.name}</div>
            <div className="text-gray-500 line-through">
              ${competitor.price}
            </div>
          </motion.div>)}
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5
      }} className="flex justify-between items-center bg-white rounded-lg p-3 border-2 border-[#FF385C]">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full ${type === 'flights' ? 'bg-[#FF385C]' : 'bg-[#003580]'} flex items-center justify-center text-white font-bold mr-2`}>
              <Check size={16} strokeWidth={3} />
            </div>
            <div>
              <div className="font-medium">{discountSite}</div>
              {discountTag && <div className="text-xs text-gray-500">{discountTag}</div>}
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#FF385C]">
              ${discountPrice}
            </div>
            <div className="text-xs text-emerald-600 font-medium text-right">
              Save up to ${savingsFromMax}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="text-center">
          <span className="text-sm text-gray-600">
            Total savings with TravelSaver:{' '}
          </span>
          <span className="font-bold text-emerald-600">
            up to ${savingsFromMax}
          </span>
        </div>
      </div>
    </div>;
}