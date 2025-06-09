import axios from "axios";


const getsingleinfluencre = async (id) => {
  const response = await axios.get(`/api/influencer/single/` + id);
  return response.data;
};
const influencerservice = { getsingleinfluencre };
export default influencerservice;
