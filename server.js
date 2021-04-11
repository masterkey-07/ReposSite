const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

app.use("/api/", require("./server/api/"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Listening on Port: ${PORT}`));
