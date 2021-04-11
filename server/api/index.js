const express = require("express");
const router = express.Router();

router.use("/repos", require("./repos"));

module.exports = router;
