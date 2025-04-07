import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
interface CountdownTimerProps {
  validUntil: string; // ISO date string
}
export function CountdownTimer({
  validUntil
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState('');
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const validDate = new Date(validUntil).getTime();
      const difference = validDate - now;
      if (difference <= 0) {
        return 'Expired';
      }
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
      return `${hours}h ${minutes}m`;
    };
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [validUntil]);
  return <div className="flex items-center text-sm text-gray-600">
      <Clock size={14} strokeWidth={2.2} className="mr-1" />
      <span>Valid for: {timeLeft}</span>
    </div>;
}