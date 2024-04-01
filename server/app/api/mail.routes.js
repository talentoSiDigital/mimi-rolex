const uploadFiles = require("../middleware/store")


module.exports = app =>{
    const mailController = require('../controllers/mailController')
    var router = require("express").Router()
    
    // Routes
    router.get("/test-mail", mailController.testMail)
    router.post("/email/rolex",uploadFiles.any() ,mailController.rolexContact)

    
    app.use('/api',router)


}