import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-slate-400 text-center'>
            <NavLink className="mx-2">Home</NavLink>
            <NavLink className="mx-2">About</NavLink>
            <NavLink className="mx-2">Resume</NavLink>
            <NavLink className="mx-2">Works</NavLink>
            <NavLink className="mx-2">Testimonials</NavLink>
            <NavLink className="mx-2">Contact</NavLink>
            <NavLink className="mx-2">Blogs</NavLink>
        </nav>
    );
};

export default Navbar;