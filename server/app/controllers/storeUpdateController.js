const { where } = require("sequelize");
const db = require("../models");
const Store = db.store;
const User = db.user.User;
const Role = db.user.Role
const Op = db.Sequelize.Op;

const fs = require("fs");
// const storagePath = 'https://mimijoyeria.com/storage'
const storagePath = 'https://localhost:3000/storage'


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

    console.log(user);
    return true
}

// GET WATCHES ANALYTICS
exports.getStoreAnalytics = async (req, res) => {
    try {
         if (!req.body) {
            return res.status(400).send({ message: "Faltan los datos para crear el producto" })
        }

        if (!isAdmin(req.body.user)) {
            return res.status(403).send({ message: "No tienes permisos para realizar esta acción" })
        }


        const valuesArray = req.body.values.map(item => item.toLowerCase());
        const search = await Store.Watchmaking.findAll({
            attributes: ['id', 'serie', 'disponible'],
            where: {
                serie: {
                    [Op.in]: valuesArray
                }
            }
        })

        const existingValues = search.map(item => item.serie)
        const nonExistingValues = valuesArray.filter(item => !existingValues.includes(item));

        return res.send({
            existing: existingValues,
            nonExisting: nonExistingValues
        })


    } catch (error) {

        res.status(500).send({
            message: error.message || "Ocurrio un error al chequear"
        })


    }


}


// UPDATE WATCHES AVAILABILITY
exports.updateStoreAvailability = async (req, res) => {

    try {
        console.log(req.body);

        if (!req.body) {
            return res.status(400).send({ message: "Faltan los datos para crear el producto" })
        }

        if (!isAdmin(req.body.user)) {
            return res.status(403).send({ message: "No tienes permisos para realizar esta acción" })
        }


        const valuesArray = req.body.values.map(item => item.toLowerCase());


        await Store.Watchmaking.update(
            { disponible: 0 },
            { where: { disponible: 1, coleccion: "Tudor" } }
        );


        await Store.Watchmaking.update(
            { disponible: 1 },
            {
                where: {
                    serie: {
                        [Op.in]: valuesArray
                    }
                }
            }
        );

        res.status(200).send("Disponibilidad actualizada correctamente");


    } catch (error) {
        res.status(500).send({
            message: error.message || "Ocurrió un error al actualizar la disponibilidad."
        });
    }


}


//TOGGLE SPECIFIC WATCH AVAILABILITY
exports.updateSingleAvailability = async (req, res) => {

    
    try {
        
         if (!req.body) {
            return res.status(400).send({ message: "Faltan los datos para crear el producto" })
        }

        if (!isAdmin(req.body.user)) {
            return res.status(403).send({ message: "No tienes permisos para realizar esta acción" })
        }




        const serial = req.body.serial
        const action = req.body.action

        await Store.Watchmaking.update(
            { disponible: action },
            {
                where: {
                    serie: serial
                }
            }
        );


        res.send("Disponibilidad actualizada correctamente");


    } catch (error) {
        res.status(500).send({
            message: error.message || "Ocurrió un error al actualizar la disponibilidad."
        });
    }


}


//UPDATE WATCH


//CREATE WATCH



exports.createStoreProduct = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({ message: "Faltan los datos para crear el producto" })
        }

        if (!isAdmin(req.body.user)) {
            return res.status(403).send({ message: "No tienes permisos para realizar esta acción" })
        }

        const data = req.body.data

        const newProduct = await Store.Watchmaking.create({
            serie:data.serie,
            nombre:data.name,
            titulo:data.name,
            contenidoTabla:data.newTableContent,
            coleccion:'Tudor',
            precio:data.price,
            cantidadImagenes:data.imageCount,
            cantidad:999,
            disponible:1,
            tudorCollectionId:data.collection,
            descripcion:data.description
        })

        if(newProduct){
            return res.status(201).send({message:"Producto Creado correctamente"})
        }
        





    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating the Store Product." })
    }
}


