const path = require("path");
const fs = require("fs");
const multer = require("multer");
const Recipe = require("../model/recipe-model");

// Set up storage engine with multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Create uploads directory if it doesn't exist
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Handle file upload
const uploadFile = (req, res) => {
  debugger;
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.json({ filePath: `/uploads/${req.file.filename}` });
//   console.log("/uploads/" + req.file.filename);
};



// Export controller methods
module.exports = {
  uploadFile,
  upload: upload.single("image"),

};
