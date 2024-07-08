import http from '../http-commons'

class Rolex {
  getDisplay() {
    return http.get("/v2/rolex");
  }

  getByCollection(id) {
    return http.get(`/v2/collection/${id}/`);
  }

  getAllRolex() {

    return http.get(`/v2/collection`);
  }

  getDetailedWatch(id) {
    return http.get(`/v2/rolex/${id}`);

  }
}

export default new Rolex();