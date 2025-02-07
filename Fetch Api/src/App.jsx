import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PostCard from "./Components/PostCard";
import RandomUsers from "./Components/RandomUsers";
import axios from 'axios';
function App() {
  let [data, setData] = useState(null);
  let[posts,setPosts]=useState(null);
  let [RandomUser, setRandomUser] = useState(null);

  const getPosts= async () =>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
  
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
      {RandomUser && <RandomUsers data={RandomUser} refresh={refresh} />}

      <ul>
        <ul>
          {data ? (
            data.map((val) => <PostCard title={val.title} body={val.body} />)
          ) : (
            <li>No data</li>
          )}
        </ul>
      </ul>
    </div>
  );
}

export default App;
