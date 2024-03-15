const transport = require("../config/transporter.config");




const mailOptions = {
  from: 'tec.sidigital@gmail.com',
  to: 'mzorrilla.sidigital@gmail.com',
  subject: 'Mensaje de prueba',
  text: 'Este mensaje es de prueba'
}


// Test route.
exports.testMail = (req, res) => {
  const mailOptions = {
    from: 'tec.sidigital@gmail.com',
    to: 'mzorrilla.sidigital@gmail.com',
    subject: 'Mensaje de prueba',
    text: 'Este mensaje es de prueba'
  }

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).json({

        message:
          error.message || "Some error occurred sending de email."

      });
    } else {
      res.status(200).send('Message sended successfully: ' + info)

    }
  })

};
exports.rolexContact = (req, res) => {
  // console.log(req.body.body)

  const mailOptions = {
    from: req.body.email,
    to: 'mzorrilla.sidigital@gmail.com',
    subject: `Mensaje de parte de: ${req.body.tto}. ${req.body.nombre} ${req.body.apellido}`,
    html: ` <main>
    <h2>Has recibido un mensaje, de parte del formulario de contacto de mimi joyeria</h2>
    <h3 style="font-style: italic">${req.body.mensaje}</h3>
    <h3>Datos personales:</h3>
    <ul>
        <li>Dirección: ${req.body.direccion}</li>
        <li>Email: ${req.body.email}</li>
        <li>Número de teléfono: ${req.body.telefono}</li>
        
    </ul>
    <h2>Este es un mensaje automatico, si desea responder, utilice el email de contacto anexado y contacte directamente con el cliente interesado</h2>
</main>`
  }

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).json({

        message:
          error.message || "Some error occurred sending de email."

      });
    } else {
      res.status(200).send('Message sended successfully: ' + info)

    }
  })

};




