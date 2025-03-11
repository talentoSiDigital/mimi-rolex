const db = require("../models");
const Routes = db.routes;
const Op = db.Sequelize.Op;





exports.searchTags = (req, res) => {
    // Validate request
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const searchParam = req.params.id


    Routes.Routes.findAll({
        attributes: [
            'title','brand'
        ],
        where: {
            title: { [Op.substring]: searchParam },

        },
        limit: 5
    })
        .then((data) => res.send(data))
        .catch((err) => res.send(err.message))
};


exports.searchResult = (req, res) => {
    // Validate request
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const searchParam = req.params.id


    Routes.Routes.findAll({
        where: {
            [Op.or]: [
                { title: { [Op.substring]: searchParam } },
                { watchSerial: { [Op.substring]: searchParam } }
            ],
        }
    })
        .then((data) => res.send(data))
        .catch((err) => res.send(err.message))
};
exports.searchValidate = (req, res) => {
    // Validate request
    res.send([])
};


