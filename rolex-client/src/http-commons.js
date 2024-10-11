import axios from "axios";

export default axios.create({
  baseURL: "https://www.mimijoyeria.com/api",
  // baseURL: "https://localhost:3000/api",
  headers: {
    // "Access-Control-Allow-Origin":"*",
    "Content-Type": "multipart/form-data"
  }
});  


