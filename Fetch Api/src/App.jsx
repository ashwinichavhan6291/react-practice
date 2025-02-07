import React, { useEffect, useState } from "react";
import { getPosts } from "./api/fetch";

function App() {
  let [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  return (
    <div>
      <ul>
        {data ? (
          data.map((val) => <li key={val.id}>{val.title}</li>)
        ) : (
          <p>No data</p>
        )}
      </ul>
    </div>
  );
}

export default App;
