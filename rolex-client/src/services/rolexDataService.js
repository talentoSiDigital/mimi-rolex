import http from '../http-commons'

class Rolex {
  getDisplay() {
    return http.get("/rolex");
  }

  getByCollection(id) {
    return http.get(`/collection/${id}`);
  }

  getAllRolex() {

    return http.get(`/collection`);
  }

  getDetailedWatch(id) {
    return http.get(`/rolex/${id}`);

  }
}

export default new Rolex();