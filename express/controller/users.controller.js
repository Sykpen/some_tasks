const userService = require("../services/user.service");

class UsersController {
	service = userService;
	get = (req, res, next) => {
		res.send(this.service.getUsers());
	};

	add = (req, res, next) => {
		res.send(this.service.addUser(req.body));
	};

	rewrite = (req, res, next) => {
		res.send(this.service.rewriteUser(req.params.id, req.body));
	};

	delete = (req, res, next) => {
		res.send(this.service.deleteUser(req.params.id));
	};
}

module.exports = new UsersController();
