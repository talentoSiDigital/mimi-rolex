import axios from "axios";

export default axios.create({
  // baseURL: "https://mimijoyeria.com/api",
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "multipart/form-data",
  }
});  


