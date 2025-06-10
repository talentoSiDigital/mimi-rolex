const db = require("../models");
const rolex = db.rolex;
// const storagePath = 'https://localhost:3000/storage'
const storagePath = 'https://mimijoyeria.com/storage'
const collectionsArray = ["item","cosmograph-daytona", "1908", "yacht-master", "sky-dweller", "gmt-master-ii", "explorer", "oyster-perpetual", "day-date", "datejust", "lady-datejust", "air-king", "submariner", "sea-dweller", "deepsea", "land-dweller"]


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

  rolex.RolexGetAllV2.findAll({
    where: {
      RolexCollectionId: collectionId

    }
  })
    .then((data) => {res.send(data)})

}

exports.getRolexDetailsV2 = async (req, res) => {

  let rolexResponseObject = {}
  let modelName=req.params.id.toString()
  const numbers =contarGuiones(modelName)

  if(numbers>1){
    for(let i=1; i<numbers; i++){
      const position = modelName.indexOf("-")+1
      modelName = modelName.substring(position,modelName.length)
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
  res.send(rolexResponseObject)

}

