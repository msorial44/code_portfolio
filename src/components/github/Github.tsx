import React, {useState} from 'react';
import Sidebar from '../sidebar/Sidebar';
import Menu from '../menu/Menu';
import { Divider } from 'antd';
import { Octokit } from "octokit";
import github from '../../public/imgs/github-inverted.svg';
import link from '../../public/imgs/link.svg';
import star from '../../public/imgs/star.svg';
import sourcefork from '../../public/imgs/sourcefork.svg';
import GitHubCalendar from 'react-github-calendar';
import './Github.scss';

function Github() {
  const octokit = new Octokit({ });
  const [followers, setFollowers] = useState(0);
  const [repos, setRepos] = useState(0);
  octokit.request('GET /users/{user}', {
    user: 'msorial44'
  }).then(({ data }) => {
    setFollowers(data.followers);
    setRepos(data.public_repos);
  });


  return (
    <div className="Home">
        <Sidebar />
        <div className='main'>
          <div className='header-navi'>
            <Menu />
          </div>
          <div className='main-content'>
            <div className='top-header'>
              
              <div>
                <a href='https://github.com/msorial44' >
                  msorial44
                </a>
              </div>
              <Divider type='vertical' />   
              <div>
                {repos} repositories
              </div>
              <Divider type='vertical' />
              <div>
                {followers} followers
              </div>
              
            </div>
            <div className='activity-calendar'> 
              <GitHubCalendar username="msorial44" color="#88C0D0"/>
            </div>
            <div className='repo-container'>
              <div className='repo-card'>
                <div className='repo-content'>
                  <div className='repo-name'>
                    horl-videogames
                  </div>
                  <div className='repo-description'>
                  Higher or Lower game 
  but for videogames. 
                  </div>
                </div>

                <div className='repo-footer'>
                  <div className='repo-language'>
                    <span className='language-color' style={{backgroundColor: '#3178C6'}}></span>
                    TypeScript
                  </div>
                  <div className='repo-stats-links'>
                    <div className='repo-stats'>
                      <div className='repo-stat'>
                        <img src={star} alt="star"/>
                        27
                      </div>
                      <div className='repo-stat'>
                        <img src={sourcefork} alt="forks"/>
                        2
                      </div>
                    </div>
                    <div className='repo-links'>
                      <div className='repo-link'>
                        <a href="https://higherorlower.games" target="_blank" rel="noreferrer">
                          <img src={link} alt="link"/>
                        </a>
                      </div>
                      <div className='repo-link'>
                        <a href="https://msorial44.github.io/horl-videogames/" target="_blank" rel="noreferrer">   
                          <img src={github} alt="github"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='repo-card'>
                <div className='repo-content'>
                  <div className='repo-name'>
                    Minesweeper--
                  </div>
                  <div className='repo-description'>
                    simple minesweeper app to show off frontend skills. 
                  </div>
                </div>
                <div className='repo-footer'>
                  <div className='repo-language'>
                    <span className='language-color' style={{backgroundColor: '#F1E05A'}}></span>
                    JavaScript
                  </div>
                  <div className='repo-stats-links'>
                    <div className='repo-stats'>
                      <div className='repo-stat'>
                        <img src={star} alt="star"/>
                        13
                      </div>
                      <div className='repo-stat'>
                        <img src={sourcefork} alt="forks"/>
                        0
                      </div>
                    </div>
                    <div className='repo-links'>
                      <div className='repo-link'>
                        <a href="http://minesweeper-msorial44.vercel.app/" target="_blank" rel="noreferrer">
                          <img src={link} alt="link"/>
                        </a>
                      </div>
                      <div className='repo-link'>
                        <a href="https://github.com/msorial44/Minesweeper--" target="_blank" rel="noreferrer">   
                          <img src={github} alt="github"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='repo-card'>
                <div className='repo-content'>
                  <div className='repo-name'>
                    asd-grade-calc
                  </div>
                  <div className='repo-description'>
                    simple webapp designed to calculate grades for asd students.
                  </div>
                </div>
                <div className='repo-footer'>
                  <div className='repo-language'>
                    <span className='language-color' style={{backgroundColor: '#3178C6'}}></span>
                    TypeScript
                  </div>
                  <div className='repo-stats-links'>
                    <div className='repo-stats'>
                      <div className='repo-stat'>
                        <img src={star} alt="star"/>
                        7
                      </div>
                      <div className='repo-stat'>
                        <img src={sourcefork} alt="forks"/>
                        0
                      </div>
                    </div>
                    <div className='repo-links'>
                      <div className='repo-link'>
                        <a href="https://asdgradecalculator.com" target="_blank" rel="noreferrer">
                          <img src={link} alt="link"/>
                        </a>
                      </div>
                      <div className='repo-link'>
                        <a href="https://github.com/msorial44/asd-grade-calculator" target="_blank" rel="noreferrer">   
                          <img src={github} alt="github"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='repo-card'>
                <div className='repo-content'>
                  <div className='repo-name'>
                    Minesweeper AI
                  </div>
                  <div className='repo-description'>
                    Minesweeper bot that can solve medium and hard no guess boards.
                  </div>
                </div>
                <div className='repo-footer'>
                  <div className='repo-language'>
                    <span className='language-color' style={{backgroundColor: '#3572A5'}}></span>
                    Python
                  </div>
                  <div className='repo-stats-links'>
                    <div className='repo-stats'>
                      <div className='repo-stat'>
                        <img src={star} alt="star"/>
                        7
                      </div>
                      <div className='repo-stat'>
                        <img src={sourcefork} alt="forks"/>
                        0
                      </div>
                    </div>
                    <div className='repo-links'>
                     
                      <div className='repo-link'>
                        <a href="https://github.com/msorial44/Minesweeper-AI" target="_blank" rel="noreferrer">   
                          <img src={github} alt="github"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>






              
            </div>
          </div>
        </div>
    </div>
  );
}

export default Github;
