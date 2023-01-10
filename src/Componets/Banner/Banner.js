import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp , FaBox} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../Banner/Banner.css';
import { useForm, ValidationError } from '@formspree/react';


const Banner = () => {
    const [open, setOpen] = useState(false);

    const [state, handleSubmit] = useForm("mvonoypy");
    if (state.succeeded) {
        return <p className=' text-center font-serif max-w-4xl lg:text-5xl text-white my-14'>Thanks! I'll be in touch with you soon.</p>;
    }


    // state for mail box



    return (
        <section className='mx-2 lg:mx-20 mt-7 lg:my-20  flex w-auto items-center flex-col text-white'>
            <h1 className='text-2xl justify-center lg:text-6xl font-serif font-semibold'>N.M. Zubair Alam.</h1>
            <div>
                <p className='lg:text-2xl my-3 text-center font-serif max-w-4xl font-semibold'>React Developer</p>
            </div>
            <p className='lg:text-xl  lg:my-7 text-center font-serif max-w-7xl  w-11/12 mx-auto lg:mx-auto   font-semibold'>Hi! I am a React developer. I am also proficient at backend development, but I enjoy working with React more on the front end of a project.
                i have good understanding of error handling and fast acclimatization to new technology. Clean, efficient work is what I love to do...
                <NavLink to={'/about'}>  more details</NavLink></p>




            <div className='flex gap-5 m-2'>
                <a href="https://www.linkedin.com/in/zubayeralaam/" target="_blank" ><FaLinkedin className='text-3xl hover:text-sky-600' /></a>

                <a href="https://wa.me/+8801622559988" target="_blank" ><FaWhatsapp className='text-3xl hover:text-sky-600' /></a>
                <a href='https://github.com/codingwithrock' target="_blank"><FaGithub className='text-3xl hover:text-sky-600' /></a>
                <a href='https://www.facebook.com/Zubayeralaam/' target="_blank"><FaFacebook className='text-3xl hover:text-sky-600' /></a>
            </div>
            <button onClick={() => setOpen(!open)} className='uppercase my-2 btn-sm rounded-none btn'>Mail Box</button>
            <div>
                {open? <form className='flex flex-col mt-5' onSubmit={handleSubmit}>
                    
                    <input className='border text-black'

                        id="email"
                        type="email"
                        name="email"
                        placeholder='your email'
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea className='border text-black'
                        placeholder='write here,'
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button className='btn border-white' type="submit" disabled={state.submitting}>
                        Send
                    </button>
                </form>:<></>}
            </div>

        </section>
    );
};

export default Banner;