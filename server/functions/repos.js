const path = require("path");
const fs = require("fs");

const getRepositories = () => {
  fs.readdirSync();

  return { msg: "OPA" };
};

module.exports = {
  getRepositories: getRepositories,
};
