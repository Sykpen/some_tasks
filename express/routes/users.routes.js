const express = require("express");
const usersController = require("../controller/users.controller");
const logPath = require("../middlewares/log-path.middleware");

const router = express.Router();

const controller = usersController;

router
	.get("/", logPath, controller.get)
	.post("/", logPath, controller.add)
	.put("/{id}", logPath, controller.rewrite)
	.delete("/{id}", logPath, controller.delete);

module.exports = router;
