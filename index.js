const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const users = require("./users");

app.use(cors());

app.use((req, res, next) => {
	res.set("Connection", "close");
	next();
});

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/api/users", (req, res) => {
	res.json(users);
});

app.get("/api/users-cache-controlled", (req, res) => {
	res.set("Cache-Control", "public, max-age=3600");
	res.json(users);
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
