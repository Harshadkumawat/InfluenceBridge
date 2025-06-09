import React, { useState } from 'react';
import { UserRound, Mail, Phone, Save, IdCard } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthUpdateuser } from '../../features/Auth/authslice';
// import { AuthUpdateuser } from '../../features/Auth/Authslice';
// import { AuthUpdateuser } from '...';

const UserProfile = () => {
  const {users}=useSelector(state=>state.auth)

  // const [profile, setProfile] = useState(users);

  const dispatch =useDispatch()
// console.log(profile)
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name:''
, email:''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
 
    dispatch(AuthUpdateuser({id:users.id, ...formData}))
    setIsEditing(false);
  };

  return (
    <div className="bg-gradient-to-br from-[#1f1c2c] to-[#928dab] rounded-xl p-6 mb-6">
      <h2 className="text-2xl font-bold text-white mb-6">Profile Information</h2>
      
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-purple-300 text-sm">Name</label>
            <div className="flex items-center gap-2">
              <UserRound size={20} className="text-purple-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-gray-800/50 border border-purple-500 rounded-lg px-4 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-purple-300 text-sm">Email</label>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-purple-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-gray-800/50 border border-purple-500 rounded-lg px-4 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
{/* 
          <div className="space-y-2">
            <label className="text-purple-300 text-sm">Phone</label>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-purple-400" />
              <input
                type="tel"
              
               value={users._id}
               readOnly
            
                className="bg-gray-800/50 border border-purple-500 rounded-lg px-4 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div> */}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-purple-300 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-white">
            <UserRound size={20} className="text-purple-400" />
            <span>{users.name}</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Mail size={20} className="text-purple-400" />
            <span>{users.email}</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <IdCard size={20} className="text-purple-400" />
            <span>{users.id}</span>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setIsEditing(true)}
              className="text-purple-300 hover:text-white transition-colors"
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;