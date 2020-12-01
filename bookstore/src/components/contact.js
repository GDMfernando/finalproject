import React, { Component } from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap'

class contact extends Component {
    render() {
        return (
            <div id="contactPage">
                <Container fluid className="contactContainer">
                    <Row>
                        <Col>
                            <Container>
                                <Row>
                                    <Col md={{ span: 6, offset: 3 }}>
                                        <Jumbotron className="contact">
                                            <h1 className="contact-h1" >CONTACT US</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut ante eros. Aenean dapibus quis risus pulvinar placerat.
  </p>
                                            <p>
                                                <Button style={{ background: "#D96704" }} variant="primary">Learn more</Button>
                                            </p>
                                        </Jumbotron>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default contact;