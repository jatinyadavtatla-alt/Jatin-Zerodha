import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3003",
  withCredentials: true, // sends the login cookie with every request
});

export default api;