import axios from 'axios';
import http from '../http-commons'


class MailSender {
  testMail() {
    return http.get("/test-mail");
  }

  rolexMail(data) {
    // let formData = new FormData();

    // formData.append("tto", data.tto)
    // formData.append("nombre", data.nombre)
    // formData.append("apellido", data.apellido)
    // formData.append("email", data.email)
    // formData.append("mensaje", data.mensaje)
    // formData.append("direccion", data.direccion)
    // formData.append("phone", data.phone) 
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

}

export default new MailSender();