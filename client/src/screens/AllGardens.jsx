import { useState, useEffect } from "react";
import { getAllGardens } from "../services/gardens";
import { Link } from "react-router-dom";

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
      <h1>All Gardens</h1>
      <h2 className="listHeader">Gardens</h2>
      {gardens.map((garden, index) => {
        return (
          <div key={index}>
            <h2 className="gardenName">{garden.name}</h2>
            <h4>{garden.type} gardens</h4>
            <h5>
              {garden.location}, {garden.address}
            </h5>
            <img className="gardensListImg" src={gardens.img_url} alt="" />
            <div className="showDetailsWrap">
              <Link id="showDetails" to={`/gardens/${garden.id}`}>show details</Link>
            </div> 
          </div>
        );
      })}
    </div>
  );
}
