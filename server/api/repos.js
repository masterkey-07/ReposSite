const express = require("express");
const router = express.Router();
const { getRepositories } = require("../functions/repos.js");
const { openRepository, deleteRepository } = require("../functions/terminal");
const config = require("config");

// Get All Repositories
router.get("/", async (req, res) => {
  res.json(getRepositories(config.get("reposPath")));
});

// Open the selected repository with VSCode
router.post("/open", async (req, res) => {
  const result = openRepository(req.body.path);

  res
    .status(result ? 200 : 404)
    .json(
      result
        ? { msg: "Repository open with VSCode" }
        : { msg: "Repository not found" }
    );
});

// Delete the selected repository
router.post("/delete", async (req, res) => {
  const result = deleteRepository(req.body.path);

  res
    .status(result ? 200 : 404)
    .json(
      result ? { msg: "Repository Deleted" } : { msg: "Repository not found" }
    );
});

module.exports = router;
