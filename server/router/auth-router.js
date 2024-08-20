const express = require("express");
const router = express.Router();
const User = require('../model/auth-model.js')
const controller = require("../controller/auth-controller.js");


router.route("/").get(controller.loginUser);
router.route("/usersignup").post(controller.userSignup);


module.exports = router;