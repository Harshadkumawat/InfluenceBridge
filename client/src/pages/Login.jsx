import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { toast } from "react-toastify";
import { AuthLogin } from "../features/Auth/authslice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { users, isLoading, message, isError, isSuccess } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthLogin({ email, password }));
  };

  useEffect(() => {
    if (isSuccess && users) {
      if (users.isadmin) {
        navigate("/auth/admin");
      } else {
        navigate("/auth/user");
      }
    }
  }, [isSuccess, users, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-900 relative">
      {/* Dynamic Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-overlay blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-700 rounded-full mix-blend-overlay blur-2xl opacity-20 animate-pulse"></div>
        <img
          src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-5"
          alt="background"
        />
      </div>

      {/* LOGIN BOX */}
      <div className="w-full max-w-md px-8 py-10 bg-gray-800/30 border border-purple-700/40 backdrop-blur-xl rounded-2xl shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-md">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-purple-400" size={20} />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-700/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-600/50 transition"
                placeholder="Enter your email"
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
              <Lock className="absolute left-3 top-3 text-purple-400" size={20} />
              <input
                id="password"
                type="password"
                value={password}
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-700/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-600/50 transition"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 transition duration-300 shadow-lg hover:shadow-pink-500/30"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-pink-400 hover:text-pink-300 font-semibold underline underline-offset-4"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
