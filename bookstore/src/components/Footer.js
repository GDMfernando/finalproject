import React, { Component } from 'react'
import { Card, Nav, Row, Container, Col } from 'react-bootstrap'

class Footer extends Component {
  render() {
    return (
      <div>
        <Card className="text-center" >
          <Card.Body style={{ background: "#D96704", color: "white" }}>
            <Container style={{ padding: "0px", margin: "0px" }}>
              <Row>
                <Col sm={4}>
                  <Card.Title style={{ textAlign: "left", paddingTop: "60px", paddingLeft: "30px" }}>BOOKLAND</Card.Title>
                </Col>
                <Col sm={8} style={{ textAlign: "left" }}>
                  <Nav className="flex-column">
                    <Nav.Link style={{ color: "white" }} href="#home">Home</Nav.Link>
                    <Nav.Link style={{ color: "white" }} href="#availableBooks">Books</Nav.Link>
                    <Nav.Link style={{ color: "white" }} href="#addBookForm">Add Book</Nav.Link>
                    <Nav.Link style={{ color: "white" }} href="#contactPage">Contact</Nav.Link>
                  </Nav>
                </Col>
              </Row>
            </Container>
          </Card.Body>
          <Card.Footer className="text-muted" style={{ background: "#F2A172", color: "white" }}>2 days ago</Card.Footer>
        </Card>
      </div>
    )
  }
}

export default Footer;