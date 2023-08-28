import React from "react";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        alt="post-img"
        className="image"
      />
      <div className="texts">
        <h2>
          Tesla’s China rival Xpeng buys ride hailing giant Didi’s smart EV
          assets for $744M
        </h2>
        <p className="info">
          <a className="author" href="/">
            Ashutosh Padhy
          </a>
          <time>28-03-2023 11:40</time>
        </p>
        <p className="summary">
          Chinese electric vehicle upstart Xpeng is acquiring the smart EV
          assets of ride hailing giant Didi for $744 million, marking another
          significant alliance that the Tesla challenger has struck in recent
          months. In an announcement on Monday, Didi said the duo is forming a
          strategic partnership to “promote the global application of smart
          electric vehicles and technologies.” Notably, the Didi assets will
          become a new sub-brand called “Mona” under Xpeng, which is scheduled
          to launch in 2024.
        </p>
      </div>
    </div>
  );
};

export default Post;
