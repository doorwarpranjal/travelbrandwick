import { useState } from 'react'
import { Link } from 'react-router-dom'
import {Login} from '../../../API'
import {userState} from '../../../Atom'
import { useRecoilState } from "recoil";
import showToast from '../../Toast/showToast';
import Toast from '../../Toast/Toast';
import {CircularProgress} from '@material-ui/core'
export default function LoginForm(props) {
  const [ myUser , setmyUser ] = useRecoilState(userState)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [toastColor,setToastColor]=useState("green")
  const [toastText,setToastText]=useState("")
  const [loading,setLoading]=useState(false)
  function validation(){
if(!email){
  console.log('no email')
  setToastColor('red')
  setToastText('Email Not Found')
  showToast()
  return false
}
else if(!password){
  console.log('no email')
  setToastColor('red')
  setToastText('Password not found')
  showToast()
  return false

}
else{
  return true
}
  }
 // console.log(localStorage.getItem('user-data'))
 //console.log(props)
const submitHandler=async(e)=>{
  e.preventDefault()
  if(validation()){
    setLoading(true)
    let data={
      password:password,
      email:email
    }
    let res=await Login(data)
    if(res.status===200){
    setLoading(false)
    
    // localStorage.setItem('user-data',res.data)
    setmyUser({
      email : data.email ,
      name : res.data.name , 
      userToken : res.data.token
    })
    showToast()
    setToastColor('green')
    setToastText('Successfully Logged in')
    setTimeout(() => {
      window.location.replace('/')
    }, 1000);
  }
  else{
      setLoading(false)
      setToastColor('red')
      setToastText('Check Your email Or Password')
      showToast()
//console.log(res.response.data.error)
    }
    
  }
}
  return (
    
    <form id='#authForm' onSubmit={submitHandler}>
      <Toast color={toastColor} text={toastText}/>
      <div className='content'>
        <h3>Welcome Back</h3>
        <p>Login please if you already have an account</p>
      </div>
      <div className='form-group'>
        <div className='input-icon'>
          <i className='bx bx-user' />
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
          <i className='bx bx-at' />
        </div>
        <input
          type='password'
          className='form-control'
          placeholder='Password'
        //  required
          onChange={(e)=>setPassword(e.target.value)}
          />
      </div>
      <div className='row align-items-center mb-30'>
        <div className='col-lg-6 col-sm-6 col-6'>
          <div className='checkbox'>
            <input type='checkbox' id='remember' />
            <label htmlFor='remember'>Remember me</label>
          </div>
        </div>
        <div className='col-lg-6 col-sm-6 col-6'>
          <div className='link'>
            <Link to='/forgot-password'>
              Forget password?
            </Link>
          </div>
        </div>
      </div>
      <button type='submit'  className='btn-primary'>
  {loading?<CircularProgress/> : "Login" }     
      </button>
   
          Don't have a Account <Link to='/register'>
            Signup
          </Link>
        
    </form>
  )
}
