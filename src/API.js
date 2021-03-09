import axios from 'axios'

const base_url = 'https://travel-web-user.herokuapp.com'

const localData = JSON.parse(localStorage.getItem('user-data'))



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