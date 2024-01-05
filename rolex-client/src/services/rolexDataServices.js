import http from '../http-commons'

class Rolex {
    getDisplay() {
        return http.get("/rolex");
      }
}

export default new Rolex();