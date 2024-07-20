import React from 'react'
import Headerimage from './headar.svg';
import '../Style.css'
const Header = () => {
  return (
    <div className=''>
        <div className='header'>
        <div className='inside_header'>
        <p className='p_tag p_tag1' >GILLY'S</p>
        <p className='p_tag'>Koramangala</p>
       </div>
        <img src={Headerimage} alt="" className='headaer_image' />

        </div>
     
      
        </div>
  )
}

export default Header