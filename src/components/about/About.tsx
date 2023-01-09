import React from 'react';
import glasses from '../../public/imgs/glasses.svg';
import Sidebar from '../sidebar/Sidebar';
import Menu from '../menu/Menu';
import './About.scss';

function About() {
  return (
    <div className="Home">
        <Sidebar />
        <div className='main'>
          <div className='header-navi'>
            <Menu />
          </div>
          <div className='main-content'>
            
          </div>
        </div>
    </div>
  );
}

export default About;
