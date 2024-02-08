import React from 'react'

const Signup = () => {
  return (
    <div className='Signup'>
      <span class="text-center">SignUp</span>
      <form>
        <div class="input-container">
          <input type="Text" required="" />
          <label>Frist Name</label>
        </div>
        <div class="input-container">
          <input type="Text" required="" />
          <label>LastName</label>
        </div>
        <div class="input-container">
          <input type="email" required="" />
          <label>Email</label>
        </div>
        <div class="input-container">
          <input type="phone" required="" />
          <label>Phone</label>
        </div>
        <div class="input-container">
          <input type="password" required="" />
          <label>PassWord</label>
        </div>
        <button type="button" class="btn">SignUp</button>
      </form>
    </div>
  )

}

export default Signup