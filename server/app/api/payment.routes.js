module.exports = app =>{
    const payment = require('../controllers/paymentController')
    var router = require("express").Router()
    
    // Routes
    router.get("/payment", payment.paymentCheck)
   

     
    app.use('/api',router)
// 
}