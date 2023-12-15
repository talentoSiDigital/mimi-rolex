import http from '../http-commons'

class HeaderSlider {
    getAll() {
        return http.get("/main-slider/");
      }
}

export default new HeaderSlider();