const { where } = require("sequelize");
const db = require("../models");
const Store = db.store;
const Messages = db.tracking
const User = db.user.User;
const Op = db.Sequelize.Op;

const fs = require("fs");
const storagePath = 'https://mimijoyeria.com/storage'
// const storagePath = 'https://localhost:3000/storage'



exports.findAllWatches = async (req, res) => {
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
    res.send(toSend)

};

exports.findAllMessages = async(req,res)=>{

    const allMessages = await Messages.contactTracking.findAll()

    res.send(allMessages)

}

exports.findAllMessagesRolex = async(req,res)=>{

    const allMessages = await Messages.rolexTracking.findAll()

    res.send(allMessages)

}


