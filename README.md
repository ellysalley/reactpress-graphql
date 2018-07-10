# WORDPRESS + REACT = REACTPRESS 💛 - ( GrapqhQL version )

Add a SEO-friendly React front-end to your Wordpress in minutes.

## Gettings started

### Configure Wordpress

Enable https://github.com/wp-graphql/wp-graphql extension.
Add this to your wp-config.php to make sure CORS are enabled :

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
