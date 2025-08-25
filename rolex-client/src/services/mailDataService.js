import axios from 'axios';
import http from '../http-commons'


class MailSender {
  testMail() {
    return http.get("/test-mail");
  }

  rolexMail(data) {

    const dataToSend = {
      "tto": data.tto,
      "nombre": data.nombre,
      "apellido": data.apellido,
      "email": data.email,
      "mensaje": data.mensaje,
      "direccion": data.direccion,
      "telefono": data.phone,
      "watch": data.watch,
      "modelo": data.modelo,
      "cajaDelModelo": data.cajaDelModelo
    }


    return http.post("/email/rolex", dataToSend)
  }

  rolexMailTrack(data){
    
    


    return http.post("/email/rolex-tracking/", data)
  }
  
  rolexNewMail(data){
    
    return http.post("/email/rolex-new/", data)
  }
  contact(data){
    return http.post("/email/contacto", data)
  }
  contactTrack(data){
    return http.post("/email/contacto-tracking/", data)
  }

  

}

export default new MailSender();