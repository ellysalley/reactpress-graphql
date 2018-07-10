/**
 * Next.js uses the App component to initialize all the pages.
 * You can override it and control the page initialization.
 */
import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import App, { Container } from "next/app";
import { initializeStore } from "../../../store";
import Router from "next/router";
import NProgress from "nprogress";
import Layout from "../components/layouts/Layout";
import "../css/typography.css";
import "../css/globals.css";
import "../css/nprogress.css";

// display a loader a the top of our page
Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class ReactpressApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}
export default withRedux(initializeStore)(ReactpressApp);
