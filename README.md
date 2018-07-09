# WORDPRESS + REACT = REACTPRESS 💛 - ( GrapqhQL version )

Start a SEO-friendly headless Wordpress with React in minutes.

## Gettings started

### make sur CORS is enabled on Wordpress

Enable https://github.com/wp-graphql/wp-graphql extension.
add this to your wp-config.php to make sure CORS are enabled :

```php
// allow CORS
header("Access-Control-Allow-Origin: *");
```

### install

```sh
npm install
# start the dev server.
npm run dev
```

You're ready to go ! You can now start working by looking / hacking / editing **pages** and **components** and **css** directories ! <br /><br />

By default, reactpress uses a demo API, so code is working out of the box.<br /> To connect your own API, edit **reactpress.config.js** file and edit variable
**wordpressGraphqlEndpoint** so that is points to your wordpress site with **wp-graphql module** and CORS enabled :

```js
export default {
  wordpressGraphqlEndpoint: "https://dev-reactpress.pantheonsite.io/graphql"
};
```

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
