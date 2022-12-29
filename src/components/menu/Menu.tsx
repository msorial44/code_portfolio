import React from 'react';
import python_img from '../../public/imgs/file_type_python.svg';
import reacttts_img from '../../public/imgs/file_type_reactts.svg';
import scss_img from '../../public/imgs/file_type_scss.svg';
import text_img from '../../public/imgs/file_type_text.svg';
import { NavLink } from 'react-router-dom';
import { matchPath } from 'react-router';
import './Menu.scss';

function Menu() {

    return (
        <div className='menubar'>
            <div className={`menu-item ${matchPath(window.location.pathname, '/home') ? 'active-menu-item' : ''}`} >
                    <NavLink
                        to="/home"
                        style={{ textDecoration: 'none' }}
                        className={({ isActive }) => isActive ? 'active-section-title' : ''}
                    >
                        <div className="item-title">
                            <div className="item-logo">
                                <img src={reacttts_img} alt="tsx" />
                            </div>
                            home.tsx
                        </div>
                    </NavLink>
            </div>
            <div className={`menu-item ${matchPath(window.location.pathname, '/about') ? 'active-menu-item' : ''}`} >
                <NavLink
                    to="/about"
                    style={{ textDecoration: 'none' }}
                    className={({ isActive }) => isActive ? 'active-section-title' : ''}
                >
                    <div className="item-title">
                        
                        <div className="item-logo">
                            <img src={scss_img} alt="scss" />
                        </div>
                        mark_sorial.scss
                        
                    </div>
                </NavLink>
            </div>
            <div className={`menu-item ${matchPath(window.location.pathname, '/projects') ? 'active-menu-item' : ''}`} >
                <NavLink
                    to="/projects"
                    style={{ textDecoration: 'none' }}
                    className={({ isActive }) => isActive ? 'active-section-title' : ''}
                >
                    <div className="item-title">
                        
                        <div className="item-logo">
                            <img src={python_img} alt="python" />
                        </div>
                        projects.py
                    </div>
                </NavLink>
            </div>
            <div className={`menu-item ${matchPath(window.location.pathname, '/github') ? 'active-menu-item' : ''}`} >
                <NavLink
                    to="/github"
                    style={{ textDecoration: 'none' }}
                    className={({ isActive }) => isActive ? 'active-section-title' : ''}
                >
                    <div className="item-title">
                        
                        <div className="item-logo">
                            <img src={text_img} alt="text" />
                        </div>
                        github.txt
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Menu;