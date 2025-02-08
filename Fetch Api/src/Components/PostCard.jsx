import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

function PostCard() {
  let [data, setData] = useState(null);
  let [spinner, setSpinner] = useState(false);
  const getPosts = async () => {
    setSpinner(true);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setSpinner(false);
    setData(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {spinner && <LoadingSpinner />}
      {data ? (
        data.map((val) => (
          <div class="card">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">{val.title}</h5>
              <p class="card-text">{val.body}</p>
              <a href="#" class="btn btn-primary">
                Click
              </a>
            </div>
          </div>
        ))
      ) : (
        <p> No data</p>
      )}
    </>
  );
}

export default PostCard;
