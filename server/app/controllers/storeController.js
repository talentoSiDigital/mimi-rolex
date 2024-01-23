const db = require("../models");
const Store = db.store;
const Op = db.Sequelize.Op;


const storagePath = require('path').resolve(__dirname, '..' + "\\")


// JEWELS

// Create and Save a new Jewel instance (ADMIN)
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    //   // Create a Image object
    //   const sliderImg = {
    //     route: req.destination,
    //     name: req.filename,
    //     mobileName: req.body.description
    //   };

    //   // Save Tutorial in the database
    //   HeaderSlider.create(sliderImg)
    //     .then(data => {
    //       res.send(data);
    //     })
    //     .catch(err => {
    //       res.status(500).send({
    //         message:
    //           err.message || "Some error occurred while creating the item."
    //       });
    //     });
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
                data[index].dataValues.img = `${process.env.LOCALPATH}store-products/${data[index].dataValues.serie}-1.webp`
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

            data[0].dataValues.img.push(`${process.env.LOCALPATH}store-products/${data[0].dataValues.serie}-1.webp`)
            data[0].dataValues.img.push(`${process.env.LOCALPATH}store-products/${data[0].dataValues.serie}-2.webp`)

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
exports.update = (req, res) => {
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
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    //   // Create a Image object
    //   const sliderImg = {
    //     route: req.destination,
    //     name: req.filename,
    //     mobileName: req.body.description
    //   };

    //   // Save Tutorial in the database
    //   HeaderSlider.create(sliderImg)
    //     .then(data => {
    //       res.send(data);
    //     })
    //     .catch(err => {
    //       res.status(500).send({
    //         message:
    //           err.message || "Some error occurred while creating the item."
    //       });
    //     });
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
                data[index].dataValues.img = `${process.env.LOCALPATH}store-products/${data[index].dataValues.serie}-1.webp`
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

            for (let index = 1; index <= data[0].dataValues.cantidadImagenes ; index++) {
                data[0].dataValues.img.push(`${process.env.LOCALPATH}store-products/${data[0].dataValues.serie}-${index}.webp`)
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
exports.update = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
};



