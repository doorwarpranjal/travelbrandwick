import {Link} from 'react-router-dom'
export default function RegisterForm() {
  return (
    <form id='#authForm'>
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
      <div className='main-form'>
          Already have a Account <Link to="/sign-in" className='primary-color'>
            Sign-In
          </Link>
          </div>
    </form>
  )
}
