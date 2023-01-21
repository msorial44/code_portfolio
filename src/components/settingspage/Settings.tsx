import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Menu from '../menu/Menu';

function Settings() {
    return (
      <div className="Home">
          <Sidebar />
          <div className='main'>
            <div className='header-navi'>
              <Menu />
            </div>
            <div className='main-content'>
              <h2> Settings </h2>
            </div>
          </div>
      </div>
    );
  }
  
  export default Settings;