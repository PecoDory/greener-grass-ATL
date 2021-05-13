import { useState } from "react";
import { createGarden } from "../services/gardens"
import { useHistory } from "react-router-dom";


export default function CreateGarden() {
  const history = useHistory()
  let [gardenName, setGardenName] = useState("");
  let [gardenLocation, setGardenLocation] = useState("");
  let [gardenAddress, setGardenAddress] = useState("");
  let [gardenImage, setGardenImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault() 
    const garden = {name:gardenName, location:gardenLocation, address:gardenAddress, image_url:gardenImage}
    await createGarden(garden)
    history.push("/home")
  }


  return (
    <div>
      <h2>Post yr Garden</h2>
      <form>
        <input
          onChange={(e) => setGardenName(e.target.value)}
          placeholder="Garden Name"
        />
        <input
          onChange={(e) => setGardenLocation(e.target.value)}
          placeholder="Garden Location"
        />
        <input
          onChange={(e) => setGardenAddress(e.target.value)}
          placeholder="Garden Address"
        />
        <input
          onChange={(e) => setGardenImage(e.target.value)}
          placeholder="Garden Img URL"
        />
        <button onClick={handleSubmit}>submit</button>
        
      </form>
    </div>
  );
}
