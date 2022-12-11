import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-slate-400 text-center'>
            <NavLink to='/' className="mx-2">Home</NavLink>
            <NavLink to='/about' className="mx-2">About</NavLink>
            <NavLink to='/resume' className="mx-2">Resume</NavLink>
            <NavLink to="/works" className="mx-2">Works</NavLink>
            <NavLink to='/testimonials' className="mx-2">Testimonials</NavLink>
            <NavLink to='/contact' className="mx-2">Contact</NavLink>
            <NavLink to='/blogs' className="mx-2">Blogs</NavLink>
        </nav>
    );
};

export default Navbar;