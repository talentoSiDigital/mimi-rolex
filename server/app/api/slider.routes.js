
module.exports = app =>{
    const headerController = require('../controllers/headerController')

    var router = require("express").Router();
    // Routes

    router.get("/main-slider", headerController.findAll);
    router.post("/main-slider/edit/:id", headerController.update);


    app.use('/api',router)

}