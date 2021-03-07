export default function LoginForm() {
  return (
    <form id='#authForm'>
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
      <div className='row align-items-center mb-30'>
        <div className='col-lg-6 col-sm-6 col-6'>
          <div className='checkbox'>
            <input type='checkbox' id='remember' />
            <label htmlFor='remember'>Remember me</label>
          </div>
        </div>
        <div className='col-lg-6 col-sm-6 col-6'>
          <div className='link'>
            <a href='forget-password.html'>Forget password?</a>
          </div>
        </div>
      </div>
      <button type='submit' className='btn-primary'>
        Login
      </button>
    </form>
  )
}
