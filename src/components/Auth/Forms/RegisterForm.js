import { useState } from 'react'
import { Link } from 'react-router-dom'
import {Signup} from '../../../API'
import {userState} from '../../../Atom'
import { useRecoilState } from "recoil";
import showToast from '../../Toast/showToast';
import Toast from '../../Toast/Toast';
import {CircularProgress} from '@material-ui/core'
export default function RegisterForm() {
  const [ myUser , setmyUser ] = useRecoilState(userState)
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [password,setPassword]=useState("")
  const [toastColor,setToastColor]=useState("green")
  const [toastText,setToastText]=useState("")
  const [loading,setLoading]=useState(false)
  function validation(){
if(!email || !password || !phone || !name){
  showToast()
  setToastColor('red')
  setToastText('Fill All Fields')
  return false
}

else{
  return true
}
  }
 // console.log(localStorage.getItem('user-data'))
const submitHandler=async(e)=>{
  e.preventDefault()
  if(validation()){
    setLoading(true)
    let data={
      password:password,
      email:email,mobile:phone,name:name
    }
    let res=await Signup(data)
    console.log(res.response)
    if(res.status===200){
      setLoading(false)
      showToast()
      setToastColor('green')
      setToastText('Successfully SignUp in')
      setTimeout(() => {
        window.location.replace('/sign-in')
      }, 1000);
    }
    else{
      console.log(res.response)
      setLoading(false)
      showToast()
      setToastColor('red')
      setToastText('Email Already Exist or Not Valid')
    }
    
  }
}
  return (
    <form id='#authForm' onSubmit={submitHandler}>
       <Toast color={toastColor} text={toastText}/>
      <div className='content'>
        <h3>Create Account</h3>
        <p>Register please if you don't have an account</p>
      </div>
      <div className='form-group'>
        <div className='input-icon'>
          <i className='bx bx-user' />
        </div>
        <input
          type='text'
          className='form-control'
          placeholder='Username'
           
          onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <div className='input-icon'>
          <i className='bx bx-at' />
        </div>
        <input
          type='text'
          className='form-control'
          placeholder='Email Address'
           
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <div className='input-icon'>
          <i className='bx bx-show' />
        </div>
        <input
          type='password'
          className='form-control'
          placeholder='Password'
           
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <div className='input-icon'>
          <i className='bx bx-show' />
        </div>
        <input
          type='text'
          className='form-control'
          placeholder='Phone Number'
           
          onChange={(e)=>setPhone(e.target.value)}
        />
      </div>
      <div className='row align-items-start mb-30'>
        <div className='col-lg-12'>
          <div className='checkbox'>
            <input type='checkbox' id='agreement' />
            <label htmlFor='agreement'>
              I agreed travelBrandwick{' '}
              <a href='terms-of-service.html'>Terms of Services</a> and{' '}
              <a href='privacy-policy.html'>Privacy Policy</a>
            </label>
          </div>
        </div>
      </div>
      <button type='submit'  className='btn-primary'>
  {loading?<CircularProgress/> : "Register" }     
      </button>
      Already have a Account <Link to='/sign-in' className='primary-color'>
            Signin
          </Link>
    </form>
  )
}
