const multer = require('multer');

// const storagePath = require('path').resolve(__dirname, '..','..','..','public_html','storage','store-products')
const storagePath = require('path').resolve(__dirname, '..','..','storage','store-products')
function changeName(name) {

    let name2 = name.replace("_upright-tr-zoom_zoom", "-1")
    name2 = name2.replace("_frontfacing-wh-std", "-2")
    name2 = name2.replace("_frontfacing-tr-std", "-2")
    name2 = name2.replace("_flatlay-std", "-3")
    name2 = name2.replace("_layingdown-std", "-4")
    name2 = name2.replace("_presentationbox-std", "-5")
    name2 = name2.replace(".png", ".webp")
    name2 = name2.replace(".jpg", ".webp")


    return name2
}

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, storagePath);
  },
  filename: (req, file, cb) => {
    const fileName = changeName(file.originalname)
    cb(null, fileName);
  }
});

let uploadFiles = multer({
  storage: storage,
});

// let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFiles;


