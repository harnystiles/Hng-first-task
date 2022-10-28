import React from 'react';
import './main.css';
import picture from '../../assets/image.png';
import share from '../../assets/share.png';
import shares from '../../assets/shares.png';

const Main = () => {
  return (
    <div className='main'>
      <div className='main-content'>
        <div className='main-profile'>
          <img id='profile__img' src={picture} alt='profile'/>
          <div className='text'><p>Bill Lawrence</p></div>
          <div className='main-profile-share'>
            <img src={share} alt='share' />
            <img src={shares} alt='share-mobile' />
            </div>
        </div>
        <div className='main-link'>
          <span><button><a href='#f'>Twitter Links</a></button></span>
          <span><button><a href='#f'>Zuri Team</a></button></span>
          <span><button><a href='#f'>Zuri Books</a></button></span>
          <span><button><a href='#f'>Python Books</a></button></span>
          <span><button><a href='#r'>Background Check for Coders</a></button></span>
          <span><button><a href='#f'>Design Books</a></button></span>
        </div>
      </div>
    </div>
  )
}

export default Main