const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const express = require("express");
const app = express();

const router = jsonServer.router("./db/db.json");
// const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3030;
app.use("/", express.static("build"), router);
// server.use(middlewares);
// server.use(
// 	jsonServer.rewriter({
// 		"/api/*": "/$1",
// 	})
// );
if (process.env.NODE_ENV === "production") {
	app.get("*", function (req, res) {
	  res.sendFile(path.resolve(__dirname + "./build/index.html"));
	});
  }
  
server.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
