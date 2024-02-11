import React from 'react'
import './footer.css'
import { FaWhatsapp, FaInstagram,FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
    <div className='Top'>
      <div className='Left'>
      <h3>ABOUT US</h3>
      <p>200k+ orders delivered globally. World class products, Proudly made in India.</p> 
      <p>Customer Support – support@adorebypriyanka.com</p>
      <div className='Socal'>
      <a href='#'><FaWhatsapp className='Icon'/></a>
      <a href='#'><FaInstagram className='Icon'/></a>
      <a href='#'><FaFacebook className='Icon'/></a>
      </div>
      </div>
      <div className='Right'>
      <h4>POLICIES</h4>
        <p>Return & Cancellations</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Shipping Policy</p>
        <p>Contact Us</p>
      </div>
      </div>
      <div className='Bottom'>
        <p>© 2024 DhukaN </p>
      </div>
    </div>
  )
}

export default Footer