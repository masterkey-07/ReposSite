const express = require("express");
const path = require("path");

const app = express();

app.use(express.json({ extended: false }));

app.use("/api/", require("./api"));

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const PORT = 5000;
app.listen(PORT, console.log(`Listening on Port: ${PORT}`));
