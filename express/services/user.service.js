const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

function updateFile(data) {
	data.forEach((element) => {
		let { name, id } = element;
		fs.writeFile("message.txt", `Name:${name}, id:${id}`, (err) => {
			if (err) throw err;
			console.log("The file has been saved!");
		});
	});
}

class UserService {
	userList = [{ name: "Sergey", id: uuidv4() }];

	getUsers = () => {
		updateFile(this.userList);
		return this.userList;
	};

	addUser = (user) => {
		this.userList.push(user);
		updateFile(this.userList);
		return this.userList;
	};

	rewriteUser = (id, data) => {
		let neededUser = this.userList.find((el) => (el.id = id));
		neededUser = data;
		updateFile(this.userList);
		return this.userList;
	};

	deleteUser = (id) => {
		let neededUser = this.userList.find((el) => (el.id = id));
		userList.splice(userList.indexOf(neededUser), 1);
		updateFile(this.userList);
		return this.userList;
	};
}

module.exports = new UserService();
