import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PostCard from "./Components/PostCard";
import RandomUsers from "./Components/RandomUsers";

function App() {
  let [data, setData] = useState(null);
  let [RandomUser, setRandomUser] = useState(null);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const post = await response.json();
    setData(post);
  };

  useEffect(() => {
    getPosts();
  }, []);
  //   getPosts().then((posts) => setData(posts));
  // }, []);

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
