const express = require("express");
const cors = require("cors");
const connectDb = require("./utils/db.js");
const router = require("./router/auth-router.js")
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth",router);
app.use('/uploads', express.static('uploads'));
app.use(express.static(path.join(__dirname, 'public')));

const uploadRouter = require('./router/Upload-router.js');
app.use('/api', uploadRouter);

connectDb().then(() => {
    app.listen(3002, () => {
        console.log(`Server is running on 3001`)
    })

})


