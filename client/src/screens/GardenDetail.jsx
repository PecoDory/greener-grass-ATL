import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { getGardenById } from "../services/gardens";
import { getPostsForGarden } from "../services/posts";

export default function GardenDetails(props) {
  const { id } = useParams();
  const [gardenDetails, setGardenDetails] = useState({});
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getGardenDetails();
    getGardenPosts();
  }, []);

  const getGardenDetails = async () => {
    const data = await getGardenById(id);
    setGardenDetails(data);
  };
  const getGardenPosts = async () => {
    const data = await getPostsForGarden(id);
    setPosts(data);
  };
  

  
     

  return (
    <div className="GardenDetails">
      <h1 id="title">{gardenDetails.name}</h1>
      <h6>
        {gardenDetails.location} {gardenDetails.address}
      </h6>
      <img
        className="Garden-detail-img"
        src={gardenDetails.image_url}
        alt={`${gardenDetails.name} Garden`}
      />
      {posts.map((post) => (
        <>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        </>
      )
      )}
      <Link to={`${id}/edit`}><button>edit</button></Link>
      <Link to={`${id}/posts/new`}><button>create post</button></Link>
    </div> 
  );
}
