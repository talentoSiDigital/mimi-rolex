const uploadFile = require("../middleware/headerUpload")
const fs = require("fs")


module.exports = app => {
    const routesController = require('../controllers/routesController')
    var router = require("express").Router()

    // Routes

    router.get("/get-tags/:id", routesController.searchTags);
    router.get("/search/:id", routesController.searchResult );
    router.get("/search/", routesController.searchValidate );


    app.use('/api', router)

}