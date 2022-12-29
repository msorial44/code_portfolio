import React from 'react';
import glasses from '../../public/imgs/glasses.svg';
import Sidebar from '../sidebar/Sidebar';
import Menu from '../menu/Menu';
import { Grid } from 'antd';
import './Home.scss';

function Home() {
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

export default Home;
