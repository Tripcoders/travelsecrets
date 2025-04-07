import React from 'react';
import { PriceAlert } from './PriceAlert';
import { HotelCard } from './HotelCard';
import { PriceComparison } from './PriceComparison';
import { RefreshDeals } from './RefreshDeals';
export function HotelDeals() {
  const handleRefresh = async () => {
    // Add refresh functionality for hotels
  };
  const hotels = [{
    name: 'Grand Plaza Hotel',
    location: 'Downtown, NYC',
    checkIn: 'May 11',
    checkOut: 'May 13',
    nights: 2,
    rating: 4.8,
    reviewCount: 320,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }, {
    name: 'Seaside Resort & Spa',
    location: 'Malibu, LA',
    checkIn: 'May 15',
    checkOut: 'May 18',
    nights: 3,
    rating: 4.9,
    reviewCount: 512,
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80'
  }, {
    name: 'The Ritz-Carlton',
    location: 'Central Park, NYC',
    checkIn: 'May 11',
    checkOut: 'May 13',
    nights: 2,
    rating: 4.9,
    reviewCount: 890,
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }, {
    name: 'Four Seasons Resort',
    location: 'Beverly Hills, LA',
    checkIn: 'May 15',
    checkOut: 'May 18',
    nights: 3,
    rating: 4.7,
    reviewCount: 645,
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }, {
    name: 'Mandarin Oriental',
    location: 'South Beach, Miami',
    checkIn: 'May 11',
    checkOut: 'May 14',
    nights: 3,
    rating: 4.8,
    reviewCount: 723,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }, {
    name: 'The Peninsula',
    location: 'River North, Chicago',
    checkIn: 'May 12',
    checkOut: 'May 15',
    nights: 3,
    rating: 4.6,
    reviewCount: 542,
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }, {
    name: 'Waldorf Astoria',
    location: 'The Strip, Las Vegas',
    checkIn: 'May 14',
    checkOut: 'May 16',
    nights: 2,
    rating: 4.7,
    reviewCount: 892,
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }];
  return <div className="relative pb-[140px]">
      <div className="space-y-4">
        <PriceAlert message="We found amazing hotel deals for you." discount="Save $120" />
        <div className="space-y-4">
          {hotels.map((hotel, index) => <HotelCard key={index} name={hotel.name} location={hotel.location} checkIn={hotel.checkIn} checkOut={hotel.checkOut} nights={hotel.nights} rating={hotel.rating} reviewCount={hotel.reviewCount} imageUrl={hotel.imageUrl} />)}
        </div>
        <PriceComparison originalSite="Booking.com" originalPrice={789} discountSite="TravelSaver Exclusive" discountPrice={669} discountTag="Member-only price" type="hotels" />
      </div>
      <RefreshDeals onRefresh={handleRefresh} validUntil="2024-01-20T23:59:59" type="hotels" />
    </div>;
}