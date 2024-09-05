import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Books from './components/Books/Books';
import AboutUs from './components/AboutUs/AboutUs';
import BookDetails from './components/BookDetails/BookDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import LoadingPage from './components/LoadingPage/LoadingPage';

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
        loader : () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path : '/book/:bookId',
        element : <BookDetails></BookDetails>,
        loader : ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      },
      {
        path : '/aboutUs',
        element : <AboutUs></AboutUs>
      },
      {
        path : '/loading',
        element : <LoadingPage></LoadingPage>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
