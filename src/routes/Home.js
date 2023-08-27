import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader";
function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogs = async () => {
    const response = await axios.get("http://localhost:5000/blogs");
    setData(response.data);
  };
  useEffect(() => {
    setLoading(true);
    getBlogs();
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <SyncLoader />
      ) : (
        data.map((item, index) => {
          return (
            <Post
              blogId={item.blogId}
              title={item.title}
              coverImage={item.coverImage}
              summary={item.summary}
              author={item.author}
              createAt={item.createAt}
            />
          );
        })
      )}
    </div>
  );
}

export default Home;
