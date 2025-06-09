import axios from "axios";
import { API_URL } from "../../config";

const getsingleinfluencre = async (id) => {
  const response = await axios.get(`${API_URL}/api/influencer/single/` + id);
  return response.data;
};
const influencerservice = { getsingleinfluencre };
export default influencerservice;
