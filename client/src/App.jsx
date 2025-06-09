import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/AdminDashboard";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navber";
import NotFound from "./pages/NotFound";
import UserDashboard from "./pages/UserDashboard";
import Privatecomponets from "./components/Privatecomponets";
import Singleinfluncersdetali from "./pages/SingleInfluencerDetail";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Privatecomponets />}>
          <Route
            path="single/influncers/:id"
            element={<Singleinfluncersdetali />}
          />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="user" element={<UserDashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
