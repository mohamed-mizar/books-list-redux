import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Aux from "../../hoc/Auxi";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BooksList from "../Books/BooksList";

function Authors({ match, isEdit }) {
  console.log(match.params.id);
  const [activeAuthor, setActiveAuthor] = useState([]);
  const id = match.params.id;
  useEffect(() => {
    const fech = async () => {
      const res = await axios.get(
        `https://books-json-server.herokuapp.com/authors/${id}`
      );
      console.log(res.data);
      setActiveAuthor(res.data);
    };
    fech();
  }, [id]);

  const [booksList, SetBooksList] = useState([]);

  useEffect(() => {
    const fechBooksList = async () => {
      const res = await axios.get(
        `https://books-json-server.herokuapp.com/books?author=${id}`
      );
      console.log(res.data);
      SetBooksList(res.data);
    };
    fechBooksList();
  }, [id]);

  let booksListForAuthor;
  if (booksList) {
    booksListForAuthor = booksList.map((bookDitails) => {
      return <BooksList bookDitails={bookDitails} />;
    });
  }

  return (
    <Aux>
      <Container>
        <Row>
          <Col>
            <h1>{activeAuthor.name} </h1>
          </Col>
          <Col>
            {isEdit && (
              <Link to={{ pathname: `/edit/author/${id}` }}>
                <Button>Edit</Button>
              </Link>
            )}
          </Col>
          <h6>{activeAuthor.jobTitle}</h6>
          <p>{activeAuthor.bio} </p>
        </Row>
        <Row>{booksListForAuthor}</Row>
      </Container>
    </Aux>
  );
}

const mapStateToProps = (state) => {
  return {
    isEdit: state.isEdit,
  };
};

export default connect(mapStateToProps)(Authors);
