module.exports = app =>{
    const store = require('../controllers/storeController')
    var router = require("express").Router()
    
    // Joyeria
    router.get("/joyeria/:id", store.findJ)
    router.get("/joyeria/producto/:id", store.findDetailJ)
    
    //Relojeria
    router.get("/relojeria/:id", store.findR)
    router.get("/relojeria/producto/:id", store.findDetailR)
    
     
    app.use('/api',router)
// 
}