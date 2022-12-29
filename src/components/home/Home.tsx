import React from 'react';
import glasses from '../../public/imgs/glasses.svg';
import Sidebar from '../sidebar/Sidebar';
import Menu from '../menu/Menu';
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
            <div className='home-container'>
              <div className='glasses-container'>
                <img src={glasses} alt='glasses' />
              </div>
              <div className='home-content'>
                <p>
                  <p style={{ color: '#FF00AA'}}>
                    Hello,&nbsp;
                  </p>
                  <p style={{ color: '#EE5D43'}}>
                    my&nbsp;
                  </p>
                  <p style={{ color: '#00E8C6'}}>
                    name&nbsp;
                  </p>
                  <p style={{ color: '#EE5D43'}}>
                    is&nbsp;
                  </p>
                  <p style={{ color: '#FFE66D'}} className="name-content">
                    Mark Sorial
                  </p>
                  <p style={{ color: '#EE5D43'}}>
                    I&nbsp;
                  </p>
                  <p style={{ color: '#FF00AA'}}>
                    make&nbsp;
                  </p>
                  <p style={{ color: '#00E8C6'}}>
                    things,&nbsp;
                  </p>
                  <p style={{ color: '#EE5D43'}}>
                    and&nbsp;
                  </p>
                  <p style={{ color: '#FF00AA'}}>
                    wear&nbsp;
                  </p>
                  <p style={{ color: '#00E8C6'}}>
                    cool glasses.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
