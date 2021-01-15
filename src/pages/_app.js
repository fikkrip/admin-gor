import MyApp from "next/app";
import "../styles/global.scss";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import dynamic from "next/dynamic";
import Router from "next/router";
import dayjs from "dayjs";
import withApollo from "../libs/withApollo";
import { ApolloProvider } from "react-apollo";

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false }
);

class App extends MyApp {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    console.log(this.props);
    return (
      <ApolloProvider client={apolloClient}>
        <TopProgressBar />
        <Component {...pageProps} />
        <ToastContainer />
      </ApolloProvider>
    );
  }
}

export default withApollo(App);
