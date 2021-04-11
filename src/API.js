import axios from 'axios'

const base_url = 'https://travel-web-user.herokuapp.com'
const admin_url='https://travel-web-admin.herokuapp.com'
const localData = JSON.parse(localStorage.getItem('recoil-persist'))


export const Login =async(userData)=>{
    const res = await axios.post(`${base_url}/signin`,userData).then(response=>{

        return response ;
    }).catch(err=>{
        console.log(err.response)
        return err
    }) ;
    return res
}
export const Signup =async(userData)=>{
    const res = await axios.post(`${base_url}/signup`,userData).then(response=>{

        return response ;
    }).catch(err=>{
        console.log(err.response)
        return err
    }) ;
    return res
}

export const Forgot =async(userData)=>{
    const res = await axios.post(`${base_url}/forgot`,userData).then(response=>{
        return response ;
    }).catch(err=>{
       // console.log(err.response)
        return err
    }) ;
    return res
}
export const verifyOTP=async(userData)=>{
    const res = await axios.post(`${base_url}/verify-otp`,userData).then(response=>{
        return response ;
    }).catch(err=>{
       // console.log(err.response)
        return err
    }) ;
    return res
}
export const newPassword=async(userData)=>{
    const res = await axios.post(`${base_url}/reset-password`,userData).then(response=>{
        return response ;
    }).catch(err=>{
       // console.log(err.response)
        return err
    }) ;
    return res
}
export const getAllCategories=async()=>{
    const res = await axios.get(`${admin_url}/getAllCategories`).then(response=>{
        return response ;
    }).catch(err=>{
       // console.log(err.response)
        return err
    }) ;
    return res
}
export const getAllTours=async()=>{
    const res = await axios.get(`${admin_url}/get-all-ad`).then(response=>{
        return response ;
    }).catch(err=>{
       // console.log(err.response)
        return err
    }) ;
    return res
}
export const getTopRatedTours=async()=>{
    const res = await axios.get(`${admin_url}/get-top-rated-ads`).then(response=>{
        return response ;
    }).catch(err=>{
       // console.log(err.response)
        return err
    }) ;
    return res
}
export const getTourById=async (data)=>{
    const res = await axios.get(`${base_url}/get-tour-by-tourId/${data}`).then(response=>{
        return response ;
    }).catch(err=>{
       // console.log(err.response)
        return err
    }) ;
    return res
}
export const postComment=async (tourId,data)=>{
    const res = await axios.post(`${base_url}/add-testimonial-to-tour/${tourId}`,data,{
       
        headers :   {'Authorization': `${localData.Travel_user.userToken}` }
        
    }).then(response=>{
        return response ;
    }).catch(err=>{
       // console.log(err.response)
        return err
    }) ;
    return res
}
export const getBlogs=async ()=>{
    const res = await axios.get(`${admin_url}/getAllBlog`,{
    }).then(response=>{
        return response ;
    }).catch(err=>{
       // console.log(err.response)
        return err
    }) ;
    return res
}