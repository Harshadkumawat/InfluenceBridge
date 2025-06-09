
import React from 'react';
import { Search, Filter, MapPin, Users, GemIcon } from 'lucide-react';

const SearchFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  // followerRange,
  // setFollowerRange,
  categories,
  genders,
  
}) => {
  return (
    <div className="bg-gray-800/30 backdrop-blur-md rounded-xl p-8 border border-gray-700/50">
      <div className="grid grid-cols-1 gap-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search influencers..."
            className="w-full bg-gray-700/30 text-white placeholder-gray-400 rounded-xl px-6 py-4 pl-14 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-600/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-5 top-4 text-gray-400" size={24} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Filter className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <select
              className="w-full bg-gray-700/30 text-white rounded-lg px-4 py-3 pl-12 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-600/50"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category} className="text-white bg-gray-800">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <GemIcon className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <select
              className="w-full bg-gray-700/30 text-white rounded-lg px-4 py-3 pl-12 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-600/50"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {genders.map(location => (
                <option key={location} value={location} className="text-white bg-gray-800">
                  {location.charAt(0).toUpperCase() + location.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* <div className="relative">
            <Users className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <select
              className="w-full bg-gray-700/30 text-white rounded-lg px-4 py-3 pl-12 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-600/50"
              value={followerRange}
              onChange={(e) => setFollowerRange(e.target.value)}
            >
              {followerRanges.map(range => (
                <option key={range.value} value={range.value} className="text-white bg-gray-800">
                  {range.label}
                </option>
              ))}
            </select>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;

