import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import * as React from "react";
import { get } from "lodash";
import Link from "next/link";
import { Navbar, Nav, Image, Button, Collapse, Modal } from "react-bootstrap";
import Head from "next/head";
import Layout from "../components/Layout";
import Router from "next/router";
import NoSSR from "react-no-ssr";

class Index extends React.Component {
  componentDidMount() {
    Router.replace("/customer");
  }
  
  render() {
    return (
      <Layout title="Customer" classname="dashboard theme-light"></Layout>
    );
  }
}
export default Index;
