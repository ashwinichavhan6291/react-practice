
import {createRoot} from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import GitHub, { githubLoader } from './Components/GitHub/GitHub.jsx'
const router=createBrowserRouter(
  createRoutesFromElements (
 <Route path='/' element ={<App/>}>
  <Route path='/' element= { <Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='contact-us' element={<Contact/>}/>
  <Route path='user/:id' element={<User/>}/>
  <Route 
  loader={githubLoader}
  path='github'
   element={<GitHub/>}/>

 </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
