const path = require("path");
const fs = require("fs");

const getRepository = (repoPath) => {
  let repo = {};
  let files = fs.readdirSync(repoPath);
  let file = files.find((file) => file === "README.md");
  if (file) {
    let descrip = fs.readFileSync(`${repoPath}\\${file}`).toString();
    repo.description =
      descrip.length > 400 ? descrip.slice(0, 400) + "..." : descrip;
  } else repo.description = "";
  repo.name = path.basename(repoPath);
  repo.path = repoPath;

  return repo;
};

const getRepositories = (reposPath, repositories = []) => {
  const objects = fs.readdirSync(reposPath);
  if (objects.length > 0) {
    const result = objects.find(
      (obj) =>
        obj === ".git" ||
        obj.includes("index") ||
        obj === "package.json" ||
        obj === ".vs"
    );
    if (result) {
      repositories.push(getRepository(reposPath));
    } else {
      const folders = objects.filter((obj) =>
        fs.lstatSync(`${reposPath}\\${obj}`).isDirectory()
      );

      folders.forEach((folder) => {
        repositories = getRepositories(`${reposPath}\\${folder}`, repositories);
      });
    }
  }
  return repositories;
};

module.exports = {
  getRepositories: getRepositories,
};
