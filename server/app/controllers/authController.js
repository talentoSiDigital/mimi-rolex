const db = require("../models");
const config = require("../config/auth.config");
const User = db.user.User;

const Store = db.store;


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
        referenceCode: req.body.referenceCode,
        password: bcrypt.hashSync(req.body.password, 8),
 
    })
        .then((user) => {
            user.setRoles([1])
            Store.Cart.create({ ownerId: user.dataValues.id })


        })
        .then(() => { return res.send({ message: "El usuario ha sido registrado exitosamente" }) })
        .catch(err => {
            return res.status(400).send({ message: err.message })
        });
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
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
                phone: user.phone,
                roles: authorities,
                accessToken: token,
                referenceCode: user.referenceCode
            });
        });


    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};




