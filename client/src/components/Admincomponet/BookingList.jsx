

import React, { useEffect, useState } from 'react';
import { CheckCircle, Clock, ThumbsUp, XCircle } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdataBooking } from '../../features/Admin/Adminslice';

const BookingList = () => {
  const { bookings, isLoadin, isSuccess, isError, Message } = useSelector(state => state.admin);
// console.log(bookings)
const dispatch=useDispatch()

const updateBookingStatus=(id,value)=>{

  dispatch(UpdataBooking({id,value}))

}
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-white min-w-[640px]">
        <thead>
          <tr className="bg-gray-800/50">
            <th className="p-2 sm:p-4 text-left text-sm sm:text-base">Influencer</th>
            <th className="p-2 sm:p-4 text-left text-sm sm:text-base">Client</th>
            <th className="p-2 sm:p-4 text-left text-sm sm:text-base">Date</th>
            <th className="p-2 sm:p-4 text-left text-sm sm:text-base">Status</th>
            <th className="p-2 sm:p-4 text-left text-sm sm:text-base">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking._id} className="border-b border-gray-700/50">
              <td className="p-2 sm:p-4 text-sm sm:text-base">{booking?.influencer?.name}</td>
              <td className="p-2 sm:p-4 text-sm sm:text-base">{booking?.user?.name}</td>
              <td className="p-2 sm:p-4 text-sm sm:text-base">
                {new Date(booking.updatedAt).toLocaleDateString()}
              </td>
              <td className="p-2 sm:p-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs sm:text-sm ${
                    booking.status === 'completed'
                      ? 'bg-green-500/20 text-green-500'
                      : booking.status === 'pending'
                      ? 'bg-yellow-500/20 text-yellow-500'
                      : 'bg-red-500/20 text-red-500'
                  }`}
                >
                  {booking.status}
                </span>
              </td>
              <td className="p-2 sm:p-4">
                <div className="flex gap-1 sm:gap-2">
                  <button
                    className="p-1 hover:text-green-500"
                    onClick={() => updateBookingStatus(booking._id, 'completed')}
                  >
                    <CheckCircle size={16} className="sm:size-10" />
                  </button>
                  <button
                    className="p-1 hover:text-yellow-500"
                    onClick={() => updateBookingStatus(booking._id, 'pending')}
                  >
                    <Clock size={16} className="sm:size-10" />
                  </button>
                  <button
                    className="p-1 hover:text-red-500"
                    onClick={() => updateBookingStatus(booking._id, 'rejected')}
                  >
                    <XCircle size={16} className="sm:size-10" />
                  </button>


                  <button
    className="p-1 hover:text-green-400"
    onClick={() => updateBookingStatus(booking._id, 'accepted')}
  >
    <ThumbsUp size={16} className="sm:size-10" />
    <span className="sr-only">Accept</span>
  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
