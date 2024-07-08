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
    User.findAll({
        attributes: [
            'id',
            'name',
            'lastName',
            'age',
            'phone',
            'email',
            'referenceCode'
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


exports.updateUserData = (req,res) =>{
    User.update({
        name: req.body.name,
        lastName : req.body.lastname,
        age: req.body.age,
        phone: req.body.phone,
        email: req.body.email
    },{
        where:{
            id : req.body.id
        }
    }).then(()=>{
        res.status(200).send({ message:'Success'})
    }).catch(err => {
        res.send(err);
    })
}




