import React from 'react'
import Landing from '../pages/Landing'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import GetACall from '../pages/GetACall'
import AboutUs from '../pages/AboutUs'
import SendMail from '../pages/SendMail'
import MailSent from '../pages/MailSent'
import SpinnerScreen from '../pages/SpinnerScreen'
import Product from '../pages/Product'
import Services from '../pages/Services'
import BookService from '../pages/BookService'
import Contact from '../pages/Contact'

function Body() {

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element: <Landing/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/getacall',
      element:<GetACall/>
    },
    {
      path:'/about',
      element:<AboutUs/>
    },
    {
      path:'/send-mail',
      element:<SendMail/>
    },
    {
      path:'/mail-sent',
      element:<MailSent/>
    },
    {
      path:'/spinner',
      element:<SpinnerScreen/>
    },
    {
      path:'/products',
      element:<Product/>
    },
    {
      path:'/services',
      element:<Services/>
    },
    {
      path:'/book-service',
      element:<BookService/>
    },
    {
      path:'/contact',
      element:<Contact/>
    }
  ])



  return (
    <div>
    
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body