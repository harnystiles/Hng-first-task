import React from 'react';
import './social.css';
import slack from '../../assets/slack.png';
import git from '../../assets/Icon.png'


const Social = () => {
  return (
    <div className='social'>
      <div  className='social-link'>
        <div className='social-link-content'>
          <div className='social-link-container'>
            <img src={slack} alt='slack' />
            <img src={git} alt='slack' />
          </div>
      </div>
      </div>
    </div>
  )
}

export default Social