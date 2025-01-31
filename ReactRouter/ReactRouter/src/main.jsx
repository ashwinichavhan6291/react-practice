
import {createRoot} from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'

const router=createBrowserRouter([
  {
    path: "/" ,element : <App/>,
    children :[
      { path :"/", element : <Home/>},
      {path : "about" , element : <About/>},
      {path : "contact-us" , element : <Contact/>}
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
