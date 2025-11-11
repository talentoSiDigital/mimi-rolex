const uploadFiles = require("../middleware/store")
const express = require('express')


module.exports = app =>{
    const trackingController = require('../controllers/trackingController')
    var router = require("express").Router()
    
    // Routes
    router.get("/env-testing/",trackingController.envTesting)
    router.post("/email/contacto-tracking/",express.json() ,trackingController.contactTracking)
    router.post("/email/rolex-tracking/",express.json() ,trackingController.rolexTracking)
        
    app.use('/api',router) 


}