import React from 'react';
import { ArrowDown } from 'lucide-react';
interface Airline {
  name: string;
  price: number;
  logo: string;
  departure: string;
  arrival: string;
}
interface AirlineComparisonProps {
  airlines: Airline[];
}
export function AirlineComparison({
  airlines
}: AirlineComparisonProps) {
  const sortedAirlines = [...airlines].sort((a, b) => a.price - b.price);
  return <div className="space-y-2 mt-3 border-t pt-3">
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
        <ArrowDown size={14} strokeWidth={2.2} />
        <span>More options from other airlines</span>
      </div>
      {sortedAirlines.map((airline, index) => <div key={airline.name} className={`flex items-center justify-between p-2 rounded ${index === 0 ? 'bg-emerald-50 border border-emerald-100' : 'bg-gray-50'}`}>
          <div className="flex items-center gap-2">
            <img src={airline.logo} alt={airline.name} className="w-6 h-6 rounded-full" />
            <div>
              <div className="font-medium text-sm">{airline.name}</div>
              <div className="text-xs text-gray-500">
                {airline.departure} - {airline.arrival}
              </div>
            </div>
          </div>
          <div className={`font-bold ${index === 0 ? 'text-emerald-600' : 'text-gray-700'}`}>
            ${airline.price}
          </div>
        </div>)}
    </div>;
}