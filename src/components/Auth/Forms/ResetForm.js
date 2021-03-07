export default function ResetForm() {
  return (
    <form id='#authForm'>
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
      />
    </div>
    <button type='submit' className='btn-primary'>
      Send
    </button>
  </form>

  )
}
