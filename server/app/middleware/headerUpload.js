const util = require('util');
const multer = require('multer');

const storagePath = require('path').resolve(__dirname, '..','..','storage','header-slider' )


// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, storagePath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

let uploadFile = multer({
  storage: storage,
});

// let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFile;


