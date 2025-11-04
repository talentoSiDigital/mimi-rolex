const db = require("../models");
const Store = db.store;
const User = db.user.User;
const Op = db.Sequelize.Op;

const fs = require("fs");
const storagePath = 'https://mimijoyeria.com/storage'
// const storagePath = 'https://localhost:3000/storage'


function truncExtension(text) { return text.split('.')[0] }
function getRandomIntInclusive(array, maximum) {

    const min = Math.ceil(1); // Ensure min is an integer (optional, but good practice)
    const max = Math.floor(maximum); // Ensure max is an integer (optional, but good practice)
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (array.includes(number)) {
        return getRandomIntInclusive(array)
    } else {
        return number
    }
}


// JEWELS

exports.findJ = (req, res) => {
    // Validate request
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    Store.Jeweler.findAll({
        where: {
            coleccion: { [Op.substring]: req.params.id }
        }
    })
        .then((data) => {
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

    Store.Jeweler.findAll({
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


// ===============


// WATCHES
exports.findRSlider = (req, res) => {


    Store.Watchmaking.findAll({
        where: {
            coleccion: 'Tudor',
            disponible: 1
        },
        orderBy: ['id']
    })
        .then(data => {

            for (let index = 0; index < data.length; index++) {

                data[index].dataValues.img = `${storagePath}/store-products/${data[index].dataValues.serie}-1.webp`


            }

            const shuffled = data.slice();
            let i = data.length;
            let temp;
            let randomIndex;

            // While there remain elements to shuffle...
            while (i--) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * (i + 1));

                // And swap it with the current element.
                temp = shuffled[i];
                shuffled[i] = shuffled[randomIndex];
                shuffled[randomIndex] = temp;
            }
            res.send(shuffled.slice(0, 4))






        })
        .catch(err => {

            res.status(500).json({

                message:
                    err.message || "Some error occurred while retrieving tutorials."

            });
        });
};
exports.findRMain = (req, res) => {
    // Validate request


    Store.Watchmaking.findAll({
        where: {
            coleccion: 'Tudor',
            disponible: 1
        },
        order: [['id', 'DESC']],
        attributes: [
            'id',
            'precio',
            'serie',
            'nombre'
        ]
    })
        .then(data => {
            let toSend = []
            for (let index = 0; index < 4; index++) {
                data[index].dataValues.img = `${storagePath}/store-products/${data[index].dataValues.serie}-1.webp`
                toSend.push(data[index])
            }
            res.send(toSend)

        })
        .catch(err => {

            res.status(500).json({

                message:
                    err.message || "Some error occurred while retrieving tutorials."

            });
        });
};



exports.getTudorCollections = (req, res) => {
    Store.TudorCollection.findAll({
        attributes: ['id', 'nombre']
    }).then(data => res.send(data)).catch(err => {

        res.status(500).json({
            message:
                err.message || "Some error occurred while retrieving tutorials."

        });
    });
}


exports.findR = (req, res) => {
    // Validate request
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const field = req.body.field
    const order = req.body.order
    // res.send(req.body)
    Store.Watchmaking.findAll({
        where: {
            coleccion: req.params.id,
            disponible: 1
        },
        order: [[field, order]],

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


exports.findDetailR = (req, res) => {
    // Validate request
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    Store.Watchmaking.findAll({
        where: {
            serie: req.params.id
        },
        include: Store.TudorCollection
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

// ===============


// ADMIN CONTROLLERS


exports.createStoreProduct = async(req,res)=>{
    try{
        
    }catch(err){
        res.status(500).send({message: err.message || "Some error occurred while creating the Store Product."})
    }
}

// ===============


// SHOPPING CART 



exports.addWatchToCart = async (req, res) => {
    // Validate request
    const itemId = parseInt(req.params.id);
    const userId = parseInt(req.params.user)



    const item = await Store.Cart.findOrCreate({ where: { ownerId: userId } })

    const findItem = await Store.CartProduct.findAll({
        where: {
            "watchmakingId": itemId,
            "cartId": item[0].dataValues.id,
        }

    })
    console.log(findItem);

    if (findItem.length == 0) {
        console.log(item[0].dataValues.id);
        await Store.CartProduct.create({
            "watchmakingId": itemId,
            "cartId": item[0].dataValues.id
        })
    } else {
        await Store.CartProduct.increment('quantity', {
            by: 1,
            where: {
                "watchmakingId": itemId,
                "cartId": item[0].dataValues.id,
            }
        })
    }

    Store.Watchmaking.increment('cantidad', {
        by: -1,
        where: {
            id: itemId
        }
    }).then(() => res.send({
        "message": 'Producto agregado con éxito',
        "icon": true
    }))

};

exports.removeCartProduct = async (req, res) => {
    const itemId = parseInt(req.params.id);
    const userId = parseInt(req.params.user)

    const findCart = await Store.Cart.findAll({ where: { ownerId: userId } })
    const findItem = await Store.CartProduct.findAll({ where: { cartId: findCart[0].dataValues.id } })

    if (findItem[0].dataValues.quantity == 1) {
        Store.CartProduct.destroy({
            where: { "watchmakingId": itemId }
        })
    } else {

        Store.CartProduct.increment('quantity', {
            by: -1,
            where: { "watchmakingId": itemId }
        })
    }

    Store.Watchmaking.increment('cantidad', {
        by: 1,
        where: {
            id: itemId
        }
    }).then(() => res.send('Product Deleted Successfully'))
        .catch((err) => { res.status(500).send(err); })



}

exports.getCartByOwner = (req, res) => {
    // Validate request
    const userId = parseInt(req.params.user)
    let watchesId = []
    let watchesAndQuantity = []


    Store.Cart.findAll({
        where: {
            ownerId: userId
        }
    }).then((d) => Store.CartProduct.findAll({
        where: { cartId: d[0].id },
        attributes: ['watchmakingId', 'quantity']
    }))
        .then((d) => {
            for (let index = 0; index < d.length; index++) {

                watchesId.push(d[index].dataValues.watchmakingId);

            }
            for (let index = 0; index < d.length; index++) {
                watchesAndQuantity.push(d[index].dataValues.quantity);

            }

            if (watchesId.length == 0) {
                watchesId = [0]
            }
            console.log(watchesAndQuantity);
            Store.Watchmaking.findAll({
                where: {
                    id: {
                        [Op.or]: watchesId
                    }
                }
            }).then((watchesId) => {


                for (let index = 1; index <= watchesId.length; index++) {
                    let serie = watchesId[index - 1].dataValues
                    serie.img = `${storagePath}/store-products/${serie.serie}-1.webp`
                    serie.quantity = watchesAndQuantity[index - 1]
                }
                res.status(200).send(watchesId)

            })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({
                message: err
            })
        })



};

exports.getBillsByOwner = (req, res) => {
    // Validate request
    const userId = parseInt(req.params.user)

    Store.Bill.findAll({
        where: {
            ownerId: userId
        }

    }).then((d) => {
        if (d.length == 0) {
            res.status(200).send('No hay registros que mostrar')

        } else {

            res.status(200).send(d)
        }

    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            message: err
        })
    })



};

exports.testRoute = async (req, res) => {

    const cartId = await Store.Cart.findAll({
        where: {
            ownerId: 1,
        },
        attributes: ['id']
    })


    Store.CartProduct.findAll({
        where: {
            cartId: cartId[0].dataValues.id
        }
    })
        .then((d) => {

            const products = d
            Store.Bill.findOrCreate({
                where: { ownerId: 1 },
                default: {
                    codigo: 'asdasdasd',
                    direccion: info.orderInformationBillToAddress,
                    pais: info.orderInformationBillToCountry,
                    ciudad: info.orderInformationBillToLocality,
                    total: `${info.orderInformationAmountTotal}`,
                    ownerId: userId
                }
            })

            return products

        })
        .then((d) => {
            const data = []
            for (let item = 0; item < d.length; item++) {
                data.push({})
                for (const key in d[item].dataValues) {

                    if (key !== "cartId") {
                        data[data.length - 1][key] = d[item].dataValues[key]
                    } else {
                        data[data.length - 1]["billId"] = d[item].dataValues[key]
                    }
                }
            }
            return data
        })
        .then((d) => Store.BillProduct.bulkCreate(d))
        .then((d) => Store.CartProduct.destroy({
            where: {
                cartId: cartId[0].dataValues.id
            }
        }))
        .then((d) => res.sendStatus(200).send(d))
        .catch((error) => res.sendStatus(500).send(error))




}

// ===============



