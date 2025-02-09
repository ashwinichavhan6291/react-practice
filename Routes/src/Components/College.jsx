import React from 'react'
import {Link,Outlet }from 'react-router-dom'
function College() {
  return (
    <>
    <div>College</div>

    <Link to=""style={{margin:"20px"}}>Student</Link>
    <Link to="department">Department</Link>
    <Outlet/>
    </>
  )
}

export default College