import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import Blog from './Components/blog/Blog.jsx';
import Sing from './Components/registere/Sing.jsx';
import Login from './Components/login/Login.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Recipe from './Components/Recipe/Recipe.jsx';
import AuthProvider from './Components/authprovider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Header></Header>
      },
      {
        path:"/",
        element:<Footer></Footer>
      },
      {
        path:"home",
        element:<Header></Header>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path:"header",
        element:<Header></Header>
      },
      {
        path:"sing",
        element:<Sing></Sing>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/data/:id",
        element:<Recipe></Recipe>,
        loader:({params})=>fetch(`https://myapp-israfil3.vercel.app/data/${params.id}`)
      }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
