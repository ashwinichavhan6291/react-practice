import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

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


      {data && (
        <div class="card">
<Link to="/post" class="btn btn-dark" style={{width: "100px",margin:"30px"}} >PostCard</Link>
         
          <div className="card-header">Featured</div>
          <div className="card-body">
            <img src={data.picture.large} alt="" />
            <h5 className="card-title">{data?.name?.first}</h5>
            <div>{data?.phone}</div>
            <div className="card-text">{data?.location.country}</div>
            <a href="#" className="btn btn-primary" onClick={refresh}>
              Click
            </a>
          </div>
        </div>
      )}

     
    </>
  );
}

export default RandomUsers;
