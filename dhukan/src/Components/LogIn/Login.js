import React from 'react'
import './login.css'

const Login = ({p}) => {
  return (
    <div className='login'>
      <span class="text-center">login</span>
    <form>
    <div className="input-container">
		<input type="text" required="requried"/>
		<span className='label'>Email are phone</span>		</div>
    <div className="input-container">
		<input type="password" required="requried"/>
		<span className='label'>PassWord</span></div>
    <div className='bottom'><a href="#">Create Account</a><a href="#">Forgot Password</a></div>
		<button type="button" className="btn">LogIn</button>
    </form>
    </div>
  )
}

export default Login