const db = require("../models");
const Store = db.store;
const Op = db.Sequelize.Op;

const fs = require("fs");
const storagePath = process.env.IMGPATH


function truncExtension(text) { return text.split('.')[0] }

// JEWELS

// Create and Save a new Jewel instance (ADMIN)
exports.createJ = (req, res) => {


    const files = [req.files.imagen1[0].filename, req.files.imagen2[0].filename]
    const body = req.body

    if (!files) {
        res.status(404).send({
            message: "El formulario no ha sido recibido"
        })

    } else {




        fs.rename(`${storagePath}/${files[0]}`, `${storagePath}/${req.body.serie}-1.webp`,
            (error) => {
                if (error) {
                    console.log(error);
                    return
                }
                fs.rename(`${storagePath}/${files[1]}`, `${storagePath}/${req.body.serie}-2.webp`,
                    (error) => {
                        if (error) {
                            console.log(error);
                        }
                        else {
                            console.log("\nFile Renamed\n");
                        }
                    });
            });


        // Create object
        const joyeriaObject = {
            "serie": body.serie,
            "nombre": body.name,
            "titulo": body.title,
            "tipo": body.type,
            "tags": body.collection,
            "coleccion": body.collection,
            "precio": `$${body.price}`
        }

        Store.Joyeria.create(joyeriaObject).then(() => {
            res.send("File added successfully")
        }).catch(err => {
            res.send(err.message)
        })


    }

};

// Retrieve jewels by collection.
exports.findJ = (req, res) => {
    // Validate request
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    console.log(req.params.id)

    Store.Joyeria.findAll({
        where: {
            coleccion: { [Op.substring]: req.params.id }
        }
    })
        .then(data => {

            for (let index = 0; index < data.length; index++) {
                data[index].dataValues.img = `${storagePath}/store-products/${data[index].dataValues.serie}-1.webp`
            }
            res.send(data)

        })
        .catch(err => {

            res.status(500).json({

                message:
                    err.message || "Some error occurred while retrieving tutorials."

            });
        });
};

exports.findDetailJ = (req, res) => {
    // Validate request
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    Store.Joyeria.findAll({
        where: {
            serie: req.params.id
        }
    })
        .then(data => {
            data[0].dataValues.img = []

            data[0].dataValues.img.push(`${storagePath}/store-products/${data[0].dataValues.serie}-1.webp`)
            data[0].dataValues.img.push(`${storagePath}/store-products/${data[0].dataValues.serie}-2.webp`)

            res.send(data)

        })
        .catch(err => {

            res.status(500).json({

                message:
                    err.message || "Some error occurred while retrieving tutorials."

            });
        });
};


// Update a jewel by the id in the request (ADMIN)
exports.updateJ = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
};
// WATCHES

// Create and Save a new WATCH instance (ADMIN)
exports.createR = (req, res) => {
    // Validate request
    const files = req.files
    const body = req.body

    if (!files) {
        res.status(404).send({
            message: "El formulario no ha sido recibido"
        })

    } else {

        for (let i = 0; i < body.quantity; i++) {
            fs.rename(`${storagePath}/${files[i].filename}`, `${storagePath}/${req.body.serie}-${i + 1}.webp`,
                (error) => {
                    if (error) {
                        console.log(error);
                        return
                    }
                });
        }



        // Create object
        const relojeriaObject = {
            "serie": body.serie,
            "nombre": body.name,
            "titulo": body.title,
            "contenidoTabla": body.tableRows[0],
            "coleccion": body.collection,
            "precio": `$${body.price}`,
            "cantidadImagenes": body.quantity
        }


        Store.Relojeria.create(relojeriaObject).then(() => {
            res.send("File added successfully")
        }).catch(err => {
            res.send(err.message)
        })


    }

};

// Retrieve WATCH by collection.
exports.findR = (req, res) => {
    // Validate request
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    console.log(req.params.id)

    Store.Relojeria.findAll({
        where: {
            coleccion: req.params.id
        }
    })
        .then(data => {
            for (let index = 0; index < data.length; index++) {
                data[index].dataValues.img = `${storagePath}/store-products/${data[index].dataValues.serie}-1.webp`
            }
            res.send(data)

        })
        .catch(err => {

            res.status(500).json({

                message:
                    err.message || "Some error occurred while retrieving tutorials."

            });
        });
};

//Retrieve Wat

exports.findDetailR = (req, res) => {
    // Validate request
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    Store.Relojeria.findAll({
        where: {
            serie: req.params.id
        }
    })
        .then(data => {
            data[0].dataValues.img = []

            for (let index = 1; index <= data[0].dataValues.cantidadImagenes; index++) {
                data[0].dataValues.img.push(`${storagePath}/store-products/${data[0].dataValues.serie}-${index}.webp`)
            }
            res.send(data)


        })
        .catch(err => {

            res.status(500).json({

                message:
                    err.message || "Some error occurred while retrieving tutorials."

            });
        });
};



// Update a WATCH by the id in the request (ADMIN)
exports.updateR = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
};



