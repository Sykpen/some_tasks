const express = require("express");
const bodyParcer = require("body-parser");

const app = express();
const port = 3000;
const usersRouter = require("./routes/users.routes");

app.use(bodyParcer.json());

app.use("/users", usersRouter);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
