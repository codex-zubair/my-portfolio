import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";
import Blogs from "../../Pages/Blogs/Blogs";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";
import Resume from "../../Pages/Resume/Resume";
import Testimonials from "../../Pages/Testimonials/Testimonials";
import Works from "../../Pages/Works/Works";




export const route = createBrowserRouter([

    {
        path:'/', element: <Main></Main>,
        children: [
            {
                path: '/' , element: <Home></Home>
            },
            {
                path:'/about', element: <About></About>
            },

            {
                path:'/resume', element:<Resume></Resume>
            },

            {
                path:"/works", element:<Works></Works>
            },

            {
                path:"/testimonials", element:<Testimonials></Testimonials>
            },
            

            {
                path:'/contact', element: <Contact></Contact>
            },

            {
                path:'/blogs', element: <Blogs></Blogs>
            }

          
        ]
    }

])