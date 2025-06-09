import axios from "axios"

const Registerservice= async(formdata)=>{

    const response = await axios.post(`/api/auth/register`,formdata);
    console.log(response.data)
    localStorage.setItem('user',JSON.stringify(response.data))
    return response.data
}

const Loginservice= async(formdata)=>{
    const response = await axios.post(`/api/auth/login`,formdata)
    localStorage.setItem('user',JSON.stringify(response.data))

    return response.data
}




const updateservice = async (formdata) => {
    try {
      const response = await axios.post(`/api/auth/update`, formdata);
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error('Update failed:', error.response?.data?.message || error.message);
    }
  }
const authservice= {Registerservice ,Loginservice,updateservice}
export default authservice