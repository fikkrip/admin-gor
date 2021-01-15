import * as React from 'react';
import Link from 'next/link';
import {Row, Col, Container, Nav} from 'react-bootstrap';

const styles = {
    color: '#252733'
}

class Footer extends React.Component {
  render () {
    return (
        <footer style={{ bottom:'0px', padding:'0px 0px 20px 40px', color:'black'}}>
            <Container>
                <Nav>
                    <Nav.Link href="https://semanggi.app/b2b/#docs" style={styles} target="_blank">
                        <strong>
                        Documentation</strong>
                    </Nav.Link>
                    <Nav.Link href="https://semanggi.app/b2b/#support" style={styles} target="_blank">
                        <strong>
                        Support</strong>
                    </Nav.Link>
                    <Nav.Link href="https://semanggi.app/" style={styles} target="_blank">
                        <strong>
                        Public App</strong>
                    </Nav.Link>
                    <Nav.Link href="https://semanggi.app/#team" style={styles} target="_blank">
                        <strong>
                        About Us
                        </strong>
                    </Nav.Link>
                    <Nav.Link style={{ textAlign: 'right' }} href="https://semanggi.app/" target="_blank" style={styles} className="w-10">
                    <strong>
                        &copy; { new Date().getFullYear() }  &nbsp;
                        SEAPP!!!
                        , made for your &hearts; with our competitive physical activity.
                    </strong>
                    </Nav.Link>
                </Nav>
            </Container>
        </footer>
    );
  }
}
export default Footer;
