import React from 'react'
import './Header.css';
import '../Assets/stalls.png'


import {Link} from "react-router-dom";

import { FiAlignJustify} from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  return (
   // <div><FiAlignJustify /></div>
   < div className='headernav'>
   <div className="left-section">
    <FiAlignJustify className='hamburger-menu'/> 
      </div>

 <div className="middle-section">
      <img src='stalls.png'  className='stalls'></img>

   <input className= "search-bar" type="text" placeholder="serach"/>
   <button className="search-button">
   <div>
   <CiSearch  button className='search-icon'/>
       </div>
   </button>
 </div>

 <div className="right-section">
 <FaHeart className="wishlist" />
 <CiShoppingCart className="cart" />
< VscAccount  className="current-user-picture"/> 
 </div>

</div>
  )
}

export default Header