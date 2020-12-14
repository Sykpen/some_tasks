function calendar() {
	let month = prompt("Введите номер нужного месяца", "");
	let year = prompt("Введите нужный год", "");

	let newtable = document.getElementById("table");
	newtable.style.width = "600px";
	newtable.style.height = "600px";

	function nameMonth(month) {
		switch (month) {
			case "1":
				return (name = "Январь");

			case "2":
				return (name = "Февраль");

			case "3":
				return (name = "Март");

			case "4":
				return (name = "Апрель");

			case "5":
				return (name = "Май");

			case "6":
				return (name = "Июнь");

			case "7":
				return (name = "Июль");

			case "8":
				return (name = "Август");

			case "9":
				return (name = "Сентябрь");

			case "10":
				return (name = "Октябрь");

			case "11":
				return (name = "Ноябрь");

			case "12":
				return (name = "Декабрь");
		}
	}

	let tr = document.getElementById("1");
	tr.innerHTML = nameMonth(month) + " " + year + " года";

	let mon = month - 1;
	let d = new Date(year, mon);
	let td = document.getElementsByClassName("date");
	let daysInMounth = new Date(year, month, 0).getDate();
	let i = d.getDay() - 1;

	for (q = 1; q <= daysInMounth; q++) {
		td[i].textContent = d.getDate();
		d.setDate(d.getDate() + 1);
		i++;
	}
}

calendar();
