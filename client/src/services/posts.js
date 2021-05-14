import { api } from "./auth";

export const getPostById = async (gardenId, postId) => {
  let res = await api.get(`/gardens/${gardenId}/posts/${postId}`);
  return res.data;
};


export const getPostsForGarden = async (id) => {
  let res = await api.get(`/gardens/${id}/posts`);
  return res.data;
};

export const createPost = async (post, gardenId) => {
  let res = await api.post(`/gardens/${gardenId}/posts`, post)
  return res.data
}