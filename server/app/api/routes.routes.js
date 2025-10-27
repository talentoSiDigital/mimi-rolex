const uploadFile = require("../middleware/headerUpload")
const fs = require("fs")


module.exports = app => {
    const routesController = require('../controllers/routesController')
    var router = require("express").Router()

    // Routes

    router.get("/get-tags/:id", routesController.searchTags);
    router.get("/search/:id", routesController.searchResult );
    router.get("/search/", routesController.searchValidate );
    router.get("/get-meta-breadcrumbs", routesController.getMetaBreadcrumbs );
    router.get("/generate-search-routes", routesController.generateSearchRoutes );

    app.use('/api', router)

}