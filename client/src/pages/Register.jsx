import { Lock, Mail, Phone, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AuthRegister } from "../features/Auth/authslice";

const Register = () => {
  const { users, isLoading, Message, isError, isSuccess } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthRegister({ name, email, phone, password }));
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  useEffect(() => {
    if (isSuccess) navigate("/");
    if (isError && Message) toast.error(Message);
  }, [users, isError, Message, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-900 relative">
      {/* Glowing Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 left-24 w-72 h-72 bg-pink-600 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-700 rounded-full mix-blend-overlay blur-2xl opacity-20 animate-pulse"></div>
        <img
          src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-5"
          alt="background"
        />
      </div>

      {/* Card */}
      <div className="w-full max-w-md p-8 bg-gray-800/30 backdrop-blur-md rounded-2xl border border-gray-700/40 shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-md">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Full Name
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-3 text-purple-400"
                size={20}
              />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-700/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 pl-10 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-3 text-purple-400"
                size={20}
              />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-700/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 pl-10 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Phone Number
            </label>
            <div className="relative">
              <Phone
                className="absolute left-3 top-3 text-purple-400"
                size={20}
              />
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-gray-700/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 pl-10 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-3 text-purple-400"
                size={20}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                className="w-full bg-gray-700/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 pl-10 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                placeholder="Create a password"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 transition duration-300 shadow-lg hover:shadow-pink-500/30"
          >
            {isLoading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-400 hover:text-pink-300 font-semibold underline underline-offset-4"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
