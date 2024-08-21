const express = require("express");
const router = express.Router();
const User = require('../model/auth-model.js')
const controller = require("../controller/auth-controller.js");


router.route("/").post(controller.userLogin);
router.route("/usersignup").post(controller.userSignup);
router.route("/:id").patch(controller.ChangePass);

 
module.exports = router; 