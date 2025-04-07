import React from 'react';
interface PriceAlertProps {
  message: string;
  discount: string;
}
export function PriceAlert({
  message,
  discount
}: PriceAlertProps) {
  return <div className="text-center py-2">
      <h2 className="text-gray-800 text-xl font-semibold">
        {message} <span className="text-emerald-500 font-bold">{discount}</span>
      </h2>
    </div>;
}