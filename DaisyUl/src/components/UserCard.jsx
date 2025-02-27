import { useState, useEffect } from "react";
import axios from "axios";

const UserCard = ({userData,userCard}) => {
  const [users, setUsers] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 

  
//    const fetchUser=async()=>{
//     try{

//       const res=await axios.get("http://localhost:7777/feed",
//         {withCredentials:true}
//       );

    
//         setUsers(res.data.data);
      
//       }
     

    
//     catch(err){
//       console.error(err.response ? err.response.data : err.message);
//     }
//    }
//   useEffect(()=>{
//     fetchUser();
//   },[])

//  const handleNextUser=()=>{
  
//   setCurrentIndex((prev)=> (prev+1)% users.length);
//  }
  
//   const user=users[currentIndex];
 
  return (
    <>
   {userCard &&
      
        <div className="card bg-base-100 w-96 shadow-xl h-3/5">
          <figure className="px-10 pt-10">
           
              <img
                src={userData.photourl}
                alt="User Picture"
                className="rounded-xl h-64"
              />
            
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{userData.firstName} {userData.lastName}</h2>
            <p>{Array.isArray(userData.skills) ? userData.skills.join(", ") : userData.skills}</p>
            <p>{userData.age} {userData.gender}</p>
            
            <p>{userData.about}</p>
            
          </div>
        </div>
}
      
    </>
  );
};

export default UserCard;
