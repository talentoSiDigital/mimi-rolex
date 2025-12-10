const db = require("../models");
const rolex = db.rolex;
const Op = db.Sequelize.Op

const storagePath = process.env.STORAGE_PATH

const collectionsArray = ["item", "cosmograph-daytona", "1908", "yacht-master", "sky-dweller", "gmt-master-ii", "explorer", "oyster-perpetual", "day-date", "datejust", "lady-datejust", "air-king", "submariner", "sea-dweller", "deepsea", "land-dweller"]


function contarGuiones(cadena) {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === '-') {
      contador++;
    }
  }
  return contador;
}


// Show display of all watches from a single collection

exports.getCollectionDetailsV2 = (req, res) => {


  const collectionId = collectionsArray.indexOf(req.params.id);
  if (collectionId === -1) {
    return res.status(400).send({ message: "Invalid collection id" })
  }

  rolex.RolexGetAllV2.findAll({
    where: {
      RolexCollectionId: collectionId

    }
  })
    .then((data) => { return res.send(data) })
    .catch((error) => { return res.status(500).send({ message: "Error retrieving collection", error }) })


}

exports.getRolexDetailsV2 = async (req, res) => {
  try {
    let rolexResponseObject = {}
    let modelName = req.params.id.toString()
    const numbers = contarGuiones(modelName)

    if (numbers > 1) {
      for (let i = 1; i < numbers; i++) {
        const position = modelName.indexOf("-") + 1
        modelName = modelName.substring(position, modelName.length)
      }
    }


    const findId = await rolex.RolexGetAllV2.findOne({
      where: {
        modelo: modelName
      }
    })

    let parsedName = findId


    parsedName.showcaseIMG = `${storagePath}/rolex-relojes-new/${parsedName.modelo}-showcase.webp`
    parsedName.boxIMG = `${storagePath}/rolex-relojes-new/${parsedName.modelo}_presentation-box.webp`
    parsedName.boxIMGMobile = `${storagePath}/rolex-relojes-new/${parsedName.modelo}_presentation-box-mobile.webp`


    rolexResponseObject.getAll = parsedName

    const rolexId = parsedName.id
    const collectionId = parsedName.RolexCollectionId

    let findDetails = await rolex.RolexDetailsV2.findByPk(rolexId)
    let detailsArray = []
    detailsArray.push(findDetails)
    detailsArray.push({})

    detailsArray[1].img = `${storagePath}/rolex-relojes-new/${rolexResponseObject.getAll.modelo}_cor-specs.webp`
    detailsArray[1].imgMobile = `${storagePath}/rolex-relojes-new/${rolexResponseObject.getAll.modelo}_cor-specs-mobile.webp`
    detailsArray[0].precio = detailsArray[0].precio.toString()

    rolexResponseObject.details = detailsArray


    let getHeaders = await rolex.RolexHeadersV2.findByPk(rolexId)

    let imgArray = []
    imgArray = []
    imgArray[0] = {}
    imgArray[1] = {}
    imgArray[2] = {}

    imgArray[0].imgDesktop = `${storagePath}/rolex-relojes-new/${getHeaders.imagen1}.webp`
    imgArray[0].imgMobile = `${storagePath}/rolex-relojes-new/${getHeaders.imagen1}-mobile.webp`

    imgArray[1].imgDesktop = `${storagePath}/rolex-relojes-new/${getHeaders.imagen2}.webp`
    imgArray[1].imgMobile = `${storagePath}/rolex-relojes-new/${getHeaders.imagen2}-mobile.webp`

    imgArray[2].imgDesktop = `${storagePath}/rolex-relojes-new/${getHeaders.imagen3}.webp`
    imgArray[2].imgMobile = `${storagePath}/rolex-relojes-new/${getHeaders.imagen3}-mobile.webp`

    getHeaders.img = imgArray

    rolexResponseObject.headers = getHeaders


    const getCollection = await rolex.RolexCollections.findByPk(collectionId)

    rolexResponseObject.collection = getCollection
    return res.send(rolexResponseObject)
  } catch (error) {
    return res.status(500).send({ message: "Error retrieving Rolex details", error })
  }


}


exports.getAllAccesories = async (req, res) => {
  rolex.RolexAccesories.findAll({
    where: {
      RolexCollectionId: { [Op.gte]: 16 }

    }
  })
    .then((data) => { return res.send(data) })
    .catch((error) => { return res.status(500).send({ message: "Error retrieving accessory", error }) })
}


exports.getAccesoriesById = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({ message: "ID is required" })
  }


  rolex.RolexAccesories.findAll({
    where: {
      modelo: req.params.id

    }
  }).then((data) => {
    if (data.length === 0) {
      return res.status(404).send({ message: "Accessory not found" })
    }
    return res.send(data)
  })
    .catch((error) => { return res.status(500).send({ message: "Error retrieving accessory", error }) })
}

