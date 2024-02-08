import React from 'react'

const Signup = () => {
  return (
    <div className='Signup'>
      <span class="text-center">SignUp</span>
      <form>
        <div class="input-container">
          <input type="Text" required="required" />
          <span className='label'>Frist Name</span>
        </div>
        <div class="input-container">
          <input type="Text" required="required" />
          <span className='label'>Last Name</span>
        </div>
        <div class="input-container">
          <input type="Text" required="required" />
          {/* "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" */}
          <span className='label'>Email</span>      
           </div>
        <div class="input-container">
          <input type="text" required="required" />
          {/* Regex pattern = ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$ */}
          <span className='label'>Phone</span> 
          </div>
        <div class="input-container">
          <input type="password" required="required" />
          <span className='label'>PassWord</span>
        </div>
        <button type="button" class="btn">SignUp</button>
      </form>
    </div>
  )

}

export default Signup