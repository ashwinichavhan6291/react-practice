import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PostCard from "./Components/PostCard";
import RandomUsers from "./Components/RandomUsers";
import LoadingSpinner from "./Components/LoadingSpinner";
import axios from 'axios';


function App() {
  let [data, setData] = useState(null);
  let[posts,setPosts]=useState(null);
  let[spinner,setSpinner]=useState(false);
  let [RandomUser, setRandomUser] = useState(null);

  const getPosts= async () =>{
    setSpinner(true);
    const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
    setSpinner(false);
    setData(response.data)
  }

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

  useEffect(() => {
    
    getPosts();
    
  
  }, []);
 

  const getRandomData = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const getData = await response.json();
    setRandomUser(getData.results[0]);
  };

  useEffect(() => {
    getRandomData();
  }, []);

  const refresh = () => {
    getRandomData().then((val) => setRandomUser(val.results[0]));
  };
  return (
    <div>
        {spinner &&<LoadingSpinner/> }
      {RandomUser && <RandomUsers data={RandomUser} refresh={refresh} />}

      <ul>
        <ul>
          {data ? (
            data.map((val) => <PostCard title={val.title} body={val.body} />)
          ) : (
             <p>No data</p>
          )}
        </ul>
      </ul>
    </div>
  );
}

export default App;
