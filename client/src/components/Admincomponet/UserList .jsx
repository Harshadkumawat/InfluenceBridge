import React from "react";
import { useSelector } from "react-redux";

const UserListt = () => {
  const { Users, isLoading, isError, Message } = useSelector(
    (state) => state.admin
  );

  if (isLoading) {
    return <div className="text-white text-center p-4">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center p-4">
        {Message || "Error loading users"}
      </div>
    );
  }

  if (!Array.isArray(Users) || Users.length === 0) {
    return <div className="text-white text-center p-4">No users found</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-white">
        <thead>
          <tr className="bg-gray-800/50 text-left">
            <th className="p-2 sm:p-4 text-xs sm:text-base">Name</th>
            <th className="p-2 sm:p-4 text-xs sm:text-base">Email</th>
            <th className="p-2 sm:p-4 text-xs sm:text-base">Join Date</th>
            <th className="p-2 sm:p-4 text-xs sm:text-base">Phone</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-700/50 text-xs sm:text-base"
            >
              <td className="p-2 sm:p-4">{user.name || "Unknown"}</td>
              <td className="p-2 sm:p-4 break-words">{user.email || "N/A"}</td>
              <td className="p-2 sm:p-4">
                {user.updatedAt
                  ? new Date(user.updatedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "N/A"}
              </td>
              <td className="p-2 sm:p-4">{user.phone || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListt;
