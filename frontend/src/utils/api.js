import axios from "axios";
 
const api = axios.create({
  baseURL: "http://localhost:3003/api/auth",
  withCredentials: true, // required so cookies (the JWT token) are sent/received
});
 
export default api;