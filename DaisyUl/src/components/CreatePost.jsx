import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../slice/postSlice";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const posts = useSelector((store) => store.post);
  let [postTitle, setPostTitle] = useState("");
  let [postContent, setPostContent] = useState("");
  let [postImage, setPostImage] = useState("");

  const dispatch = useDispatch();
  const navigate=useNavigate();
  
   

  const createPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7777/post",
        { postTitle, postImage, postContent },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

     dispatch(addPost(response.data));
     toast.success("post created successfully!!");
     
      setPostTitle("");
      setPostContent("");
      setPostImage("");
      navigate("/post")
    } catch (err) {
      console.error("Error:", err.message);
      toast.error("failed to create post")
    
    }
    
  };

  return (
    <>
     
      <ToastContainer />

      <div style={{ backgroundColor: "grey", height: "100vh" }}>
        <form onSubmit={createPost} className="createPost">
          <div className="createPostContainer">
            <div>
              <label htmlFor="">Post Title </label>
              <br />
              <input
                type="text"
                value={postTitle}
                className="file-input file-input-bordered w-full max-w-xs"
                onChange={(e) => setPostTitle(e.target.value)}
              />
            </div>
            <br />

            <label htmlFor=""> Image </label>
            <br />
            <input
              type="text"
              value={postImage}
              className="file-input file-input-bordered w-full max-w-xs"
              onChange={(e) => setPostImage(e.target.value)}
            />
            <br />

            <br />

            <label htmlFor="">Post content </label>
            <br />
            <input
              type="text"
              value={postContent}
              className="file-input file-input-bordered w-full max-w-xs"
              onChange={(e) => setPostContent(e.target.value)}
            />
            <br />
          </div>
          <button
            className="btn btn-active btn-primary"
            type="submit"
            style={{ marginLeft: "30%", marginTop: "20px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CreatePost;
