const express = require("express");
const router = express.Router();
const controller = require("../controller/auth-controller.js");


router.route("/").post(controller.userLogin);
router.route("/usersignup").post(controller.userSignup);
router.route("/:id").patch(controller.ChangePass);
router.route("/getallrecipe").get(controller.getAllRecipe);
router.route("/getallrecipebyid").post(controller.getAllRecipeByid);
router.route("/searchrecipebyname").post(controller.searchRecipeByName);
router.route("/uploadrecipe").post(controller.uploadRecipe);

 
module.exports = router; 