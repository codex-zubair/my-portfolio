
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './Routes/PublicRoutes/PublicRoutes';
import image from "../src/Image/Background/zubair_s_world_background.jpg";

function App() {
  return (
    <div style={{backgroundImage: `url(${image})`}} className='min-h-screen w-full bg-no-repeat bg-cover'>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
