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
          <div className="card">
            <div className="card-header"> userId : {val.id
            }</div>
            <div className="card-body">
              <h5 className="card-title">{val.title}</h5>
              <p className="card-text">{val.body}</p>
              <a href="#" className="btn btn-primary">
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
