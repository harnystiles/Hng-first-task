import React from 'react';
import './Nav.css';
import picture from '../../assets/image.png';
import share from '../../assets/share.png';
import shares from '../../assets/shares.png';


const Nav = () => {
  return (
    <div className='nav'>
    
      <div className='share'><img src={share} alt='share-icon'/></div>
      <div className='share-mobile'><img src= {shares} alt='share-icon'/></div>
      <img className='profile' src={picture} alt='profile' />
      <p>Annette Black</p>
    </div>
  )
}

export default Nav