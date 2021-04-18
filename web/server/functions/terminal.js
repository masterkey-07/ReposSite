const { exec } = require("child_process");
const fs = require("fs");

const openRepository = (path) => {
  try {
    exec(`code "${path}"`);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const deleteRepository = (path) => {
  try {
    exec(`recycle "${path}"`);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = {
  openRepository: openRepository,
  deleteRepository: deleteRepository,
};
