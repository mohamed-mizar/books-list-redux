import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row } from "react-bootstrap";
import Aux from "../../hoc/Auxi";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

function SideBar({ categories, authors, onInitCategories, onInitAuthors }) {
  useEffect(() => {
    onInitCategories();
  }, [onInitCategories]);

  let categoryName;
  if (categories) {
    categoryName = categories.map((categ) => {
      return (
        <ListGroup.Item as="li" key={categ.id}>
          <Link
            to={{
              pathname: `/category/${categ.id}`,
            }}
          >
            {categ.name}
          </Link>
        </ListGroup.Item>
      );
    });
  }

  useEffect(() => {
    onInitAuthors();
  }, [onInitAuthors]);

  let authorName;
  if (authors) {
    authorName = authors.map((author) => {
      return (
        <ListGroup.Item as="li" key={author.id}>
          <Link
            to={{
              pathname: `/authors/${author.id}`,
            }}
          >
            {author.name}
          </Link>
        </ListGroup.Item>
      );
    });
  }

  return (
    <Aux>
      <Row>
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            Categories
          </ListGroup.Item>
          {categoryName}
        </ListGroup>
      </Row>
      <Row>
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            Authors
          </ListGroup.Item>
          {authorName}
        </ListGroup>
      </Row>
    </Aux>
  );
}
const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    authors: state.authors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCategories: () => dispatch(actions.initCategoreis()),
    onInitAuthors: () => dispatch(actions.initAuthors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
