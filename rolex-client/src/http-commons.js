import axios from "axios";
import GLOBAL_OBJECT from './utils/globaj.js';
export default axios.create({
  // baseURL: "https://mimijoyeria.com/api",
  baseURL: GLOBAL_OBJECT.SERVER_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  }
});  


