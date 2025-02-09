import React from 'react'
import {Link} from 'react-router-dom';
function Users() {
    const userList=[
        {id:1,name:'anil'},
        {id:2,name:'rahul'},
        {id:3,name:'lokesh'},
    ]
  return (
    <div style={{color: "blue"}}>
        {userList.map((user)=> 
        <Link to={"/users/"+user.id+"/"+user.name}><li>{user.name}</li> </Link>
        )}
    </div>
  )
}

export default Users