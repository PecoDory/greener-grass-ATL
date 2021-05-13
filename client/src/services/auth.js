import axios from "axios";

const baseURL = "http://localhost:3000";

export const api = axios.create({
  baseURL: baseURL,
});

export const registerUser = async (formData) => {
  const res = await api.post("/users", formData);
  return res.data;
};

export const loginUser = async (formData) => {
  const res = await api.post("api/v1/auth", formData);
  localStorage.setItem("authToken", res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data;
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get("/api/v1/auth");
    return res.data;
  }
  return false;
};

