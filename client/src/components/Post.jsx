import React from "react";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
const Post = ({ title, summary, content, cover, createdAt, author, _id }) => {
  return (
    <div className="post">
      <Link to={`/post/${_id}`}>
        <img
          src={"http://localhost:4000/" + cover}
          alt="post-img"
          className="image"
        />
      </Link>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>

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
