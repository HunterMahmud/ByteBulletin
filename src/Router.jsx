import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Blogs from './Pages/Blogs';
import Bookmarks from './Pages/Bookmarks';
import Home from "./Pages/Home";
import BlogDetails from './Pages/BlogDetails';
import Content from "./Components/Content";
import Author from "./Components/Author";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/blogs",
                loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7'),
                element: <Blogs/>,
            },
            {
                path: "/blogs/:id",
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
                element: <BlogDetails />,
                children:[
                    {
                        path: '',
                        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
                        element: <Content />
                    },
                    {
                        path: 'author',
                        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
                        element: <Author />
                    }
                ]
            },

            
            
            {
                path: "/bookmarks",
                element: <Bookmarks/>,
            },
        ]
    },
   
]);

export default router;