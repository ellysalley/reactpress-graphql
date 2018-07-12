// @see https://github.com/WP-API/node-wpapi
import WPAPI from "../../../../../../Users/yann/Library/Caches/typescript/2.9/node_modules/@types/wpapi";
import config from "./publicConfig";
export default new WPAPI({
  endpoint: config.wordpressUrl + "/wp-json"
});
