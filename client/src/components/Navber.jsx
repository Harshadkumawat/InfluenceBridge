import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getLoginOut } from "../features/Auth/authslice";

function Navbar() {
  // const { users } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const { users, isLoading, Message, isError, isSuccess } = useSelector(
    (state) => state.auth
  );

  const handleLogout = () => {
    dispatch(getLoginOut());
    setMenuOpen(false);
    // Optional redirect after logout
    navigate("/login");
  };

  const renderMenuLinks = () => {
    if (users?.isadmin) {
      // If user is admin
      return (
        <>
          <Link
            to="auth/admin"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg transition"
            onClick={() => setMenuOpen(false)}
          >
            {users.name}
          </Link>
          <button
            onClick={handleLogout}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </>
      );
    } else if (users?.name) {
      // If user is logged in (non-admin)
      return (
        <>
          <span className="text-white px-4 py-2">
            Welcome, <strong>{users.name}</strong>
          </span>
          <Link
            to="auth/user"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg transition"
            onClick={() => setMenuOpen(false)}
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </>
      );
    } else {
      // If user is not logged in
      return (
        <>
          <Link
            to="/register"
            className="text-white px-4 py-2 hover:text-pink-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg transition"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </>
      );
    }
  };

  return (
    <nav className="bg-gray-800/100 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          InfluenceBridge
        </Link>

        {/* Hamburger Icon (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          {renderMenuLinks()}
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900/90 backdrop-blur z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-white text-xl font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-white">
            ✕
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">{renderMenuLinks()}</div>
      </div>
    </nav>
  );
}

export default Navbar;
