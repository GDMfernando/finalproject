import React, { Component } from 'react'
import { Carousel, Container, Row, Col } from "react-bootstrap";


class Landingsection extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: "0px", margin: "0px" }}>
          <Row>
            <Col sm>
              <Carousel className="slider">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="slider1.png"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p style={{ color: "#D96704", fontSize: "28px" }}>Welcome to Bookland</p>
                    <h2 style={{ color: "#000000", fontSize: "42px" }}>ONLINE BOOK STORE</h2>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="slider2.png"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <p style={{ color: "#D96704", fontSize: "28px" }}>Welcome to Bookland</p>
                    <h2 style={{ color: "#000000", fontSize: "42px" }}>ONLINE BOOK STORE</h2>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="slider3.png"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <p style={{ color: "#D96704", fontSize: "28px" }}>Welcome to Bookland</p>
                    <h2 style={{ color: "#000000", fontSize: "42px" }}>ONLINE BOOK STORE</h2>

                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Landingsection;