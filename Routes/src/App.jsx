import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import {Link,Outlet} from 'react-router-dom'
function App() {
  return (
    <>
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
   <Link to="/home">Home</Link>
   <Link to="/about">About</Link>
   <Link to="/contact">Contact</Link>
   <Link to="/users">Users</Link>
   <Link to="/users/list">List</Link>
    <Link to="/college">College</Link>
    

  </nav>
  <Outlet></Outlet>
  </>
  )
}

export default App