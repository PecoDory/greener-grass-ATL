import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import {createPost} from "../services/posts"
import "./CSS/create-post.css"

export default function CreatePost() {
  const { id:gardenId } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      title,
      content,
    };
    await createPost(post, gardenId);
    history.push(`/gardens/${gardenId}`);
  };

  return (
    <div>
      <form>
        <div className="create-post-body">
        <input onChange={(e) => setTitle(e.target.value)} placeholder="title" />
        <input
          onChange={(e) => setContent(e.target.value)}
          placeholder="content"
        />
          <button onClick={handleSubmit}>submit</button>
          </div>
      </form>
    </div>
  );
}
