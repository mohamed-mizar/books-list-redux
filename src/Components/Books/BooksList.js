import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import { connect } from "react-redux";

function BooksList({ bookDitails, isEdit }) {
  return (
    <div>
      <Container >
        <Row key={bookDitails.id}>
          <Col sm={4} className="books_image">
            <img src={bookDitails.image} alt="" />
          </Col>
          <Col sm={8}>
            <ListGroup>
              <Row>
                <Col md="auto">
                  <h4>{bookDitails.title}</h4>
                </Col>
                <Col>
                  {isEdit && (
                    <Link to={{ pathname: `/edit/book/${bookDitails.id}` }}>
                      <Button>Edit</Button>
                    </Link>
                  )}
                </Col>
              </Row>
            </ListGroup>
            <ListGroup>
              <p className="books_discription">{bookDitails.description}</p>
            </ListGroup>
          </Col>
          <hr />
        </Row>
      </Container>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    isEdit : state.isEdit
  }
}

export default connect(mapStateToProps)(BooksList);
