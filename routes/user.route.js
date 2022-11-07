const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/all",userController.allUsers);

router.get("/random",userController.getRandomUser);

router.post("/save", userController.saveUser);

router.delete("/delete/:id", userController.deleteUser);

router.patch("/update/:id", userController.updateUser);

module.exports = router;