import React, { useEffect, useState } from 'react';
import {  FaArrowDown , FaArrowAltCircleDown} from 'react-icons/fa';
import Banner from '../../Componets/Banner/Banner';
import ProjectCard from '../../Componets/ProjectCard/ProjectCard';

const Home = () => {

    // Show Project State 
    const [display,setDisplay] = useState(false);



    // Set timer tow display my show case after sometime
    useEffect(()=> {
        setTimeout(()=> setDisplay(true), 7000)
        setTimeout(()=> setDisplay(false), 12000)


    }, [])



    return (
        <div className='flex flex-col items-center'>
           
           <Banner></Banner>


            <div className='mt-5 flex flex-col items-center gap-5'>
            <button onClick={()=> setDisplay(!display)}><FaArrowDown className="animate-bounce text-white text-4xl"></FaArrowDown></button>
                
                <section className='flex gap-5'>
                    {display?<ProjectCard></ProjectCard> :<></> }
                  

                </section>
            </div>
        </div>
    );
};

export default Home;