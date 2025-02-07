import React, { useEffect, useState } from "react";

function App() {
  let [data, setData] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const post = await response.json();
      setData(post);
    };
    getPosts();
  }, []);
  //   getPosts().then((posts) => setData(posts));
  // }, []);

  return (
    <div>
      <ul>
        <ul>
          {data ? (
            data.map((val) => <li key={val.id}>{val.title}</li>)
          ) : (
            <li>No data</li>
          )}
        </ul>
      </ul>
    </div>
  );
}

export default App;
