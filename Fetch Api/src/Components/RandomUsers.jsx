import React, { useEffect, useState } from "react";

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
          <div class="card-header">Featured</div>
          <div class="card-body">
            <img src={data.picture.large} alt="" />
            <h5 class="card-title">{data?.name?.first}</h5>
            <div>{data?.phone}</div>
            <div class="card-text">{data?.location.country}</div>
            <a href="#" class="btn btn-primary" onClick={refresh}>
              Click
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default RandomUsers;
