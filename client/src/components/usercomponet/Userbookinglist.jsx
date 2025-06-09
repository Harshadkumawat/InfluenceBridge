import React from 'react';
import { Calendar, CheckCircle, Clock, XCircle } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const statusIcons = {
  pending: <Clock className="text-yellow-500" size={18} />,
  confirmed: <CheckCircle className="text-green-500" size={18} />,
  completed: <CheckCircle className="text-blue-500" size={18} />,
  cancelled: <XCircle className="text-red-500" size={18} />
};

const statusColors = {
  pending: 'bg-yellow-500/10 text-yellow-500',
  confirmed: 'bg-green-500/10 text-green-500',
  completed: 'bg-blue-500/10 text-blue-500',
  cancelled: 'bg-red-500/10 text-red-500'
};

const Userbookinglist = () => {




  const { Booking,bookingloading,bookingError, bookingsuccess,bookinMessage} = useSelector((state) => state.booking);    

// console.log(Booking)


  return (
    <div className="bg-gradient-to-br from-[#1f1c2c] to-[#928dab] rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Recent Bookings</h2>
      
      <div className="space-y-4">
        {Booking.map((booking) => (
          <div
            key={booking._id}
          
            className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-4 hover:border-purple-500 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-purple-400" />
                <span className="text-white">
                  {new Date(booking.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${statusColors[booking.status ]}`}>
                {statusIcons[booking.status ]}
                <span className="capitalize">{booking?.status}</span>
              </div>
            </div>
            
            <div className="text-purple-300 text-sm mb-2">
              {booking?.influencer?.name}
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">
                Ref: {booking?.influencer?._id}
              </span>
              <span className="text-white font-semibold">
         <Link 
           to={`/auth/single/influncers/${booking.influencer?._id} `}
           state={booking}
         >
          view
         </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userbookinglist;