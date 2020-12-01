import React, { Component } from 'react'
import { Form, Button, Col, Container, Row, Card, CardDeck, CardColumns, Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../configuration/configBookland'

const db = firebase.firestore();


class Addbook extends Component {
    state = {
        bookData: [],
        bookName: '',
        authorName: '',
        price: '',
        isbn: '',
        username: '',
        password: ''
    }

    componentDidMount() {
        db.collection('books').get().then(data => {
            data.docs.forEach(doc => {
                this.setState({
                    bookData: [...this.state.bookData, doc.data()]
                })
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormUsername = (e) => {
        this.setState({
            username: e.target.value
        })

    }

    handleFormPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    submitData = (e) => {
        e.preventDefault();

        console.log("Successfully added");
        console.log(this.state.username);
        console.log(this.state.password);

        if (this.state.username === "bookadmin" && this.state.password === "pwdadmin") {
            alert("Successfully added.");
        } else {
            alert("Invalid username or password");
            return false;
        }
        db.collection('books').add({
            bookName: this.state.bookName,
            authorName: this.state.authorName,
            price: this.state.price,
            isbn: this.state.isbn
        })

    }

    render() {
        return (
            <div>
                <Container id="availableBooks">
                    <h1 className="heading1-books">AVAILABLE BOOKS</h1>
                    <CardDeck>
                        <CardColumns>
                            {this.state.bookData.length ? (
                                this.state.bookData.map(item => {
                                    return (
                                        <Card style={{ width: '18rem', borderColor: "#F2A172" }}>
                                            <div>
                                                <Card.Header>
                                                    <p><strong>Book Name: </strong> {item.bookName} </p>
                                                </Card.Header>
                                                <Card.Body>
                                                    <p><strong>Author: </strong> {item.authorName} </p>
                                                    <p><strong>Price: </strong> {item.price} </p>
                                                    <p><strong>ISBN: </strong> {item.isbn} </p>

                                                </Card.Body>
                                            </div>
                                        </Card>
                                    )
                                })
                            ) : (
                                    <Spinner animation="border" />
                                )}
                        </CardColumns>
                    </CardDeck>
                </Container>

                <div id="addBookForm">
                    <h1 className="heading1-addbook">ADD NEW BOOK</h1>
                    <Container>
                        <Form onSubmit={this.submitData}>
                            <Row>
                                <Col>
                                    <Form.Group controlId="bookName">
                                        <Form.Label>BOOK NAME</Form.Label>
                                        <Form.Control type="bookName" placeholder="Enter Book Name"
                                            name="bookName"
                                            onChange={this.handleChange} required />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId="author">
                                        <Form.Label>AUTHOR</Form.Label>
                                        <Form.Control type="authorName" placeholder="Author Name"
                                            name="authorName"
                                            onChange={this.handleChange} />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId="price">
                                        <Form.Label>PRICE</Form.Label>
                                        <Form.Control type="price" placeholder="Price"
                                            name="price"
                                            onChange={this.handleChange} />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId="isbn">
                                        <Form.Label>ISBN</Form.Label>
                                        <Form.Control type="isbn"
                                            name="isbn"
                                            onChange={this.handleChange} />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Row className="align-items-center">
                                <Col xs="auto">
                                    <Form.Group controlId="username">
                                        <Form.Label>USERNAME</Form.Label>
                                        <Form.Control type="username" placeholder="Enter Username"
                                            name="username"
                                            onChange={this.handleFormUsername} />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                </Col>

                                <Col xs="auto">
                                    <Form.Group controlId="password">
                                        <Form.Label>PASSWORD</Form.Label>
                                        <Form.Control type="passeord" placeholder="Password"
                                            name="password"
                                            onChange={this.handleFormPassword} />
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Button style={{ background: "#D96704", color: "#FFFFFF" }} variant="primary" type="addbook" onClick={this.submitData}>
                                ADD BOOK
                    </Button>

                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Addbook;