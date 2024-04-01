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
  // const date = new Date()
  const date = new Date()
  const actualDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
  const actualHour = `${date.getHours()}:${date.getMinutes()}`

  const mailOptions = {
    from: 'plataformapagos@mimijoyeria.com',
    to: 'mzorrilla.sidigital@gmail.com',
    subject: `Mensaje de parte de: ${req.body.tto}. ${req.body.nombre} ${req.body.apellido}`,
    html: `  <main style="margin: 40px 0px;">
    <h3 style="
        text-align: center;
        width: 100%;
        padding: 30px 0px;
    
    ">
        <img src="https://www.mimijoyeria.com/assets/rolex-retailer.webp" alt="" />
    </h3>
    <h2 style="font-size: 20px;text-align: center;">SOLICITUD DE ASESORAMIENTO DE UN EXPERTO ROLEX</h2>
    <h2 style="font-size: 17px;text-align: center;">
        Estimado Distribuidor Oficial Rolex: <br>
        Tenemos el placer de informarle de que un cliente le ha enviado 
        una consulta<br> a través del formulario de contacto de su sección Rolex. 
        Encuentre los detalles de esta consulta a continuación:
    </h2>
    <h3 style="
    text-align: center;
    width: 100%;
    
    ">
        <img src="http://www.mimijoyeria.com/storage/rolex-relojes/${req.body.modelo}.avif" alt="" style=" width: 30%;">
    </h3>
    <header style="text-align: center; ">
        <h3 style="font-weight: 700;">${req.body.watch}</h3>
        <h3>${req.body.cajaDelModelo}</h3>
        <h3>Referencia: ${req.body.modelo}</h3>
    </header>
        <div style="text-align:center;">
            <h3 style="font-weight: 300; text-decoration: underline;">Información de la consulta: </h3>
            <p><strong>Fecha:</strong> ${actualDate}</p>
            
            <p><strong>Hora:</strong> ${actualHour}</p>
            <p><strong>Página origen de la solicitud:</strong> Página del modelo</p>
            <p><strong>RMC Del modelo de la solicitud:</strong> ${req.body.modelo} </p>
            <h3 style="font-weight: 300; text-decoration: underline;">Información del cliente: </h3>
            <p><strong>Nombre Completo:</strong> ${req.body.nombre} ${req.body.apellido}</p>
            
            <p><strong>Número de teléfono del cliente:</strong> </p>
            <p>${req.body.telefono}</p>
            <p><strong>Correo Electronico del cliente:</strong> </p>
            <p>${req.body.email}</p>
            <p><strong>Mensaje del cliente:</strong></p>
            <p>${req.body.mensaje}</p>
        </div>


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




