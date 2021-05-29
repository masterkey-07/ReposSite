const { exec } = require("child_process");

const openRepository = (path) => {
  try {
    exec(`code "${path}"`);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const openRepositoryFiles = (path) => {
  try {
    exec(`explorer "${path}"`);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = {
  openRepository: openRepository,
  openRepositoryFiles: openRepositoryFiles,
};
