import * as React from "react";
// import Link from 'next/link';
import {
  Navbar,
  Nav,
  Badge,
  Form,
  FormControl,
  NavDropdown,
  Modal,
} from "react-bootstrap";
// import ModalPrime from '../components/ModalPrime';
import Link from "../components/ActiveLink";

class Menu extends React.Component {
  state = {
    show: false,
    setShow: false,
    showModal: false,
  };
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.state = {
      show: false,
      setShow: false,
    };
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <Navbar id="responsive-navbar-nav" className="p-0">
          <Nav className="sidebar-contents">
            <Link href="/customer" activeClassName="active">
              <a className="nav-link data-table">
                <i className="fa fa-users mr-2 ml-2" />{" "}
                <span className="span-text">Customers</span>
              </a>
            </Link>

            <Link href="#" activeClassName="active">
              <a className="nav-link data-table">
                <i className="fa fa-tasks mr-2 ml-2" />{" "}
                <span className="span-text">Tracking</span>
              </a>
            </Link>
            
            <Link href="#" activeClassName="active">
              <a className="nav-link data-table">
                <i className="fa fa-folder-open mr-2 ml-2" />{" "}
                <span className="span-text">Repository</span>
              </a>
            </Link>

            <Link href="#" activeClassName="active">
              <a className="nav-link data-table">
                <i className="fa fa-book mr-2 ml-2" />{" "}
                <span className="span-text">Blog</span>
              </a>
            </Link>

            <Link href="#" activeClassName="active">
              <a className="nav-link data-table">
                <i className="fas fa-cog mr-2 ml-2" />{" "}
                <span className="span-text">Settings</span>
              </a>
            </Link>
          </Nav>
        </Navbar>

        <Modal
          show={this.state.showModal}
          size="md"
          onHide={this.handleCloseModal}
          onClose={this.handleCloseModal}
          className="p-0"
        >
          <Modal.Header
            closeButton
            className="p-t-0 p-b-0 purpleBg "
            style={{ border: "0" }}
          />
          {/* <ModalPrime /> */}
        </Modal>
      </div>
    );
  }
}
export default Menu;
