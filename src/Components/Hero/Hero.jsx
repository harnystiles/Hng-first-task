import React from 'react';
import './Hero.css';
import Main from '../../containers/Main/Main';
import Social from '../../containers/Social/Social';

const hero = () => {
  return (
    <div className='hero'>
        <Main />
        <Social />
    </div>
  )
}

export default hero