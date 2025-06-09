import React, { useState } from "react";
import { Edit, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import InfluencerForm from "./InfluencerForm";
import {
  DeteleInfluencers,
  editinfluencress,
  resetinfluencer,
} from "../../features/Admin/Adminslice";

const AdminInfluencerList = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const { Influencers, InfluencersEdit, isLoading, isError, Message } =
    useSelector((state) => state.admin);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
    dispatch(resetinfluencer());
  };

  const handleClickEdit = (data) => {
    setShowForm(true);
    dispatch(editinfluencress(data));
  };

  const handleDelete = (id) => {
    dispatch(DeteleInfluencers(id));
  };

  if (isLoading) {
    return <div className="text-white text-center p-4">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center p-4">
        {Message || "Error loading influencers"}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4">
        <button
          type="button"
          disabled={InfluencersEdit.isEdit}
          onClick={toggleForm}
          className="bg-pink-500 text-white rounded-lg px-4 py-2 text-sm sm:text-base hover:bg-pink-600"
        >
          Add Influencer
        </button>
      </div>

      {showForm && <InfluencerForm onClose={() => setShowForm(false)} />}

      {!showForm && (
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="bg-gray-800/50 text-left">
                <th className="p-2 sm:p-4 text-xs sm:text-base">Name</th>
                <th className="p-2 sm:p-4 text-xs sm:text-base">Instagram</th>
                <th className="p-2 sm:p-4 text-xs sm:text-base">Followers</th>
                <th className="p-2 sm:p-4 text-xs sm:text-base">Status</th>
                <th className="p-2 sm:p-4 text-xs sm:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Influencers.map((inf) => (
                <tr
                  key={inf._id}
                  className="border-b border-gray-700/50 text-xs sm:text-base"
                >
                  <td className="p-2 sm:p-4">{inf.name || "Unknown"}</td>
                  <td className="p-2 sm:p-4 break-words">
                    {inf.instagram_headle || "N/A"}
                  </td>
                  <td className="p-2 sm:p-4">{inf.followers || "N/A"}</td>
                  <td className="p-2 sm:p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        inf.isActive
                          ? "bg-green-500/20 text-green-500"
                          : "bg-yellow-500/20 text-yellow-500"
                      }`}
                    >
                      {inf.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="p-2 sm:p-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleClickEdit(inf)}
                        className="p-1 hover:text-pink-500"
                        aria-label="Edit influencer"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        className="p-1 hover:text-red-500"
                        aria-label="Delete influencer"
                        onClick={() => handleDelete(inf._id)}
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminInfluencerList;
