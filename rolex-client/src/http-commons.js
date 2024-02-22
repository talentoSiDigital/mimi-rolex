import axios from "axios";

export default axios.create({
  // baseURL: "https://www.mimijoyeria.com/api/",
  baseURL: "http://localhost:8080/api",
  headers: {
    
    "Content-Type": "multipart/form-data"
  }
}); 