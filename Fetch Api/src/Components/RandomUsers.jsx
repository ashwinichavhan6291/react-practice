import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function RandomUsers() {
  let [RandomUser, setRandomUser] = useState(null);

  const getRandomData = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const getData = await response.json();
    setRandomUser(getData.results[0]);
  };

  let data = RandomUser;

  useEffect(() => {
    getRandomData();
  }, []);

  const refresh = () => {
    getRandomData().then((val) => setRandomUser(val.results[0]));
  };

  return (
    <>
      <style>
        {`
          .card-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
          }

          .card {
            width: 350px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s ease;
          }

          .card:hover {
            transform: translateY(-10px);
          }

          .card-header {
            background-color: #007bff;
            color: #fff;
            padding: 10px;
            font-size: 1.25rem;
            text-align: center;
            font-weight: bold;
          }

          .card-body {
            padding: 20px;
            text-align: center;
          }

          .profile-img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-bottom: 15px;
          }

          .card-title {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }

          .phone,
          .location {
            font-size: 1rem;
            color: #777;
          }

          .refresh-btn {
            background-color: #28a745;
            border: none;
            color: white;
            padding: 10px 20px;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 15px;
          }

          .refresh-btn:hover {
            background-color: #218838;
          }

          .post-btn {
            width: 100px;
            margin: 30px auto;
            display: block;
            text-align: center;
            font-weight: bold;
          }

          .post-btn:hover {
            background-color: #444;
          }
        `}
      </style>

      {data && (
        <div className="card-container">
          <div className="card">
            <Link to="/post" className="btn btn-dark post-btn">
              PostCard
            </Link>
            <div className="card-header">Featured User</div>
            <div className="card-body">
              <img
                src={data.picture.large}
                alt={`${data.name.first} ${data.name.last}`}
                className="profile-img"
              />
              <h5 className="card-title">{data?.name?.first} {data?.name?.last}</h5>
              <p className="phone">{data?.phone}</p>
              <p className="location">{data?.location.country}</p>
              <button className="btn btn-primary refresh-btn" onClick={refresh}>
                Get New User
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RandomUsers;
