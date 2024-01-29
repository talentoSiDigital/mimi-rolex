module.exports = app =>{
    const mail = require('../controllers/mailController')
    let router = require("express").Router()
    
    // Routes
    router.post("/rolex", mail.sendMail)
    
    
    app.use('/api',router)
// 
}