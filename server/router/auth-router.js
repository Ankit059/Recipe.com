const express = require("express");
const router = express.Router();
const controller = require("../controller/auth-controller.js");
const controller2 = require("../controller/fav-controller.js");


router.route("/").post(controller.userLogin);
router.route("/usersignup").post(controller.userSignup);
router.route("/changepass").post(controller.ChangePass);
router.route("/getallrecipe").get(controller.getAllRecipe);
router.route("/getallrecipebyid").post(controller.getAllRecipeByid);
router.route("/searchrecipebyname").post(controller.searchRecipeByName);
router.route("/uploadrecipe").post(controller.uploadRecipe);
router.route("/addfavrecipe").post(controller2.addFavRecipe);
router.route("/getallfavbyid").post(controller2.getAllFavByid);

module.exports = router; 