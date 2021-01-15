import * as React from "react";
import { get } from "lodash";
import Link from "next/link";
import {
  Modal,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import DataTable, { createTheme } from "react-data-table-component";
import Layout from "../../components/Layout";
import { ApolloConsumer, Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import NoSSR from "react-no-ssr";
import Router, { withRouter } from "next/router";

class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customStyles: {
        rows: {
          style: {
            cursor: "pointer",
          },
        },
      },
      columns: [
        {
          name: "No",
          selector: "no",
          sortable: true,
          width: "5%",
        },
        {
          name: "Customer ID",
          selector: "id",
          sortable: true,
          width: "25%",
        },
        {
          name: "Name",
          selector: "name",
          sortable: true,
          width: "20%",
        },
        {
          name: "Username",
          selector: "username",
          sortable: true,
          width: "25%",
        },
        {
          name: "Email",
          selector: "email",
          sortable: true,
          width: "25%",
        },
      ],
      loading: true,
      data: [
        {
          no: "1",
          id: "0000001",
          name: "Bessie Cooper",
          username: "accountant.cinta",
          email: "accountant.cinta",
        },
        {
          no: "2",
          id: "0000001",
          name: "Bessie Cooper",
          username: "accountant.cinta",
          email: "accountant.cinta",
        },
        {
          no: "3",
          id: "0000001",
          name: "Bessie Cooper",
          username: "accountant.cinta",
          email: "accountant.cinta",
        },
        {
          no: "4",
          id: "0000001",
          name: "Bessie Cooper",
          username: "accountant.cinta",
          email: "accountant.cinta",
        },
        {
          no: "5",
          id: "0000001",
          name: "Bessie Cooper",
          username: "accountant.cinta",
          email: "accountant.cinta",
        },
      ],
      modalShow: false,
      dataDetail: null,
    };
  }

  render() {
    const { rates } = this.props;
    console.log(">", rates);

    return (
      <Layout title="Customer" classname="dashboard theme-light">
        {/* { Modal Detail } */}
        {this.state.dataDetail && (
          <Modal
            show={this.state.modalShow}
            onHide={() =>
              this.setState({
                modalShow: false,
                dataDetail: null,
              })
            }
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            centered
          >
            <Modal.Header
              closeButton
              style={{ border: "none", paddingLeft: "20px" }}
            >
              <Modal.Title id="example-custom-modal-styling-title">
                <strong>View Customer Details</strong>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ padding: "20px 30px 20px 30px" }}>
              <div
                style={{
                  background: "#F7F8FC",
                  borderRadius: "15px",
                  marginTop: "10px",
                  padding: "10px 10px 10px 10px",
                  width: "100%",
                }}
              >
                <table width="100%">
                  <tbody>
                    <tr>
                      <th width="200px">
                        <small>Full Name</small>
                      </th>
                      <td>
                        <small>:</small>
                      </td>
                      <td>
                        <small>{this.state.dataDetail.name}</small>
                      </td>
                    </tr>
                    <tr>
                      <th width="200px">
                        <small>Username</small>
                      </th>
                      <td>
                        <small>:</small>
                      </td>
                      <td>
                        <small>{this.state.dataDetail.username}</small>
                      </td>
                    </tr>
                    <tr>
                      <th width="200px">
                        <small>Email</small>
                      </th>
                      <td>
                        <small>:</small>
                      </td>
                      <td>
                        <small>{this.state.dataDetail.email}</small>
                      </td>
                    </tr>
                    <tr>
                      <th width="200px">
                        <small>Phone</small>
                      </th>
                      <td>
                        <small>:</small>
                      </td>
                      <td>
                        <small>08123456789</small>
                      </td>
                    </tr>
                    <tr>
                      <th width="200px">
                        <small>NPWP</small>
                      </th>
                      <td>
                        <small>:</small>
                      </td>
                      <td>
                        <small>8123124098239</small>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <p>
                  <strong>Address Information</strong>
                </p>
                <table width="100%" style={{ marginLeft: "20px" }}>
                  <tbody>
                    <tr>
                      <th width="200px">
                        <small>Full Address</small>
                      </th>
                      <td>
                        <small>:</small>
                      </td>
                      <td>
                        <small>Jl. Soekarno</small>
                      </td>
                    </tr>
                    <tr>
                      <th width="200px">
                        <small>Sub-district</small>
                      </th>
                      <td>
                        <small>:</small>
                      </td>
                      <td>
                        <small>Sukun</small>
                      </td>
                    </tr>
                    <tr>
                      <th width="200px">
                        <small>City</small>
                      </th>
                      <td>
                        <small>:</small>
                      </td>
                      <td>
                        <small>Malang</small>
                      </td>
                    </tr>
                    <tr>
                      <th width="200px">
                        <small>Province</small>
                      </th>
                      <td>
                        <small>:</small>
                      </td>
                      <td>
                        <small>Jawa Timur</small>
                      </td>
                    </tr>
                    <tr>
                      <th width="200px">
                        <small>Country</small>
                      </th>
                      <td>
                        <small>:</small>
                      </td>
                      <td>
                        <small>Indonesia</small>
                      </td>
                    </tr>
                    <tr>
                      <th width="200px">
                        <small>Post Code</small>
                      </th>
                      <td>
                        <small>:</small>
                      </td>
                      <td>
                        <small>123455</small>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Modal.Body>
            <Modal.Footer style={{ border: "none" }}></Modal.Footer>
          </Modal>
        )}
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Card style={{ backgroundColor: "white", borderRadius: "10px" }}>
              <Row className="position-relative show-grid m-3">
                <Col xs={12}>
                  <Form>
                    <Form.Row className="align-items-center">
                      <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                        Search
                      </Form.Label>
                      <InputGroup className="mb-2">
                        <FormControl
                          style={{
                            borderRadius: "8px",
                            border: "solid 1px #cacaca",
                            backgroundColor: "rgba(6, 231, 110, 0.05)",
                          }}
                          id="inlineFormInputGroup"
                          placeholder="Search by name or email"
                        />
                        <Button
                          className="ml-4 px-4"
                          style={{
                            borderRadius: "8px",
                            border: "solid 1px #04a04c",
                          }}
                          variant="outline"
                        >
                          Add Customer
                        </Button>
                      </InputGroup>
                    </Form.Row>
                  </Form>
                </Col>
              </Row>
            </Card>
            <Card
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            >
              <Row
                className="position-relative show-grid"
                style={{ margin: "20px 20px 0px 20px" }}
              >
                <Col xs={12}>
                  <Row>
                    <Col xs={12}>
                      <DataTable
                        data={this.state.data}
                        columns={this.state.columns}
                        highlightOnHover
                        // progressPending={this.state.loading}
                        pagination
                        onRowClicked={(data) =>
                          this.setState({
                            modalShow: true,
                            dataDetail: data,
                          })
                        }
                        customStyles={this.state.customStyles}
                        noHeader={true}
                        // paginationServer
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}
const ALL_QUERIES = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
    }
  }
`;

// export default Index;
export default withRouter((props) => (
  <ApolloConsumer>
    {(client) => (
      <Query query={ALL_QUERIES} fetchPolicy="no-cache">
        {({ error, loading, data, refetch }) => (
          <Customer
            {...props}
            client={client}
            error={error}
            rates={data && data.rates ? data.rates : []}
            loading={loading}
            refetch={refetch}
          />
        )}
      </Query>
    )}
  </ApolloConsumer>
));
