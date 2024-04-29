import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import { BlogProvider } from './components/BlogContext';
import Blog from './pages/Blog';


const router = createBrowserRouter([
  {
    path: '/',
    element: <BlogProvider><Blog /></BlogProvider>, 
  },
]);


const App = () => {
return <>
    <RouterProvider router={router} />
</>
}
export default App;

