import React from "react";
import {Link } from 'react-router-dom';
function Post({blogId, title, coverImage, summary, author,createAt}) {
  return (
    <div className="post">
      <div className="img">
        <img
          src={coverImage}
          alt="post-image"
          style={{ width: 300 }}
        />
      </div>
      <div className="content">
        <Link to={'/post/'+ blogId}>
          <h2 className="title">{title}</h2>
        </Link>
        <p className="info">
          <span>{author} </span>
          <time>{createAt}</time>
        </p>
        <p className="summary">
          {summary}
        </p>
      </div>
    </div>
  );
}

export default Post;
