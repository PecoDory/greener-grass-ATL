import { useState, useEffect } from "react";
import { getAllGardens } from "../services/gardens";
import { Link } from "react-router-dom";
import "./CSS/all-gardens.css"
import "./CSS/home.css";

export default function AllGardens(props) {
  const [gardens, setGardens] = useState([]);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = async () => {
    const data = await getAllGardens();
    setGardens(data);
  };

  return (
    <div className="gardenList">
      <h1 className="sitename">Greener Grass A T L</h1>
      <h4>a community blog for Atlanta's growers!</h4>
      {gardens.map((garden, index) => {
        return (
          <div key={index}>
            <h2 className="gardenName">{garden.name}</h2>
            {/* <h4>{garden.type} gardens</h4> */}
            <h5>
              {garden.location}, {garden.address}
            </h5>
            <img className="gardensListImg" src={garden.image_url} alt="" />
            <div className="showDetailsWrap">
              <Link id="showDetails" to={`/gardens/${garden.id}`}>Explore Garden</Link>
            </div> 
          </div>
        );
      })}
    </div>
  );
}
