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

export const editGarden = async (garden) => {
  let res = await api.put(`/gardens/${garden.id}`, garden);
  return res.data;
};

export const deleteGarden = async (id) => {
  let res = await api.delete(`/gardens/${id}`);
  return res.data;
};
