import React from 'react';
import CustomLink from './ActiveLink/ActiveLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between items-center bg-white drop-shadow-md pt-4 pb-4 pl-20 pr-20'>
                <h2 className='text-4xl font-bold'>ECR</h2>
                <menu className='flex justify-between items-center font-semibold tracking-wider'>
                    <CustomLink className='p-3 text-lg' to='/'>Home</CustomLink>
                    <CustomLink className='p-3 text-lg' to='/reviews'>Reviews</CustomLink>
                    <CustomLink className='p-3 text-lg' to='/dashboard'>Dashboard</CustomLink>
                    <CustomLink className='p-3 text-lg' to='/blogs'>Blogs</CustomLink>
                    <CustomLink className='p-3 text-lg' to='/contact'>Contact</CustomLink>
                </menu>
            </nav>
        </div>
    );
};

export default Header;