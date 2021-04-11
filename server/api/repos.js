const express = require("express");
const router = express.Router();
const { getRepositories } = require("../functions/repos.js");
const { openRepository } = require("../functions/terminal");

// Get All Repositories
router.get("/", async (req, res) => {
  res.json(getRepositories());
});

// Open the selected repository with VSCode
router.get("/open", async (req, res) => {
  const result = openRepository(req.body.path);

  res
    .status(result ? 400 : 404)
    .json(
      result
        ? { msg: "Repository open with VSCode" }
        : { msg: "Repository not found" }
    );
});

module.exports = router;
