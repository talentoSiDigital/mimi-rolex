const uploadFiles = require("../middleware/store")
const express = require('express')



module.exports = app =>{
    const payment = require('../controllers/paymentController')
    var router = require("express").Router()
    
    // Routes
    router.post("/payment/:id",express.json() ,payment.paymentAuthenticationStep1)

    router.post("/enroll-payment/:id", express.json(), payment.paymentAuthenticationStep2)
    router.post("/pay-with-data/:id", express.json(), payment.paymentCheck)
    router.post("/validation-step/", express.json(), payment.paymentAuthenticationStep4)
    router.post("/validate-auth/:id", express.json(), payment.validationReturn)
    router.post("/generate-token", express.json(), payment.tokenGeneration)
    router.post("/pay-with-token/:id", express.json(), payment.payWithToken)
    router.post("/testing", express.json(), payment.testing)

    // router.get("/payment/:id/bill",payment.createBill)


    app.use('/api',router)
// 
}