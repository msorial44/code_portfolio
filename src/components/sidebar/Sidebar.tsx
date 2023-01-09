import React from 'react';
import account from '../../public/imgs/account.svg';
import extensions from '../../public/imgs/extensions.svg';
import files from '../../public/imgs/files.svg';
import settings from '../../public/imgs/settings-gear.svg';
import source_control from '../../public/imgs/source-control.svg';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import { matchPath } from 'react-router';



function Sidebar() {


    return (
        <div className='sidemenu'>
            <div className='sidemenu-top-div'>
            <div className={`section-div ${matchPath(window.location.pathname, '/home') || matchPath(window.location.pathname, '/') ? 'active-section-title' : ''}`} >
                    <NavLink
                        to="/home"
                        className={({ isActive }) => isActive ? 'active-section-title' : ''}
                    >
                        <div className="section-logo">
                            <img src={files} alt="files" />
                        </div>
                    </NavLink>
                </div>
                <div className={`section-div ${matchPath(window.location.pathname, '/about') ? 'active-section-title' : ''}`} >
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? 'active-section-title' : ''}
                    >
                        <div className="section-logo">
                            <img src={account} alt="account" />
                        </div>
                    </NavLink>
                </div>
                <div className={`section-div ${matchPath(window.location.pathname, '/github') ? 'active-section-title' : ''}`} >
                    <NavLink
                        to="/github"
                        className={({ isActive }) => isActive ? 'active-section-title' : ''}
                    >
                        <div className="section-logo">
                            <img src={source_control} alt="source-control" />
                        </div>
                    </NavLink>
                </div>
                <div className={`section-div ${matchPath(window.location.pathname, '/projects') ? 'active-section-title' : ''}`} >
                    <NavLink
                        to="/projects"
                        className={({ isActive }) => isActive ? 'active-section-title' : ''}
                    >
                        <div className="section-logo">
                            <img src={extensions} alt="extensions" />
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className='sidemenu-bottom-div'>
                <div className={`section-div ${matchPath(window.location.pathname, '/settings') ? 'active-section-title' : ''}`} >
                    <NavLink
                        to="/settings"
                        className={({ isActive }) => isActive ? 'active-section-title' : ''}
                    >
                        <div className="section-logo">
                            <img src={settings} alt="settings" />
                        </div>
                    </NavLink>
                </div>
            
            </div>
        </div>
    );
}

export default Sidebar;