const db = require("../models");

const User = db.user.User;


exports.listUsers = (req, res) => {
    User.findAll().then(user => {

        res.status(200).send({ user });


    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.findUserData = (req, res) => {
    console.log(req.params)
    User.findAll({
        attributes: ['name',
            'lastName',
            'age',
            'phone',
            'email'
        ],
        where: {
            id: req.params.id
        } 
    }).then(user => {
        res.send(user)
    }).catch(err => {
        res.status(400).send({ message: err })
    })
}





