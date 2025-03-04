import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFeed, removeFeed } from '../slice/feedSlice';
import { ToastContainer, toast } from "react-toastify";

function UserCard() {
    let[currIndex,setCurrIndex]=useState(0);

    const feeds=useSelector((store)=>store.feed);
    
const dispatch=useDispatch();

const handleFeed=async()=>{
 try{
      
    const res=await axios.get("http://localhost:7777/feed",
        
        {withCredentials : true}
    )
    dispatch(addFeed(res.data.data));
  
 }
 catch(err){
    console.error(err.reponse? err.response.data :err.message)
 }
}
useEffect(()=>{
    handleFeed();
},[]);



    const handleRequest=async(status,userId)=>{
       
        try{

            const res = await axios.post(
                `http://localhost:7777/request/send/${status}/${userId}`,
                {},
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true 
                }
            );
            
            toast.success(res.data.message);
            
            dispatch(removeFeed(userId));

        }
        catch(err){
          toast.error( err.response && err.response.data && err.response.data.error
                          ? err.response.data.error
                          : err.message
                      );
        }
    }
    const handleUser=()=>{
        setCurrIndex((prev)=>(prev+1) % feeds.length);
    }

    if(currIndex>=feeds.length) return <p> no more users</p>
    const feed=feeds[currIndex];
  return (
    <>
    <ToastContainer/>

    <div className="flex card bg-base-100 w-96 shadow-xl h-3/5 left-1/3 top-16 " key={feed._id}>
          <figure className="px-10 pt-10">
           
              <img
                src={feed.photourl}
                alt="User Picture"
                className="rounded-xl h-64"
              />
            
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{feed.firstName}</h2>
            <p>{feed.skills}</p>
            <p>{feed. gender} {feed.age}</p>
            
            <p>{feed.about}</p>

            <div className=''>
              <button className='btn bg-slate-400'  onClick={()=>handleRequest("interested", feed._id)}> Interest </button>
              <button className=' btn ml-6 bg-slate-400' onClick={()=>handleRequest("ignored", feed._id)}> ignored </button>

              <button className='btn bg-slate-400 ml-6'  onClick={handleUser}>Next </button>
            </div>
            
          </div>
        </div>


      
    </>
  )
}

export default UserCard