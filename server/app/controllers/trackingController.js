const db = require("../models");
const Tracking = db.tracking;
const Op = db.Sequelize.Op;

exports.contactTracking = async (req, res) => {
    const insertObject = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    }

    Tracking.contactTracking.create(insertObject)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the contact tracking."
            });
        });



}
exports.rolexTracking = async (req, res) => {
    const insertObject = {
        name: req.body.name + " " + req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
        country: req.body.country,
        region: req.body.region
    }

    Tracking.rolexTracking.create(insertObject)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the contact tracking."
            });
        });


   

}
