import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User, Star, MessageCircle, CornerDownRight, Send } from "lucide-react";
import { AddComment } from "../../features/Admin/Adminslice";

const CommentList = () => {
  const { comments, isLoading, isError, Message } = useSelector(
    (state) => state.admin
  );
  const dispatch = useDispatch();

  const [activeComment, setActiveComment] = useState(null);
  const [replyText, setReplyText] = useState("");

  if (isLoading) {
    return <div className="text-white text-center p-4">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center p-4">
        {Message || "Error loading comments"}
      </div>
    );
  }

  if (!Array.isArray(comments) || comments.length === 0) {
    return <div className="text-white text-center p-4">No comments found</div>;
  }

  const toggleReply = (commentId) => {
    setActiveComment((prev) => (prev === commentId ? null : commentId));
    setReplyText("");
  };

  const handleReplySubmit = (e, commentId) => {
    e.preventDefault();

    dispatch(AddComment({ _id: commentId, text: replyText }));
    setReplyText("");
  };
  console.log(comments);
  return (
    <div className="space-y-4 p-4">
      {comments.map((comment) => (
        <div
          key={comment._id}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-5 text-white cursor-pointer shadow-xl transition-all duration-200 hover:shadow-2xl"
          onClick={() => toggleReply(comment._id)}
        >
          {/* Top Section */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <User size={18} className="text-blue-400" />
              <span className="text-sm font-semibold">
                {comment.user?.name || "Unknown User"}
              </span>
            </div>
            <div className="text-xs text-gray-400">
              {comment.updatedAt
                ? new Date(comment.updatedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "N/A"}
            </div>
          </div>

          {/* Influencer */}
          {console.log()}
          <div className="flex items-center gap-2 text-gray-300 mb-2">
            <Star size={16} className="text-yellow-400" />
            <span>
              <span className="font-bold">Influencer:</span>{" "}
              {comment?.booking?.influencer?.name || "Unknown Influencer"}
            </span>
          </div>

          {/* Main Comment */}
          <div className="flex items-start gap-2 text-sm">
            <MessageCircle size={16} className="mt-1 text-green-400" />
            <p className="text-white">{comment.text || "No comment"}</p>
          </div>

          {/* Reply Section */}
          {activeComment === comment._id && (
            <div className="mt-4 border-t border-gray-700 pt-3 pl-6 text-gray-300">
              <form
                className="flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
                onSubmit={(e) => handleReplySubmit(e, comment.booking._id)}
              >
                <CornerDownRight size={16} className="text-purple-400" />
                <input
                  type="text"
                  placeholder="Write a reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="bg-gray-800 text-white border border-gray-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 w-full"
                />
                <button type="submit" className="hover:scale-110 transition">
                  <Send size={18} className="text-purple-400" />
                </button>
              </form>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
