import React from "react";

function PostCard({ title, body }) {
  return (
    <div class="card">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{body}</p>
        <a href="#" class="btn btn-primary">
          Click
        </a>
      </div>
    </div>
  );
}

export default PostCard;
