import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Resume</NavLink>
            <NavLink>Works</NavLink>
            <NavLink>Testimonials</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>Blogs</NavLink>
        </div>
    );
};

export default Navbar;