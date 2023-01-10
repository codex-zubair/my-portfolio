import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../Banner/Banner.css';


const Banner = () => {
    return (
        <section className='mx-2 lg:mx-20 my-10 lg:my-36 flex items-center flex-col text-white'>
            <h1 className='text-2xl justify-center lg:text-5xl font-serif font-semibold'>N.M. Zubair Alam.</h1>
            <div>
            <p className='lg:text-xl my-2 text-center font-serif max-w-4xl font-semibold typing-demo'>React Developer</p>
            </div>
            <p className='lg:text-xl my-6 text-center font-serif max-w-4xl font-semibold'>Hi! I am a React developer. I am also proficient at backend development, but I enjoy working with React more on the front end of a project.
                i have good understanding of error handling and fast acclimatization to new technology. Clean, efficient work is what I love to do... 
            <NavLink to={'/about'}>  more details</NavLink></p>

            


            <div className='flex gap-5'>
                <a href="https://www.linkedin.com/in/zubayeralaam/" target="_blank" ><FaLinkedin className='text-3xl' /></a>

                <a href="https://wa.me/+8801622559988" target="_blank" ><FaWhatsapp className='text-3xl' /></a>
                <a href='https://github.com/codingwithrock' target="_blank"><FaGithub className='text-3xl' /></a>
                <a href='https://www.facebook.com/Zubayeralaam/' target="_blank"><FaFacebook className='text-3xl' /></a>
            </div>

        </section>
    );
};

export default Banner;