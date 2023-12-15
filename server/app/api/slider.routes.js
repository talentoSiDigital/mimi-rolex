
module.exports = app =>{
    const headerController = require('../controllers/headerController')

    var router = require("express").Router();


    // Routes

    router.get("/main-slider", headerController.findAll);
    
    


    app.use('/api',router)

}