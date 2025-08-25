const uploadFiles = require("../middleware/store")


module.exports = app =>{
    const mailController = require('../controllers/mailController')
    var router = require("express").Router()
    
    // Routes
    router.get("/paymail/:codigo", mailController.payMail)
    router.post("/email/rolex",uploadFiles.any() ,mailController.rolexContact)
    router.post("/email/rolex-new",uploadFiles.any() ,mailController.rolexNewContact)
    router.post("/email/contacto",uploadFiles.any() ,mailController.contact)
        
    app.use('/api',router) 


}