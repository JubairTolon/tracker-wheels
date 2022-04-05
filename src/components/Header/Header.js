import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <h2>Tracker <span className='logo-span'>Wheels</span></h2>
            </div>
            <div className='links'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/reviews'>Reviews</Link>
                <Link className='nav-link' to='/dashboard'>Dashboard</Link>
                <Link className='nav-link' to='/blogs'>Blogs</Link>
                <Link className='nav-link' to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Header;