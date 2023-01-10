import Banner from '../../Componets/Banner/Banner';
import ProjectCard from '../../Componets/ProjectCard/ProjectCard';

const Home = () => {





    return (
        <div className='flex flex-col items-center'>

            <Banner></Banner>


            <div className='mt-5 flex flex-col items-center gap-5'>
                <h2 className='text-center text-white uppercase text-4xl underline'>Project-Showcase</h2>
            </div>


            <div className='my-5 w-11/12 flex flex-wrap items-center justify-center mx-auto'>
                <ProjectCard></ProjectCard>
            </div>
        </div>
    );
};

export default Home;