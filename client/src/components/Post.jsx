import React from "react";

const Post = ({ title, summary, content, cover }) => {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        alt="post-img"
        className="image"
      />
      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a className="author" href="/">
            Ashutosh Padhy
          </a>
          <time>28-03-2023 11:40</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
