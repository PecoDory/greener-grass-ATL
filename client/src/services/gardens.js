import { api } from "./auth";



export const getAllGardens = async () => {
  try {
    const res = await api.get("/gardens");
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getGardenById = async (id) => {
  let res = await api.get(`/gardens/${id}`);
  return res.data;
};

export const createGarden = async (garden) => {
  let res = await api.post("/gardens", garden);
  return res.data;
};

export const updateTour = async (tour) => {
  let res = await api.put(`/gardens/${tour._id}`, tour);
  return res.data;
};

export const deleteTour = async (id) => {
  let res = await api.delete(`/gardens/${id}`);
  return res.data;
};
