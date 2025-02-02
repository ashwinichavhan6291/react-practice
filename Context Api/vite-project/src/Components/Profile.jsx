import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'


function Profile() {

    const {user} =useContext(UserContext)
    if(!user) return <div>please Login</div>

    return <p>welcome {user.username},{user.password}</p>
 
}

export default Profile