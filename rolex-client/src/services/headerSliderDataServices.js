import http from '../http-commons'

class HeaderSlider {
    getAll() {
        return http.get("/main-slider/");
      }

      updateSlider(id){
        return http.post(`/main-slider/edit/${id}`)
      }

}

export default new HeaderSlider();