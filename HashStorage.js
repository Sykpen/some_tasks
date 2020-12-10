class HashStorage {
	hash = {};

	addValue(key, value) {
		this.hash[key] = value;
	}

	getValue(key) {
		return this.hash[key];
	}

	deleteValue(key) {
		delete this.hash[key];
	}

	getKeys() {
		return Object.keys(this.hash);
	}
}

let coctailsStorage = new HashStorage();

document.getElementById("addValue").addEventListener("click", () => {
	let coctailName = prompt("Введите название нового коктеля", "Маргарита");
	coctailsStorage.addValue(
		coctailName,
		prompt("Введите ингредиенты для нового коктеля", "")
	);
});

document.getElementById("getValue").addEventListener("click", () => {
	let coctailName = prompt("Введите название коктеля", "Маргарита");
	coctailsStorage.getValue(coctailName);
});

document.getElementById("deleteValue").addEventListener("click", () => {
	let coctailName = prompt("Введите название коктеля", "Маргарита");
	coctailsStorage.deleteValue(coctailName);
});

document.getElementById("getKeys").addEventListener("click", () => {
	console.log(coctailsStorage.getKeys());
});
