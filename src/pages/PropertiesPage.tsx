import React, { useState } from 'react';
import { Search, MapPin, Home as HomeIcon, DollarSign, Filter, Bed, Bath, Square, Heart, Calendar } from 'lucide-react';
import BookingModal from '../components/BookingModal';

const PropertiesPage = () => {
  const [bookingModal, setBookingModal] = useState({ isOpen: false, propertyId: null });
  const [likedProperties, setLikedProperties] = useState<number[]>([]);
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: '',
    bathrooms: '',
    sortBy: 'newest'
  });

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
      type: "villa"
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
      type: "apartment"
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
      type: "house"
    },
    {
      id: 4,
      title: "Stunning City Apartment",
      location: "Chicago, IL",
      price: "$1,200,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,800",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "apartment"
    },
    {
      id: 5,
      title: "Elegant Suburban Villa",
      location: "Austin, TX",
      price: "$950,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,900",
      image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "house"
    },
    {
      id: 6,
      title: "Luxury Condo with View",
      location: "San Francisco, CA",
      price: "$2,100,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,600",
      image: "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "condo"
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
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Properties</h1>
          <p className="text-xl text-gray-600">
            Discover our exclusive collection of luxury real estate
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Locations</option>
                <option value="miami">Miami Beach, FL</option>
                <option value="manhattan">Manhattan, NY</option>
                <option value="beverly-hills">Beverly Hills, CA</option>
                <option value="chicago">Chicago, IL</option>
                <option value="austin">Austin, TX</option>
                <option value="san-francisco">San Francisco, CA</option>
              </select>
            </div>

            <div className="relative">
              <HomeIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Types</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="villa">Villa</option>
              </select>
            </div>

            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Prices</option>
                <option value="0-1000000">Under $1M</option>
                <option value="1000000-2000000">$1M - $2M</option>
                <option value="2000000-3000000">$2M - $3M</option>
                <option value="3000000+">$3M+</option>
              </select>
            </div>

            <select
              value={filters.bedrooms}
              onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Beds</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>

            <select
              value={filters.bathrooms}
              onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Baths</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>

            <select
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="size">Size</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Showing {properties.length} properties
            </p>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <Filter className="h-5 w-5" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
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

                <div className="flex space-x-3">
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                    View Details
                  </button>
                  <button
                    onClick={() => openBookingModal(property.id)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-1"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Load More Properties
          </button>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ isOpen: false, propertyId: null })}
        propertyId={bookingModal.propertyId}
      />
    </div>
  );
};

export default PropertiesPage;