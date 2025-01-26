import React from "react";
import { FaTrash } from "react-icons/fa";
function Post({ post }) {
  return (
    <div className="card card-container" style={{ width: "18rem" }}>
      <button
        type="button"
        className="btn btn-danger position-relative deleteIcon"
      >
        <FaTrash />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
      </button>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>

        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary" style={{ margin: "2px" ,height:"30px"}}>{tag}</span>
        ))}

<div className="alert alert-success alert" role="alert">
  You have {post.reactions} reactions
</div>
      </div>
    </div>
  );
}

export default Post;
