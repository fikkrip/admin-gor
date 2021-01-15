import * as React from "react";
import { get } from "lodash";
import {
  Navbar,
  Image,
} from "react-bootstrap";
import Head from "next/head";
import Router from "next/router";
import Menu from "components/Menu";
import Modal from "components/Modal";
import NoSSR from "react-no-ssr";
import { connect } from "react-redux";
import { logout } from "redux/actions/auth";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChat = this.handleChat.bind(this);
    this.handleSetting = this.handleSetting.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.state = {
      condition: false,
      chat: false,
      setting: false,
      open: false,
      style: false,
      showModal: false,
      show: false,
      setShow: false,
      logOutVisible: false,
      logOutModalVisible: false,
      logInModalVisible: false,
    };
  }
  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  handleChat() {
    this.setState({
      chat: !this.state.chat,
    });
  }

  handleSetting() {
    this.setState({
      setting: !this.state.setting,
    });
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleClick() {
    this.setState({
      condition: !this.state.condition,
    });
  }

  openButtonLogOut = (e) => {
    if (e) e.preventDefault();
    this.setState({
      logOutVisible: !this.state.logOutVisible,
    });
  };

  openLogOutModal = () => {
    this.setState({
      logOutModalVisible: true,
    });
  };

  handleLogOut = () => {
    this.props.dispatch(logout());
    Router.replace("/login");
  };

  openLogInModal = () => {
    this.setState({
      logInModalVisible: true,
    });
  };

  render() {
    const title = get(this.props, "title", " ");
    const classname = get(this.props, "classname", " ");
    const { titleColor } = this.props;
    const { open } = this.state;
    const { style } = this.state;
    return (
      <div
        className={classname}
        style={{
          backgroundColor:"#fafafa",
        }}
      >
        <Head>
          {/* <html className="theme-light"> */}
          <title>Admin Goritax - {title}</title>
          <meta charSet="utf-8" />
          <link
            rel="icon"
            href="../static/images/favicon.png"
            type="image/x-icon"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          {/* </html> */}
        </Head>
        {/* Left Navigation */}
        {/* <Navbar className="flex-column p-0 align-items-left" style={{backgroundColor: "#FFFFFF"}}> */}
        <Navbar fixed="top" expand="lg" style={{zIndex: '1000', backgroundColor: '#FFFFFF', borderBottom: 'solid 1px #cacaca'}}>
          <Navbar.Brand href="customer">
            <Image
              src="../static/img/logo-goritax.png"
              fluid
              className="py-2 pl-5"
              width="75%"
            />
          </Navbar.Brand>
          <div
            style={{
              width: '100%',
              textAlign: 'right'
            }}
          >
            <button
              type="button"
              className="btn-custom-cart"
              style={{
                fontSize: "1.5rem",
                backgroundColor: "transparent",
                border: "none",
                flex: 1,
              }}
            >
              <i className="fa fa-bell"></i>
            </button>
            <Image
              src="../static/img/oval.png"
              fluid
              className="pl-4 pr-4"
            />
            <span
              style={{
                fontSize: "larger",
                fontWeight: "bolder",
                color: "#6F6F6F"
              }}
              className="pr-5"
            >Admin Goritax</span>
          </div>
        </Navbar>
        <div
          style={{ overflowX: "hidden", overflowY: "hidden" }}
          className={
            this.state.condition
              ? "col-sm-2 bg-light sidebar toggled sidebartext position-fixed w-250 h-100vh horizontal"
              : "bg-light sidebar sidebartext position-fixed w-250 h-100vh horizontal"
          }
        >
          <Navbar style={{marginTop: "84px"}}>
            <i className="fa fa-close" onClick={this.handleClick} />
            <Menu />
          </Navbar>
          <div
            className={`container-bottom-navbar ${
              this.state.condition ? "collapsed" : ""
            } mb-3`}
          >
            <a onClick={this.openLogOutModal}>
              <Image
                src="../static/img/logout-grey.png"
                fluid
                className="pr-3"
              />
              <span className="span-text">Logout</span>
            </a>
            <Modal
              title={"Logout"}
              body={
                <div
                  className="mt-3"
                  style={{
                    margin: "0 5rem",
                    display: "flex",
                  }}
                >
                  <p style={{ fontSize: "1rem", color: "#252733" }}>
                    Are you sure you want to Logout?
                  </p>
                </div>
              }
              show={this.state.logOutModalVisible}
              size={"lg"}
              onSubmit={this.handleLogOut}
              submitTitle={"Logout"}
              onHide={() => this.setState({ logOutModalVisible: false })}
              onClose={() => this.setState({ logOutModalVisible: false })}
            />
          </div>
        </div>
        {/* End of Left Navigation */}

        <div
          style={{ position: "relative", marginTop: "7%" }}
          className={
            this.state.condition
              ? "main-container toggled row"
              : "main-container row"
          }
        >

          {/* Main Container */}
          <NoSSR>
            <article
              className="col-sm-12 dashboard-section"
              style={{ marginTop: 0 }}
            >
              {this.props.children}
            </article>
          </NoSSR>
          {/* End of Main Container */}
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default Layout;
