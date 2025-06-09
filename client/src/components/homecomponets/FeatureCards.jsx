// components/FeatureCards.jsx
import React from 'react';
import { TrendingUp, Award, Star } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      icon: <TrendingUp className="text-pink-500 mb-4" size={24} />,
      title: 'Top Performance',
      desc: 'Find influencers with the highest engagement rates and authentic followers.',
    },
    {
      icon: <Award className="text-purple-500 mb-4" size={24} />,
      title: 'Verified Profiles',
      desc: 'All influencers are verified and vetted for quality and authenticity.',
    },
    {
      icon: <Star className="text-pink-500 mb-4" size={24} />,
      title: 'Premium Selection',
      desc: 'Access to exclusive influencers across various niches and categories.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 mt-5">
      {features.map((f, i) => (
        <div
          key={i}
          className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:transform hover:scale-105 transition duration-300"
        >
          {f.icon}
          <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
          <p className="text-gray-400">{f.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
