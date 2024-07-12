import axios from 'axios';
import http from '../http-commons'


class MailSender {
  testMail() {
    return http.get("/test-mail");
  }

  step1(data,id) {
    
    return http.post(`/payment/${id}`, data)
  }
  step2(data,id) {
    
    return http.post(`/enroll-payment/${id}`, data)
  }
  payWithData(data,id) {
    
    return http.post(`/pay-with-data/${id}`, data)
  }
  validation(data,id){
    
    return http.post(`/validate-auth/${id}`, data)
  }
  generateToken(data){
    return http.post("/generate-token",data)
  }
  payWithTokens(data){
    return http.post("/pay-with-token",data)
  }

}

export default new MailSender();