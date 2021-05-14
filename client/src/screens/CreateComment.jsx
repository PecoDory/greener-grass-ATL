import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import {createComment} from "../services/comments"
import "./CSS/create-post.css"

export default function CreateComment() {
  const { id, post_id } = useParams();
  const history = useHistory();
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = {
      content,
    };
    await createComment(comment, id, post_id);
    history.push(`/gardens/${id}/posts/${post_id}`);
  };

  return (
    <div>
      <h1>Create Comment</h1>
      <form>

        <div className="create-post-body">
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
