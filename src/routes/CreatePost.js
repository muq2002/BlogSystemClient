import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import axios from 'axios';

import "react-quill/dist/quill.snow.css";
function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState('');
  const [content, setContent] = useState("");

  async function createPost(event){ 
    event.preventDefault();

    const respose = await axios.post("",
    {

    }
    )
  }
  return (
    <div className="container">
      <div className="create-post">
        <form onSubmit={createPost}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            placeholder="Summary"
            rows="3"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
          />
          <input
            type="file"
            onChange={(event) => setImage(event.target.files[0])}
          />
          <ReactQuill
          />
          <br />
          <br />
          <br />
          <button>Create Post</button>
        </form>
      </div>
      <div className="controls"></div>
    </div>
  );
}

export default CreatePost;
