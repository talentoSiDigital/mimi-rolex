import axios from "axios";

export default axios.create({
<<<<<<< Updated upstream
  baseURL: "https://www.mimijoyeria.com/api",
  // baseURL: "http://localhost:3000/api",
=======
  // baseURL: "https://mimijoyeria.com/api",
  baseURL: "http://localhost:3000/api",
>>>>>>> Stashed changes
  headers: {
    "Content-Type": "multipart/form-data"
  }
});  


