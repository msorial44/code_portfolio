import React from 'react';
import glasses from '../../public/imgs/glasses.svg';
import profile from '../../public/imgs/profilePic.png'
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
            <div className='about-page'>
              <div className="photo-content">
                <img src={profile} alt="profile" />
              </div>
              <div className="text-content">
                <div className='top-paragraph' style={{ marginBottom: '3rem'}}>
                  <p>
                    Hello, my name is Mark Sorial and I like to make things. 
                    I started creating Minecraft Mods in 5th grade and ever 
                    since then I haven’t stopped making. 
                  </p>
                </div>
                <div className="paragraph2">
                  <p>
                    Today, I have created numerous projects in both the
                    hardware and software spaces. Through my career I have
                    gained a proficiency in <p style={{ color: '#88C0D0'}}>HTML</p>, <p style={{ color: '#88C0D0'}}>CSS</p>, <p style={{ color: '#88C0D0'}}>JavaScript</p>, <p style={{ color: '#88C0D0'}}>TypeScript</p>,
                    <p style={{ color: '#88C0D0'}}> Python</p> and <p style={{ color: '#88C0D0'}}>Rust</p>.
                  </p>
                </div>
                <div className="paragraph3">
                  <div style={{fontSize: '1.5rem'}}>
                    <p>Experience</p>
                  </div>
                  <div style={{ marginBottom: '1rem', marginTop: "2rem"}}>
                    <p>-Anghami, Web Development Intern</p>
                  </div>
                  <div style={{ marginBottom: '1rem'}}>
                    <p>-Dana Farber, Bioinformatics Intern</p>
                  </div>
                </div>
                <div className="paragraph4">
                <div style={{fontSize: '1.5rem'}}>
                    <p>Education</p>
                  </div>
                  <div style={{ marginBottom: '1rem', marginTop: "2rem"}}>
                    <p>-American School of Dubai, 2023</p>
                  </div>
                  <div style={{ marginBottom: '1rem'}}>
                    <p>-University of Something, 2027</p>
                  </div>
                </div>             
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default About;
