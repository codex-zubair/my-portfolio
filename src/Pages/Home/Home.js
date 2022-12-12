import React, { useState } from 'react';
import {  FaArrowDown , FaArrowAltCircleDown} from 'react-icons/fa';
import Banner from '../../Componets/Banner/Banner';
import ProjectCard from '../../Componets/ProjectCard/ProjectCard';

const Home = () => {

    // Show Project State 
    const [display,setDisplay] = useState(false);



    return (
        <div className='flex flex-col items-center'>
           
           <Banner></Banner>


            <div className='mt-5 flex flex-col items-center gap-5'>
            <FaArrowDown className="animate-bounce text-white text-4xl"></FaArrowDown>
                
                <section className='flex gap-5'>
                    {display?<ProjectCard></ProjectCard> :<></> }
                  

                </section>
            </div>
        </div>
    );
};

export default Home;