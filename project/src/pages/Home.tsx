import React, { useState } from 'react';
import { Car, MapPin, Clock, Search, Shield, Briefcase, ChevronDown } from 'lucide-react';

interface RideOption {
  id: string;
  name: string;
  price: string;
  time: string;
  icon: React.ReactNode;
  description?: string;
}

export default function Home() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedRide, setSelectedRide] = useState<string | null>(null);

  const rideOptions: RideOption[] = [
    { 
      id: 'uberx', 
      name: 'UberX', 
      price: '$24.00', 
      time: '4 min away', 
      icon: <Car size={24} />,
      description: 'Affordable, everyday rides'
    },
    { 
      id: 'comfort', 
      name: 'Comfort', 
      price: '$32.00', 
      time: '6 min away', 
      icon: <Car size={24} />,
      description: 'Newer cars with extra legroom'
    },
    { 
      id: 'xl', 
      name: 'UberXL', 
      price: '$48.00', 
      time: '8 min away', 
      icon: <Car size={24} />,
      description: 'Affordable rides for groups up to 6'
    },
  ];

  const navLinks = [
    { name: 'Request a ride', href: '#', current: true },
    { name: 'Reserve a ride', href: '#', current: false },
    { name: 'See prices', href: '#', current: false },
    { name: 'Explore ride options', href: '#', current: false },
    { name: 'Airport rides', href: '#', current: false },
  ];

  return (
    <>
      {/* Secondary Navigation */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`py-4 border-b-2 whitespace-nowrap ${
                  link.current
                    ? 'border-black text-black font-semibold'
                    : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Left Panel */}
        <div className="w-full md:w-[400px] bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-6">Request a ride now</h2>
          
          {/* Location Inputs */}
          <div className="space-y-4 mb-8">
            <div className="relative">
              <MapPin className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Enter pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="relative">
              <Search className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Enter destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          {/* Safety Message */}
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg mb-8">
            <Shield className="text-gray-600" size={24} />
            <p className="text-sm text-gray-600">
              Your safety is our priority. Read about our COVID-19 response.
            </p>
          </div>

          {/* Ride Options */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold">Choose a ride</h3>
            {rideOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedRide(option.id)}
                className={`w-full flex items-center justify-between p-4 rounded-lg border ${
                  selectedRide === option.id ? 'border-black bg-gray-50' : 'border-gray-200'
                } hover:border-black transition-colors`}
              >
                <div className="flex items-center space-x-4">
                  {option.icon}
                  <div className="text-left">
                    <p className="font-semibold">{option.name}</p>
                    <p className="text-sm text-gray-500">{option.description}</p>
                    <p className="text-sm text-gray-500">{option.time}</p>
                  </div>
                </div>
                <span className="font-semibold">{option.price}</span>
              </button>
            ))}
          </div>

          {/* Business Profile */}
          <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-black mb-4">
            <div className="flex items-center space-x-3">
              <Briefcase size={20} />
              <span>Personal</span>
            </div>
            <ChevronDown size={16} />
          </button>

          {/* Schedule Button */}
          <button className="w-full flex items-center justify-center space-x-2 p-4 border border-gray-200 rounded-lg hover:border-black mb-4">
            <Clock size={20} />
            <span>Schedule for later</span>
          </button>

          {/* Request Button */}
          <button
            className={`w-full py-4 rounded-lg font-semibold transition-colors ${
              !pickup || !destination || !selectedRide
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
            disabled={!pickup || !destination || !selectedRide}
          >
            Request {selectedRide && rideOptions.find(o => o.id === selectedRide)?.name}
          </button>
        </div>

        {/* Right Panel - Map */}
        <div className="flex-1 bg-gray-200 rounded-lg min-h-[400px] md:min-h-[600px]">
          {/* Map placeholder - In a real app, this would be your map component */}
          <div className="h-full flex items-center justify-center text-gray-500">
            Map view would go here
          </div>
        </div>
      </main>
    </>
  );
}