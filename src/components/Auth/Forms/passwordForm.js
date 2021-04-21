import { useState } from "react"
import {  useHistory, useLocation } from "react-router";
import { newPassword } from "../../../API"
import showToast from '../../Toast/showToast';
import Toast from '../../Toast/Toast';
import {CircularProgress} from '@material-ui/core'
export default function ResetForm() {
  const [password,setPassword]=useState("")
  const [cpassword,setCPassword]=useState("")
  const [toastColor,setToastColor]=useState("green")
  const [toastText,setToastText]=useState("")
  const [loading,setLoading]=useState(false)
  const location=useLocation()
  const history=useHistory()
 // console.log(history)
const submitHandler=async(e)=>{
  e.preventDefault()
  if(cpassword===password){
    
  
  setLoading(true)
  console.log(location.state)
  let res=await newPassword({resetToken:location.state.token,password:password})
  if(res.status===200){
    setLoading(false)
    showToast()
    setToastColor('green')
    setToastText('Change Password')
  setTimeout(() => {
    history.push('/sign-in')
  }, 1000);
  }
  else{
    console.log(res.response)
    setLoading(false)
    showToast()
    setToastColor('red')
    setToastText(res.response.data.error)
  }}
  else{
    showToast()
    setToastColor('red')
    setToastText("Password Does not Match")
  }
}

  return (<>
   <form id='#authForm'>
       <Toast color={toastColor} text={toastText}/>
    <div className='content'>
      <h3>Change Password</h3>
      <p>
       Enter New Password 
      </p>
    </div>
    <div className='form-group'>
      <div className='input-icon'>
       
      </div>
      <input
        type='password'
        className='form-control'
        placeholder='Password'
        required
        onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
    <div className='form-group'>
      <div className='input-icon'>
       
      </div>
      <input
        type='password'
        className='form-control'
        placeholder='Confirm Password'
        required
        onChange={(e)=>setCPassword(e.target.value)}
      />
    </div>
    <button type='submit'  onClick={submitHandler} className='btn-primary'>
  {loading?<CircularProgress/> : "Change Password" }     
      </button>
  </form>
</>
  )
}
