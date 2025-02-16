import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PostCard from "./Components/PostCard";
import RandomUsers from "./Components/RandomUsers";
import LoadingSpinner from "./Components/LoadingSpinner";
import axios from 'axios';
import { Outlet } from "react-router-dom";
import "./App.css"


function App() {
 
  let[posts,setPosts]=useState(null);

const postData = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        userId: 1,
        title: "cooking",
        body: "cooking"
      });
  
     setPosts("Response:", response); 
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
    useEffect(() => {
      
      postData();
    }, []);

  
  return (
    <div>

       
    
   
    </div>
  );
}

export default App;
