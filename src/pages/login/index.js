import React, { useState } from "react";
import { Row, Col, Button, Form, Image, Navbar } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import image from "../../../public/logo.png";
import { connect } from "react-redux";
import { LoginAuth } from "../../redux/actions/auth";
import { hideLoader, showLoader } from "../../redux/actions/loader";
import { useRouter } from "next/router";

function login(props) {
  const [passwordShown, setpasswordShown] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const router = useRouter();
  const { isLoggedIn, message } = props;

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const processLogIn = () => {
    router.replace("/customer");
    // const { dispatch, history } = props;
    // dispatch(showLoader());
    // dispatch(LoginAuth(username, password))
    //   .then(() => {
    //     dispatch(hideLoader());
    //     router.replace("/dashboard");
    //   })
    //   .catch(() => {
    //     dispatch(hideLoader());
    //   })
    //   .finally(() => {
    //     dispatch(hideLoader());
    //   });
    // dispatch(hideLoader());
  };

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      processLogIn();
    }
  };

  const handleShowPassword = () => {
    setpasswordShown(passwordShown ? false : true);
  };

  const handleButtonLoginListerner = () => {
    processLogIn();
  };

  return (
    <div className="login">
      <Head>
        <title>Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row>
        <Col lg={5} md={12} sm={12} className="p-0 login-form">
          <div className="d-flex align-items-center justify-content-center h-100vh login-form loginBg">
            <div className="d-flex flex-column login-container">
              <div className="d-flex align-items-center justify-content-center brand-container">
                <Image
                  src="../../../static/img/logo-goritax.png"
                  fluid
                  className="logo-img"
                />
              </div>
              <div style={{border:"solid 1px #cacaca", borderRadius:"12px"}}>
                <strong><p className="title-login m-0 py-3">Login</p></strong>
                <hr className="m-0" />
                <Form className="px-4">
                  <Form.Group controlId="LoginEmail" className="pt-4">
                  <strong><Form.Label style={{color: "#6f6f6f"}}>Email</Form.Label></strong>
                    <Form.Control
                      type="email"
                      style={{marginBottom: "23px", backgroundColor: "#ffffff", borderRadius: "12px"}}
                      placeholder="Enter your email"
                      onChange={handleChangeUsername}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="LoginPassword"
                    className="custom-password position-relative"
                  >
                    <strong><Form.Label style={{color: "#6f6f6f"}}>Password</Form.Label></strong>
                    <Form.Control
                      type={passwordShown ? "text" : "password"}
                      style={{backgroundColor: "#ffffff", borderRadius: "12px"}}
                      placeholder="Enter your password"
                      onChange={handleChangePassword}
                      onKeyDown={keyPress}
                    />
                  </Form.Group>
                  <Button
                    onClick={handleButtonLoginListerner}
                    className="btn btn-block btn-lg"
                    style={{
                      marginTop: "41px",
                      backgroundColor: "#FFFFFF",
                      color: "#6f6f6f",
                      borderColor: "#04a04c",
                      borderRadius: "12px"
                    }}
                  >
                    {/* <a className="text-black">Login</a> */}
                    <strong><a className="title-login">Login</a></strong>
                  </Button>
                  <p
                    className="m-t-15 text-center"
                  >
                    <a href="/forgot-password" className="text-muted" style={{textDecoration: "underline"}}>Forgot Password</a>
                  </p>
                </Form>
              </div>
              <span className="my-2 font-weight-bold" style={{
              width: "100%",
              position: "absolute",
              bottom: "0",
              color: "#6f6f6f"
            }}>&#9400;2021 PT. Goritax Prospera Indonesia. All Rights Reserved.</span>
            </div>
          </div>
        </Col>
        <Col lg={7} md={12} sm={12} className="p-0 registraion">
          <div className="d-flex align-items-center justify-content-center login-box">
            <Image
              src="../../../static/img/rectangle.png"
              fluid
              className="image-box"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

function mapDispatchToProps(state) {
  const { isLoggedIn } = state.auth;
  return {
    isLoggedIn,
  };
}

export default connect(mapDispatchToProps)(login);
