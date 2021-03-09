import { useState } from "react"
import { Forgot } from "../../../API"
import showToast from '../../Toast/showToast';
import Toast from '../../Toast/Toast';
export default function ResetForm() {
  const [email,setEmail]=useState("")
  const [toastColor,setToastColor]=useState("green")
  const [toastText,setToastText]=useState("")
  const [loading,setLoading]=useState(false)
const submitHandler=async(e)=>{
  e.preventDefault()
  setLoading(true)
  let res=await Forgot({email:email})
  if(res.status===200){
    setLoading(false)
    showToast()
    setToastColor('green')
    setToastText('Check Your Email')
  
  }
  else{
    console.log(res.response)
    setLoading(false)
    showToast()
    setToastColor('red')
    setToastText(res.response.data.error)
  }
}
  return (
    <form id='#authForm'>
       <Toast color={toastColor} text={toastText}/>
    <div className='content'>
      <h3>Forget Your Password?</h3>
      <p>
        Enter the email associated with your account and we'll send an
        email with instruction to reset your password
      </p>
    </div>
    <div className='form-group'>
      <div className='input-icon'>
        <i className='bx bx-at' />
      </div>
      <input
        type='text'
        className='form-control'
        placeholder='Email Address'
        required
        onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
    <button type='submit' onClick={submitHandler} className='btn-primary'>
      Send
    </button>
  </form>

  )
}
