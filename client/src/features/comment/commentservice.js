import axios from "axios";

const getallcommentuser = async (id, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`/api/bookings/${id}/comment`, options);
  // console.log(response.data)
  return response.data;
};

const addcommentuser = async (formdata, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  console.log(options);

  const response = await axios.post(
    `/api/bookings/${formdata._id}/comment`,
    formdata,
    options
  );

  return response.data;
};

const commentservice = { getallcommentuser, addcommentuser };

export default commentservice;
