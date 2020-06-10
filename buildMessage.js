const chalk = require("chalk");
const colors = require("./colors");

module.exports = (message) =>
  `${chalk.bold.hex(colors.date)(new Date().toISOString())} - ${message}`;
