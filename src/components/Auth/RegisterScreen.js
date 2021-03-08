import RegisterForm from './Forms/RegisterForm'
import {Link} from 'react-router-dom'
export default function RegisterScreen() {
  return (
    <div>
      <div className='page-title-area ptb-100'>
        <div className='container'>
          <div className='page-title-content'>
            <h1>Register</h1>
            <ul>
              <li className='item'>
                <a href='index.html'>Home</a>
              </li>
              <li className='item'>
                <a href='register.html'>
                  <i className='bx bx-chevrons-right' />
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='bg-image'>
          <img src='assets/img/page-title-area/register.jpg' alt='Demo Image' />
        </div>
      </div>
      <div className='authentication-section'>
        <div className='container'>
          <div className='main-form ptb-100'>
            <RegisterForm />
        
          </div>
        </div>
      </div>
    </div>
  )
}
