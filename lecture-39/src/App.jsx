import Root from './pages/Root.jsx'
import {
    createBrowserRouter,
    RouterProvider,
    useLoaderData,
} from "react-router-dom";
import React from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/contact.jsx";
import Post from "./pages/Post.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/posts",
                element: <Blog />,
            },
            {
                path: "posts/:postId",
                element: <Post />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ]
    },
]);

const App = () => {
  return <>
      <RouterProvider router={router} />
  </>
}
export default App;