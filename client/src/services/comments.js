import { api } from "./auth";



export const getPostById = async (id) => {
  let res = await api.get(`/gardens/${id}`);
  return res.data;
};

export const getCommentsForPosts = async (gardenId, postId) => {
  let res = await api.get(`/gardens/${gardenId}/posts/${postId}/comments`);
  return res.data;
};