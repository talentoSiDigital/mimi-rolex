import axios from 'axios';
import http from '../http-commons'


class AdminData {
  getAllWatches() {
    return http.get("/admin/get-all");
  }
  getAllMessages() {
    return http.get("/admin/messages/get-all");
  }
  getAllRolexMessages() {
    return http.get("/admin/messages/rolex-get-all");
  }

  checkAvailability(list) {


    return http.post("/admin/update/store-analytics", {
      values: list
    })
  }

  updateAvailability(list) {

    return http.post("/admin/update/store-availability", {
      values: list
    })
  }



  updateSingleWatch() {

  }

  toggleSingleWatch() {

  }

}

export default new AdminData();