import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaDownload, FaStar } from 'react-icons/fa';



const Navbar = () => {




    const Menu = <div className='flex flex-col lg:flex-row gap-2'>
        <li><NavLink to='/' className="mx-2">Home</NavLink></li>
        <li><NavLink to='/about' className="mx-2">About</NavLink></li>
        <li><NavLink to='/resume' className="mx-2">Resume</NavLink></li>
        <li><NavLink to="/works" className="mx-2">Works</NavLink></li>
        <li><NavLink to='/testimonials' className="mx-2">Testimonials</NavLink></li>
        <li><NavLink to='/blogs' className="mx-2">Blogs</NavLink></li>
    </div>



    return (
        <nav className='bg-slate-400 text-center'>



            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {Menu}
                        </ul>
                    </div>
                    <a className="hidden lg:flex btn btn-ghost normal-case text-xl flex gap-1">Zubair's<FaStar></FaStar></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href={`${process.env.REACT_APP_RESUME}`} className="btn flex gap-2">Download Resume <FaDownload></FaDownload></a>



                </div>
            </div>

        </nav>
    );
};

export default Navbar;