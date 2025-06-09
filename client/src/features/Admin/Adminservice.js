import axios from "axios";
const BaseUrl = "https://influencebridge.onrender.com";

///get all influencers
const getallInfluencersforadmin = async () => {
  const response = await axios.get(`${BaseUrl}/api/influencer`);
  return response.data;
};

//get all users

const getalluserforadmin = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${BaseUrl}/api/admin/users`, options);
  return response.data;
};

///get all bookings
const getallbookingforadmin = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${BaseUrl}/api/admin/bookings`, options);
  //    console.log(response.data)
  return response.data;
};

//get all comment

const getallcommentforadmin = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${BaseUrl}/api/admin/comment`, options);
  // console.log(response.data)
  return response.data;
};

//create new influnecre

const createnewinfluencers = async (formData, token) => {
  if (!token) {
    return;
  }

  const options = {
    headers: {
      Authorization: `Bearer ${token}`, // Capital A
    },
  };

  try {
    const response = await axios.post(
      `${BaseUrl}/api/admin/influencer`,
      formData,
      options
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating influencer:",
      error.response?.data || error.message
    );
    throw error;
  }
};

//UPDATE INFLUIENCERS

const updateinfluencers = async (fromdata, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `${BaseUrl}/api/admin/influencer/` + fromdata._id,
    fromdata,
    options
  );
  // console.log(response.data)
  return response.data;
};

// detele influencers

const deteleinfluencers = async (id, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  // console.log(fromdata._id)
  const response = await axios.delete(
    `${BaseUrl}/api/admin/influencer/` + id,
    options
  );
  // console.log(response.data)
  return response.data;
};

///booking updata for admin

const updatabookinng = async (formdata, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  console.log(formdata);
  const response = await axios.put(
    `${BaseUrl}/api/admin/bookings/${formdata.id}`,
    { status: formdata.value },
    options
  );
  console.log(response.data);
  return response.data;
};

/// add comment for admin

const addcommnet = async (formdata, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  console.log(formdata);
  const response = await axios.post(
    `${BaseUrl}/api/bookings/${formdata._id}/comment`,
    formdata,
    options
  );
  console.log(response.data);
  return response.data;
};

const adminservice = {
  getallInfluencersforadmin,
  getalluserforadmin,
  getallbookingforadmin,
  getallcommentforadmin,
  createnewinfluencers,
  updateinfluencers,
  deteleinfluencers,
  updatabookinng,
  addcommnet,
};
export default adminservice;
