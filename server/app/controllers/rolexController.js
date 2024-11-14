const db = require("../models");
const rolex = db.rolex;
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;
const storagePath = 'https://www.mimijoyeria.com/storage'


function helper() {
  let a = Math.floor((Math.random() * 195) + 1)
  return [a, a + 5]
}

const mainVideos = {
  "1908": "https://www.youtube.com/embed/qtzBHB8fyF0?si=hkEK8DlpRzHxLp2v",
  "air-king": "https://www.youtube.com/embed/8MfIfZKhVwU?si=Fd8KrAI75o2BmNUS",
  "cosmograph-daytona": "https://www.youtube.com/embed/nyaBARDPqGQ?si=m8g1uoAVgvhVgu6",
  "datejust": "https://www.youtube.com/embed/AnoICWaZy90?si=TWuL8-R9JN0bWdbo",
  "day-date": "https://www.youtube.com/embed/mg6Gf7v455c?si=FEM6DxfRfo4MqIV7",
  "deepsea": false,
  "explorer": "https://www.youtube.com/embed/LNlt3crh0Xk?si=tvWUsmBAAe7LGN2j",
  "gmt-master-ii": "https://www.youtube.com/embed/UrQgBm8gsPM?si=HfW2Dpci-udycC-c",
  "lady-datejust": "https://www.youtube.com/embed/AXPgpxYrWRk?si=aWE3Hs8WqlsvNDf0",
  "lady-datejust-2": "https://www.youtube.com/embed/Hd3U_iVf4KE?si=kZ9mf1eaNpHMKhE2",
  "oyster-perpetual": "https://www.youtube.com/embed/PIep74oe6uo?si=mqpIwwRSBthUJ78Q",
  "sea-dweller": false,
  "sky-dweller": "https://www.youtube.com/embed/u9AN4BgR5hU?si=5UT7ry952rhqsgLL",
  "submariner": "https://www.youtube.com/embed/IjcvZ8GSl1M?si=UQJDUcBHtKRfohvH",
  "yatch-master": "https://www.youtube.com/embed/b7FGQzjsPM8?si=kYo_hDLoD6R_Xo0r"




}

// Show display of all collections
exports.showDisplay = (req, res) => {

  rolex.RolexCollections.findAll({
    attributes: ['nombre', 'watch', 'idName']
  })
    .then(data => {
      for (let index = 0; index < data.length; index++) {
        // Adding images to response
        data[index].dataValues.file = `${storagePath}/rolex-relojes/${data[index].dataValues.watch}.avif`
        // console.log(data[index].dataValues.file)
      }
      console.log(storagePath)

      res.send(data)

    })
    .catch(err => {

      res.status(500).json({

        message:
          err.message || "Some error occurred while retrieving tutorials."

      });
    });
};

// Show by especific collection
exports.getCollectionDetails = (req, res) => {
  let collection = {}
  let watches = {}

  rolex.RolexCollections.findAll({
    where: {
      idName: req.params.id
    }
  })
    .then(data => {
      for (let index = 0; index < data.length; index++) {
        // Adding images to response
        const parsed = data[0].dataValues

        data[0].dataValues.fileLandscape = `${storagePath}/rolex-watch-banners/banner-${data[0].dataValues.idName}-landscape.jpg`

        data[0].dataValues.fileMobile = `${storagePath}/rolex-watch-banners/banner-${data[0].dataValues.idName}-mobile.jpg`

        if (data[0].dataValues.hasVideo) {
          data[0].dataValues.video = mainVideos[data[0].dataValues.idName]
        }

      }
      collection = data

    }).then((data) => {
      if (collection[0].dataValues.nombre == 'ORO') {
        rolex.RolexGetAll.findAll({
          where: {
            material: "Oro"
          }
        })
          .then((data) => {
            // Adding images to response
            for (let index = 0; index < data.length; index++) {
              data[index].dataValues.img = `${storagePath}/rolex-relojes/${data[index].dataValues.modelo}.avif`

            }
            watches = data

            res.send({ collection, watches })
          })
      } else {
        if (collection[0].dataValues.nombre == 'HOMBRES' || collection[0].dataValues.nombre == 'MUJERES') {
          rolex.RolexGetAll.findAll({
            where: {
              estilo: collection[0].dataValues.nombre

            }
          })
            .then((data) => {
              // Adding images to response
              for (let index = 0; index < data.length; index++) {
                data[index].dataValues.img = `${storagePath}/rolex-relojes/${data[index].dataValues.modelo}.avif`

              }
              watches = data

              res.send({ collection, watches })

            })
        } else {

          rolex.RolexGetAll.findAll({
            where: {
              RolexCollectionId: collection[0].dataValues.id
            }
          })
            .then((data) => {
              // Adding images to response
              for (let index = 0; index < data.length; index++) {
                data[index].dataValues.img = `${storagePath}/rolex-relojes/${data[index].dataValues.modelo}.avif`

              }
              watches = data

              res.send({ collection, watches })


            })
        }
      }
    })

}

// Get all individual watches
exports.getAllRolex = (req, res) => {

  rolex.RolexGetAll.findAll({
    order: [
      ['claseDeEsfera', 'ASC']
    ]
  })
    .then((data) => {
      for (let index = 0; index < data.length; index++) {
        // Adding images to response
        data[index].dataValues.img = `${storagePath}/rolex-relojes/${data[index].dataValues.modelo}.avif`
      }
      res.send(data)
    })
    .catch((err) => {
    })
}

// Get all details for watch detailed page
exports.getRolexDetails = (req, res) => {
  // Set response object
  let rolexResponse = {}


  // REFERENCE FOR ADJUST VIDEOS
  const adjustVideos = {
    "1908": {
      "video": "https://www.youtube.com/embed/Xc8Z-BzVrgs?si=4L6I9mWaO8ThGBjY",
      "text": "El Perpetual 1908 une el estilo relojero tradicional con el savoir-faire y el patrimonio estético de Rolex."
    },
    "Air-king": {
      "video": "https://www.youtube.com/embed/drC5aSc9usQ?si=I6brpRFZ_9kPbeJ0",
      "text": "El Oyster Perpetual Air‑King celebra la herencia aeronáutica del Oyster original."
    },
    "Cosmograph daytona": {
      "video": "https://www.youtube.com/embed/BqEuVIKqQ_U?si=smgJiOsotEt8tCRz",
      "text": "El Oyster Perpetual Cosmograph Daytona es el reloj de referencia de los apasionados por los automóviles y la velocidad."
    },

    "Datejust 41": {
      "video": "https://www.youtube.com/embed/ZN0NHhdpsII?si=6DfrNxII7bSwQpRc",
      "text": "El Oyster Perpetual Datejust 41 es la definición de la elegancia clásica. "
    },
    "Datejust 31": {
      "video": "https://www.youtube.com/embed/tsr9rPZ-7ek?si=epKrYMjVPUztHgp5",
      "text": "El Oyster Perpetual Datejust 31 trasciende las modas y las épocas."
    },
    "Day-Date 40": {
      "video": "https://www.youtube.com/embed/kIBR6HvcOgY?si=LYipDJPbhuaK96R",
      "text": "El Oyster Perpetual Day‑Date 40 es el reloj de prestigio definitivo."
    },
    "Explorer 36": {
      "video": "https://www.youtube.com/embed/N_U2uvRbpik?si=IS4XTXm5-kOXCfd3",
      "text": "El Oyster Perpetual Explorer es el reloj esencial para la exploración."
    },
    "Explorer II": {
      "video": "https://www.youtube.com/embed/kRiOW2KR5PY?si=yZlpLfR66pjVTQIy",
      "text": "El Oyster Perpetual Explorer II es el reloj ideal de los confines de la Tierra."
    },

    "GMT Master-II": {
      "video": "https://www.youtube.com/embed/XPL_qOIQdbU?si=R4Gv7aGkVmf4ieeb",
      "text": "El Oyster Perpetual GMT‑Master II es el reloj ideal para los que recorren el mundo."
    },
    "Rolex Sea-Dweller": {
      "video": "https://www.youtube.com/embed/_0Ig5NoguvM?si=IBexwA6I56mAQdUd",
      "text": "El Oyster Perpetual Sea-Dweller es una leyenda entre los relojes de buceo."
    },
    "Submariner": {
      "video": "https://www.youtube.com/embed/SRviJn5Wkko?si=uaNSAmZsjJBcJ-fu",
      "text": "El Oyster Perpetual Submariner es el reloj de buceo de referencia. "
    },
    "Submariner Date": {
      "video": "https://www.youtube.com/embed/SRviJn5Wkko?si=uaNSAmZsjJBcJ-fu",
      "text": "El Oyster Perpetual Submariner es el reloj de buceo de referencia. "
    },
    "YATCH-MASTER II": {
      "video": "https://www.youtube.com/embed/y9kJNjchv2o?si=_VkR3IDL5w86z_DR",
      "text": "El Oyster Perpetual Submariner es el reloj de buceo de referencia."
    },
    "Day-Date 36": false,
    "Datejust 36": false,
    "Lady-Datejust": false,
    "YATCH-MASTER 42": false,
    "YATCH-MASTER 40": false,
    "YATCH-MASTER 37": false,
    "OYSTER PERPETUAL 28": false,
    "OYSTER PERPETUAL 31": false,
    "OYSTER PERPETUAL 34": false,
    "OYSTER PERPETUAL 36": false,
    "OYSTER PERPETUAL 41": false,
    "Rolex Deepsea": false,
    "SKY-DWELLER": false
  }

  // We call the selected watch and 6 randomly to show the final slider (might interest you)
  rolex.RolexGetAll.findAll({
    where: {
      modelo: req.params.id
    }
  })
    // processing the first query (Get watch)
    .then(data => {

      // Processing response
      let parsedName = data[0].dataValues

      parsedName.img = `${storagePath}/rolex-relojes/${parsedName.modelo}.avif`

      if (adjustVideos[parsedName.nombre]) {

        parsedName.videoAdjust = adjustVideos[parsedName.nombre].video

        parsedName.videoAdjustText = adjustVideos[parsedName.nombre].text

      } else {

        parsedName.videoAdjust = false

      }



      // Adding data to response 
      rolexResponse.getAll = parsedName



    })
    // getting details from watch
    .then(() => {
      rolex.RolexDetails.findAll({
        where: {
          RolexGetAllId: rolexResponse.getAll.id
        }
      })
        .then(data => {
          // console.log('id: ', rolexResponse.getAll.id)

          data[1] = {}
          data[1].img = []

          for (let index = 0; index < data[0].sliderImg + 1; index++) {
            // Adding images to response
            data[1].img[index] = `${storagePath}/rolex-relojes/${rolexResponse.getAll.modelo}-slider-${index + 1}.avif`

          }

          data[1].img[data[1].img.length - 1] = `${storagePath}/rolex-relojes/${rolexResponse.getAll.modelo}-side.avif`
          data[0].precio = data[0].precio.toString()

          rolexResponse.details = data
        })
    })
    // getting headers
    .then(() => {

      rolex.RolexHeaders.findAll({
        where: {
          RolexGetAllId: rolexResponse.getAll.id
        }
      })
        .then(data => {
          data[0].dataValues.img = []
          // Adding images to response
          data[0].dataValues.img[0] = `${storagePath}/rolex-relojes/content-images/${data[0].imagen1}.avif`

          data[0].dataValues.img[1] = `${storagePath}/rolex-relojes/content-images/${data[0].imagen2}.avif`

          data[0].dataValues.img[2] = `${storagePath}/rolex-relojes/content-images/${data[0].imagen3}.avif`


          rolexResponse.headers = data
        })
    })
    // getting collection
    .then(() => {
      rolex.RolexCollections.findAll({
        where: {
          id: rolexResponse.getAll.rolexCollectionId
        }
      })
        .then(data => {
          for (let index = 0; index < data.length; index++) {
            // Adding images to response
            data[0].dataValues.fileLandscape = `${storagePath}/rolex-watch-banners/banner-${data[0].dataValues.idName}-landscape.jpg`

            data[0].dataValues.fileMobile = `${storagePath}/rolex-watch-banners/banner-${data[0].dataValues.idName}-mobile.jpg`

            if (data[0].dataValues.hasVideo) {
              if (data[0].dataValues.idName == 'lady-datejust') {
                data[0].dataValues.video = mainVideos['lady-datejust-2']
              } else {
                data[0].dataValues.video = mainVideos[data[0].dataValues.idName]

              }
            }

          }

          rolexResponse.collection = data

        })
    })

    .then(() => {
      rolex.RolexGetAll.findAll({
        where: {
          id: { [Op.between]: helper() }
        }
      })
        // processing the first query
        .then(data => {
          // Processing response
          for (let index = 0; index < data.length; index++) {
            // Adding images to response
            data[index].dataValues.img = `${storagePath}/rolex-relojes/${data[index].dataValues.modelo}.avif`
          }

          // Adding data to response 
          rolexResponse.sliderCollection = data
          res.send(rolexResponse)
        })
    })

}

// ROLEX NEW CONTROLLERS

// Show display of all collections
exports.showDisplayV2 = (req, res) => {

  rolex.RolexCollections.findAll({
    attributes: ['nombre', 'watch', 'idName']
  })
    .then(data => {
      for (let index = 0; index < data.length; index++) {
        // Adding images to response
        data[index].dataValues.file = `${storagePath}/rolex-relojes-new-new/${data[index].dataValues.watch}.avif`
        // console.log(data[index].dataValues.file)
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


// Show by especific collection
exports.getCollectionDetailsV2 = (req, res) => {


  console.log(req.params.id);



  rolex.RolexCollections.findAll({
    where: {
      idName: req.params.id
    }
  })
    .then((data) => {
      rolex.RolexGetAllV2.findAll({
        where: {
          RolexCollectionId: data[0].dataValues.id

        }
      })
        .then((data) => {
          // Adding images to response
          for (let index = 0; index < data.length; index++) {
            data[index].dataValues.img = `${storagePath}/rolex-relojes-new/${data[index].dataValues.modelo}-showcase.webp`

          }

          res.send(data)

        })
    })


}



// Get all individual watches
exports.getAllRolexV2 = (req, res) => {

  rolex.RolexGetAllV2.findAll({
    order: [
      ['claseDeEsfera', 'ASC']
    ]
  })
    .then((data) => {
      for (let index = 0; index < data.length; index++) {
        // Adding images to response
        data[index].dataValues.img = `${storagePath}/rolex-relojes-new/${data[index].dataValues.modelo}.avif`
      }
      res.send(data)
    })
    .catch((err) => {
    })
}


exports.getRolexDetailsV2 = async (req, res) => {

  let rolexResponseObject = {}


  const findId = await rolex.RolexGetAllV2.findAll({
    where: {
      modelo: req.params.id
    }
  })
 
  let parsedName = findId[0]
 

  parsedName.showcaseIMG = `${storagePath}/rolex-relojes-new/${parsedName.modelo}-showcase.webp`
  parsedName.boxIMG = `${storagePath}/rolex-relojes-new/${parsedName.modelo}_presentation-box.webp`
  parsedName.boxIMGMobile = `${storagePath}/rolex-relojes-new/${parsedName.modelo}_presentation-box-mobile.webp`
  
  
  rolexResponseObject.getAll = parsedName
  
  const rolexId = parsedName.id
  const collectionId = parsedName.RolexCollectionId

  let findDetails = await rolex.RolexDetailsV2.findByPk(rolexId)
  console.log("Breakpoint 2")
  let detailsArray = []
  detailsArray.push(findDetails)
  detailsArray.push({})

  detailsArray[1].img = `${storagePath}/rolex-relojes-new/${rolexResponseObject.getAll.modelo}_cor-specs.webp`
  detailsArray[1].imgMobile = `${storagePath}/rolex-relojes-new/${rolexResponseObject.getAll.modelo}_cor-specs-mobile.webp`
  detailsArray[0].precio = detailsArray[0].precio.toString()

  rolexResponseObject.details = detailsArray


  let getHeaders = await rolex.RolexHeadersV2.findByPk(rolexId)
  console.log("Breakpoint 3")

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

  console.log('asdasdasdasd:  ',collectionId)
  
  const getCollection = await rolex.RolexCollections.findByPk(collectionId)
  console.log("Breakpoint 5")



  rolexResponseObject.collection = getCollection
  res.send(rolexResponseObject)

}

