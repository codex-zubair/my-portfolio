import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { FaDownload, FaStar } from 'react-icons/fa';



const Navbar = () => {




    const Menu = <div className='flex gap-2'>
        <li><NavLink to='/' className="mx-2">Home</NavLink></li>
        <li><NavLink to='/about' className="mx-2">About</NavLink></li>
        <li><NavLink to='/resume' className="mx-2">Resume</NavLink></li>
        <li><NavLink to="/works" className="mx-2">Works</NavLink></li>
        <li><NavLink to='/testimonials' className="mx-2">Testimonials</NavLink></li>
        <li><NavLink to='/contact' className="mx-2">Contact</NavLink></li>
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
                    <a className="btn btn-ghost normal-case text-xl flex gap-1">Zubair's<FaStar></FaStar></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="https://doc-0o-b8-docs.googleusercontent.com/docs/securesc/td095a10g19k0qectd0illhvb7t0v6dn/s2a90i8k8t12n0aaba9f79k9ivsu8prs/1670822925000/01960886669908100593/01960886669908100593/1FZyx6TuDRE52kY7RN-7UOGwlWucpgFg_?e=download&ax=AEKYgyQMIioFtmygB9kQceMfcx6Q6ZONv2ZfCA5EGf7JKAzW5SuJXnZ1b1q8ehEdAFiixYHYNVZDs-4LBvwF3CWzHKMwIILw2XHnmCBsNJ5OZ4KNwVsb9_QYK0qK2uIOTubikfjWKGEqTyX_nh5VXvRQ9TFPc5N4fZI5KyuYZE9x4o99Vp6OFHIk8Wox2nVUHaZG0WpGzth6NYo6JjBz5v8LWZSQ4VlgOUI42RKlAtUpQuf0_n99eDTD3GNHuuXXEWBUEQuAt2vKjbfS9SX6O0DKScse3rzMaB5h2Esm2o1JkQ0fCVCl0MSE1OevM6LyQDrOMSarEsgRqBDlZgfFYF82bo_oX2O6j4juzUO1dlTSKvDGgpmXQkTUjYXoZMdgyjhefkQ5NYcDLeMIKW_Mhfdc3e5PbPi0aLNoFxSkqREA8ppQ4iFyLTQbNwc8Pshn0wPKzHEWucVF_x1nAIQ61BdX-LgwU74Yeb2rSYKFaDtXQc6luadg-bUAdkITYwU6LyE3DHGkJ5JHJj3BIdVyii9GwDvsT42ZxPfP5XmBweZMkPkSRGekXvXoLWyOq7Rm_z2Sq4UpzzHH1TkeYDiU8Kl2tnm0s1-nakxgc9VT4RXE696EIiEJgDa3R2zzORSx2dW5Uyh25qhLCbVpPsvJ-MO-3_Qw5i51r2ClEDEt3ihGYEWV1ie7ejAOlwFTQ97sZakMHLqevWStIhNoPVr-y9ifWs2xKB6r2e5YOQ3V6ZYpYOCGKOM9xV5seu1GZSdJykNDiNtqutepONV8mjTQvcpoD7tmuHjZ9YQNS6oUf6yXuCbrT9Br-rq7JdGoshnoTQjahe23lsPvhMQukugnoF6x2ww1HRrVVMrY6fzkQePrrk4xanXDaaI0Tv8gXXXjGZx2AHzCwJ0XQEAEGmwBP8ZFTo_TOXmnSUfYyTLeuO01IinB7OHY7jFyjeEmm9-L_pDkYE-JIiaOww&uuid=c9cc47e3-5bd6-4d9c-b489-c90dcd307248&authuser=2&nonce=rk2e5d082gugu&user=01960886669908100593&hash=v5dtm3j2jeh70c1j8nca0tqdajd16q7b" className="btn flex gap-2">Download Resume <FaDownload></FaDownload></a>



                </div>
            </div>

        </nav>
    );
};

export default Navbar;