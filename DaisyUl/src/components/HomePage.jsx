import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
    <button className=" btn btn-active btn-primary "  style={{marginTop:"70px"}}>
  <Link to="/usercard">UserCard</Link>
</button>

<img src="https://images.pexels.com/photos/30056548/pexels-photo-30056548/free-photo-of-elegant-cream-satin-bow-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className='frontImage' />
    </>
  )
}

export default HomePage