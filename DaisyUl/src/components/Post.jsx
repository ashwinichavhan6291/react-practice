import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import {addData,removeData}  from '../slice/getPostSlice';
import axios from 'axios';




function Post() {

  const posts=useSelector((store)=>store.getPostData);
  console.log("posts" ,posts);
const dispatch=useDispatch();

  const getPost=async()=>{

    const res=await axios.get("http://localhost:7777/getPost",{
      withCredentials:true
    });
    console.log("response" , res);
    
    dispatch(addData(res.data))
    console.log("res",res.data);

  }

  useEffect(()=>{
    getPost();
  },[])
  
  return (
    <>
    {posts.length>0 ?  (
      posts.map((post)=> (
           <div key={post._id} className="card bg-base-100 w-96 shadow-xl"     style={{top: "100px" }}>
           <figure>
               <img
               src={post.postImage} style={{height: "300px",width:"100%"}}
               alt="Shoes" />
             </figure>
      <div className="card-body">
    <h2 className="card-title">{post.postTitle}</h2>
    <p>{post.postContent}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>dispatch(removeData({_id:post._id}))}>Delete Post</button>
    </div>
  </div>
</div>
      ))
    ) :   
     
    <p>No posts available</p>
     }
    
    
    </>
  )
}

export default Post