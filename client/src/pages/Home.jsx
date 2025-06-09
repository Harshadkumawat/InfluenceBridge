import React, { useEffect, useState } from "react";
import {
  Search,
  Filter,
  Users,
  MapPin,
  TrendingUp,
  Award,
  Star,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import SearchFilters from "../components/homecomponets/SearchFilters";
import FeatureCards from "../components/homecomponets/FeatureCards";
import InfluencerList from "../components/homecomponets/InfluencerList";
import { GetallInfluencerforAdmin } from "../features/Admin/Adminslice";

function Home() {
  const dispatch = useDispatch();
  const { Influencers } = useSelector((state) => state.admin);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  useEffect(() => {
    dispatch(GetallInfluencerforAdmin());
  }, [dispatch]);

  const categories = [
    "all",
    "lifestyle",
    "education",
    "technology",
    "fashion",
    "sports",
    "comic",
    "devotional",
    "podcast",
    "fitness",
    "gaming",
    "food",
    "other",
  ];
  const genders = ["all", "male", "female", "other"];

  const filteredInfluencers = Influencers.filter((influencer) => {
    const matchesSearch = influencer.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || influencer.niche === selectedCategory;
    const matchesLocation =
      selectedLocation === "all" || influencer.gender === selectedLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Glowing BG Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-10 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-2xl opacity-20 animate-pulse delay-2000" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-black to-gray-900 opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(236,72,153,0.1),transparent_60%)]" />
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-20 relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-md animate-fade-in">
            Discover Top Influencers
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Connect with influential voices across diverse categories and
            locations to amplify your brand.
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-5xl mx-auto mb-16">
          <SearchFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            categories={categories}
            genders={genders}
          />
        </div>

        {/* Influencer List */}
        <div className="mb-20">
          <InfluencerList influencers={filteredInfluencers} />
        </div>

        {/* Feature Cards */}
        <FeatureCards />
      </div>
    </div>
  );
}

export default Home;
