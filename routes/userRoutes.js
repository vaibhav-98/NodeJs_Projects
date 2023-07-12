const express = require("express");

const {
  home,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controlles/userController.js");

const router = express.Router();

router.get("/", home);
router.post("/createUser", createUser);
router.get("/getuser", getUser);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);
//
module.exports = router;
