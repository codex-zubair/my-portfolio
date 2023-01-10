import Banner from '../../Componets/Banner/Banner';
import ProjectCard from '../../Componets/ProjectCard/ProjectCard';

const Home = () => {





    return (
        <div className='flex flex-col items-center'>
           
           <Banner></Banner>


            <div className='mt-5 flex flex-col items-center gap-5'>
            <h2 className='text-center text-white uppercase text-3xl underline'>Project-Showcase</h2>
                <section className=' flex gap-5'>
                    <ProjectCard></ProjectCard>
                </section>
            </div>
        </div>
    );
};

export default Home;