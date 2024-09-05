const express = require('express');


const router = express.Router();
const { uploadFile, upload, uploadRecipe } = require('../controller/Upload-controller');

// Define the route for file uploads
router.post('/upload', upload, uploadFile);


module.exports = router;
