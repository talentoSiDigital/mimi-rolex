const { where, literal } = require("sequelize");
const db = require("../models");
const Store = db.store;
const User = db.user.User;
const Role = db.user.Role
const Op = db.Sequelize.Op;

const fs = require("fs");
const storagePath = process.env.STORAGE_PATH



/**
 * Verifica si un usuario (basado en un objeto de request) es administrador en la DB.
 * @param {Object} user - El objeto de usuario extraído de la solicitud (asume user.id existe).
 * @returns {Promise<boolean>} - True si el usuario tiene el rol ROLE_ADMIN, false en caso contrario.
 */
async function isAdmin(user) {
    // 1. Validación de existencia
    // Si la autenticación es exitosa, 'user' debería existir. 
    // Usamos el check de user.id para ser explícitos.
    if (!user || !user.id) {
        console.log("Error: Usuario o ID no definido.");
        return false;
    }

    try {
        // 2. Consulta de Sequelize enfocada
        // Consulta el usuario e incluye los roles asociados.
        const userWithRoles = await User.findByPk(user.id, {
            include: [{
                model: Role,
                // Solo necesitamos el nombre del rol para la verificación
                attributes: ['name'],
                through: { attributes: [] } // Excluye la tabla pivote
            }],
            attributes: ['id'] // Solo necesitamos el ID para la consulta
        });

        // 3. Verificación del rol en la DB
        if (!userWithRoles) {
            console.log(`Usuario con ID ${user.id} no encontrado en DB.`);
            return false;
        }

        // Verifica si el array de roles incluye el rol "ROLE_ADMIN"
        const isUserAdmin = userWithRoles.roles.some(role => role.name === "admin");

        if (!isUserAdmin) {
            console.log(`Usuario ID ${user.id} no es administrador.`);
            return false;
        }

        // 4. Éxito
        console.log("=============");
        return true;

    } catch (error) {
        console.error("Error al verificar el rol de administrador:", error);
        return false;
    }
}

// GET WATCHES ANALYTICS
exports.getStoreAnalytics = async (req, res) => {
    try {
        const user = req.body.user
        if (!req.body) {
            return res.status(400).send({ message: "Faltan los datos para crear el producto" })
        }

        if (await isAdmin(user) === false) {
            console.log();
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
        const user = req.body.user
        if (!req.body) {
            return res.status(400).send({ message: "Faltan los datos para crear el producto" })
        }

        if (await isAdmin(user) === false) {
            console.log();
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



exports.updateStoreAvailabilitySingle = async (req, res) => {

    try {

        const user = req.body.user
        if (!req.body) {
            return res.status(400).send({ message: "Faltan los datos para crear el producto" })
        }

        if (await isAdmin(user) === false) {
            console.log();
            return res.status(403).send({ message: "No tienes permisos para realizar esta acción" })
        }


        const itemToSearch = req.body.id


        await Store.Watchmaking.update(
            { disponible: literal('1 - disponible') },
            { where: { id: itemToSearch } }
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

        const user = req.body.user
        if (!req.body) {
            return res.status(400).send({ message: "Faltan los datos para crear el producto" })
        }

        if (await isAdmin(user) === false) {
            console.log();
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
        const user = JSON.parse(req.body.user)
        if (!req.body) {
            return res.status(400).send({ message: "Faltan los datos para crear el producto" })
        }

        if (await isAdmin(user) === false) {
            console.log();
            return res.status(403).send({ message: "No tienes permisos para realizar esta acción" })
        }

        const data = req.body


        const existingProduct = await Store.Watchmaking.findOne({
            where: {
                serie: data.serie // Busca un producto cuya serie coincida
            }
        });

        if (existingProduct) {
            // Si el producto ya existe, devuelve un error 409 Conflict
            return res.status(409).send({
                message: `El producto con la serie ${data.serie} ya existe en la base de datos.`
            });
        }


        const newProduct = await Store.Watchmaking.create({
            serie: data.serie,
            nombre: data.name,
            titulo: data.name,
            contenidoTabla: data.tableContent,
            coleccion: data.brand,
            precio: data.price,
            cantidadImagenes: data.imageCount,
            cantidad: 999,
            disponible: 1,
            tudorCollectionId: parseInt(data.tudorCollectionId),
            descripcion: data.description
        })

        if (newProduct) {
            return res.status(201).send({ message: "Producto Creado correctamente" })
        }






    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating the Store Product." })
    }
}


