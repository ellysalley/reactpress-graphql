# WORDPRESS + REACT = REACTPRESS 💛 - GrapqhQL version 🚀

_Wordpress developpers ?_ Add a SEO-friendly React front-end to your Wordpress in minutes.
_React developpers ?_ Create a SEO-friendly App with a powerful backoffice for your contributors.

<img width="200" src="https://raw.githubusercontent.com/nyl-auster/reactpress-graphql/master/themes/starter/images/hippogriff.png" />

ReactPress is built upon the awesome [Next.js](https://github.com/zeit/next.js/) for Server Side Rendering.

## Gettings started

### Install and configure Wordpress

React developpers, you can use https://pantheon.io/ to install a Wordpress site and use it as a service. Then :

- Enable wp-graphql extension : https://wpgraphql.com/docs/getting-started/install-and-activate/
- Add this to your wp-config.php to make sure CORS are enabled :

```php
// allow CORS
header("Access-Control-Allow-Origin: *");
```

### Install ReactPress

```sh
npm install
# start the dev server.
npm run dev
```

By default, reactpress uses a demo API. To connect your own API, edit **reactpress.config.js** file and edit variable **wordpressGraphqlEndpoint** so that it points to your wordpress graphql endpoint.

```js
export default {
  wordpressGraphqlEndpoint: "https://dev-reactpress.pantheonsite.io/graphql"
};
```

You're ready to go ! You can now start working by looking / hacking / editing files from **themes/starter** directory.

## Features

### current features

- Posts list, posts lists by category, posts lists by tag
- Page
- SEO Friendly : Server Side Rendering with Next.js
- Nices seo-friendly urls using wordpress slugs
- Page loader (progress bar)

### planned features

- authentification
- comments

## CSS

there several available ways to manage your css with Reactpress

- css-in-js with styled-jsx, which is shipped by default with Next : https://github.com/zeit/styled-jsx
- you can create classic css files and import them like this :

```js
import "../css/globals.css";
```
