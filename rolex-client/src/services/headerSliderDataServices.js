import axios from 'axios';
import http from '../http-commons'


class HeaderSlider {
  getAll() {
    return http.get("/main-slider/");
  }

  updateSlider(file) {
    let formData = new FormData();
    
    formData.append("id", file.id)
    formData.append("desktop", file.desktop)
    formData.append("mobile", file.mobile)
   

    return http.post("/main-slider/edit/", formData,{
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    })
  } 

  clickBanner(source){
    
    return http.post(`/tudor-banner/${source}`)

}

}

export default new HeaderSlider();