const uploadFiles = require("../middleware/store")


module.exports = app =>{
    const trackingController = require('../controllers/trackingController')
    var router = require("express").Router()
    
    // Routes
 
    router.post("/email/contacto-tracking/",uploadFiles.any() ,trackingController.contactTracking)
    router.post("/email/rolex-tracking/",uploadFiles.any() ,trackingController.rolexTracking)
        
    app.use('/api',router) 


}