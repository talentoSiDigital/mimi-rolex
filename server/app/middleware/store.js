const multer = require('multer');

const storagePath = require('path').resolve(__dirname, '..','..','storage','store-uploads' )


// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, storagePath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

let uploadFiles = multer({
  storage: storage,
});

// let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFiles;


