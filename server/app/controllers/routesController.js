const db = require("../models");
const Routes = db.routes;
const Op = db.Sequelize.Op;
const rolexBaseData = require("./routeData/rolexBaseData.json")
const genericRoutesData = require("./routeData/genericRoutesData.json")

const baseRoute = "https://mimijoyeria.com"


exports.searchTags = (req, res) => {
    // Validate request
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const searchParam = req.params.id


    Routes.Routes.findAll({
        attributes: [
            'title', 'brand'
        ],
        where: {
            title: { [Op.substring]: searchParam },

        },
        limit: 5
    })
        .then((data) => res.send(data))
        .catch((err) => res.send(err.message))
};


exports.searchResult = (req, res) => {
    // Validate request
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const searchParam = req.params.id


    Routes.Routes.findAll({
        where: {
            [Op.or]: [
                { title: { [Op.substring]: searchParam } },
                { watchSerial: { [Op.substring]: searchParam } }
            ],
        }
    })
        .then((data) => res.send(data))
        .catch((err) => res.send(err.message))
};

exports.searchValidate = (req, res) => {
    // Validate request
    res.send([])
};


// SEO ROUTES



exports.getMetaBreadcrumbs = async (req, res) => {
    const baseRoute = "https://mimijoyeria.com"
    const allRoutesResponse = []
    const rolexRoutes = await db.rolex.RolexGetAllV2.findAll(
        {
            include: db.rolex.RolexCollections
        }
    )

    rolexBaseData.forEach((obj, index) => {
        if (obj.route.includes("rolex")) {

            allRoutesResponse.push({
                "@type": "ListItem",
                "position": index,
                "name": obj.name,
                "item": `${baseRoute}${obj.route}`

            })
        }
    })

    rolexRoutes.forEach((obj, index) => {
        allRoutesResponse.push({
            "@type": "ListItem",
            "position": index + rolexBaseData.length,
            "name": obj.nombre,
            "item": `${baseRoute}/rolex/${obj['Rolex-collection'].idName}-${obj.modelo}`
        })
    })


    res.send(allRoutesResponse)
}

exports.generateSearchRoutes = async (req, res) => {

    const allRoutesInsert = []


    const rolexRoutesFromDB = await db.rolex.RolexGetAllV2.findAll({ include: db.rolex.RolexCollections })

    genericRoutesData.forEach((obj) => {
        allRoutesInsert.push(obj)
        allRoutesInsert[allRoutesInsert.length - 1].link = `${baseRoute}${obj.link}`
    })

    rolexRoutesFromDB.forEach((obj) => {
        allRoutesInsert.push({
            "title": obj.nombre,
            "watchSerial": obj.serial,
            "description": obj.cajaDelModelo,
            "link": `${baseRoute}/rolex/${obj['Rolex-collection'].idName}-${obj.modelo}`,
            "thumbnail": `https://mimijoyeria.com/storage/rolex-relojes-new/${obj.modelo}-showcase.webp`,
            "type": "reloj",
            "brand": "rolex"
        })
    })


    const tudorRoutesFromDB = await db.store.Watchmaking.findAll({
        where: {
            coleccion: "Tudor",
            disponible: 1
        }
    })

    tudorRoutesFromDB.forEach((obj) => {
        allRoutesInsert.push({
            "title": obj.nombre,
            "watchSerial": obj.serie,
            "description": obj.descripcion,
            "link": `${baseRoute}/relojeria/tudor/${obj.serie}`,
            "thumbnail": `https://mimijoyeria.com/storage/store-products/${obj.serie}-1.webp`,
            "type": "reloj",
            "brand": "tudor"
        })
    })

    const jewelryRoutesFromDB = await db.store.Jeweler.findAll()

    jewelryRoutesFromDB.forEach((obj) => {
        allRoutesInsert.push({
            "title": obj.nombre,
            "watchSerial": obj.serie,
            "description": obj.titulo,
            "link": `${baseRoute}/joyeria/${obj.serie}`,
            "thumbnail": `https://mimijoyeria.com/storage/rolex-relojes-new/${obj.serie}-1.webp`,

            "type": "joyeria",
            "brand": "mimi"
        })
    })

    // delete all records from table
    Routes.Routes.destroy({
        truncate: true,
    }).then(() => {
        Routes.Routes.bulkCreate(allRoutesInsert, {
            validate: true
        }).then(() => {
            res.send("All routes inserted successfully")
        }).catch((err) => res.send(err.message))

    }).catch((err) => res.send(err.message))

}
