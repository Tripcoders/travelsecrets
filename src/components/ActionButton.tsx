import React from 'react';
interface ActionButtonProps {
  text: string;
  color: 'green' | 'blue' | 'pink';
}
export function ActionButton({
  text,
  color
}: ActionButtonProps) {
  const colorClasses = {
    green: 'bg-emerald-500 hover:bg-emerald-600',
    blue: 'bg-blue-500 hover:bg-blue-600',
    pink: 'bg-[#FF385C] hover:bg-[#E0314F]'
  };
  return <button className={`w-full py-3 rounded-lg text-white font-medium ${colorClasses[color]}`}>
      {text}
    </button>;
}