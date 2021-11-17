import React from "react";
import { Container, Col, Navbar, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as changeModeActions from "../../store/actions";
import "./Header.css";
function Header({ isEdit, onEditMode, onExitEditMode }) {
  return (
    <Container>
      <Col>
        <Link to="/">
          <Navbar.Brand>Book Listing</Navbar.Brand>
        </Link>
        {isEdit ? <Badge bg="danger">Edit mode</Badge> : null}
      </Col>
      <Nav>
        <Nav.Link>
          <Link to="/new/book">New Book</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/new/author">New Author</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/new/category">New Category</Link>
        </Nav.Link>
        <Nav.Link>
          {isEdit ? (
            <button className="exit" onClick={() => onExitEditMode()}>
              Exit Edit Mode
            </button>
          ) : (
            <button className="edit" onClick={() => onEditMode()}>
              Edit Mode
            </button>
          )}
        </Nav.Link>
      </Nav>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    isEdit: state.isEdit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditMode: () => dispatch(changeModeActions.editMode()),
    onExitEditMode: () => dispatch(changeModeActions.exitEditMode()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
