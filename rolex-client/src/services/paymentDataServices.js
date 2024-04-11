import axios from 'axios';
import http from '../http-commons'


class MailSender {
  testMail() {
    return http.get("/test-mail");
  }

  payWithData(data,id) {
    
    return http.post(`/payment/${id}`, data)
  }

}

export default new MailSender();