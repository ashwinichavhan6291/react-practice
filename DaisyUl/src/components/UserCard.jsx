import React, { useEffect, useState } from 'react'

function UserCard() {

    let[User,setUser]=useState("");

 const getUser=async()=>{
  const response= await  fetch("https://randomuser.me/api/");
  const data=await response.json();
  setUser((data.results[0]));
  console.log((data.results[0]));
 }

useEffect(() => {
    getUser();
}, []);

 const handleOnClick=()=>{
 
    getUser().then((val)=> setUser(val.results[0]));
    
 }

  return (
  <>
  {User &&
  <div className="card bg-base-100 w-96 shadow-xl userCardContainer">
  <figure className="px-10 pt-10">
    <img
      src={User.picture.large}
      alt="Picture"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{User.name.first } {User.name.last}</h2>
    <p>{User.location.state} {User.location.country}</p>
    <div className="card-actions">
      <button className="btn btn-primary" onClick={handleOnClick}>users</button>
    </div>
  </div>
</div>
}
  </>
  )
}

export default UserCard