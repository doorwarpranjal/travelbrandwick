import axios from "axios";

const base_url = "https://travel-web-user.herokuapp.com";
const admin_url = "https://travel-web-admin.herokuapp.com";
const localData = JSON.parse(localStorage.getItem("recoil-persist"));
let token=""
if(localData.Travel_user){
  if(localData.Travel_user.userToken){
    token=localData.Travel_user.userToken
  }
}
export const Login = async (userData) => {
  const res = await axios
    .post(`${base_url}/signin`, userData)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err.response);
      return err;
    });
  return res;
};
export const Signup = async (userData) => {
  const res = await axios
    .post(`${base_url}/signup`, userData)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err.response);
      return err;
    });
  return res;
};

export const Forgot = async (userData) => {
  const res = await axios
    .post(`${base_url}/forgot`, userData)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      // console.log(err.response)
      return err;
    });
  return res;
};
export const verifyOTP = async (userData) => {
  const res = await axios
    .post(`${base_url}/verify-otp`, userData)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      // console.log(err.response)
      return err;
    });
  return res;
};
export const newPassword = async (userData) => {
  const res = await axios
    .post(`${base_url}/reset-password`, userData)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      // console.log(err.response)
      return err;
    });
  return res;
};
export const getAllCategories = async () => {
  const res = await axios
    .get(`${admin_url}/getAllCategories`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      // console.log(err.response)
      return err;
    });
  return res;
};
export const getAllTours = async () => {
  const res = await axios
    .get(`${admin_url}/get-all-ad`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      // console.log(err.response)
      return err;
    });
  return res;
};
export const getTopRatedTours = async () => {
  const res = await axios
    .get(`${admin_url}/get-top-rated-ads`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      // console.log(err.response)
      return err;
    });
  return res;
};
export const getTourById = async (data) => {
  const res = await axios
    .get(`${admin_url}/adById/${data}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      // console.log(err.response)
      return err;
    });
  return res;
};
export const postComment = async (tourId, data) => {
  const res = await axios
    .post(`${base_url}/add-testimonial-to-tour/${tourId}`, data, {
      headers: { Authorization: `${token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      // console.log(err.response)
      return err;
    });
  return res;
};
export const getBlogs = async () => {
  const res = await axios
    .get(`${admin_url}/getAllBlog`, {})
    .then((response) => {
      return response;
    })
    .catch((err) => {
      // console.log(err.response)
      return err;
    });
  return res;
};
export const getBlogbyId = async (data) => {
  const res = await axios
    .get(`${admin_url}/getBlogById/${data}`, {})
    .then((response) => {
      return response;
    })
    .catch((err) => {
      // console.log(err.response)
      return err;
    });
  return res;
};
export const getImages = async () => {
  const res = await axios
    .get(`${admin_url}/get-all-images`, {})
    .then((response) => {
      return response;
    })
    .catch((err) => {
      // console.log(err.response)
      return err;
    });
  return res;
};
//console.log(localData)
export const postOrder = async (data) => {
  const res = await axios
    .post(`${base_url}/postOrder`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      // console.log(err.response)
      return err;
    });
  return res;
};
export const getCatgories = async () => {
  const res = await axios
    .get(`${admin_url}/getAllCategories`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err.response);
      return err;
    });
  return res;
};

export const getTourByCatgories = async (data) => {
  const res = await axios
    .get(`${base_url}/get-tour-by-category/${data}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err.response);
      return err;
    });
  return res;
};
export const getMyProfile = async (data) => {
  const res = await axios
    .get(`${base_url}/getMyProfile`,{
      headers: { Authorization: token },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err.response);
      return err;
    });
  return res;
};
export const getTrending =async ()=>{
  const res = await axios
    .get(`${admin_url}/trendingTours`,{
      headers: { Authorization: token },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err.response);
      return err;
    });
  return res;

}
export const getCategoryWise =async ()=>{
  const res = await axios
    .get(`${admin_url}/getAllTourByCategory`,{
      headers: { Authorization: token },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err.response);
      return err;
    });
  return res;

}