import { api } from "./auth";

export const getPostsForGarden = async (id) => {
  let res = await api.get(`/gardens/${id}/posts`);
  return res.data;
};