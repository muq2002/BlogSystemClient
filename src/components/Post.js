import React from "react";
import {Link } from 'react-router-dom';
function Post() {
  return (
    <div className="post">
      <div className="img">
        <img
          src="https://media.gettyimages.com/id/1220591821/photo/robot-and-human-hand-with-gears.webp?s=612x612&w=gi&k=20&c=a7qU1Ax17uSP0EovVfzzkxenuEBmuL8Q9GIMywWUbjQ="
          alt="post-image"
          style={{ width: 300 }}
        />
      </div>
      <div className="content">
        <Link to='/post/1'>
          <h2 className="title">How to build Robot system with Arduino</h2>
        </Link>
        <p className="info">
          <span>Muqtada Jabbar </span>
          <time>09-08-2023 08:50 PM</time>
        </p>
        <p className="summary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
        </p>
      </div>
    </div>
  );
}

export default Post;
