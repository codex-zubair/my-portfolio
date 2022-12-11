import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Banner = () => {
    return (
        <section className='flex items-center flex-col text-white'>
        <h1>I am NM Zubair.</h1>
        <p>I am a React developer. I am also proficient at backend development, but I enjoy working with React more on the front end of a project.
        i have good understanding of error handling and fast acclimatization to new technology. Clean, efficient work is what I love to do.</p>


        <div className='flex gap-2'>
        <FaLinkedin/>
        <FaGithub/>
        <FaFacebook/>
        </div>
        </section>
    );
};

export default Banner;