import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Calendar, Heart, Share2, Play, Phone, Mail } from 'lucide-react';
import BookingModal from '../components/BookingModal';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const [bookingModal, setBookingModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const property = {
    id: 1,
    title: "Luxury Waterfront Villa",
    location: "Miami Beach, FL",
    price: "$2,850,000",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,200",
    yearBuilt: "2020",
    propertyType: "Villa",
    images: [
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    description: "Experience luxury living at its finest in this stunning waterfront villa. This architectural masterpiece offers breathtaking ocean views, premium finishes, and exceptional attention to detail throughout. The open-concept design seamlessly blends indoor and outdoor living, perfect for entertaining or peaceful relaxation.",
    features: [
      "Ocean front location with private beach access",
      "Gourmet kitchen with top-of-the-line appliances",
      "Master suite with panoramic water views",
      "Infinity pool and spa",
      "Private dock for yacht",
      "Smart home automation system",
      "High-end security system",
      "Three-car garage"
    ],
    agent: {
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      phone: "+1 (555) 123-4567",
      email: "sarah@eliteproperties.com",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 animate-fade-in-up">
          <div className="relative">
            <img
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl"
            />
            <button className="absolute top-4 right-4 bg-white/90 p-3 rounded-full hover:bg-white transition-colors">
              <Play className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${property.title} ${index + 2}`}
                className="w-full h-44 lg:h-[190px] object-cover rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setCurrentImageIndex(index + 1)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Property Details */}
          <div className="lg:col-span-2">
            <div className="animate-fade-in-up animation-delay-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-1" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="h-6 w-6 text-gray-600" />
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="h-6 w-6 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-8 p-6 bg-gray-50 rounded-2xl">
                <div className="text-center">
                  <Bed className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-semibold text-gray-900">{property.bedrooms}</p>
                  <p className="text-gray-600">Bedrooms</p>
                </div>
                <div className="text-center">
                  <Bath className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-semibold text-gray-900">{property.bathrooms}</p>
                  <p className="text-gray-600">Bathrooms</p>
                </div>
                <div className="text-center">
                  <Square className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-semibold text-gray-900">{property.area}</p>
                  <p className="text-gray-600">Sq Ft</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50 rounded-2xl">
                <div>
                  <p className="text-gray-600 mb-1">Property Type</p>
                  <p className="font-semibold text-gray-900">{property.propertyType}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Year Built</p>
                  <p className="font-semibold text-gray-900">{property.yearBuilt}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Lot Size</p>
                  <p className="font-semibold text-gray-900">0.5 acres</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">HOA Fees</p>
                  <p className="font-semibold text-gray-900">$450/month</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="animate-fade-in-up animation-delay-400">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg sticky top-32">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{property.price}</div>
                <p className="text-gray-600">Asking Price</p>
              </div>

              <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 rounded-xl">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{property.agent.name}</h3>
                  <p className="text-gray-600 text-sm">{property.agent.title}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <span>{property.agent.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <span>{property.agent.email}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setBookingModal(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Viewing</span>
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold transition-colors">
                  Contact Agent
                </button>
                <button className="w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-lg font-semibold transition-colors">
                  Get Financing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModal}
        onClose={() => setBookingModal(false)}
        propertyId={parseInt(id || '1')}
      />
    </div>
  );
};

export default PropertyDetailsPage;