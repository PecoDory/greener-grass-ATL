import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getGardenById, deleteGarden, editGarden } from "../services/gardens";

export default function EditGarden() {
  const history = useHistory();
  const { id } = useParams();

  let [gardenName, setGardenName] = useState("");
  let [gardenLocation, setGardenLocation] = useState("");
  let [gardenAddress, setGardenAddress] = useState("");
  let [gardenImage, setGardenImage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedGarden = {
      id,
      name: gardenName,
      location: gardenLocation,
      address: gardenAddress,
      image_url: gardenImage,
    };

    await editGarden(editedGarden);
    history.push("/home");
  };
  const handleDelete = async () => {
    await deleteGarden(id);
    history.push("/home");
  };

  const getGardenDetails = async () => {
    const garden = await getGardenById(id);
    setGardenName(garden.name);
    setGardenLocation(garden.location);
    setGardenAddress(garden.address);
    setGardenImage(garden.image_url);
  };
  useEffect(() => {
    getGardenDetails();
  }, []);

  return (
    <div>
      <form>
        <input
          onChange={(e) => setGardenName(e.target.value)}
          placeholder="Garden Name"
          value={gardenName}
        />
        <input
          onChange={(e) => setGardenLocation(e.target.value)}
          placeholder="Garden Location"
          value={gardenLocation}
        />
        <input
          onChange={(e) => setGardenAddress(e.target.value)}
          placeholder="Garden Address"
          value={gardenAddress}
        />
        <input
          onChange={(e) => setGardenImage(e.target.value)}
          placeholder="Garden Img URL"
          value={gardenImage}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
      <button onClick={handleDelete}>delete garden</button>

    </div>
  );
}
