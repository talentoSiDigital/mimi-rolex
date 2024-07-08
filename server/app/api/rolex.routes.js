// LEGACY CODE
module.exports = app =>{
    const rolex = require('../controllers/rolexController')
    var router = require("express").Router()
    
    // Routes
    router.get("/rolex", rolex.showDisplay)
    router.get("/collection/:id", rolex.getCollectionDetails)
    router.get("/collection", rolex.getAllRolex)
    router.get("/rolex/:id", rolex.getRolexDetails)

    
    app.use('/api',router)
// 
}