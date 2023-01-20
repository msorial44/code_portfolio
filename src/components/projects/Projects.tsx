import React from 'react';
import highorlow from '../../public/imgs/highorlow.png';
import minesweep from '../../public/imgs/minesweep.png';
import asdgpa from '../../public/imgs/asdgpa.png';
import boygame from '../../public/imgs/boygame.png';
import Sidebar from '../sidebar/Sidebar';
import Menu from '../menu/Menu';
import './Projects.scss';

function Projects() {
  return (
    <div className="Home">
        <Sidebar />
        <div className='main'>
          <div className='header-navi'>
            <Menu />
          </div>
          <div className='main-content'>
            <div className='card-container'>
              <div className='project-card'>
                <div className='project-card-img'>
                  <img src={boygame} alt='boygame' />
                </div>
                <div className='project-card-content'>
                  <div className='project-card-title'>
                    BoyGame Handheld
                  </div>
                  <div className='project-card-description'>
                    A 3D printed handheld, uses a 
                    Raspberry pi and Retropie to 
                    emulate retro games. Designed the circuit diagram, modeled the case and printed it. 
                  </div>
                </div>
              </div>
              <div className='project-card'>
                <div className='project-card-img'>
                  <img src={highorlow} alt='highorlow' />
                </div>
                <div className='project-card-content'>
                  <div className='project-card-title'>
                    Higher Or Lower Videogames
                  </div>
                  <div className='project-card-description'>
                  A polished web game in the
Style of Higher or Lower but
With Video Game Metacritic 
Scores. 
                  </div>
                </div>
              </div>
              <div className='project-card'>
                <div className='project-card-img'>
                  <img src={minesweep} alt='minesweep' />
                </div>
                <div className='project-card-content'>
                  <div className='project-card-title'>
                    Minesweeper Bot
                  </div>
                  <div className='project-card-description'>
                  A python program utilizing
computer vision and mouse
input to play Minesweeper
for you.
                  </div>
                </div>
              </div>
              <div className='project-card'>
                <div className='project-card-img'>
                  <img src={asdgpa} alt='asdgpa' />
                </div>
                <div className='project-card-content'>
                  <div className='project-card-title'>
                    ASD GPA Calculator
                  </div>
                  <div className='project-card-description'>
                  A simple web app designed to 
allow ASD students to 
calculate the often confusing
school GPA.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Projects;
