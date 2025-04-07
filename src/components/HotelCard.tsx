import React from 'react';
import { MapPin, Star } from 'lucide-react';
interface HotelCardProps {
  name: string;
  location: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
}
export function HotelCard({
  name,
  location,
  checkIn,
  checkOut,
  nights,
  rating,
  reviewCount,
  imageUrl
}: HotelCardProps) {
  return <div className="border rounded-lg overflow-hidden bg-white">
      <div className="h-32 relative">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        <div className="absolute bottom-2 left-2 bg-white rounded-full px-2 py-1 text-xs font-medium">
          {nights} {nights === 1 ? 'night' : 'nights'}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <MapPin size={14} strokeWidth={2.2} className="mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-sm">
            <span className="text-gray-500">{checkIn}</span>
            <span className="mx-2">→</span>
            <span className="text-gray-500">{checkOut}</span>
          </div>
          <div className="flex items-center">
            <Star size={16} fill="#FFD700" stroke="#FFD700" className="mr-1" />
            <span className="font-medium">{rating}</span>
            <span className="text-gray-500 text-sm ml-1">({reviewCount})</span>
          </div>
        </div>
      </div>
    </div>;
}