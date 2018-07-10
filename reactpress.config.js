module.exports = {
  wordpressGraphqlEndpoint: "https://dev-reactpress.pantheonsite.io/graphql",
  theme: "starter",
  siteInformations: {
    name: "REACTPRESS",
    slogan: "Start a SEO-friendly decoupled Wordpress with React in minutes"
  },
  mainMenuLinks: [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "About",
      href: "/page?slug=about",
      as: "/page/about"
    },
    {
      title: "Github",
      href: "https://github.com/nyl-auster/reactpress-graphql",
      as: ""
    }
  ],
  ui: {
    breakpoints: {
      smallScreen: "@media (max-width: 1000px)"
    }
  }
};
