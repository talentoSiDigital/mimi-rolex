const uploadFiles = require("../middleware/store")
const existenceMiddleware = require("../middleware/verifyExistence")
const express = require('express')

module.exports = app => {
    const store = require('../controllers/adminController')
    const update = require('../controllers/storeUpdateController')
    var router = express.Router()

    
    router.post("/get-all",express.json(), store.findAllWatches)

    
    router.post("/messages/get-all",express.json(), store.findAllMessages)
    router.post("/messages/rolex-get-all",express.json(), store.findAllMessagesRolex)
    


   //update

    router.post("/update/store-analytics", express.json(), update.getStoreAnalytics)
    router.post("/update/store-single-availability", express.json(), update.updateSingleAvailability)
    router.post("/update/store-availability", express.json(), update.updateStoreAvailability)
    router.post("/update/store-availability-single", express.json(), update.updateStoreAvailabilitySingle)
    
 

    //Create and update single
    router.post("/create/store-product", uploadFiles.array('imagenes'), update.createStoreProduct)



    app.use('/api/admin', router)



}