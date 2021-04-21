import { Link } from 'react-router-dom'
import ResetForm from './Forms/passwordForm'

export default function ForgotPasswordScreen() {
  return (
    <div>
      <div className='page-title-area ptb-100'>
        <div className='container'>
          <div className='page-title-content'>
            <h1>Change Password</h1>
            <ul>
              <li className='item'>
                <Link href='/'>Home</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='bg-image'>
          <img
            src='assets/img/page-title-area/fotgot-password.jpg'
            alt='Demo Image'
          />
        </div>
      </div>
      <div className='authentication-section'>
        <div className='container'>
          <div className='main-form ptb-100'>
          <ResetForm />
          </div>
        </div>
      </div>
    </div>
  )
}
