import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { getPostById } from "../services/posts";
import { getCommentsForPosts } from "../services/comments";
import "./CSS/garden-detail.css" 


export default function PostDetails(props) {
  const { id, post_id } = useParams();
  
  const [postDetails, setPostDetails] = useState({});
  const [comments, setPosts] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    getPostDetails();
    getPostComments();
  }, []);

  const getPostDetails = async () => {
    const data = await getPostById(id, post_id);
    setPostDetails(data);
  };
  const getPostComments = async () => {
    const data = await getCommentsForPosts(id, post_id);
    setPosts(data);
  };
  

  
     
  console.log(postDetails)
  console.log(comments)
  return (
    <div className="PostDetails">
      <h1 id="title">{postDetails.title}</h1>
      <p>
        {postDetails.content}
      </p>
      
        
      {comments.map((comment) => (
        <div key={comment.id}>
        <p>{comment.content}</p>
        </div>
      )
      )}
      <Link to={`${id}/edit`}><button>edit</button></Link>
      <Link to={`${id}/posts/new`}><button>create post</button></Link>
    </div>
  );
}