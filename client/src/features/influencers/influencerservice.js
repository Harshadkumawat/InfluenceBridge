import axios from "axios";
const BaseUrl = "https://influencebridge.onrender.com";

const getsingleinfluencre = async (id) => {
  const response = await axios.get(`${BaseUrl}/api/influencer/single/` + id);
  return response.data;
};
const influencerservice = { getsingleinfluencre };
export default influencerservice;
