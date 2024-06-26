const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static("./dist"));

app.get("/*", (req, res) => {
	res.sendFile("index.html", {
		root: "dist",
	});
});

app.listen(PORT, () => {
	console.log(`Application running on port:${PORT}`);
});
