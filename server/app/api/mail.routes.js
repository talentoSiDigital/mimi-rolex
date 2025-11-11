const uploadFiles = require("../middleware/store")
const express = require('express')


module.exports = app =>{
    const mailController = require('../controllers/mailController')
    var router = require("express").Router()
    
    // Routes
    router.get("/paymail/:codigo", mailController.payMail)
    router.post("/email/rolex",express.json() ,mailController.rolexContact)
    router.post("/email/rolex-new",express.json() ,mailController.rolexNewContact)
    router.post("/email/contacto",express.json() ,mailController.contact)
        
    app.use('/api',router) 


}