import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import config from "./publicConfig";
import { getToken } from "./auth";

// ce middleware est chargé d'envoyé à chaque requête GraphQL
// notre token JWT stocké en local storage, permettant ainsi
// d'authentifié les requêtes auprès du serveur
const authMiddleware = setContext(async (operation, { headers }) => {
  try {
    const token = getToken();
    if (!token) return headers;

    return {
      headers: Object.assign({}, headers, { authorization: `Bearer ${token}` })
    };
  } catch (err) {
    console.error(err);
    return headers;
  }
});

const httpLink = new HttpLink({
  uri: config.wordpressGraphqlEndpoint, // Server URL (must be absolute)
  opts: {
    credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
  }
});

// can also be a function that accepts a `context` object (SSR only) and returns a config
export const apolloClientConf = {
  link: authMiddleware.concat(httpLink)
};

export default withData(apolloClientConf);
