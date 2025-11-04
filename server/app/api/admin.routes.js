const uploadFiles = require("../middleware/store")
const existenceMiddleware = require("../middleware/verifyExistence")


module.exports = app => {
    const store = require('../controllers/adminController')
    const update = require('../controllers/storeUpdateController')
    var router = require("express").Router()

    
    router.get("/get-all",store.findAllWatches)

    
    router.get("/messages/get-all",store.findAllMessages)
    router.get("/messages/rolex-get-all",store.findAllMessagesRolex)
    


   //update

    router.post("/update/store-analytics", uploadFiles.any(), update.getStoreAnalytics)
    router.post("/update/store-single-availability", uploadFiles.any(), update.updateSingleAvailability)
    router.post("/update/store-availability", uploadFiles.any(), update.updateStoreAvailability)
    


    //Create and update single
    router.post("/create/store-product", uploadFiles.any(), update.createStoreProduct)



    app.use('/api/admin/', router)



}