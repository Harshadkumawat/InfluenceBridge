import React from 'react';
import { MapPin, Instagram, Twitter, Youtube, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfluencerList = ({ influencers }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {influencers.map((influencer) => (
        <div
          key={influencer._id}
          className="group relative bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-purple-600/20 hover:border-pink-500 transition-all duration-300 shadow-md hover:shadow-pink-500/20"
        >
          {/* Glow on hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl rounded-2xl pointer-events-none transition-opacity duration-300" />

          {/* Avatar and Name */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={influencer.profliepic}
              alt={influencer.name}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-pink-500/60"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">{influencer.name}</h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={14} />
                <span>{influencer.location}</span>
              </div>
            </div>
          </div>

          {/* Niche Icons & Stats */}
          <div className="flex justify-between items-center mb-4 text-sm">
            {/* Social Icons based on niche */}
            <div className="flex items-center gap-3 text-pink-500">
              {influencer.niche === 'comic' && <Instagram size={20} />}
              {influencer.niche === 'technology' && <Twitter size={20} />}
              {influencer.niche === 'podcast' && <Youtube size={20} />}
            </div>

            {/* Followers & Engagement */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-white bg-gray-700/40 px-2 py-1 rounded-full text-xs">
                <Users size={14} />
                <span>{influencer.followers}</span>
              </div>
              <div className="text-green-400 bg-green-900/20 px-2 py-1 rounded-full text-xs">
                {influencer.engagement} Engagement
              </div>
            </div>
          </div>

          {/* View Details Button */}
          <Link
            to={`auth/single/influncers/${influencer._id}`}
            className="w-full block bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white text-center py-2 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-pink-500/30"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InfluencerList;
