import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");
  const author = "Muqtada Jabbar";
  var imageCoverUrl = "";

  async function createPost(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", coverImage);
    const id = toast.loading("Please wait", {
      progressClassName: "green-progress-bar",
      position: toast.POSITION.TOP_CENTER,
    });

    try {
      const sendImage = await axios.post(
        "http://localhost:5000/images",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      imageCoverUrl = sendImage.data.url;
      const response = await axios.post("http://localhost:5000/projects", {
        title,
        coverImage: imageCoverUrl,
        summary,
        content,
        author,
      });

      toast.update(id, {
        render: "All is good",
        type: "success",
        isLoading: false,
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.update(id, {
        render: "Something went wrong",
        type: "error",
        isLoading: false,
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <div className="container">
      <ToastContainer />
      <div className="add-blog">
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
            onChange={(event) => setCoverImage(event.target.files[0])}
          />
          <ReactQuill theme="snow" value={content} onChange={setContent} />;
          <br />
          <br />
          <br />
          <button>Create Project</button>
        </form>
      </div>
      <div className="controls"></div>
    </div>
  );
}

export default CreatePost;
