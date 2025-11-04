import axios from 'axios';
import http from '../http-commons'


class AdminData {
  getAllWatches(user) {
    return http.post("/admin/get-all",{user:user});
  }
  getAllMessages(user) {
    return http.post("/admin/messages/get-all",{user:user});
  }
  getAllRolexMessages(user) {
    return http.post("/admin/messages/rolex-get-all",{user:user});
  }

  checkAvailability(list,user) {


    return http.post("/admin/update/store-analytics", {
      values: list,
      user:user
    })
  }

  updateAvailability(list,user) {

    return http.post("/admin/update/store-availability", {
      values: list,
      user:user
    })
  }


  createWatch(data,user){
    return http.post("/admin/create/store-product",{
      user:user,
      data:data
    })
  }


  updateSingleWatch() {

  }

  toggleSingleWatch() {

  }

}

export default new AdminData();