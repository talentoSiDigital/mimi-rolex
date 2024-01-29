const uploadFiles = require("../middleware/store")


module.exports = app =>{
    const store = require('../controllers/storeController')
    var router = require("express").Router()
    
    // Joyeria
    router.get("/joyeria/:id", store.findJ)
    router.get("/joyeria/producto/:id", store.findDetailJ)
    router.post("/joyeria/producto/create",uploadFiles.fields([{ name: 'imagen1' }, { name: 'imagen2' }]) ,store.createJ)
    
    
    //Relojeria
    router.get("/relojeria/:id", store.findR)
    router.get("/relojeria/producto/:id", store.findDetailR)
    router.post("/relojeria/producto/create",uploadFiles.any() ,store.createR)
    
     
    app.use('/api',router)
// 
}