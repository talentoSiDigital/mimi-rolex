const uploadFiles = require("../middleware/store")
const existenceMiddleware = require("../middleware/verifyExistence")


module.exports = app => {
    const store = require('../controllers/storeController')
    var router = require("express").Router()

    // Joyeria
    router.get("/joyeria/:id", store.findJ)
    router.get("/joyeria/producto/:id", store.findDetailJ)
    router.post("/joyeria/producto/create", uploadFiles.fields([{ name: 'imagen1' }, { name: 'imagen2' }]), store.createJ)


    //Relojeria
    router.get("/relojeria/:id", store.findR)
    router.get("/relojeria/producto/:id", store.findDetailR)
    router.post("/relojeria/producto/create", uploadFiles.any(), store.createR)


    //Shopping Cart
    router.post("/cart/relojeria/:user/:id", [
        existenceMiddleware.checkIfAvailable,
    ], store.addWatchToCart)
    router.get("/cart/relojeria/:user", store.getCartByOwner)
    router.delete("/cart/relojeria/delete/:user/:id", store.removeCartProduct)
    router.get("/test/store",store.testRoute)

    app.use('/api', router)
    // 
}