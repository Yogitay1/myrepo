import React from 'react'
import './login.css'

const Login = ({p}) => {
  return (
    <div className='login'>
        	<span class="text-center">login</span>
    <form>
    <div class="input-container">
		<input type="email" required=""/>
		<label>Email are phone</label>		
	</div>
    <div class="input-container">		
		<input type="password" required=""/>
		<label>PassWord</label>
	</div>
        <div className='bottom'><a href="#">Create Account</a> <a href="#">Forgot Password</a></div>
		<button type="button" class="btn">LogIn</button>
    </form>
    </div>
  )
}

export default Login