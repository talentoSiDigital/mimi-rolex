const { where } = require("sequelize");
const db = require("../models");
const Store = db.store;
const User = db.user.User;
const Op = db.Sequelize.Op;

const fs = require("fs");
const storagePath = 'https://mimijoyeria.com/storage'
// const storagePath = 'https://localhost:3000/storage'




// GET WATCHES ANALYTICS
exports.getStoreAnalytics = async (req, res) => {
    try {
        if (!req.body.values) {
            return res.status(400).send({ message: "Faltan los datos de los relojes" })
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
            existing:existingValues,
            nonExisting:nonExistingValues
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

        if (!req.body.values) {
            return res.status(400).send({ message: "Faltan los datos de los relojes" })
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
        //handle
        if (!req.body.values) {
            return res.status(400).send({ message: "Faltan los datos del Reloj" })
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

