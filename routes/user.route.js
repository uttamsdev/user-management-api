const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/all",userController.allUsers);

module.exports = router;