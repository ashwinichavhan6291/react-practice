import React, { useContext } from 'react';
import { UserContext } from '../App'; 

function ChildC() {
  const user = useContext(UserContext); 

  return (
    <div>{user.name}</div> 
  );
}

export default ChildC;
