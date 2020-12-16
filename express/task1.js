const express = require("express");
const app = express();
const port = 3000;

const users = [
	{
		name: "Sergey",
	},
	{
		name: "Ivan",
	},
];

app.get("/", (req, res) => {
	res.send(users);
});

app.post("/", (req, res) => {
	users.push(req.body);
	res.send(users);
});

app.put("/", (req, res) => {
	users = req.body;
	res.send(users);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
