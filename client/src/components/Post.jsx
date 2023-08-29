import React from "react";
import { formatISO9075 } from "date-fns";
const Post = ({ title, summary, content, cover, createdAt, author }) => {
  return (
    <div className="post">
      <img
        src={"http://localhost:4000/" + cover}
        alt="post-img"
        className="image"
      />
      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a className="author" href="/">
            {author.username}
          </a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
