import { useState } from 'react'
import { Link } from 'react-router-dom'
import {Signup} from '../../../API'
import {userState} from '../../../Atom'
import { useRecoilState } from "recoil";
export default function RegisterForm() {
  const [ myUser , setmyUser ] = useRecoilState(userState)
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [password,setPassword]=useState("")
  function validation(){
if(!email){
  console.log('no email')
  return false
}
else if(!password){
  console.log('no email')
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

    let data={
      password:password,
      email:email,mobile:phone,name:name
    }
    let res=await Signup(data)
    if(res.status===200){
      console.log(res)
     // localStorage.setItem('user-data',res.data)
     
      window.location.replace('/sign-in')
    }
    else{
console.log(res.response.data.error)
    }
    
  }
}
  return (
    <form id='#authForm' onSubmit={submitHandler}>
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
          required
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
          required
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
          required
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
          required
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
      <button type='submit' className='btn-primary'>
        Register
      </button>
      Already have a Account <Link to='/sign-in' className='primary-color'>
            Signin
          </Link>
    </form>
  )
}
