import axios from "axios";

const fetchAllBookingForUser = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`/api/bookings`, options);

  return response.data;
};

const AddBookingForUser = async (id, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`/api/bookings/${id}`, {}, options);

  console.log("add booking");
  return response.data;
};

const bookingservices = { fetchAllBookingForUser, AddBookingForUser };

export default bookingservices;
