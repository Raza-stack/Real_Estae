import React, { useState } from 'react';
import { Search, MapPin, Home as HomeIcon, DollarSign } from 'lucide-react';

const Hero = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: '',
    bathrooms: ''
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search data:', searchData);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed animate-slow-zoom"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Find Your
            <span className="block text-blue-300">Dream Home</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Discover luxury properties that match your lifestyle with our expert guidance and premium service
          </p>

          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={searchData.location}
                  onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Location</option>
                  <option value="downtown">Downtown</option>
                  <option value="uptown">Uptown</option>
                  <option value="suburbs">Suburbs</option>
                  <option value="waterfront">Waterfront</option>
                </select>
              </div>

              <div className="relative">
                <HomeIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={searchData.propertyType}
                  onChange={(e) => setSearchData({ ...searchData, propertyType: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="villa">Villa</option>
                </select>
              </div>

              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={searchData.priceRange}
                  onChange={(e) => setSearchData({ ...searchData, priceRange: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Price Range</option>
                  <option value="0-500000">$0 - $500K</option>
                  <option value="500000-1000000">$500K - $1M</option>
                  <option value="1000000-2000000">$1M - $2M</option>
                  <option value="2000000+">$2M+</option>
                </select>
              </div>

              <div>
                <select
                  value={searchData.bedrooms}
                  onChange={(e) => setSearchData({ ...searchData, bedrooms: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Bedrooms</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;