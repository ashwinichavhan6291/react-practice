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
      <style>
        {`
          .postcard-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 50px;
            gap: 20px;
          }

          .card {
            width: 350px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          }

          .card-header {
            background-color: #007bff;
            color: #fff;
            padding: 10px;
            font-size: 1.2rem;
            text-align: center;
            font-weight: bold;
          }

          .card-body {
            padding: 20px;
            text-align: left;
          }

          .card-title {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: #333;
          }

          .card-text {
            font-size: 1rem;
            color: #555;
            margin-bottom: 15px;
          }

          .btn-primary {
            background-color: #28a745;
            border: none;
            color: white;
            padding: 10px 20px;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
          }

          .btn-primary:hover {
            background-color: #218838;
          }

          .no-data {
            text-align: center;
            font-size: 1.25rem;
            color: #888;
            margin-top: 50px;
          }
        `}
      </style>

      {spinner && <LoadingSpinner />}
      {data ? (
        <div className="postcard-container">
          {data.map((val) => (
            <div className="card" key={val.id}>
              <div className="card-header"></div>
              <div className="card-body">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text">{val.body}</p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-data">No data available</p>
      )}
    </>
  );
}

export default PostCard;
