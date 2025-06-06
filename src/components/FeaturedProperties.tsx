import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, Heart, Calendar, Play } from 'lucide-react';
import BookingModal from './BookingModal';

const FeaturedProperties = () => {
  const [bookingModal, setBookingModal] = useState({ isOpen: false, propertyId: null });
  const [likedProperties, setLikedProperties] = useState<number[]>([]);

  const properties = [
    {
      id: 1,
      title: "Luxury Waterfront Villa",
      location: "Miami Beach, FL",
      price: "$2,850,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,200",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      hasVirtualTour: true
    },
    {
      id: 2,
      title: "Modern Downtown Penthouse",
      location: "Manhattan, NY",
      price: "$4,200,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "2,800",
      image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      hasVirtualTour: true
    },
    {
      id: 3,
      title: "Contemporary Family Home",
      location: "Beverly Hills, CA",
      price: "$3,500,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "4,100",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      hasVirtualTour: false
    }
  ];

  const toggleLike = (propertyId: number) => {
    setLikedProperties(prev => 
      prev.includes(propertyId)
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const openBookingModal = (propertyId: number) => {
    setBookingModal({ isOpen: true, propertyId });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties that offer the finest in luxury living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => toggleLike(property.id)}
                    className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                      likedProperties.includes(property.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                  {property.hasVirtualTour && (
                    <button className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-blue-500 hover:text-white transition-colors">
                      <Play className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {property.title}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                </div>

                <div className="flex items-center justify-between text-gray-600 mb-6">
                  <div className="flex items-center space-x-1">
                    <Bed className="h-4 w-4" />
                    <span className="text-sm">{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="h-4 w-4" />
                    <span className="text-sm">{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="h-4 w-4" />
                    <span className="text-sm">{property.area} sqft</span>
                  </div>
                </div>

                <button
                  onClick={() => openBookingModal(property.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 group"
                >
                  <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Book Viewing</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            View All Properties
          </button>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ isOpen: false, propertyId: null })}
        propertyId={bookingModal.propertyId}
      />
    </section>
  );
};

export default FeaturedProperties;