import React from 'react';
import spa from '../../Image/dianaSpaProject/diana_spa.jpg';
import ai from '../../Image/AI/humanoid-robot-computer-euro-Roboter.jpeg';

const ProjectCard = () => {
    return (
        <section className='lg:flex-row flex flex-col gap-2 w-11/12 mx-auto'>

           

            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={spa}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-3xl">Diana Spa</h2>
                    <p className='lg:text-xl'>Web Application For Spa Management</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline text-white">Project Details</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={ai}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-3xl">AI Enthusiasts</h2>
                    <p className='lg:text-xl'>Learning Platform For AI Enthusiasts (Educational Website)</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline text-white">Project Details</button>
                    </div>
                </div>
            </div>

           


        </section>
    );
};

export default ProjectCard;