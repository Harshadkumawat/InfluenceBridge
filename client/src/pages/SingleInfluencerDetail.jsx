import React, { useEffect, useState } from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Calendar,
  MapPin,
  Users,
  Link,
  Send,
  MessageCircle,
  Search,
  Filter,
  Star,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { GetSingleIngluencers } from "../features/influencers/Influencerslice";
import { ADDUsersBooking } from "../features/booking/bookingslice";
import { AddCommentUser, GetAllCommentUser } from "../features/comment/commentslice";
import { toast } from "react-toastify";

function Singleinfluncersdetali() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { influencer, isLoading, isError, Message } = useSelector((state) => state.influencer);
  const { Booking, bookingloading, bookingError, bookingSuccess, bookinMessage } = useSelector(
    (state) => state.booking
  );
  const { usercomment, commentLoading, commentError, commentsuccess, commentMessage } = useSelector(
    (state) => state.comment
  );

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [newComment, setNewComment] = useState("");
  const location = useLocation();

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    dispatch(AddCommentUser({ _id: location.state?._id, text: newComment }));
    setNewComment("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ADDUsersBooking(id));
  };

  useEffect(() => {
    dispatch(GetSingleIngluencers(id));
    if (location.state) {
      dispatch(GetAllCommentUser(location.state._id));
    }
    if (bookingSuccess) {
      toast.success("Booking added successfully");
    }
  }, [dispatch, id, location.state, bookingSuccess]);

  return (
    <div className="min-h-screen text-white" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)" }}>
      {/* Background Glow Effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(107,72,255,0.2),transparent_70%)]" />
      </div>

      {/* Search Bar */}
      <div className="bg-[#1A1A2E]/80 backdrop-blur-md border-b border-[#6B48FF]/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-[#6B48FF]" />
            <input
              type="text"
              placeholder="Search influencers..."
              className="w-full bg-[#2A2A4A] text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B48FF]/50 transition-all placeholder-[#A3A6B4]"
            />
            <div className="flex gap-2 ml-4">
              <button className="bg-[#2A2A4A] p-3 rounded-xl hover:bg-[#3A3A5A] transition-all">
                <Filter className="w-5 h-5 text-[#6B48FF]" />
              </button>
              <button className="bg-[#2A2A4A] px-4 py-2 rounded-xl hover:bg-[#3A3A5A] transition-all text-[#A3A6B4]">
                All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-[#2A2A4A]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-[#6B48FF]/20">
          {/* Header Image */}
          <div className="h-56 relative" style={{ background: "linear-gradient(90deg, #6B48FF 0%, #FF4B91 100%)" }}>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1920')",
              }}
            />
          </div>

          {/* Profile Section */}
          <div className="px-6 pb-8 sm:px-8">
            <div className="flex flex-col md:flex-row gap-6 -mt-16">
              <img
                src={influencer.profliepic || "https://api.dicebear.com/7.x/initials/svg?seed=Profile"}
                alt="Profile"
                className="w-28 h-28 rounded-2xl border-4 border-[#1A1A2E] shadow-xl object-cover z-10"
              />
              <div className="flex-1 pt-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h1 className="text-4xl mt-4 font-bold bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #6B48FF, #FF4B91)" }}>
                      {influencer.name || "Influencer Name"}
                    </h1>
                    <div className="flex items-center gap-2 mt-2 text-[#A3A6B4]">
                      <MapPin className="w-5 h-5 text-[#00C4FF]" />
                      <span>{influencer.location || "Unknown Location"}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-[#A3A6B4]">
                      <Star className="w-5 h-5 text-[#FF4B91]" />
                      <span>{influencer.rate || "N/A"}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="bg-[#2A2A4A] px-4 py-2 rounded-xl font-medium hover:bg-[#3A3A5A] transition-all flex items-center gap-2 text-[#A3A6B4]"
                    >
                      <Link className="w-5 h-5 text-[#6B48FF]" />
                      {location?.state?._id ? `Ref: ${location.state._id}` : "Share Profile"}
                    </a>
                    <button
                      onClick={() => setIsBookingModalOpen(true)}
                      className="px-6 py-2 rounded-xl font-medium transition-all text-white shadow-lg hover:shadow-[#6B48FF]/50"
                      style={{ background: "linear-gradient(90deg, #6B48FF, #FF4B91)" }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#00C4FF]" />
                    <span className="font-semibold text-white">{influencer?.instagram_headle || "N/A"}</span>
                    <span className="text-[#A3A6B4]">{influencer?.niche || "Unknown Niche"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-8">
              <p className="text-[#A3A6B4] leading-relaxed">
                {influencer.bio ||
                  "Digital content creator and lifestyle influencer with a passion for technology and fashion. Specializing in creating engaging content that resonates with young professionals. Featured in major tech publications and collaborated with leading brands."}
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-[#2A2A4A] p-3 rounded-xl hover:bg-[#3A3A5A] transition-all group border border-[#6B48FF]/20"
                >
                  <Icon className="w-5 h-5 text-[#6B48FF] group-hover:text-[#FF4B91] transition-colors" />
                </a>
              ))}
            </div>

            {/* Comments Section */}
            {location.state ? (
              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-white">
                  Comments
                  <span className="text-sm text-[#A3A6B4] font-normal">
                    ({usercomment?.length || 0})
                  </span>
                </h2>
                <form onSubmit={handleAddComment} className="mb-8">
                  <div className="flex gap-4">
                    <img
                      src={influencer.profliepic || "https://api.dicebear.com/7.x/initials/svg?seed=User"}
                      alt="User"
                      className="w-10 h-10 rounded-xl object-cover border border-[#6B48FF]/20"
                    />
                    <div className="flex-1">
                      <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="w-full bg-[#2A2A4A] rounded-xl p-4 text-white placeholder-[#A3A6B4] focus:outline-none focus:ring-2 focus:ring-[#6B48FF]/50 resize-none border border-[#6B48FF]/20"
                        rows={2}
                      />
                      <div className="flex justify-end mt-2">
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-xl font-medium text-white transition-all shadow-lg hover:shadow-[#6B48FF]/50 flex items-center gap-2"
                          style={{ background: "linear-gradient(90deg, #6B48FF, #FF4B91)" }}
                        >
                          <Send className="w-4 h-4" />
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="space-y-6">
                  {Array.isArray(usercomment) &&
                    usercomment.map((comment) => (
                      <div key={comment._id} className="bg-[#2A2A4A] rounded-xl p-6 border border-[#6B48FF]/20">
                        <div className="flex gap-4">
                          <img
                            src={`https://api.dicebear.com/7.x/initials/svg?seed=${comment.user.name}`}
                            alt={comment.user.name}
                            className="w-10 h-10 rounded-xl object-cover border border-[#6B48FF]/20"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h3 className="font-semibold text-white">{comment.user.name}</h3>
                              <span className="text-xs text-[#A3A6B4]">
                                {new Date(comment.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="mt-2 text-[#A3A6B4]">{comment?.text}</p>
                            <div className="flex items-center gap-6 mt-4">
                              <button className="flex items-center gap-2 text-[#6B48FF] hover:text-[#FF4B91] transition-colors">
                                <MessageCircle className="w-4 h-4" />
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div className="mt-8 text-center text-[#A3A6B4]">
                <p className="text-lg">
                  Book this influencer to unlock the comment section.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#2A2A4A]/80 backdrop-blur-md p-8 rounded-2xl max-w-md w-full shadow-xl border border-[#6B48FF]/20">
            <h2 className="text-2xl font-bold mb-6 text-white">Request Booking</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2 text-[#A3A6B4]">
                  Project Description
                </label>
                <textarea
                  className="w-full bg-[#2A2A4A] rounded-xl p-4 text-white placeholder-[#A3A6B4] focus:outline-none focus:ring-2 focus:ring-[#6B48FF]/50 border border-[#6B48FF]/20"
                  rows={4}
                  placeholder="Describe your project..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-[#A3A6B4]">
                  Preferred Date
                </label>
                <div className="flex items-center bg-[#2A2A4A] rounded-xl p-4 border border-[#6B48FF]/20">
                  <Calendar className="w-5 h-5 mr-3 text-[#FF4B91]" />
                  <input
                    type="date"
                    className="bg-transparent w-full text-white focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <button
                  type="submit"
                  disabled={!influencer.isactive}
                  className={`flex-1 py-3 rounded-xl font-semibold text-white transition-all shadow-lg ${
                    influencer.isactive
                      ? "hover:shadow-[#6B48FF]/50"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  style={{
                    background: influencer.isactive
                      ? "linear-gradient(90deg, #6B48FF, #FF4B91)"
                      : "linear-gradient(90deg, #3A3A5A, #3A3A5A)",
                  }}
                >
                  {influencer.isactive ? "Send Request" : "Already Booked"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="flex-1 bg-[#2A2A4A] py-3 rounded-xl font-semibold hover:bg-[#3A3A5A] transition-all text-[#A3A6B4] border border-[#6B48FF]/20"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Singleinfluncersdetali;