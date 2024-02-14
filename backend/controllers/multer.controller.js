const multer = require("multer");
const path = require("path");

// Remove the following two lines
// const __filename = path.resolve(__filename);
// const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname) + "." + file.mimetype.slice(6);
    cb(null, Date.now() + ext);
  },
});

const Upload = multer({ storage: storage });

module.exports = { Upload };

