import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home/Home';
import Books from './components/Books/Books/Books';
import AboutUs from './components/AboutUs/AboutUs/AboutUs';
import Contact from './components/Contact/Contact/Contact';
import AuthProvider from './components/Context/AuthProvider';
import SingleBook from './components/Books/SingleBook/SingleBook';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
      },
      {
        path : '/books',
        element : <Books></Books>,
      },
      {
        path : '/singleBook/:id',
        element : <SingleBook></SingleBook>,
      },
      {
        path : '/aboutUs',
        element : <AboutUs></AboutUs>
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
