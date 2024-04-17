const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img/uploads/')
  }, // Folder to store uploaded images
  
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Create unique filenames
  }
});

const upload = multer({ storage: storage }).array('images', 10); // Accept up to 10 images in an 'images' field
// console.log(upload);

module.exports = upload;
