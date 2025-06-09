

import { CircleX } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateInfluencers, UpdateInfluencers } from '../../features/Admin/Adminslice';

const InfluencerForm = ({ onClose }) => {

  const { InfluencersEdit, isLoading, isError, Message } = useSelector(
    (state) => state.admin
  );


const dispatch= useDispatch()

  const [formdata, setfromdata] = useState({
    name: '',
    instagram_headle: '',
    followers: '',
    isactive: '',
    location: '',
    niche: '',
    profliepic: '',
    rate: '',
    gender: '',
  });

  const {
    name,
    instagram_headle,
    followers,
    isactive,
    niche,
    profliepic,
    rate,
    location,
    gender,
  } = formdata;

  const handlechange = (e) => {
    setfromdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !InfluencersEdit.isEdit ?
    dispatch(CreateInfluencers(formdata)): dispatch(UpdateInfluencers(formdata)) 
  
    onClose();
  };


  useEffect(()=>{
    if (InfluencersEdit.isEdit) {
      setfromdata(InfluencersEdit.edit);
    }
  },[InfluencersEdit])
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-2">
      <div className="bg-gray-900 w-full max-w-2xl p-6 rounded-lg relative text-white max-h-screen overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 text-lg hover:scale-110"
        >
          <CircleX />
        </button>

        <h3 className="text-2xl font-semibold mb-4 text-center">
          Add New Influencer
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              name="name"
              type="text"
              required
                value={name}
              onChange={handlechange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="Influencer Name"
            />
          </div>

          <div>
            <label className="block mb-1">Instagram Handle</label>
            <input
              name="instagram_headle"
              type="text"
              required
                value={instagram_headle}
              onChange={handlechange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="@handle"
            />
          </div>

          <div>
            <label className="block mb-1">Followers</label>
            <input
              name="followers"
              type="text"
              required
                value={followers}
              onChange={handlechange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="Followers"
            />
          </div>

          <div>
            <label className="block mb-1">Location</label>
            <input
              name="location"
              type="text"
              required
                value={location}
              onChange={handlechange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="indore"
            />
          </div>

          <div>
            <label className="block mb-1">Rate</label>
            <input
              name="rate"
              type="text"
              required
                value={rate}
              onChange={handlechange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="10000"
            />
          </div>

          <div>
            <label className="block mb-1">Profile Pic URL</label>
            <input
              name="profliepic"
              type="text"
              required
                value={profliepic}
              onChange={handlechange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="http://example.com/pic.jpg"
            />
          </div>

          {/* <div>
            <label className="block mb-1">Status</label>
            <select
              name="isactive"
              required
                value={isactive}
              onChange={handlechange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              <option value="">Select status</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div> */}

          <div>
            <label className="block mb-1">Gender</label>
            <select
              name="gender"
              required
                value={gender}
              onChange={handlechange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Niche</label>
            <select
              name="niche"
              required
                value={niche}
              onChange={handlechange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              <option value="">Select Niche</option>
              <option value="comic">Comic</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="education">Education</option>
              <option value="technology">Technology</option>
              <option value="fashion">Fashion</option>
              <option value="sports">Sports</option>
              <option value="gaming">Gaming</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-pink-600 px-4 py-2 rounded text-white hover:bg-pink-700 w-full"
          >
            {
              InfluencersEdit.isEdit ===false ? ' Save Influencer':'Update Influencer'
            }
           
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfluencerForm;