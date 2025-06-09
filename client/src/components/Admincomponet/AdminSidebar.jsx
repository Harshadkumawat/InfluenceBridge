import React from "react";
import {
  Users,
  UserPlus,
  MessageSquare,
  Calendar,
  Dessert,
  Home,
} from "lucide-react";

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      key: "Dashboardstatus",
      label: "Dashboardstatus",
      icon: <Home size={15} className="sm:size-10" />,
    },

    {
      key: "influencers",
      label: "Influencers",
      icon: <Users size={16} className="sm:size-10" />,
    },
    {
      key: "users",
      label: "Users",
      icon: <UserPlus size={16} className="sm:size-10" />,
    },
    {
      key: "bookings",
      label: "Bookings",
      icon: <Calendar size={16} className="sm:size-10" />,
    },
    {
      key: "comments",
      label: "Comments",
      icon: <MessageSquare size={16} className="sm:size-10" />,
    },
  ];

  return (
    <div className="w-full sm:w-64 bg-gray-800/30 backdrop-blur-md min-h-[auto] sm:min-h-screen p-3 sm:p-4">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-8">
        Admin Dashboard
      </h2>
      <nav className="flex sm:flex-col gap-2 sm:space-y-2 overflow-x-auto sm:overflow-x-visible">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg transition whitespace-nowrap ${
              activeTab === tab.key
                ? "bg-pink-500 text-white"
                : "text-gray-400 hover:bg-gray-700/50"
            }`}
          >
            {tab.icon}
            <span className="text-sm sm:text-base">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
