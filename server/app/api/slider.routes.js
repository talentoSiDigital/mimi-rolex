const uploadFile = require("../middleware/headerUpload")
const fs = require("fs")

const storagePath = require('path').resolve(__dirname, '..', '..', 'storage', 'header-slider')


module.exports = app => {
    const headerController = require('../controllers/headerController')

    var router = require("express").Router();
    // Routes

    router.get("/main-slider", headerController.findAll);
    router.post("/main-slider/edit/", uploadFile.fields([{ name: 'desktop' }, { name: 'mobile' }]), (req, res) => {


        const files = req.files;

        if (!files) {


        } else {
            function truncExtension(text) {
                return text.split('.')[0]
            }
            const mobile = files.mobile[0].filename
            const desktop = files.desktop[0].filename

            if (files.mobile) {

                fs.unlink(`${storagePath}/${req.body.id}-mobile.webp`, (err) => {
                    if (err) {
                        // Handle specific error if any
                        if (err.code === 'ENOENT') {
                            console.error('File does not exist.');
                        } else {
                            throw err;
                        }
                    } else { console.log('File deleted!') }
                }).then(()=>{
                    fs.rename(`${storagePath}/${mobile}`, `${storagePath}/${req.body.id}-mobile.webp`,
                    (error) => {
                        if (error) {
                            console.log(error);
                        }
                        else {
                            console.log("\nFile Renamed\n");
                        }
                    });
                })

               
            }
            if (files.desktop) {
                fs.unlink(`${storagePath}/${req.body.id}-desktop.webp`, (err) => {
                    if (err) {
                        // Handle specific error if any
                        if (err.code === 'ENOENT') {
                            console.error('File does not exist.');
                        } else {
                            throw err;
                        }
                    } else { console.log('File deleted!') }
                }).then(() => {

                    fs.rename(`${storagePath}/${desktop}`, `${storagePath}/${req.body.id}-desktop.webp`,
                    (error) => {
                        if (error) {
                            console.log(error);
                        }
                        else {
                            console.log("\nFile Renamed\n");
                        }
                    });
                }).then(() => {res.send('All clear')})

            }


            
        }


    });


    app.use('/api', router)

}