import React from 'react';
import './main.css';
import share from '../../assets/share.png';
import shares from '../../assets/shares.png';
import hover from '../../assets/hover.png';
import tool from '../../assets/Tooltip.png';
import cursor from '../../assets/Cursor.png';

const Main = () => {
  const Team = 'https://training.zuri.team';
  const Books = 'https://books.zuri.team';
  const Python = 'https://books.zuri.team/python-for-beginners?ref_id=Harny';
  const Pitch = 'https://background.zuri.team';
  const Design = 'https://books.zuri.team/design-rules';

  return (
    <div className='main'>
      <div className='main-content'>
        <div className='main-profile'>
          <div className='images'>
            <img id='image' src={hover} alt='hover' />
          </div>
          <p id='twitter' >LawrenceBill3</p>
          {/* <p id='slack'>Harny</p> */}
          <div className='hover'>
            <img className='share' id='desktop' src={share} alt='share' />
            <img className='share' id='mobile' src={shares} alt='share-mobile' />
            <img className='shares' src={tool} alt='share' />
            <img className='cus' src={cursor} alt='share' />
          </div>
        </div>
        <div className='main-link'>
          <a href='.'>Twitter Links</a>
          <a href={Team}>Zuri Team</a>
          <a href={Books} title='This is where you find books about design and coding' >Zuri Books</a>
          <a href={Python} title='Best place to fetch resources to jumpstart tech careers' >Python Books</a>
          <a href={Pitch} title='validate your all codes at cheapest rates'>Background Check for Coders</a>
          <a href={Design} title='Best place to get amazingly free designs' >Design Books</a>
        </div>
      </div>
    </div>
  )
}

export default Main