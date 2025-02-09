import React from 'react'
import { useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
function UserDetail() {

    const {id}=useParams();
  return (
    <>
    <div>User Id is : {id}</div>
 <Link to="/users"><h3>Back</h3></Link>
 </>
  )
}

export default UserDetail