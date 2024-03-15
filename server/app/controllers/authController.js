const db = require("../models");
const config = require("../config/auth.config");

const User = db.user.User;
const Role = db.user.Role;
const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

// Save User to Database
exports.signup = (req, res) => {
    // CREATE USER WITH REQUEST PARAMS
    User.create({
        name: req.body.name,
        lastName: req.body.lastname,
        username: req.body.username,
        age: req.body.age,
        phone: req.body.phone,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    }).then(user => {
        user.setRoles([1]).then(() => {
            return res.send({ message: "El usuario ha sido registrado exitosamente" })
        });
    }).catch(err => {
        console.log("Error: 1")
        return res.status(500).send({ message: err.message })
    });
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        const token = jwt.sign({ id: user.id }, config.secret,
            {
                algorithm: 'HS256',
                allowInsecureKeySizes: true,
                expiresIn: 86400, // 24 hours
            });


        let authorities = [];
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                authorities.push("ROLE_" + roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token
            });
        });


    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};




