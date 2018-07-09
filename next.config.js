const withPlugins = require("next-compose-plugins");
const css = require("@zeit/next-css");
const reactpress = require("./plugins/reactpress");
const images = require("next-images");
/**
 * Config file for next.js
 */
module.exports = withPlugins([css, reactpress, images]);
