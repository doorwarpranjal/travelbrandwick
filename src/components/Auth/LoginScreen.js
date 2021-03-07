import LoginForm from "./Forms/LoginForm"

export default function LoginScreen() {
  return (
    <div>
      <div className='page-title-area ptb-100'>
        <div className='container'>
          <div className='page-title-content'>
            <h1>Login</h1>
            <ul>
              <li className='item'>
                <a href='index.html'>Home</a>
              </li>
              <li className='item'>
                <a href='login.html'>
                  <i className='bx bx-chevrons-right' />
                  Login
                </a>
              </li>
            </ul>
         
          </div>
        </div>
        <div className='bg-image'>
          <img src='assets/img/page-title-area/login.jpg' alt='Demo Image' />
        </div>
      </div>
      
      <div className='authentication-section'>
        <div className='container'>
          <div className='main-form ptb-100'>
            <LoginForm />
          </div>
        
        </div>
      </div>
    </div>
  )
}
