const express = require("express");
const router = express.Router();
const { getRepositories } = require("../functions/repos");
const {
  openRepository,
  openRepositoryFiles,
} = require("../functions/terminal");
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

// Open the selected repository with file explorers
router.post("/open-files", async (req, res) => {
  const result = openRepositoryFiles(req.body.path);

  res
    .status(result ? 200 : 404)
    .json(
      result
        ? { msg: "Repository open with File Explorer" }
        : { msg: "Repository not found" }
    );
});

module.exports = router;
