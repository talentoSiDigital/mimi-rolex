module.exports = app =>{
    const rolex = require('../controllers/rolexController')
    var router = require("express").Router()
    
    // Routes
    router.get("/rolex", rolex.showDisplay)
    
    app.use('/api',router)

}