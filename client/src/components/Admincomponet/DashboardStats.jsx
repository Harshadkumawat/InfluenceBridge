// components/Admincomponet/DashboardStats.js

import React, { useEffect, useRef } from "react";
import { UserCheck, Star, CalendarCheck, Users2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetallBookingforAdmin,
  GetallCommetforAdmin,
  GetallInfluencerforAdmin,
  GetallUserforadmin,
} from "../../features/Admin/Adminslice";

function DashboardStats() {
  const { Users, Influencers, bookings } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const didFetchRef = useRef(false);

  useEffect(() => {
    if (didFetchRef.current) return;
    didFetchRef.current = true;

    dispatch(GetallInfluencerforAdmin());
    dispatch(GetallUserforadmin());
    dispatch(GetallBookingforAdmin());
    dispatch(GetallCommetforAdmin());
  }, [dispatch]);

  const totalUsers = Users?.length || 0;
  const totalInfluencers = Influencers?.length || 0;
  const totalBookings = bookings?.length || 0;
  const totaladmin = Users?.filter((user) => user.isadmin)?.length || 0;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Users */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center space-x-4">
          <div className="text-3xl">
            <Users2 className="text-blue-400" />
          </div>
          <div>
            <h4 className="text-white text-sm">Total Users</h4>
            <p className="text-xl text-white font-bold">{totalUsers}</p>
          </div>
        </div>

        {/* Total Influencers */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center space-x-4">
          <div className="text-3xl">
            <Star className="text-yellow-400" />
          </div>
          <div>
            <h4 className="text-white text-sm">Total Influencers</h4>
            <p className="text-xl text-white font-bold">{totalInfluencers}</p>
          </div>
        </div>

        {/* Total Bookings */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center space-x-4">
          <div className="text-3xl">
            <CalendarCheck className="text-purple-400" />
          </div>
          <div>
            <h4 className="text-white text-sm">Total Bookings</h4>
            <p className="text-xl text-white font-bold">{totalBookings}</p>
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center space-x-4">
          <div className="text-3xl">
            <UserCheck className="text-green-400" />
          </div>
          <div>
            <h4 className="text-white text-sm">admin</h4>
            <p className="text-xl text-white font-bold">{totaladmin}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardStats;
