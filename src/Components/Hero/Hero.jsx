import React from 'react';
import './Hero.css';
import Hero from '../../containers/Main/Main';
import Social from '../../containers/Social/Social';

const hero = () => {
  return (
    <div className='hero'>
        <Hero />
        <Social />
    </div>
  )
}

export default hero