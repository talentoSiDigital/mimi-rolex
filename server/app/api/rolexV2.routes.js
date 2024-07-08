module.exports = app =>{
    const rolex = require('../controllers/rolexController')
    var router = require("express").Router()
    
    // Routes
    router.get("/rolex", rolex.showDisplayV2)
    router.get("/collection/:id/", rolex.getCollectionDetailsV2)

    router.get("/rolex/:id", rolex.getRolexDetailsV2)

    
    app.use('/api/v2',router)
// 
}