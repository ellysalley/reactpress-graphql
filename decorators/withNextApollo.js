import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";
import config from "../lib/publicConfig";

// can also be a function that accepts a `context` object (SSR only) and returns a config
const apolloConfig = {
  link: new HttpLink({
    uri: config.wordpressGraphqlEndpoint, // Server URL (must be absolute)
    opts: {
      credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
    }
  })
};

export default withData(apolloConfig);
