export class UserService {
	userList = [{ name: "Sergey" }];

	getUsers() {
		return this.userList;
	}

	addUser(user) {
		this.userList.push(user);
		return this.userList;
	}

	rewriteUserLiset(usetList) {
		this.userList = usetList;
		return this.userList;
	}
}
