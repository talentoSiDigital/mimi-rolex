const { where } = require("sequelize");
const db = require("../models");
const Store = db.store;
const Messages = db.tracking
const User = db.user.User;
const Role = db.user.Role
const Op = db.Sequelize.Op;

const fs = require("fs");
const storagePath = 'https://mimijoyeria.com/storage'
// const storagePath = 'https://localhost:3000/storage'

async function isAdmin(user) {
    if (user.roles[0] != "ROLE_ADMIN") {
        return false
    }
    const userQuery = await User.findByPk(user.id, {
        include: Role,
        attributes: { exclude: ['password'] }
    })
    if (userQuery.roles[0].name !== "ROLE_ADMIN") {
        return false
    }
   
    return true
}

exports.findAllWatches = async (req, res) => {
    if (!isAdmin(req.body.user)) {
        return res.status(403).send({ message: "No tienes permisos para realizar esta acción" })
    }
    // Find all tudor rolex for showcase
    const toSend = []
    const watchesObject = await Store.Watchmaking.findAll({
        where: {
            coleccion: 'Tudor',

        },
        order: [['serie', 'ASC']],
    })

    for (let index = 0; index < watchesObject.length; index++) {
        const element = watchesObject[index].dataValues;
        element.img = `${storagePath}/store-products/${element.serie}-1.webp`
        toSend.push(element)
    }
    return res.send(toSend)

};

exports.findAllMessages = async (req, res) => {
    if (!isAdmin(req.body.user)) {
        return res.status(403).send({ message: "No tienes permisos para realizar esta acción" })
    }
    const allMessages = await Messages.contactTracking.findAll()

    return res.send(allMessages)

}

exports.findAllMessagesRolex = async (req, res) => {
    if (!isAdmin(req.body.user)) {
        return res.status(403).send({ message: "No tienes permisos para realizar esta acción" })
    }
    const allMessages = await Messages.rolexTracking.findAll()

    return res.send(allMessages)

}


