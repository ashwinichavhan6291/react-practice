import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import College from './Components/College.jsx'
import Student from './Components/Student.jsx'
import Department from './Components/Department.jsx'
import Users from './Components/Users.jsx'
import UserDetail from './Components/UserDetail.jsx'




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<Routes>

  <Route path="/" element={<App/>} >
  
  <Route path="/home" element={ <Home/>}/>
  <Route path="/contact" element={ <Contact/>}/>
  <Route path="/about" element={ <About/>}/>
  <Route path="/users/list?" element={ <Users/>}/>
  <Route path="/users/:id/:name?" element={ <UserDetail/>}/>
  </Route>
 
  <Route path='college' element={<College/>}>
  
  <Route  index element={<Student/>}/>
  <Route path='department' element={<Department/>}/>
  
  </Route>
  </Routes>
</BrowserRouter>
)
