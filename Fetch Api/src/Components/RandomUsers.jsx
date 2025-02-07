import React from "react";


function RandomUsers({data,refresh}) {
  
  return (
    <>
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <img src={data?.picture.large} alt="" />
    <h5 class="card-title">{data?.name?.first}</h5>
    <div>{data?.phone}</div>
    <div class="card-text"> {data?.location.country}</div>
    <a href="#" class="btn btn-primary" onClick={refresh}>Click</a>
  </div>
</div>
</>
  );
}

export default RandomUsers;
