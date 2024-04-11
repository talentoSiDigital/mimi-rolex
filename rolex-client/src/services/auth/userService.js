import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'http://localhost:3000/api/user/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
  
  getUserListing(){
    return axios.get(API_URL + 'get-all', { headers: authHeader() });
  
  }
  getUserData(id){
    return axios.get(API_URL + `find-user/${id}`, { headers: authHeader() });
  
  }
  updateUserData(data){
    const dataToSend = {
      "id": data.id,
      "name": data.name,
      "lastname": data.lastname,
      "age": data.age,
      "phone": data.phone,
      "email": data.email
      
    }
    console.log(dataToSend);
    return axios.post(API_URL +"update", dataToSend);

  }
}
  
export default new UserService();