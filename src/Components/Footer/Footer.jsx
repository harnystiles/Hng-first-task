import React from 'react';
import './Footer.css';
import zuri from '../../assets/zuri.png';
import dot from '../../assets/Vector.png';
import ing from '../../assets/I4G.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-content-box'>
          <div className='Zuri-vector'>
            <img className='dot' src={dot} alt='zuri-logo' />
            <img className='zuri' src={zuri} alt='zuri-logo' />
          </div>
          <p> HNG Internship 9 Frontend Task</p>
          <img src={ing} alt='ingressive for good' />
        </div>
      </div>
    </div>
  )
}

export default Footer