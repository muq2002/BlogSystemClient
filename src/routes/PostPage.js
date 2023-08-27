import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader";

function PostPage() {
  const blogId = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPost = async () => {
    const response = await axios.get(
      "http://localhost:5000/blogs/" + blogId.id
    );
    setData(response.data);
  };

  useEffect(() => {
    getPost();
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <SyncLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="post-page">
          <div className="post-image">
            <img src={data.coverImage} alt="post image" className="img-fluid" />
          </div>
          <div className="content">
            <h2 className="title">{data.title}</h2>
            <p className="info">
              <span>{data.author}</span>
              <time>{data.createAt}</time>
            </p>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
      )}
    </>
  );
}

export default PostPage;
