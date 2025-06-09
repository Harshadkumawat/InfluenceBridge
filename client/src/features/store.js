import { configureStore } from "@reduxjs/toolkit";
import auth from "./Auth/authslice";
// import auth from '../features/Auth/authslice'
import admin from "./Admin/Adminslice";
import influencer from "./influencers/Influencerslice";
import booking from "./booking/bookingslice";
import comment from "./comment/commentslice";
const store = configureStore({
  reducer: { auth, admin, influencer, booking, comment },
});

export default store;
