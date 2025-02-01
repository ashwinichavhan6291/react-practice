import React from 'react'
import UserContext from '../Context/userContext'
import { useContext } from 'react'


function Profile() {

    const{user}=useContext(UserContext)
 
    if(!user) return <div>please Login</div>

    return <div>Welcome {user.username}</div>

}

export default Profile