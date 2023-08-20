import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./routes/Home";

import Login from "./routes/Login";
import Register from "./routes/Register";

import CreatePost from "./routes/CreatePost";
import PostPage from "./routes/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
