import React, { useEffect } from "react";
import UserProfile from "../components/usercomponet/UserProfile";
import Userbookinglist from "../components/usercomponet/Userbookinglist";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FetchUsersBooking } from "../features/booking/bookingslice";
// import { FetchUsersBooking } from '../features/booking/bookingslice';

const UserDashboard = () => {
  const { users } = useSelector((state) => state.auth);
  const {
    Booking,
    bookingloading,
    bookingError,
    bookingsuccess,
    bookinMessage,
  } = useSelector((state) => state.booking);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchUsersBooking());
  }, []);

  useEffect(() => {
    if (!users || Object.keys(users).length === 0) {
      navigate("/login");
    }
  }, [users, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f1c2c] to-[#928dab] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Dashboard
        </h1>
        <UserProfile /> {/* Integrated UserProfile component */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* Account Overview Section */}
          <div className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-6 w-full md:w-1/3 hover:border-purple-500 transition-colors">
            <h2 className="text-white border-b border-purple-500/30 pb-2 mb-4 text-lg">
              Account Overview
            </h2>
            <div className="space-y-4 text-gray-400">
              <p>
                Member since:{" "}
                {new Date(users?.memberSince).toLocaleDateString("en-IN") ||
                  "March 2024"}
              </p>
              <p>Total bookings: {Booking.length || 0}</p>
              <p>Upcoming bookings: {users?.upcomingBookings || 1}</p>
            </div>
          </div>
          {/* Your Bookings Section */}
          <div className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-6 w-full md:w-2/3 hover:border-purple-500 transition-colors">
            <h2 className="text-white border-b border-purple-500/30 pb-2 mb-4 text-lg">
              Your Bookings
            </h2>
            <Userbookinglist /> {/* Integrated Userbookinglist component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
