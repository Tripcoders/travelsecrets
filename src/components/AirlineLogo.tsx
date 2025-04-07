import React from 'react';
interface AirlineLogoProps {
  airline: string;
  className?: string;
}
export function AirlineLogo({
  airline,
  className = 'w-4 h-4'
}: AirlineLogoProps) {
  const logos: Record<string, {
    color: string;
    text: string;
  }> = {
    Lufthansa: {
      color: '#05164D',
      text: 'LH'
    },
    'Delta Airlines': {
      color: '#E31837',
      text: 'DL'
    },
    'United Airlines': {
      color: '#002244',
      text: 'UA'
    },
    'American Airlines': {
      color: '#0078D2',
      text: 'AA'
    },
    'British Airways': {
      color: '#125580',
      text: 'BA'
    },
    'AIR CANADA': {
      color: '#F01428',
      text: 'AC'
    },
    Emirates: {
      color: '#D71921',
      text: 'EK'
    },
    KLM: {
      color: '#00A1DE',
      text: 'KL'
    },
    'Air France': {
      color: '#002157',
      text: 'AF'
    }
  };
  const airlineLogo = logos[airline];
  return <div className={`${className} rounded-full flex items-center justify-center mr-1`} style={{
    backgroundColor: airlineLogo?.color || '#gray-500'
  }}>
      <span className="text-white text-[10px] font-bold">
        {airlineLogo?.text || airline.substring(0, 2).toUpperCase()}
      </span>
    </div>;
}