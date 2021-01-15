import React, { useState } from "react";
import { Row, Col, Button, Form, Image, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { hideLoader, showLoader } from "../../redux/actions/loader";
import { useRouter } from "next/router";

function forgotPassword(props) {
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

  const processSubmit = () => {
    router.replace("/new-password");
  };

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      processSubmit();
    }
  };

  const handleShowPassword = () => {
    setpasswordShown(passwordShown ? false : true);
  };

  const handleButtonSubmitListerner = () => {
    processSubmit();
  };

  const handleButtonCancelListerner = () => {
    router.replace("/login");
  };

  return (
    <div
        className="forgot-password"
        style={{
          backgroundColor:"#fafafa",
        }}
      >

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
              display: "none"
            }}
          >
            <i className="fa fa-bell"></i>
          </button>
          <Image
            src="../static/img/oval.png"
            fluid
            className="pl-4 pr-4"
            style={{
              display: "none"
            }}
          />
          <span
            style={{
              fontSize: "larger",
              fontWeight: "bolder",
              color: "#6F6F6F",
              display: "none"
            }}
            className="pr-5"
          >Admin Goritax</span>
        </div>
      </Navbar>
      <div className="d-flex align-items-center justify-content-center h-100vh login-form">
        <div style={{border:"solid 1px #cacaca", borderRadius:"12px", backgroundColor:"#ffffff", width: "400px"}}>
          <strong><p className="title-login m-0 py-3">Forgot Password</p></strong>
          <hr className="m-0" />
          <Form className="px-4">
            <Form.Group controlId="LoginEmail" className="pt-4">
            <strong><Form.Label style={{color: "#6f6f6f"}}>Email</Form.Label></strong>
              <Form.Control
                type="email"
                style={{marginBottom: "40px", backgroundColor: "#ffffff", borderRadius: "12px"}}
                placeholder="Enter your email"
                onChange={handleChangeUsername}
              />
            </Form.Group>
            <div className="row justify-content-center">
              <Button
                onClick={handleButtonCancelListerner}
                className="btn btn-lg"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#6f6f6f",
                  borderColor: "#cacaca",
                  borderRadius: "12px",
                  width: "45%",
                  marginRight: "5%"
                }}
              >
                <strong><a className="title-login">Cancel</a></strong>
              </Button>
              <Button
                onClick={handleButtonSubmitListerner}
                className="btn btn-lg"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#6f6f6f",
                  borderColor: "#04a04c",
                  borderRadius: "12px",
                  width: "45%"
                }}
              >
                <strong><a className="title-login">Submit</a></strong>
              </Button>
            </div>
            <p
              className="m-t-15 text-center"
            >
              <span style={{fontSize:"12px", fontWeight:"bold", color: "#6f6f6f"}}>The system will send a link to change the password to your email, if it is your emial registered in our system.</span>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}

function mapDispatchToProps(state) {
  const { isLoggedIn } = state.auth;
  return {
    isLoggedIn,
  };
}

export default connect(mapDispatchToProps)(forgotPassword);
