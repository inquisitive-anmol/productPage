const multer = require('multer');


// validation
const validateImage = (req, file, cb) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpeg'];
  if (!allowedMimeTypes.includes(file.mimetype)) {
    req.uploadError = new Error("only jpeg, jpg, png formats are allowed");
    return cb(null, false);
  }
  cb(null, true); // Accept the file if valid
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img/uploads/')
  }, // Folder to store uploaded images
  
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Create unique filenames
  }
});

const upload = multer({ storage: storage, fileFilter: validateImage }).array('images', 10); // Accept up to 10 images in an 'images' field
// console.log(upload);

module.exports = upload;
